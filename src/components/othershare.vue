<template>
<transition name="othershare">
	<div class="share_content"  @touchmove.stop>
		<img src="./../assets/close.png" @click="close_share" class="close">
		<div class="weixin_qq" v-show="weixin_qq">
			<img src="./../assets/top.png" class="top">
			<p>点击右上角分享</p>
		</div>
		<div class="other" v-show="other">
			<img src="./../assets/bottom.png" class="bottom">
			<p>点击下方工具栏分享</p>
		</div>
	</div>
	</transition>
</template>
<script>
	export default({
		data(){
			return{
				other:false,
				weixin_qq:false,
			}
		},
		mounted:function(){
			var ua=navigator.userAgent;
			if(ua.match(/MicroMessenger/i) || ua.replace(/MQQBrowser/i,'').match(/QQ/i)){
				this.weixin_qq=true;
			}else{
				this.other=true;
			}
		},
		methods:{
			close_share:function(){
				this.$store.state.othershare=false;
			},
		},
	})
</script>
<style scoped>
  .othershare-enter-active,
  .othershare-leave-active {
    transition: all .5s;
  }
  
  .othershare-enter,
  .othershare-leave-to {
    opacity: 0;
  }
	.share_content{
		width:100%;
		height:100%;
		position: absolute;
		top:0;
		left:0;
		background: rgba(0,0,0,.7);
		z-index:1000;
	}
	.top{
		float:right;
		margin-top:1.5rem;
		margin-right:.8rem;
	}
	.weixin_qq>p{
		float:left;
		width:100%;
		text-align: center;
		color:#fff;
		font-size:.42rem;
		margin-top:.3rem;
	}

	.bottom{
		position: absolute;
		bottom:.3rem;
		left:50%;
		margin-left:-.2rem;
	}
	.other>p{
		position: absolute;
		bottom:2.3rem;
		width:100%;
		text-align: center;
		font-size:.42rem;
		color:#fff;
	}
	.close{
		display: block;
		position: absolute;
		top:.3rem;
		left:50%;
		margin-left:-.4rem;
		width:.8rem;
	}
</style>