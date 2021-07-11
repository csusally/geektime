<template>
  <div id="">
    <div class="flex" style="margin-bottom: 10px; width: 100%">
      <input type="file" @change="loadImg" />
      <input type="button" value="灰度化并保存灰度图" @click="Convert256toGray()" />
    </div>
    <div class="flex" style="">
      <br /><br />
      <div class="scream">
        <img id="scream" width="400px" height="300px" alt="Image preview..." />
      </div>
      <canvas id="canvas" width="400px;" height="300px;">
        your browser does not support canvas!
      </canvas>
    </div>
  </div>
</template>

<script>
var c_w = 400;
var c_h = 300;
export default {
  name: "imgToGray",
  data() {
    return {};
  },
  methods: {
    Convert256toGray() {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      var imgData = ctx.getImageData(0, 0, c_w, c_h);
      for (var i = 0; i < imgData.data.length; i += 4) {
        var R = imgData.data[i]; //R(0-255)
        var G = imgData.data[i + 1]; //G(0-255)
        var B = imgData.data[i + 2]; //G(0-255)
        var Alpha = imgData.data[i + 3]; //Alpha(0-255)
        //浮点算法
        var gray = R * 0.299 + G * 0.587 + B * 0.114;
        //整数算法
        //  var gray = (R*299 + G*587 + B*114 + 500) / 1000;
        //移位算法
        //  var gray =(R*76+G*151+B*28)>>8;
        //平均值算法
        //   var gray = (R+G+B)/3;
        //仅取绿色
        //  var gray=G;
        imgData.data[i] = gray;
        imgData.data[i + 1] = gray;
        imgData.data[i + 2] = gray;
        imgData.data[i + 3] = Alpha;
      }
      ctx.putImageData(imgData, 0, 0);
      this.saveImg(c)
    },
    loadImg() {
      var img = document.getElementById("scream");
      var file = document.querySelector("input[type=file]").files[0];
      if (!/image\/\w+/.test(file.type)) {
        alert("文件必须为图片！");
        return false;
      }
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          img.src = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
        this.loadCanvas();
      }
    },
    loadCanvas() {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      img.onload = function () {
        ctx.drawImage(img, 0, 0, c_w, c_h);
      };
    },
    saveImg(canvasEl) {
        var fileName = `灰度图-${new Date().getTime()}`;
        var canvas = canvasEl || document.getElementById("canvas");
        if (window.navigator.msSaveBlob) {
        //支持IE10，IE11 ,Edage
            var blob = canvas.msToBlob();
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var file = canvas.toDataURL('image/png');
            var alink = document.createElement("a");
            alink.href = file;
            alink.download = fileName
            alink.click();
        }
    }
  },
};
</script>

<style lang='scss'>
.flex {
  display: flex;
  input {
    margin: 0 10px;
  }
}

.scream {
  width: 400px;
  height: 300px;
  border: 1px solid;
}
#canvas {
  margin-left: 20px;
  width: 400px;
  height: 300px;
  border: 1px dashed;
}
</style>
