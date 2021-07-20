<template>
  <div id="">
    <div class="flex" style="margin-bottom: 10px; width: 100%">
      <input type="file" id="file" @change="readfile" />
      
    </div>
    <div  style="width: 90%;height: 80vh;margin: 0 auto;border: 1px solid #ccc; text-align: left" id="container">
      
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  name: "monaco-edit",
  data() {
    return {

    };
  },
  methods: {
    readfile() {
      var file = document.getElementById('file').files[0];
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
      
          monaco.editor.create(document.getElementById('container'), {
            value: reader.result,
            language: 'javascript'
          });
        },
        false
      );
      if (file) {
        reader.readAsText(file);
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
