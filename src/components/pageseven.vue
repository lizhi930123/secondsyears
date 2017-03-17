<template>
<div class="container">
    <div id="opa" :class="{animated:true,content:true,fadeOutLeft:fadeOutLeft,fadeInLeft:fadeOutRight}">
      <p class="say">对名朋想说的话</p>
      <ul class="list" @touchmove.stop>
        <li v-for="item in items">
          <div class="headimg"></div>
          <div class="con">
            <p>{{item.username}}&nbsp;NO.{{item.userno}}</p>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div :class="{animated:true,content:true,fadeInRight:fadeOutLeft,fadeOutRight:fadeOutRight}">
      <img src="./../assets/Group.png" class="group">
      <img src="./../assets/back.png" :class="{back:true,active:back}" @touchstart="f_touch_back" @touchend="f_touch_back" @click="backto">
      <div class="wish_content">
          <textarea maxlength="100" v-model="val" placeholder="输入你想对名朋说的话"></textarea>
          <div class="changeuser">
            <div><img id="tupian" :src="$store.state.current_user.headimg" alt=""></div>
            <div class="check_name">{{$store.state.current_user.name}} &nbsp;NO.{{$store.state.current_user.no}}</div>
            <div :class="{active:changeuser}" @touchstart="f_touch_change" @touchend="f_touch_change" @click="f_change"><img src="./../assets/change.png">切换身份</div>
          </div>
      </div>
    </div>
    <button :class="{wish:true,active:active}" @touchstart="f_touch($event)" @touchend="f_touch($event)" @click="push_wish">{{str}}</button>
    <p :class="{share:true,active:act}" @touchstart="f_touch($event)" @touchend="f_touch($event)" @click="shareTo">分享给小伙伴</p>
</div>
</template>
<script>
    export default ({
        props: ['propsseven'],
        data() {
            return {
                time: false,
                active: false,
                act: false,
                content: true,
                changeuser: false,
                val: '',
                str: '祝福名朋',
                fadeOutLeft: false,
                fadeOutRight: false,
                back: false,
                items: [{
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, {
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, {
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, {
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, {
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, {
                    headimg: '',
                    username: '艾薇儿',
                    userno: '1235',
                    content: '希望名朋越办越好，红红火火，哈哈哈哈哈哈哈哈哈哈'
                }, ]
            }
        },
        watch: {
            propsseven: function() {
                clearTimeout(this.time);
                this.animation();
                this.$store.state.showcicle = false;
            }
        },
        mounted: function() {},
        methods: {
            backto: function() {
                this.fadeOutLeft = false;
                this.fadeOutRight = true;
                this.str = '祝福名朋';
            },
            f_touch_back: function() {
                this.back = !this.back;
            },
            animation: function() {
                var me = this;
                me.$store.state.swi = [];
                setTimeout(function() {
                    me.$store.state.swi = [];
                    me.$store.state.swi[6] = true;
                }, 1000)
            },
            f_touch: function(event) {
                if (event.target.innerHTML == '祝福名朋' || event.target.innerHTML == '写下祝福') {
                    this.active = !this.active;
                } else {
                    this.act = !this.act;
                }
            },
            f_touch_change: function() {
                this.changeuser = !this.changeuser;
            },
            f_change: function() {
                this.$store.state.changeI = true;
            },
            push_wish: function() {
                if (this.str == '祝福名朋') {
                    this.fadeOutRight = false;
                    this.fadeOutLeft = true;
                    this.str = "写下祝福";
                } else {}
            },
            shareTo: function() {
                this.$store.state.share = true;
            }

        }
    })

</script>
<style scoped>
    #tupian {
        width: 100%;
        display: block;
    }
    
    div.content {
        overflow: hidden;
        margin-left: .6rem;
    }
    
    p.say {
        font-size: .3rem;
        line-height: .44rem;
        color: #fff;
    }
    
    ul.list {
        width: 6.3rem;
        height: 8.4rem;
        overflow-y: auto;
        margin-top: .2rem;
        -webkit-overflow-scrolling: touch;
    }
    
    .list>li {
        width: 100%;
        padding: .3rem;
        border: #00E2FD 1px solid;
        border-radius: .08rem;
        margin-bottom: .2rem;
        background: rgba(255, 255, 255, .1);
        list-style: none;
        overflow: hidden;
    }
    
    .headimg {
        float: left;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background: #fff;
    }
    
    .con {
        float: left;
        width: 4.5rem;
        margin-left: .3rem;
    }
    
    .content {
        height: 9.1rem;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    #opa {
        opacity: 1;
        z-index: 999;
    }
    
    .con>p:nth-child(1) {
        color: #F8E81C;
        font-size: .24rem;
        line-height: .33rem;
        width: 100%;
    }
    
    .con>p:nth-child(2) {
        color: #fff;
        font-size: .28rem;
        line-height: .44rem;
        width: 100%;
        height: auto;
    }
    
    .wish {
        display: block;
        position: absolute;
        width: 4rem;
        height: .88rem;
        color: #fff;
        line-height: .88rem;
        border-radius: .44rem;
        text-align: center;
        background: linear-gradient(left, #01C3FF, #777DFA);
        background: -webkit-linear-gradient(left, #01C3FF, #777DFA);
        border: none;
        left: 1.75rem;
        top: 9.35rem;
        outline: none;
    }
    
    .share {
        font-size: .28rem;
        color: #6BCEF7;
        position: absolute;
        top: 10.4rem;
        text-align: center;
    }
    
    .wish.active,
    .back.active,
    .share.active {
        transform: scale(.95, .95);
        -webkit-transform: scale(.95, .95);
    }
    
    .changeuser>div:nth-child(3).active {
        transform: scale(.95, .95);
        -webkit-transform: scale(.95, .95);
    }
    
    .group {
        position: absolute;
        display: block;
        width: 6.3rem;
        bottom: 0;
        left: 0;
    }
    
    .wish_content {
        position: absolute;
        bottom: 0;
        width: 6.3rem;
        height: 7.88rem;
        padding: .5rem .4rem;
        background: transparent;
    }
    
    textarea {
        background: transparent;
        color: #fff;
        font-size: .32rem;
        line-height: .48rem;
        outline: none;
        border: none;
        resize: none;
        display: block;
        width: 100%;
        height: 6.2rem;
    }
    
    .changeuser {
        width: 100%;
        height: .48rem;
    }
    
    .changeuser>div:nth-child(1) {
        float: left;
        width: .48rem;
        height: .48rem;
        background: white;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .changeuser>div:nth-child(2) {
        float: left;
        color: #F8E81C;
        font-size: .24rem;
        line-height: .48rem;
        margin-left: .2rem;
        max-width: 3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .changeuser>div:nth-child(3) {
        float: right;
        font-size: .24rem;
        line-height: .48rem;
        color: #00E2FD;
        overflow: hidden;
        height: 100%;
    }
    
    .changeuser>div:nth-child(3) img {
        display: inline-block;
        width: .4rem;
        position: relative;
        top: .05rem;
        margin-right: .1rem;
    }
    
    .back {
        display: block;
        width: .6rem;
        margin: .4rem 0 0 .4rem;
    }

</style>
