//此文件为主入口
<template>
<div id="app">
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><pageone></pageone></div>
	       	<div class="swiper-slide"><pagetwo></pagetwo></div>
	        <div class="swiper-slide"><pagethree></pagethree></div>
	       	<div class="swiper-slide"><pagefour></pagefour></div>
	       	 <div class="swiper-slide"><pagefive></pagefive></div>
	       	<div class="swiper-slide"><pagesix></pagesix></div>
	        <div class="swiper-slide"><pageseven></pageseven></div>
	       	<div class="swiper-slide"><pageeight></pageeight></div>
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
	mounted: function() {
		for(var a=document.cookie.split(';'),i=0;i<a.length;i++){
			if(a[i].match(/access_token/i)){
				this.$store.state.access_token=a[i].split('=')[1];
			}
		}
		var mySwiper = new Swiper ('.swiper-container', {
		    mode: 'vertical',
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
