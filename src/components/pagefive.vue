<template>
<div class="container">
<img src="./../assets/bottomimg.gif" class="bottomimg">
<div :class="{animated:true,data:true,fadeIn:this.$store.state.swi[4]}">
  <p>过去的时光里</p>
  <p>你共发出<span :class="{big:true,animated:true,rubberBand:this.$store.state.swi[4]}">999999</span>圈币</p>
  <p>超过<span :class="{animated:true,rubberBand:this.$store.state.swi[4]}">99%</span>的用户</p>
</div>
<div :class="{animated:true,getquanbi:true,fadeIn:this.$store.state.swi[4]}">
    <p>共收到<span :class="{animated:true,big:true,rollIn:this.$store.state.swi[4]}">88888</span>圈币</p>
    <p>超过<span :class="{animated:true,rollIn2:this.$store.state.swi[4]}">99%</span>的居民</p>
</div>
<img src="./../assets/redbag.png" class="redbag mymove1">
<img src="./../assets/five.png" :class="{five:true,animated:true,fadeIn6:this.$store.state.swi[4]}">
<p :class="{tishi:true,animated:true,fadeIn6:this.$store.state.swi[4]}">发红包就是这么任性
土豪的世界你们永远不懂</p>
</div>
</template>
<script>
  export default({
    props:['propsfive'],
    data(){
      return{
        time:false,
      }
    },
    watch:{
      propsfive:function(){
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
          me.$store.state.swi[4]=true;
        },1000)
      },
    }
  })
</script>
<style scoped>
.getquanbi{
  position: absolute;
  top:9.2rem;
  width:100%;
}
.getquanbi>p{
  padding-right:.6rem;
  text-align:right;
}
.redbag{
  position: absolute;
  display: block;
  width:5.48rem;
  top:2.64rem;
  left:.84rem;
}
.five{
  position: absolute;
  display: block;
  width:.27rem;
  top:2.26rem;
  left:3.87rem;
  z-index:99;
}
p.tishi{
  position: absolute;
  width:100%;
  top:2.09rem;
  left:0;
  padding-left:4.26rem;
  text-align:left;
  font-size:.24rem;
  line-height: .33rem;
  color:#F8E71C;
  white-space:pre-wrap;
}
</style>