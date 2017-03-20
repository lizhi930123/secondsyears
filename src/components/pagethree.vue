<template>
<div class="container">
    <div class="data" :class="{animated:true,fadeInLeft:this.$store.state.swi[2]}">
      <p>这两年</p>
      <p>我扮演过<tween :class="{animated:true,big:true,opashow:opashow1}" :value="number1"></tween>个角色</p>
      <p>超过<span :class="{animated:true,wobble:this.$store.state.swi[2]}">70%</span>的用户</p>
    </div>
    <div class="friends" :class="{animated:true,fadeInLeft:this.$store.state.swi[2]}">
      <p>有<tween :class="{animated:true,friendnum:true,big:true,opashow:opashow2}" :value="number2"></tween>个好友</p>
      <p>超过<span :class="{animated:true,pecent:true,flipInY2:this.$store.state.swi[2]}">50%</span>的用户</p>
      <p>加过<tween :class="{animated:true,qunnum:true,big:true,opashow:opashow3}" :value="number3"></tween>个群</p>
      <p>超过<span :class="{animated:true,percent:true,bounceInUp2:this.$store.state.swi[2]}">50%</span>的用户</p>
    </div>
    <img src="./../assets/iphone.png" class="iphone mymove1">
    <img src="./../assets/pikaqiu.png" class="pikaqiu mymove2">
   <img src="./../assets/qiaoba.png" class="qiaoba mymove3">
    <img src="./../assets/jiqimao.png" class="jiqimao mymove4">
   <img src="./../assets/cloud1.png" class="cloud3 mymove2">
   <img src="./../assets/cloud1.png" class="cloud1 mymove3">
   <img src="./../assets/cloud1.png" class="cloud2 mymove1">
    <img src="./../assets/bluerect.png" class="bluerect3 mymove1">
    <img src="./../assets/bluerect.png" class="bluerect2 mymove2">
    <img src="./../assets/bluerect.png" class="bluerect1 mymove3">
     <img src="./../assets/bluepeople.png" class="bluepeople mymove4">
     <img src="./../assets/bottomimg.gif" class="bottomimg">
     <img src="./../assets/three.png" :class="{three:true,animated:true,fadeIn3:this.$store.state.swi[2]}">
    <p :class="{tishi:true,animated:true,fadeIn3:this.$store.state.swi[2]}">每天变换这么多次身份，我就是最佳演员</p>
</div>
</template>
<script>
    import tween from './tween'
    export default ({
        props: ['propsthree'],
        data() {
            return {
                time: false,
                number1: 0,
                number2: 0,
                opashow1: false,
                opashow2: false,
                number3: 0,
                opashow3: false,
            }
        },
        components: {
            tween
        },
        watch: {
            propsthree: function() {
                this.number1 = 0;
                this.number2 = 0;
                this.number3 = 0;
                this.opashow3 = false;
                this.opashow1 = false;
                this.opashow2 = false;
                clearTimeout(this.time);
                this.animation();
                var m = this;
                setTimeout(function() {
                    m.number1 = m.$store.state.member;
                    m.opashow1 = true;
                }, 2000);
                setTimeout(function() {
                    m.number2 = m.$store.state.friends;
                    m.opashow2 = true;
                }, 3500);
                setTimeout(function() {
                    m.number3 = m.$store.state.group;
                    m.opashow3 = true;
                }, 4800)
            }
        },
        mounted: function() {},
        methods: {
            animation: function() {
                var me = this;
                me.$store.state.swi = [];
                setTimeout(function() {
                    me.$store.state.swi = [];
                    me.$store.state.swi[2] = true;
                }, 1000)
            },
        }
    })

</script>
<style scoped>
    p {
        font-size: .3rem;
        line-height: .5rem;
        height: .5rem;
        color: #fff;
        width: 100%;
        margin-top: 0;
        float: left;
    }
    
    .opashow {
        opacity: 1;
    }
    
    .iphone {
        display: block;
        width: 4.35rem;
        position: absolute;
        top: 3.87rem;
        left: 1.254rem;
        z-index: 9;
    }
    
    .pikaqiu {
        display: block;
        width: 1.22rem;
        position: absolute;
        top: 5.36rem;
        left: 4.39rem;
        z-index: 9;
    }
    
    .qiaoba {
        display: block;
        width: 1.23rem;
        position: absolute;
        top: 3.06rem;
        left: .74rem;
        z-index: 9;
    }
    
    .jiqimao {
        display: block;
        width: 1.22rem;
        position: absolute;
        top: 2.55rem;
        left: 4.44rem;
        z-index: 9;
    }
    
    .cloud1 {
        display: block;
        width: .8rem;
        position: absolute;
        top: 2.288rem;
        left: 2.981rem;
        z-index: 9;
    }
    
    .cloud2 {
        display: block;
        width: .9rem;
        position: absolute;
        top: 3.542rem;
        left: 5.934rem;
        z-index: 9;
    }
    
    .cloud3 {
        display: block;
        width: 1.2rem;
        position: absolute;
        top: 3.297rem;
        left: 2.471rem;
        z-index: 9;
    }
    
    .bluerect1 {
        display: block;
        width: .343rem;
        position: absolute;
        top: 5.16rem;
        left: .57rem;
    }
    
    .bluerect2 {
        display: block;
        width: .321rem;
        position: absolute;
        top: 4.256rem;
        left: 5.92rem;
    }
    
    .bluerect3 {
        display: block;
        width: .236rem;
        position: absolute;
        top: 5.533rem;
        left: 5.69rem;
    }
    
    .bluepeople {
        display: block;
        width: .73rem;
        position: absolute;
        top: 5.85rem;
        left: 3.35rem;
        z-index: 99;
    }
    
    .friends {
        position: absolute;
        width: 2.4rem;
        top: 7.95rem;
        width: 100%;
        left: 0;
    }
    
    .friends>p {
        width: 100%;
        color: #fff;
        font-size: .3rem;
        line-height: .5rem;
        text-align: right;
        padding-right: .6rem;
    }
    
    .friends>p:nth-child(3) {
        margin-top: .3rem;
    }
    
    .friends>p>span {
        display: inline-block;
        color: #F8E71C;
        text-align: center;
        margin: 0 .1rem;
    }
    
    .friendnum {
        font-size: .5rem;
        line-height: .3rem;
    }
    
    .qunnum {
        font-size: .5rem;
        line-height: .3rem;
    }
    
    .three {
        position: absolute;
        display: block;
        width: .563rem;
        top: 7.407rem;
        left: 2.9rem;
        z-index: 999;
    }
    
    p.tishi {
        position: absolute;
        width: 100%;
        top: 7.73rem;
        left: 0;
        padding-right: 4.74rem;
        text-align: right;
        font-size: .24rem;
        line-height: .33rem;
        color: #F8E71C;
        white-space: pre-wrap;
        z-index: 99;
    }

</style>
