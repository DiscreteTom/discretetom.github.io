---
date: 2020-04-06
title: Setup HTTPS Proxy
description: Based on Squid & Stunnel with free TLS certificate.
tags:
  - Network
---

## Prerequisites

1. A domain name.
2. A remote linux server.

## Environment

- Server: AWS Amazon Linux 2
- Client: Windows 10 + Chrome + SwitchyOmega

## Setup Server

### Setup Squid

Install dependencies, add an http basic auth user.

```bash
yum -y install squid httpd
htpasswd -c /etc/httpd/htpasswd-users <proxy-username> # will ask you to set your proxy password
```

Edit `/etc/squid/squid.conf`:
- At the top of the file, add the following line:
  - `auth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/httpd/htpasswd-users`
- After the part of `acl`, add the following lines:
  - `acl need_auth proxy_auth REQUIRED`
- In the `http_access` part
  - Before `allow localnet`, add the following line:
    - `http_access deny !need_auth`

Start squid: `systemctl start squid`

### Generate TLS Certificate

```bash
####################### Become a Certificate Authority
# Generate private key
openssl genrsa -des3 -out root.key 2048 # will ask you to set your CA password
# Generate root certificate
# After input your CA password, other options stay default
openssl req -x509 -new -nodes -key root.key -sha256 -days 825 -out root.pem

####################### Create CA-signed certs
NAME=example.com # use your domain name
# Generate private key
[[ -e $NAME.key ]] || openssl genrsa -out $NAME.key 2048
# Create certificate-signing request
# Set the Common Name to your domain name
# Other options stay default
[[ -e $NAME.csr ]] || openssl req -new -key $NAME.key -out $NAME.csr
# Create a config file for the extensions
>$NAME.ext cat <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = $NAME
DNS.2 = bar.$NAME
EOF
# Create the signed certificate using your CA password
openssl x509 -req -in $NAME.csr -CA root.pem -CAkey root.key -CAcreateserial \
-out $NAME.crt -days 1825 -sha256 -extfile $NAME.ext
```

### Setup Stunnel

```bash
yum -y install stunnel
cat $NAME.key $NAME.crt > /etc/stunnel/stunnel.pem
```

Create a file `/etc/stunnel/stunnel.conf` with the following content:

```
client = no
[squid]
accept = <your-port>
connect = 127.0.0.1:3128
cert = /etc/stunnel/stunnel.pem
```

Create a file `/etc/default/stunnel` and write `ENABLED=1`.

Create a file `/etc/systemd/system/stunnel.service` with the following content:

```
[Unit]
Description=SSL tunnel for network daemons
After=network.target
After=syslog.target

[Install]
WantedBy=multi-user.target
Alias=stunnel.target

[Service]
Type=forking
ExecStart=/usr/bin/stunnel /etc/stunnel/stunnel.conf
ExecStop=/usr/bin/pkill stunnel

# Give up if ping don't get an answer
TimeoutSec=600

Restart=always
PrivateTmp=false
```

Start stunnel: `systemctl start stunnel`

### Setup Firewall

For AWS EC2, open your proxy port in the inbound rules in the security group.

## Setup Client

Download `root.pem` to your local computer, rename it to `xxx.crt`.

In the Chrome settings `Privacy and security > More > Manage certificates > Trusted Root Certification Authorities`, import the `xxx.crt` file.

In SwitchyOmega, setup your proxy:
- Protocol: HTTPS
- Server: your domain name
- Port: your port
- Authentication: your proxy username and password

## Refs

- [Getting Chrome to accept self-signed localhost certificate](https://stackoverflow.com/a/60516812/12407789)
- [How stop-start-restart-status stunnel as a service on centos 7.6](https://unix.stackexchange.com/a/501339)
- [使用Squid搭建HTTPS代理服务器](https://blog.csdn.net/github_38885296/article/details/78588006)