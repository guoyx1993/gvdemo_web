<template>
<!--     <div v-if="comfirmMessage">
 -->		<!-- 绑定支付宝弹框 -->
    <div v-if="comfirmMessage">
    	<div class="confirm-box bindalipay deposit-toalipay">
		    <div class="relative">
		    	<div class="close" @click="closeConfirm"></div>
		    	<div class="box">
		    	    <!-- <div>
		    	    	<img src="./../image/sure-text.png">
		    	    </div> -->
		    	    <!--输入框-->
		    	    <div class="form-input">
		    	        <input type="text" placeholder="请输入您的支付宝账户">
		    	    </div>
		    	    <div class="form-input">
		    	        <input type="text" placeholder="请输入您的真实姓名">
		    	    </div>
		    	    <p class="bind-p">请填写<span>18215611651</span>即将收到的验证码</p>
		    	    <div class="form-input form-code">
		    	        <input type="text" placeholder="请输入验证码">
		    	        <span class="code">获取验证码</span>
		    	    </div>		    	    
		    		<div class="user-btn" style="margin-top:35px;">
						<div  class="save" @click="closeConfirm">
							<img src="./../image/save-btn-text.png">
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