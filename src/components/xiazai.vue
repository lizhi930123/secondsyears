<template>
    <div class="container" @touchmove.stop>
        <div id="title">
            <p>
                若您已安装了名人朋友圈
            </p>
            <p>
                请前往app内的<span id="yellow">发现版块</span>参与活动哦~
            </p>
        </div>
            
        <img id="bg" src="../assets/xbg.png" alt="">
        <img id="download_" src="../assets/btn_bg.png" alt="" @click="down">
        <span id="p_download" @click="down">立即下载</span>
        <p id="back_" @click="back">返回</p>
    </div>
</template>

<script>
    export default {
        props: ['propsseven'],
        data() {
            return {
                iphone: '',
                android: '',
            }
        },
        mounted: function() {
            //init
            var me = this;
            me.$http.get("http://www.mrpyq.com/channel/details_json?channel=main").then(
                res => {
                    me.iphone = res.body.iphone;
                    me.android = res.body.android;
                },
                res => {}
            )
        },
        watch: {
            propsseven: function() {
                this.$store.state.showcicle = false;
            }
        },
        methods: {
            down: function() {
                var me = this;
                if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                    window.location = me.iphone;
                } else if (navigator.userAgent.match(/android/i)) {
                    window.location = me.android;
                }
            },
            back: function() {
                this.$store.state.seven = true;
            },
        }
    }

</script>

<style scoped="true">
    #p_download {
        display: block;
        font-size: .32rem;
        position: absolute;
        line-height: .8rem;
        left: 3.1rem;
        top: 9.36rem;
        margin: 0;
        color: white;
    }
    
    #back_ {
        position: absolute;
        left: 3.45rem;
        top: 10.36rem;
        color: #6BCEF7;
        font-size: .28rem;
    }
    
    #download_ {
        display: block;
        position: absolute;
        width: 3.6rem;
        height: .8rem;
        left: 1.95rem;
        top: 9.36rem;
    }
    
    #bg {
        display: block;
        width: 6.8rem;
        margin: 0 auto;
        margin-top: .4rem;
    }
    
    #title {
        width: 5.2rem;
        height: .96rem;
        margin: 0 auto;
        color: white;
        font-size: 0.32rem;
        text-align: center;
    }

</style>
