<template>
<div class="container">
    <div class="content" v-show="content">
      <p class="say">对名朋想说的话</p>
      <ul class="list" @touchmove.stop>
        <li v-for="item in items">
          <div class="headimg"></div>
          <div class="con">
            <p>{{item.username}}&nbsp;NO.{{item.userno}}</p>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="content" v-show="!content">
      <img src="./../assets/Group.png" class="group">
    </div>
    <button :class="{wish:true,active:active}" @touchstart="f_touch($event)" @touchend="f_touch($event)">祝福名朋</button>
    <p :class="{share:true,active:act}" @touchstart="f_touch($event)" @touchend="f_touch($event)">分享给小伙伴</p>
</div>
</template>
<script>
  export default({
    props:['propsseven'],
    data(){
      return{
        time:false,
        active:false,
        act:false,
        content:false,
        items:[
          {
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },
           {
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },{
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },{
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },{
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },{
            headimg:'',
            username:'艾薇儿',
            userno:'1235',
            content:'希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
          },
        ]
      }
    },
    watch:{
      propsseven:function(){
        clearTimeout(this.time);
        this.animation();
      }
    },
    mounted:function(){
    },
    methods:{
      animation:function(){
        var me=this;
        me.$store.state.swi=[];
        setTimeout(function(){
          me.$store.state.swi=[];
          me.$store.state.swi[6]=true;
        },1000)
      },
      f_touch:function(event){
        if(event.target.innerHTML=='祝福名朋'){
          this.active=!this.active;
        }else{
          this.act=!this.act;
        }
      },

    }
  })
</script>
<style scoped>
  div.content{
    overflow:hidden;
    margin-left:.6rem;
  }
  p.say{
    font-size:.3rem;
    line-height: .44rem;
    color:#fff;
  }
  ul.list{
    width:6.3rem;
    height:8.4rem;
    overflow-y: auto;
    margin-top:.2rem;
    -webkit-overflow-scrolling:touch;
  }
  .list>li{
    width:100%;
    padding:.3rem;
    border:#00E2FD 1px solid;
    border-radius:.08rem;
    margin-bottom:.2rem;
    background: rgba(255,255,255,.1);
    list-style: none;
    overflow:hidden;
  }
  .headimg{
  float: left;
  width:.8rem;
  height:.8rem;
  border-radius: 50%;
  background: #fff;
 }
 .con{
  float: left;
  width:4.5rem;
  margin-left:.3rem;
 }
 .content{
  height:9.1rem;
  position: relative;
 }
 .con>p:nth-child(1){
  color:#F8E81C;
  font-size:.24rem;
  line-height: .33rem;
  width:100%;
 }
  .con>p:nth-child(2){
  color:#fff;
  font-size:.28rem;
  line-height: .44rem;
  width:100%;
  height:auto;
 }
 .wish{
  display: block;
  width:4rem;
  height:.88rem;
  color:#fff;
  line-height:.88rem;
  border-radius: .44rem;
  text-align: center;
    background: linear-gradient(left,#01C3FF,#777DFA);
  background: -webkit-linear-gradient(left,#01C3FF,#777DFA);
  border:none;
  margin:0 auto;
    margin-top:.25rem;
    outline: none;
 }
 .share{
  font-size:.28rem;
  color:#6BCEF7;
  margin-top:.2rem;
  text-align:center;
 }
 .wish.active{
  transform:scale(.95,.95);
  -webkit-transform:scale(.95,.95);
 }
.share.active{
  transform:scale(.95,.95);
  -webkit-transform:scale(.95,.95);
  }
  .group{
    position: absolute;
    display: block;
    width:6.3rem;
    bottom:0;
    left:0;
  }
</style>