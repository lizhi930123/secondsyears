//此文件为主入口
<template>
<div id="app">
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><pageone :propsone="propsone"></pageone></div>
	       	<div class="swiper-slide"><pagetwo :propstwo="propstwo"></pagetwo></div>
	        <div class="swiper-slide"><pagethree :propsthree="propsthree"></pagethree></div>
	       	<div class="swiper-slide"><pagefour :propsfour="propsfour"></pagefour></div>
	       	<div class="swiper-slide"><pagefive :propsfive="propsfive"></pagefive></div>
	       	<div class="swiper-slide"><pagesix :propssix="propssix"></pagesix></div>
	        <div class="swiper-slide"><pageseven :propsseven="propsseven"></pageseven></div>
	       	<div class="swiper-slide"><pageeight :propseight="propseight"></pageeight></div>
	    </div>
	</div>
</div>
</template>
<script>
import pageone from './pageone'
import pagetwo from './pagetwo'
import pagethree from './pagethree'
import pagefour from './pagefour'
import pagefive from './pagefive'
import pagesix from './pagesix'
import pageseven from './pageseven'
import pageeight from './pageeight'
export default {
	name: 'app',
	data() {
		return {
			propsone:false,
			propstwo:false,
			propsthree:false,
			propsfour:false,
			propsfive:false,
			propssix:false,
			propsseven:false,
			propseight:false,
		}
	},
	components: {
		pageone,
		pagetwo,
		pagethree,
		pagefour,
		pagefive,
		pagesix,
		pageseven,
		pageeight
	},
	mounted: function(){
		for(var a=document.cookie.split(';'),i=0;i<a.length;i++){
			if(a[i].match(/access_token/i)){
				this.$store.state.access_token=a[i].split('=')[1];
			}
		}
		var me=this;
		var mySwiper = new Swiper ('.swiper-container', {
		    mode: 'vertical',
		    onSlideChangeStart:function(){
		    	var index=mySwiper.activeIndex;
		    	switch(index){
		    		case 0:
		    		me.propsone=!me.propsone;
		    		break;
		    		case 1:
		    		me.propstwo=!me.propstwo;
		    		break;
		    		case 2:
		    		me.propsthree=!me.propsthree;
		    		break;
		    		case 3:
		    		me.propsfour=!me.propsfour;
		    		break;
		    		case 4:
		    		me.propsfive=!me.propsfive;
		    		break;
		    		case 5:
		    		me.propssix=!me.propssix;
		    		break;
		    		case 6:
		    		me.propsseven=!me.propsseven;
		    		break;
		    		case 7:
		    		me.propseight=!me.propseigth;
		    		break;
		    	}
		    },
	  	})
	},
	methods: {
	}
}
</script>

<style>
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
	-webkit-box-sizing:border-box;
}
html,body,#app,.swiper-container{
	width:100%;
	height:100%;
}
</style>
