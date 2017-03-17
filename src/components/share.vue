<template>
<transition name="sharedh">
  <div class="share" @touchmove.stop>
    <div class="share_content animated bounceInUp71">
          <p class="shareTo">分享页面至</p>
          <img src="./../assets/close.png" :class="{close:true,active:active6}" @touchstart="f_touch($event)" @touchend="f_touch($event)" @click="close" data-name="close">
          <ul id="share"  @click="share($event)" @touchstart="f_touch($event)" @touchend="f_touch($event)">
              <li data-name="WEIXIN" class="animated bounceInUp72"><img src="./../assets/weichat.png" data-name="WEIXIN" :class="{active:active1}"><span data-name="WEIXIN">微信</span></li>
              <li data-name="WEIXIN_CIRCLE" class="animated bounceInUp73"><img src="./../assets/friend.png" data-name="WEIXIN_CIRCLE" :class="{active:active2}"><span data-name="WEIXIN_CIRCLE">朋友圈</span></li>
              <li data-name="QQ" class="animated bounceInUp74"><img src="./../assets/qq.png" data-name="QQ" :class="{active:active3}"><span data-name="QQ">QQ</span></li>
              <li data-name="QZONE" class="animated bounceInUp75"><img src="./../assets/qzone.png" data-name="QZONE" :class="{active:active4}"><span data-name="QZONE">空间</span></li>
              <li data-name="SINA" class="animated bounceInUp76"><img src="./../assets/weibo.png" data-name="SINA" :class="{active:active5}"><span data-name="SINA">微博</span></li>
          </ul>
    </div>
</div>
</transition> 
</template>
<script>
  export default({
    data(){
      return{
        active1:false,active2:false,active3:false,active4:false,active5:false,active6:false,
      }
    },
    mounted:function(){
    },
    methods:{
      share:function(event){
        event.preventDefault();
        var n=event.target.dataset.name;
        var u=location.href;
        if(init){
          bri.callHandler('shareToThird',{'platform':n,'title':'名朋荣誉殿堂出来啦！','text':'亲，看看是否有你哟！','targetUrl':u}, function(responseData) {
          })
        }
      },
      f_touch:function(event){
          switch(event.target.dataset.name){
              case 'WEIXIN':
              this.active1=!this.active1;
              break;
              case 'WEIXIN_CIRCLE':
              this.active2=!this.active2;
              break;
              case 'QQ':
              this.active3=!this.active3;
              break;
              case 'QZONE':
              this.active4=!this.active4;
              break;
              case 'SINA':
              this.active5=!this.active5;
              break;
               case 'close':
              this.active6=!this.active6;
              break;
          }
      },
      close:function(){
        this.$store.state.share=false;
      },
    }
  })
</script>
<style scoped>
  .share{
    position: absolute;
    height:100%;
    width:100%;
    background: rgba(0,0,0,.7);
    bottom:0;
    z-index:9999;
  }
  .share_content{
    width:100%;
    height:3.6rem;
    background: #4951E2;
    position: absolute;
    bottom:0;
    left:0;
    border-radius:.08rem;
    border: 1px solid #00E2FD;
    overflow:hidden;
  }
  .close{
    position: absolute;
    display: block;
    width:.4rem;
    top:.53rem;
    left:6.63rem;
  }
  .sharedh-enter-active,
  .sharedh-leave-active {
    transition: all .5s;
  }
  
  .sharedh-enter,
  .sharedh-leave-to {
    opacity: 0;
  }
  .shareTo{
    width:100%;
    text-align: center;
    font-size:.32rem;
    margin-top:.6rem;
    color:#00E2FD;
  }
  .share ul{
    width:100%;
    margin-top: .51rem;
    overflow:hidden;
  }
  .share li{
    width:20%;
    float: left;
    padding:0 4%;
    list-style: none;
  }
  .share li>img{
    display: block;
    width:100%;
  }
  .share span{
    display: block;
    width:100%;
    margin:0;
    text-align: center;
    font-size: .28rem;
    line-height: 1;
    color: #FFFFFF;
    margin-top:.3rem;
  }
  li>img.active,.close.active{
    transform:scale(.95,.95);
    -webkit-transform:scale(.95,.95);
  }
</style>