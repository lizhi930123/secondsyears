//此文件为主入口
<template>
<div id="app">
  <img src="./../assets/cicleone.png" class="cicleone mymove1" v-show="this.$store.state.showcicle">
  <img src="./../assets/cicletwo.png" class="cicletwo mymove2" v-show="this.$store.state.showcicle">
  <img src="./../assets/ciclethree.png" class="ciclethree mymove3" v-show="this.$store.state.showcicle">
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><pageone :propsone="propsone"></pageone></div>
	       	<div class="swiper-slide"><pagetwo :propstwo="propstwo"></pagetwo></div>
	        <div class="swiper-slide"><pagethree :propsthree="propsthree"></pagethree></div>
	       	<div class="swiper-slide"><pagefour :propsfour="propsfour"></pagefour></div>
	       	<div class="swiper-slide"><pagefive :propsfive="propsfive"></pagefive></div>
	       	<div class="swiper-slide"><pagesix :propssix="propssix"></pagesix></div>
	        <div class="swiper-slide">
                <othershare v-if="this.$store.state.othershare"></othershare>
                <change_identity></change_identity>
                <share v-if="this.$store.state.share"></share>
                <transition name="fade" mode="out-in">
                    <pageseven :propsseven="propsseven" v-if="$store.state.seven"></pageseven>
                    <xiazai :propsseven="propsseven" v-else></xiazai>
                </transition>
	        </div>
	    </div>
	</div>
</div>
</template>
<script>
    //static
    require("../../static/swiper.min.css")
    require("../../static/swiper.min.js")
    require("../../static/Tween.js")
    //self
    require("../canvas.js")
    require("./../../static/animation.css")
    import pageone from './pageone'
    import pagetwo from './pagetwo'
    import pagethree from './pagethree'
    import pagefour from './pagefour'
    import pagefive from './pagefive'
    import pagesix from './pagesix'
    import pageseven from './pageseven'
    import change_identity from './change_identity'
    import share from './share'
    import othershare from './othershare'
    import xiazai from './xiazai'
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
            change_identity,
            share,
            othershare,
            xiazai,
        },
        mounted: function() {
            for (var a = document.cookie.split(';'), i = 0; i < a.length; i++) {
                if (a[i].match(/access_token/i)) {
                    this.$store.state.access_token = a[i].split('=')[1];
                }
            }
            if (this.$store.state.access_token == '') {
                if (location.href.split('?')[1]) {
                    var href = location.href.split('?')[1].split('&');
                    for (var i = 0; i < href.length; i++) {
                        if (href[i].match(/access_token/i)) {
                            this.$store.state.access_token = href[i].split('=')[1];
                        }
                    }
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
            if (this.$store.state.access_token) {
                this.get_userinfo();
                this.get_play();
                this.get_words();
            }
        },
        methods: {
            get_userinfo: function() {
                this.$http({
                    method: 'get',
                    url: 'http://test.mrpyq.com/annual2/account_info',
                    params: {
                        'access_token': this.$store.state.access_token,
                    },
                    emulateJSON: true
                }).then((res) => {
                    console.log(res.body);
                    if (!res.body.newer) {
                        this.$store.state.days = res.body.days;
                        this.$store.state.signin = res.body.signin;
                        this.$store.state.date = res.body.ts;
                        this.$store.state.member = res.body.stat.member ? res.body.stat.member : 0;
                        this.$store.state.follow = res.body.stat.follow ? res.body.stat.follow : 0;
                        this.$store.state.friends = res.body.stat.friends ? res.body.stat.friend : 0;
                        this.$store.state.group = res.body.stat.group ? res.body.stat.group : 0;
                        this.$store.state.wealth_in = res.body.wealth_in;
                        this.$store.state.wealth_out = res.body.wealth_out;
                        this.$store.state.current_user = res.body.member;
                        if (res.body.cp) {
                            this.$store.state.cp = res.body.cp;
                        }
                        if (res.body.friend) {
                            this.$store.state.friend = res.body.friend;
                        }
                        if (res.body.group) {
                            this.$store.state.firstgroup = res.body.group;
                        }
                    }
                })
            },
            get_play: function() {
                this.$http({
                    method: 'get',
                    url: 'http://test.mrpyq.com/api/account/members_by_me',
                    params: {
                        'access_token': this.$store.state.access_token,
                    },
                    emulateJSON: true
                }).then((res) => {
                    console.log(res.body);
                    this.$store.state.users = res.body.items;
                })
            },
            get_words: function() {
                this.$http({
                    method: 'get',
                    url: 'http://test.mrpyq.com/annual2/list',
                    params: {
                        'access_token': this.$store.state.access_token,
                    },
                    emulateJSON: true
                }).then((res) => {
                    console.log(res.body);
                    this.$store.state.wordlist = res.body.items;
                })
            },
        }
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
        z-index: 999 !important;
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
    
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s;
    }
    
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>
