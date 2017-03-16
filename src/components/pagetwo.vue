<template>
<div class="container">
    <div :class="{animated:true,data:true,fadeIn:this.$store.state.swi[1]}">
      <p>这两年</p>
      <p>我在名朋世界里入住了<span :class="{animated:true,big:true,loginday:true,rubberBand:this.$store.state.swi[1]}">60</span>天</p>
      <p :class="{animated:true,date:true,wobble:this.$store.state.swi[1]}">2015年4月17日</p>
      <p>你入住了名朋</p>
    </div>
    <p :class="{animated:true,playdays:true,fadeIn:this.$store.state.swi[1]}">登陆天数<span :class="{animated:true,big:true,swing:this.$store.state.swi[1]}">375</span>天</p>
    <img src="./../assets/city.png" class="city mymove1">
    <img src="./../assets/bottomimg.gif" class="bottomimg">
    <img src="./../assets/twopage.png" :class="{two:true,animated:true,fadeIn2:this.$store.state.swi[1]}">
    <p :class="{tishi:true,animated:true,fadeIn2:this.$store.state.swi[1]}">名朋元老身份稳稳地~</p>
</div>
</template>
<script>
  export default({
    props:['propstwo'],
    data(){
      return{
        time:false,
      }
    },
    watch:{
      propstwo:function(){
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
          me.$store.state.swi[1]=true;
        },1000)
      },
    }
  })
</script>
<style scoped>
  .city{
    display: block;
    width:6.18rem;
    position: absolute;
    top:3.4rem;
    left:.66rem;
    z-index:999;
  }
  p.date{
    color:#F8E71C;
  }
  p.playdays{
      font-size:.3rem;
      line-height:.5rem;
      height:.5rem;
      color:#fff;
      position: absolute;
      width:100%;
      top:8.65rem;
      left:0;
      padding-right:.6rem;
      text-align:right;
  }
  p.playdays>span{
    display: inline-block;
    color:#F8E71C;
    font-size:.5rem;
    line-height: .3rem;
    margin:0 .1rem;
  }
  .two{
  width:.397rem;
  top:6.717rem;
  left:4.041rem;
  z-index:999;
}
p.tishi{
  position: absolute;
  width:100%;
  top:7.21rem;
  left:0;
  padding-left:4.62rem;
  text-align:left;
  font-size:.24rem;
  line-height: .33rem;
  color:#F8E71C;
  white-space:pre-wrap;
  z-index:99;
}
</style>