---
title: Make Dame Da Ne Meme Video with Amazon SageMaker
description: Just migrate the original project from GCP to AWS
tags:
  - Machine Learning
  - AWS
---

## Create a notebook instance

In the SageMaker console, create a notebook instance. Since we need GPU to run CUDA, we choose `ml.p2.xlarge` as the instance type.

When the notebook instance is created, click `Open JupyterLab`.

## Install FFmpeg

> Ref: [How to install FFMPEG on EC2 running Amazon Linux?](https://medium.com/@maskaravivek/how-to-install-ffmpeg-on-ec2-running-amazon-linux-451e4a8e2694)

FFmpeg is not installed in the notebook instance by default. We need to install it manually.

Create a terminal in the JupyterLab and run the following script:

```bash
sudo -i # Switch to the root user.
cd /usr/local/bin
mkdir ffmpeg && cd ffmpeg

# Download ffmpeg.
wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
tar -xf ffmpeg-release-amd64-static.tar.xz # unzip

# Assume the unzipped folder name is `ffmpeg-4.3.1-amd64-static`.
# Now you can run `ffmpeg-4.3.1-amd64-static/ffmpeg -version` to check whether the bin file is valid.

# Add the bin file to $PATH.
cp -a /usr/local/bin/ffmpeg/ffmpeg-4.3.1-amd64-static/* /usr/local/bin/ffmpeg/
ln -s /usr/local/bin/ffmpeg/ffmpeg /usr/bin/ffmpeg

# Now you can run `ffmpeg -version` anywhere.
```

## Upload material files

In the file browser of the JupyterLab, click `Upload Files` to upload those files:

- A photo of 256x256 pixels. Rename it to `meme256.png`.
- The input video. Rename it to `damedane.mp4`.
  - You can download it from [here](https://www.kapwing.com/videos/5f2831922695a400156ada1e).
- Model parameters `vox-cpk.pth.tar`(~700MB).
  - You can download it from [here](https://drive.google.com/drive/folders/1kZ1gCnpfU0BnpdU47pLM_TQ6RypDDqgw?usp=sharing).

## Generate your video

> Refs:
> - [How to Make the Baka Mitai Dame Da Ne Meme (Templates Included)](https://kapwing.com/resources/baka-mitai-dame-da-ne-meme/)
> - [Demo for paper "First Order Motion Model for Image Animation"](https://colab.research.google.com/github/AliaksandrSiarohin/first-order-model/blob/master/demo.ipynb)

In the JupyterLab, create a `conda_pytorch_p36` notebook.

In the code cell, clone the repo from github:

```
!git clone https://github.com/AliaksandrSiarohin/first-order-model
```

Change the current working directory:

```bash
cd first-order-model
```

Install python packages:

```
!pip install imageio-ffmpeg
```

Preview your image and the input video to ensure the environment is ok:

```python
import imageio
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from skimage.transform import resize
from IPython.display import HTML
import warnings
warnings.filterwarnings("ignore")

source_image = imageio.imread('../meme256.png')
driving_video = imageio.mimread('../damedane.mp4', memtest=False)


#Resize image and video to 256x256

source_image = resize(source_image, (256, 256))[..., :3]
driving_video = [resize(frame, (256, 256))[..., :3] for frame in driving_video]

def display(source, driving, generated=None):
    fig = plt.figure(figsize=(8 + 4 * (generated is not None), 6))

    ims = []
    for i in range(len(driving)):
        cols = [source]
        cols.append(driving[i])
        if generated is not None:
            cols.append(generated[i])
        im = plt.imshow(np.concatenate(cols, axis=1), animated=True)
        plt.axis('off')
        ims.append([im])

    ani = animation.ArtistAnimation(fig, ims, interval=50, repeat_delay=1000)
    plt.close()
    return ani
    

HTML(display(source_image, driving_video).to_html5_video())
```

Load model checkpoints:

```python
from demo import load_checkpoints
generator, kp_detector = load_checkpoints(config_path='config/vox-256.yaml', 
                            checkpoint_path='../vox-cpk.pth.tar')
```

Generate your meme video:

```python
from demo import make_animation
from skimage import img_as_ubyte

predictions = make_animation(source_image, driving_video, generator, kp_detector, relative=True)

#save resulting video
imageio.mimsave('../generated.mp4', [img_as_ubyte(frame) for frame in predictions])
#video can be downloaded from /content folder

HTML(display(source_image, driving_video, predictions).to_html5_video())
```

Now you can download the output video from the file browser of the notebook. The video file name is `generated.mp4`.

## Adjust your video

The generated video file is slower than the original video, and there is no sound.

You can use your favorite video editor to finish your meme video, or follow [this article](https://www.kapwing.com/resources/baka-mitai-dame-da-ne-meme/#7-save-and-speed-up-your-deepfake) to use online editor.

Enjoy!