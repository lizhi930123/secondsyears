<template>
<div class="container">
<img src="./../assets/bottomimg.gif" class="bottomimg">
  <div class="data" :class="{animated:true,fadeInDownBig:this.$store.state.swi[3]}">
    <p>我在名朋的</p>
    <p>第一个好友是</p>
    <p :class="{animated:true,name:true,zoomIn:this.$store.state.swi[3]}">鹿晗 NO.1234</p>
    <p>你们现在还有联系吗</p>
  </div>
  <div :class="{animated:true,cp:true,fadeInDownBig:this.$store.state.swi[3]}">
    <p>第一个cp是<span :class="{animated:true,name:true,wobble:this.$store.state.swi[3]}">是电大师傅是巴基涉及计算机的飞机</span></p>
    <p>你们现在还彼此相爱吗</p>
    <p>第一个群是<span :class="{animated:true,name:true,wobble:this.$store.state.swi[3]}">海贼王唐吉坷德家族战队</span></p>
    <p>你们现在还在一起畅谈吗</p>
  </div>
  <img src="./../assets/swiming.png" class="swiming mymove1">
  <img src="./../assets/heart1.png" :class="{animated:true,heart1:true,zoomIn2:this.$store.state.swi[3]}">
   <img src="./../assets/heart2.png" :class="{animated:true,heart2:true,zoomIn2:this.$store.state.swi[3]}">
  <img src="./../assets/cloud2.png" class="cloud1 mymove2">
  <img src="./../assets/cloud2.png" class="cloud2 mymove3">
  <img src="./../assets/tree.png" class="tree1 mymove4">
  <img src="./../assets/tree.png" class="tree2 mymove1">
</div>
</template>
<script>
  export default({
    props:['propsfour'],
    data(){
      return{
        time:false,
      }
    },
    watch:{
      propsfour:function(){
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
          me.$store.state.swi[3]=true;
        },1000)
      },
    }
  })
</script>
<style scoped>
p.name{
  color:#F8E71C;
}
.cp{
  width:100%;
  position: absolute;
  top:8.25rem;
  right:.6rem;
}
.cp>p{
  text-align:right;
}
span{
  display: inline-block;
  margin-left:.1rem;
  color:#F8E71C;
}
img{
  position: absolute;
  display: block;
}
.swiming{
  width:6.52rem;
  top:3.3rem;
  left:.49rem;
}
.heart1{
  width:.42rem;
  top:4.78rem;
  left:4.02rem;
}
.heart2{
  width:.42rem;
  top:2.8rem;
  left:4.81rem;
}
.cloud1{
  width:.85rem;
  top:3.17rem;
  left:2.175rem;
}
.cloud2{
  width:.42rem;
  top:2.77rem;
  left:4.233rem;
}
.tree1{
  width:1.15rem;
  top:6.11rem;
  left:5.49rem;
}
.tree2{
  width:.94rem;
  top:4.09rem;
  left:.49rem;
}
</style>