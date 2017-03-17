<template>
<div class="container">
<img src="./../assets/bottomimg.gif" class="bottomimg">
<div :class="{animated:true,data:true,fadeInLeft:this.$store.state.swi[5]}">
  <p>名朋世界中</p>
  <p>有<tween :class="{big:true,animated:true,opashow:opashow1}" :value="number1"></tween>个好友</p>
  <p>悄悄的特别关心了你~</p>
  <p>超过<span :class="{animated:true,zoomIn3:this.$store.state.swi[5]}">100%</span>的居民</p>
</div>
<img src="./../assets/phone.png" class="phone mymove1">
<img src="./../assets/headimg.png" class="headimg1 mymove2">
<img src="./../assets/headimg.png" class="headimg2 mymove3">
<img src="./../assets/headimg.png" class="headimg3 mymove4">
<img src="./../assets/inform1.png" class="inform1 mymove2">
<img src="./../assets/inform1.png" class="inform2 mymove4">
<img src="./../assets/inform2.png" class="inform3 mymove3">
<img src="./../assets/bluepeople2.png" class="blue mymove2">
<img src="./../assets/yellowpeople.png" class="yellow1 mymove3">
<img src="./../assets/yellowpeople.png" class="yellow2 mymove4">
<img src="./../assets/heart3.png" :class="{animated:true,heart3:true,zoomIn2:this.$store.state.swi[5]}">
<img src="./../assets/heart4.png" :class="{animated:true,heart4:true,zoomIn2:this.$store.state.swi[5]}">
<img src="./../assets/six.png" :class="{six:true,animated:true,fadeIn6:this.$store.state.swi[5]}">
<p :class="{tishi:true,animated:true,fadeIn6:this.$store.state.swi[5]}">哇哇哇哇哇，原来我人气这么旺！</p>
</div>
</template>
<script>
import tween from './tween'
  export default({
    props:['propssix'],
    data(){
      return{
        time:false,
        opashow1:false,
        number1:0,
      }
    },
      components:{
      tween
    },
    watch:{
      propssix:function(){
        this.number1=0;
        this.opashow1=false;
        clearTimeout(this.time);
        this.animation();
        var m=this;
        setTimeout(function(){
          m.number1=m.$store.state.follow;
          m.opashow1=true;
        },1800);
        this.$store.state.showcicle=true;
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
          me.$store.state.swi[5]=true;
        },1000)
      },
    }
  })
</script>
<style scoped>
.opashow{
  opacity: 1;
}
img{
  position: absolute;
  display: block;
}
.phone{
  width:2rem;
  top:2.55rem;
  left:2.959rem;
}
.headimg1{
  width:.43rem;
  top:4.16rem;
  left:3.4rem;
}
.headimg2{
  width:.43rem;
  top:4.02rem;
  left:5.2rem;
}
.headimg3{
  width:.43rem;
  top:5.94rem;
  left:3.4rem;
}
.inform1{
  width:1.37rem;
  top:3.26rem;
  left:3.91rem;
}
.inform2{
  width:1.37rem;
  top:5.04rem;
  left:3.91rem;
}
.inform3{
  width:1.37rem;
  top:4.27rem;
  left:3.74rem;
}
.blue{
  width:1rem;
  top:6.04rem;
  left:5.29rem;
}
.yellow1{
  width:.87rem;
  top:4.27rem;
  left:1.55rem;
}
.yellow2{
  width:.87rem;
  top:4.68rem;
  left:1.16rem;
  z-index:99;
}
.heart3{
  width:.42rem;
  top:4.38rem;
  left:1.24rem;
}
.heart4{
  width:.42rem;
  top:3.7rem;
  left:1.92rem;
}
.six{
  width:.418rem;
  top:8.25rem;
  left:4.84rem;
  z-index:99;
}
p.tishi{
  position: absolute;
  width:100%;
  top:8.49rem;
  left:0;
  padding-right:2.8rem;
  text-align:right;
  font-size:.24rem;
  line-height: .33rem;
  color:#F8E71C;
  white-space:pre-wrap;
}
</style>