<template>
<div class="container">
<img src="./../assets/bottomimg.gif" class="bottomimg">
<div :class="{animated:true,data:true,fadeIn:this.$store.state.swi[4]}">
  <p>过去的时光里</p>
  <p v-if="this.$store.state.wealth_out">你共发出<tween :class="{big:true,animated:true,opashow:opashow1}" :value="number1"></tween>圈币</p>
  <p v-if="this.$store.state.wealth_out"><span :class="{animated:true,nomargin:true,rubberBand2:this.$store.state.swi[4]}">有钱任性</span></p>
  <p v-if="!this.$store.state.wealth_out"><span :class="{animated:true,nomargin:true,fadeIn:opashow1}" style="color:#fff">大概是我太忙</span></p>
  <p v-if="!this.$store.state.wealth_out"><span :class="{animated:true,nomargin:true,rubberBand2:this.$store.state.swi[4]}">我还没发出过圈币</span></p>
</div>
<div :class="{animated:true,getquanbi:true,fadeIn:this.$store.state.swi[4]}">
    <p v-if="this.$store.state.wealth_in">共收到<tween :class="{animated:true,big:true,opashow:opashow2}" :value="number2"></tween>圈币</p>
    <p v-if="this.$store.state.wealth_in"><span :class="{animated:true,nomargin:true,rollIn2:this.$store.state.swi[4]}">就喜欢拆红包的感觉</span></p>
    <p v-if="!this.$store.state.wealth_in"><span :class="{animated:true,nomargin:true,fadeIn:opashow2}">我还没有收到过圈币</span></p>
    <p v-if="!this.$store.state.wealth_in"><span :class="{animated:true,nomargin:true,rollIn2:this.$store.state.swi[4]}" style="color:#fff">土豪在哪，我要和你们做朋友</span></p>
</div>
<img src="./../assets/redbag.png" class="redbag mymove1">
<img src="./../assets/five.png" :class="{five:true,animated:true,fadeIn6:this.$store.state.swi[4]}">
<p :class="{tishi:true,animated:true,fadeIn6:this.$store.state.swi[4]}">每天坚持签到赚圈币</p>
</div>
</template>
<script>
    import tween from './tween'
    export default ({
        props: ['propsfive'],
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
            propsfive: function() {
                this.number1 = 0;
                this.number2 = 0;
                this.opashow1 = false;
                this.opashow2 = false;
                clearTimeout(this.time);
                this.animation();
                var m = this;
                setTimeout(function(){
                    m.number1 = m.$store.state.wealth_out;
                    m.opashow1 = true;
                }, 1800);
                setTimeout(function() {
                    m.number2 = m.$store.state.wealth_in;
                    m.opashow2 = true;
                }, 4000)
            }
        },
        mounted: function() {},
        methods: {
            animation: function() {
                var me = this;
                me.$store.state.swi = [];
                setTimeout(function() {
                    me.$store.state.swi = [];
                    me.$store.state.swi[4] = true;
                }, 1000)
            },
        }
    })

</script>
<style scoped>
    .opashow {
        opacity: 1;
    }
    
    .getquanbi {
        position: absolute;
        top: 9.2rem;
        width: 100%;
    }
    .nomargin{
      margin:0!important;
    }
    .getquanbi>p {
        padding-right: .6rem;
        text-align: right;
    }
    
    .redbag {
        position: absolute;
        display: block;
        width: 5.48rem;
        top: 2.64rem;
        left: .84rem;
    }
    
    .five {
        position: absolute;
        display: block;
        width: .27rem;
        top: 2.26rem;
        left: 3.87rem;
        z-index: 99;
    }
    
    p.tishi {
        position: absolute;
        width: 100%;
        top: 2.09rem;
        left: 0;
        padding-left: 4.26rem;
        text-align: left;
        font-size: .24rem;
        line-height: .33rem;
        color: #F8E71C;
        white-space: pre-wrap;
    }

</style>
