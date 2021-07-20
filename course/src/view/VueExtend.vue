<template>
  <div class="hello">
    <h3>vue extend</h3>
    <div id="mount-point"></div>
    
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    
  },
  mounted(){
    // 创建构造器
    window.editName = 'sally'
    setTimeout(()=>{
        this.init({name: window.editName})
    },1000)
    
  },
  methods: {
    init(params){
        var Profile = Vue.extend({
            template: `<div><p>{{firstName}} {{lastName}}  {{alias}} {{time}}</p><button @click="stop">stop</button></div>`,
            data: function () {
                return {
                    firstName: 'Walter',
                    lastName: 'White',
                    alias: 'Heisenberg',
                    time: '',
                    timer: null
                }
            },
            mounted(){
                this.$nextTick(()=>{
                    this.timer = setInterval(()=>{
                        this.time = new Date().getTime()
                    },1000)
                })
            },
            methods:{
                stop(){
                    this.time = 0;
                    clearInterval(this.timer)
                },
                speak(){
                    console.log('ahahha', this.alias)
                }
            }
        })
        // 创建 Profile 实例，并挂载到一个元素上。
        var PRODILE = new Profile();
        PRODILE.alias = params.name || '';
        PRODILE.speak();
        PRODILE.$mount('#mount-point')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
