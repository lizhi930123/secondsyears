<template>
<div class="container">
    <div :class="{animated:true,data:true,fadeIn:this.$store.state.swi[1]}">
      <p>这两年</p>
      <p>我在名朋世界里入住了<tween :class="{animated:true,big:true,loginday:true,opashow:this.opashow1}" :value="number1"></tween>天</p>
      <p :class="{animated:true,date:true,wobble:this.$store.state.swi[1]}">{{this.$store.state.date}}</p>
      <p>你入住了名朋</p>
    </div>
    <p :class="{animated:true,playdays:true,fadeIn:this.$store.state.swi[1]}">签到天数<tween :class="{animated:true,big:true,opashow:this.opashow2}" :value="number2"></tween>天</p>
    <img src="./../assets/city.png" class="city mymove1">
    <img src="./../assets/bottomimg.gif" class="bottomimg">
    <img src="./../assets/twopage.png" :class="{two:true,animated:true,fadeIn2:this.$store.state.swi[1]}">
    <p :class="{tishi:true,animated:true,fadeIn2:this.$store.state.swi[1]}">很荣幸成为名朋世界的一员</p>
</div>
</template>
<script>
    import tween from './tween'
    export default ({
        props: ['propstwo'],
        data() {
            return {
                time: false,
                number1: 0,
                number2: 0,
                opashow1: false,
                opashow2: false,
            }
        },
        components: {
            tween
        },
        watch: {
            propstwo: function() {
                this.number1 = 0;
                this.number2 = 0;
                this.opashow1 = false;
                this.opashow2 = false;
                clearTimeout(this.time);
                this.animation();
                var m = this;
                setTimeout(function() {
                    m.number1 = m.$store.state.days;
                    m.opashow1 = true;
                }, 1800);
                setTimeout(function() {
                    m.number2 = m.$store.state.signin;
                    m.opashow2 = true;
                }, 3800)

            }
        },
        mounted: function() {},
        methods: {
            animation: function() {
                var me = this;
                me.$store.state.swi = [];
                setTimeout(function() {
                    me.$store.state.swi = [];
                    me.$store.state.swi[1] = true;
                }, 1000)
            },
        }
    })

</script>
<style scoped>
    .city {
        display: block;
        width: 6.18rem;
        position: absolute;
        top: 3.4rem;
        left: .66rem;
        z-index: 999;
    }
    
    p.date {
        color: #F8E71C;
    }
    
    p.playdays {
        font-size: .3rem;
        line-height: .5rem;
        height: .5rem;
        color: #fff;
        position: absolute;
        width: 100%;
        top: 8.65rem;
        left: 0;
        padding-right: .6rem;
        text-align: right;
    }
    
    p.playdays>span {
        display: inline-block;
        color: #F8E71C;
        font-size: .5rem;
        line-height: .3rem;
        margin: 0 .1rem;
    }
    
    .two {
        width: .397rem;
        top: 7.017rem;
        left: 3.741rem;
        z-index: 999;
    }
    
    .opashow {
        opacity: 1;
    }
    
    p.tishi {
        position: absolute;
        width: 100%;
        top: 7.51rem;
        left: 0;
        padding-left: 4.32rem;
        text-align: left;
        font-size: .24rem;
        line-height: .33rem;
        color: #F8E71C;
        white-space: pre-wrap;
        z-index: 99;
    }

</style>
