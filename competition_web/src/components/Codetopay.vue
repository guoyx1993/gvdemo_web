<template>
<!--     <div v-if="comfirmMessage">
 -->		<!-- 绑定支付宝弹框 -->
    <div v-if="comfirmMessage">
		<!-- 扫码支付弹框 -->
    	<div class="confirm-box codetopay">
		    <div class="relative">
		    	<div class="close" @click="closeConfirm"></div>
		    	<div>
		    	    <!-- <div>
		    	    	<img src="./../image/sure-text.png">
		    	    </div> -->
		    	    <div class="img"><img src="./../image/wechat-code.png" alt=""></div>
		    		<div class="user-btn" style="margin-top:35px;">
		    		    <!--支付完成-->
						<div  class="payend" @click="closeConfirm">
							<img src="./../image/pay21.png">
						</div>
		    		    <!--放弃支付-->
						<div  class="save payup" @click="closeConfirm">
							<img src="./../image/pay23.png">
						</div>
					</div>
		    	</div>
		    </div>
		</div>
		<!-- 遮罩层 -->
		<div class="mask-box"></div>
    </div>	
</template>
<script>
	export default{
		data:function(){
			return {
                user:{},
                isWechatBox:false //是否显示微信绑定层
			}
		},
		computed: {
		    comfirmMessage() {
		        return this.$store.state.comfirmMessage;
		    }
		},
		watch: {
		  comfirmMessage(val) {
		    this.comfirmMessage = val;
		  }
		},
		methods:{
			//关闭弹框
			closeConfirm(){
				this.$store.state.comfirmMessage ='';
			}
		}
	}
</script>