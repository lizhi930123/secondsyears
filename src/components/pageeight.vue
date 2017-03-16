<template>
<div>
  pageeight
  <p :class="{animated:true,rubberBand:this.$store.state.swi[7]}">这是第一条数据</p>
  <p :class="{animated:true,wobble:this.$store.state.swi[7]}">这是第二条数据</p>
  <p :class="{animated:true,swing:this.$store.state.swi[7]}">这是第三条数据</p>
  <p :class="{animated:true,bounceInLeft:this.$store.state.swi[7]}">这是第四条数据</p>
</div>
</template>
<script>
  export default({
    props:['propseight'],
    data(){
      return{
        time:false,
      }
    },
    watch:{
      propseight:function(){
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
          me.$store.state.swi[7]=true;
        },1000)
      },
    }
  })
</script>
<style scoped>
  div{
    width:100%;
    height:100%;
    font-size:2rem;
    text-align:center;
    background: #f5223b;
  }
  p{
    font-size:.4rem;
  }
</style>