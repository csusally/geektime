<template>
  <div id="">
    <div class="flex" style="margin-bottom: 15px">
      <div>{{encode ? '10进制转64进制' : '64进制转10进制' }}</div>
      <button @click="changeFun">切换转换方法</button>
    </div>
    <div class="flex">
      <input v-model="inputdata" placeholder="">
      <input v-model="outputdata" placeholder="">
      <button @click="startChange">转换</button>
    </div>
    
  </div>
</template>

<script>

import {encode64, decode64} from '../week1/number-scale'

export default {
  name: 'number',
  data(){
    return {
      encode: true, // true: 十进制转64； false: 64转十进制
      inputdata: '',
      outputdata: ''
    }
  },
  methods: {
    changeFun(){
      this.encode = !this.encode;
      this.inputdata = '';
      this.outputdata = '';
    },
    startChange(){
      if(this.inputdata){
        this.outputdata = this.encode ? encode64(this.inputdata) : decode64(this.inputdata);
      } else {
        alert('情输入需转换数字');
      }
      
    }
  }

}
</script>

<style lang='scss'>

.flex{
  display: flex;
  input{
    margin: 0 10px;
  }
}
</style>
