<template>
    <transition name = "change_identity">
    <div id="out_box" v-if="this.$store.state.changeI" @click = "disapear" @touchmove.stop>
        <div id="box" @click.stop>
            <div id="title">常用名人
                <img id="close" src="../assets/close.png" alt="" @click = "disapear">
            </div>
                <div id="identity_scroll">
                    
                <div id="identity" v-for = "(item,index) in 20">
                        <div id="img">   
                            <img class="imgs" src="../assets/pikaqiu.png" alt="" @click = "select_identity(index)">
                                <div id="gou_box" v-if="gou1[index]">
                                    <img src="../assets/gou.png" alt="">
                                </div>
                        </div>
                        
                    <div id="name">aweier</div>
                </div>
                </div>
        </div>
        <div id="queren" @click.stop = "queren" @touchstart = "scale" @touchend = "scale" :class = "{_scale:scale1}">确认</div>
    </div>
    </transition>
</template>

<script>
    export default {
        props: ['changeI'],
        data() {
            return {
                scale1: false,
                gou1: [],
            }
        },
        mounted: function() {
            this.gou_init();
            console.log(this.gou1)
        },
        methods: {
            select_identity: function(index) {
                this.gou1 = [];
                this.gou1[index] = true;
                //save index
            },
            disapear: function() {
                this.$store.state.changeI = false;
            },
            gou_init: function() {
                for (let i = 0; i < 20; i++) {
                    this.gou1[i] = false;
                }
            },
            queren: function() {

                //                this.$store.state.changeI = false;
            },
            scale: function() {
                this.scale1 = !this.scale1;
            }
        }
    }

</script>

<style scoped>
    #gou_box {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);
        position: absolute;
        top: 0;
        left: 0;
    }
    
    #gou_box>img {
        width: .4rem;
        height: .4rem;
        position: absolute;
        top: .4rem;
        left: .4rem;
    }
    
    #queren {
        display: block;
        position: absolute;
        width: 4rem;
        height: .88rem;
        color: #fff;
        line-height: .88rem;
        font-size: .32rem;
        border-radius: .44rem;
        text-align: center;
        background: linear-gradient(left, #01C3FF, #777DFA);
        background: -webkit-linear-gradient(left, #01C3FF, #777DFA);
        border: none;
        left: 1.75rem;
        top: 11.2rem;
        outline: none;
        transition: all .2s;
    }
    
    #identity_scroll {
        overflow: auto;
        max-height: 85%;
    }
    
    #identity {
        display: inline-block;
        width: 1.2rem;
        height: 1.7rem;
        /*        border: 1px solid white;*/
        margin-left: 4.8%;
        margin-top: 3%;
    }
    
    #img {
        width: 1.2rem;
        height: 1.2rem;
        background-color: white;
        border-radius: 4px;
        overflow: hidden;
        border: 2px solid #F8E81C;
        position: relative;
    }
    
    .imgs {
        width: 1.2rem;
        height: 1.2rem;
    }
    
    #name {
        font-size: .24rem;
        margin: 0 auto;
        margin-top: .1rem;
        text-align: center;
        color: #F8E81C;
    }
    
    #close {
        float: right;
        width: .34rem;
        margin-right: .14rem;
        transition: all .2s;
    }
    
    #title {
        color: #00E2FD;
        margin: 0 auto;
        text-align: center;
        margin-top: 0.38rem;
        margin-left: 0.34rem;
        margin-bottom: .2rem;
        font-size: 0.32rem;
    }
    
    #box {
        position: absolute;
        left: .55rem;
        top: 1rem;
        width: 85.3%;
        height: 9.28rem;
        border: 1px solid #00E2FD;
        background: #4951E2;
        overflow: hidden;
    }
    
    #out_box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: rgba(0, 0, 0, .7);
    }
    
    ._scale {
        transform: scale(.95, .95);
        -webkit-transform: scale(.95, .95);
    }
    
    .change_identity-enter-active,
    .change_identity-leave-active {
        transition: all .5s;
    }
    
    .change_identity-enter,
    .change_identity-leave-to {
        opacity: 0;
    }

</style>
