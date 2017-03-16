<template>
<div class="container">
  <img src="./../assets/logo.png" class="logo mymove1">
  <img src="./../assets/two.png" class="two mymove2">
  <img src="./../assets/year.png" class="year mymove3">
  <img src="./../assets/timebook.png" class="timebook mymove4">
  <img src="./../assets/bottomimg.gif" class="bottomimg">
</div>
</template>
<script>
	export default({
		props:['propsone'],
		data(){
			return{
				time:false,
			}
		},
		watch:{
			propsone:function(){
				clearTimeout(this.time);
				this.animation();
			}
		},
		mounted:function(){
			this.animation();
		},
		methods:{
			animation:function(){
				var me=this;
        me.$store.state.swi=[];
				setTimeout(function(){
          me.$store.state.swi=[];
					me.$store.state.swi[0]=true;
				},1000)
			},
		}
	})
</script>
<style>
@charset "UTF-8";
	div.container{
		width:100%;
		height:10.85rem;
    overflow:hidden;
    background: transparent;
    position: absolute;
    top:50%;
    margin-top:-5.425rem;
	}
  .logo{
    float:left;
    display: block;
    width:6.2rem;
    margin-left:.65rem;
  }
  .two{
    position: absolute;
    top:3rem;
    left:1rem;
    display: block;
    width:2.9rem;
    z-index:999;
  }
  .year{
    position: absolute;
    display: block;
    width:1.763rem;
    top:6.593rem;
    left:4.653rem;
    z-index:999;
  }
  .timebook{
    display: block;
    width:3.138rem;
    position: absolute;
    top:7.663rem;
    left:3.482rem;
  }
  .bottomimg{
    position: absolute;
    display: block;
    width:.54rem;
    top:10.4rem;
    left:3.48rem;
  }
</style>