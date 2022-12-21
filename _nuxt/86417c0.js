(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1290:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"create-a-notebook-instance"}},[t._v("Create a notebook instance")]),t._v(" "),e("p",[t._v("In the SageMaker console, create a notebook instance. Since we need GPU to run CUDA, we choose "),e("code",{pre:!0},[t._v("ml.p2.xlarge")]),t._v(" as the instance type.")]),t._v(" "),e("p",[t._v("When the notebook instance is created, click "),e("code",{pre:!0},[t._v("Open JupyterLab")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"install-ffmpeg"}},[t._v("Install FFmpeg")]),t._v(" "),e("blockquote",[e("p",[t._v("Ref: "),e("a",{attrs:{href:"https://medium.com/@maskaravivek/how-to-install-ffmpeg-on-ec2-running-amazon-linux-451e4a8e2694"}},[t._v("How to install FFMPEG on EC2 running Amazon Linux?")])])]),t._v(" "),e("p",[t._v("FFmpeg is not installed in the notebook instance by default. We need to install it manually.")]),t._v(" "),e("p",[t._v("Create a terminal in the JupyterLab and run the following script:")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switch to the root user.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ffmpeg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ffmpeg\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Download ffmpeg.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xf ffmpeg-release-amd64-static.tar.xz "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unzip")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Assume the unzipped folder name is `ffmpeg-4.3.1-amd64-static`.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Now you can run `ffmpeg-4.3.1-amd64-static/ffmpeg -version` to check whether the bin file is valid.")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add the bin file to $PATH.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a /usr/local/bin/ffmpeg/ffmpeg-4.3.1-amd64-static/* /usr/local/bin/ffmpeg/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/local/bin/ffmpeg/ffmpeg /usr/bin/ffmpeg\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Now you can run `ffmpeg -version` anywhere.")]),t._v("\n")])]),t._v(" "),e("h2",{attrs:{id:"upload-material-files"}},[t._v("Upload material files")]),t._v(" "),e("p",[t._v("In the file browser of the JupyterLab, click "),e("code",{pre:!0},[t._v("Upload Files")]),t._v(" to upload those files:")]),t._v(" "),e("ul",[e("li",[t._v("A photo of 256x256 pixels. Rename it to "),e("code",{pre:!0},[t._v("meme256.png")]),t._v(".")]),t._v(" "),e("li",[t._v("The input video. Rename it to "),e("code",{pre:!0},[t._v("damedane.mp4")]),t._v(".\n"),e("ul",[e("li",[t._v("You can download it from "),e("a",{attrs:{href:"https://www.kapwing.com/videos/5f2831922695a400156ada1e"}},[t._v("here")]),t._v(".")])])]),t._v(" "),e("li",[t._v("Model parameters "),e("code",{pre:!0},[t._v("vox-cpk.pth.tar")]),t._v("(~700MB).\n"),e("ul",[e("li",[t._v("You can download it from "),e("a",{attrs:{href:"https://drive.google.com/drive/folders/1kZ1gCnpfU0BnpdU47pLM_TQ6RypDDqgw?usp=sharing"}},[t._v("here")]),t._v(".")])])])]),t._v(" "),e("h2",{attrs:{id:"generate-your-video"}},[t._v("Generate your video")]),t._v(" "),e("blockquote",[e("p",[t._v("Refs:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://kapwing.com/resources/baka-mitai-dame-da-ne-meme/"}},[t._v("How to Make the Baka Mitai Dame Da Ne Meme (Templates Included)")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://colab.research.google.com/github/AliaksandrSiarohin/first-order-model/blob/master/demo.ipynb"}},[t._v("Demo for paper “First Order Motion Model for Image Animation”")])])])]),t._v(" "),e("p",[t._v("In the JupyterLab, create a "),e("code",{pre:!0},[t._v("conda_pytorch_p36")]),t._v(" notebook.")]),t._v(" "),e("p",[t._v("In the code cell, clone the repo from github:")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("git clone https://github.com/AliaksandrSiarohin/first-order-model\n")])]),t._v(" "),e("p",[t._v("Change the current working directory:")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" first-order-model\n")])]),t._v(" "),e("p",[t._v("Install python packages:")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" imageio-ffmpeg\n")])]),t._v(" "),e("p",[t._v("Preview your image and the input video to ensure the environment is ok:")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" imageio\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animation "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" animation\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" skimage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" resize\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" IPython"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HTML\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" warnings\nwarnings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filterwarnings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsource_image "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../meme256.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriving_video "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mimread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../damedane.mp4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" memtest"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Resize image and video to 256x256")]),t._v("\n\nsource_image "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source_image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndriving_video "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("resize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" frame "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" driving_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" driving"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" generated"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generated "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    ims "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driving"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cols "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        cols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driving"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" generated "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            cols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        im "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concatenate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" axis"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        plt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ims"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("im"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    ani "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" animation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ArtistAnimation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ims"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repeat_delay"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    plt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ani\n    \n\nHTML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("display"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source_image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" driving_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_html5_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("Load model checkpoints:")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" load_checkpoints\ngenerator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kp_detector "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" load_checkpoints"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config_path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config/vox-256.yaml'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                            checkpoint_path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../vox-cpk.pth.tar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("Generate your meme video:")]),t._v(" "),e("pre",{staticClass:"language-python"},[e("code",{pre:!0,attrs:{class:"language-python"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" make_animation\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" skimage "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" img_as_ubyte\n\npredictions "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" make_animation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source_image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" driving_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" generator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kp_detector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#save resulting video")]),t._v("\nimageio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mimsave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../generated.mp4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("img_as_ubyte"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" frame "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" predictions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#video can be downloaded from /content folder")]),t._v("\n\nHTML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("display"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source_image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" driving_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" predictions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_html5_video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("p",[t._v("Now you can download the output video from the file browser of the notebook. The video file name is "),e("code",{pre:!0},[t._v("generated.mp4")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"adjust-your-video"}},[t._v("Adjust your video")]),t._v(" "),e("p",[t._v("The generated video file is slower than the original video, and there is no sound.")]),t._v(" "),e("p",[t._v("You can use your favorite video editor to finish your meme video, or follow "),e("a",{attrs:{href:"https://www.kapwing.com/resources/baka-mitai-dame-da-ne-meme/#7-save-and-speed-up-your-deepfake"}},[t._v("this article")]),t._v(" to use online editor.")]),t._v(" "),e("p",[t._v("Enjoy!")])])}]};t.exports={attributes:{title:"Make Dame Da Ne Meme Video with Amazon SageMaker",description:"Just migrate the original project from GCP to AWS",tags:["Machine Learning","AWS"]},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);