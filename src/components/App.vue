//此文件为主入口
<template>
<div id="app">
  <img src="./../assets/cicleone.png" class="cicleone mymove1">
  <img src="./../assets/cicletwo.png" class="cicletwo mymove2">
  <img src="./../assets/ciclethree.png" class="ciclethree mymove3">
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
    require("../canvas.js")
    require("./../../static/animation.css")
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
                propsone: false,
                propstwo: false,
                propsthree: false,
                propsfour: false,
                propsfive: false,
                propssix: false,
                propsseven: false,
                propseight: false,
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
            for (var a = document.cookie.split(';'), i = 0; i < a.length; i++) {
                if (a[i].match(/access_token/i)) {
                    this.$store.state.access_token = a[i].split('=')[1];
                }
            }
            var me = this;
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                effect: 'slide',
                onSliderMove: function(swiper, event) {
                    var slider = document.querySelectorAll('.swiper-slide');
                    console.log()
                },
                onSlideChangeStart: function() {
                    var index = mySwiper.activeIndex;
                    switch (index) {
                        case 0:
                            me.propsone = !me.propsone;
                            break;
                        case 1:
                            me.propstwo = !me.propstwo;
                            break;
                        case 2:
                            me.propsthree = !me.propsthree;
                            break;
                        case 3:
                            me.propsfour = !me.propsfour;
                            break;
                        case 4:
                            me.propsfive = !me.propsfive;
                            break;
                        case 5:
                            me.propssix = !me.propssix;
                            break;
                        case 6:
                            me.propsseven = !me.propsseven;
                            break;
                        case 7:
                            me.propseight = !me.propseight;
                            break;
                    }
                },
            })
        },
        methods: {}
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    
    canvas {
        display: block;
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -ms-perspective: 1000;
        perspective: 1000;
    }
    
    html,
    body,
    #app,
    .swiper-container {
        width: 100%;
        height: 100%;
        font-family: 'PingFangSC-Regular', 'microsoft yahei';
        overflow-x: hidden;
    }
    
    .swiper-container {
        z-index: 999;
    }
    
    div.container {
        width: 100%;
        height: 10.85rem;
        overflow: hidden;
        background: transparent;
        position: absolute;
        top: 50%;
        margin-top: -5.425rem;
    }
    
    .cicleone {
        position: absolute;
        display: block;
        width: 2rem;
        top: 4.66rem;
        left: .18rem;
        z-index: 9;
    }
    
    .cicletwo {
        position: absolute;
        display: block;
        width: 2.96rem;
        top: 5.96rem;
        left: 1.1rem;
        z-index: 99;
    }
    
    .ciclethree {
        position: absolute;
        display: block;
        width: 3.7rem;
        left: 4.84rem;
        top: 3.62rem;
        z-index: 99;
    }
    
    .data {
        float: left;
        margin-left: .6rem;
    }
    
    p {
        font-size: .3rem;
        line-height: .5rem;
        height: .5rem;
        color: #fff;
        width: 100%;
    }
    
    span {
        display: inline-block;
        margin: 0 .1rem;
        color: #F8E71C;
        text-align: center;
    }
    
    span.big {
        font-size: .5rem;
        line-height: .3rem;
    }

</style>
