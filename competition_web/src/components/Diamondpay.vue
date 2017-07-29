<template>
<!--  v-if="comfirmMessage"
 -->    <div v-if="comfirmMessage">
		<!-- 钻石充值弹框 -->
    	<div class="confirm-box diamondpay">
		    <div class="relative">
		    	<div class="close" @click="closeConfirm"></div>
		    	<div class="box">
                    <!--充值方式-->
		    	    <div class="pay-way">
		    	        <span class="text">充值方式:</span>
		    	        <span class="alipay pay">
		    	           <!-- <img src="./../image/pay12.png" alt="">-->
		    	        </span>
		    	        <span class="wechat pay">
		    	            <!--<img src="./../image/pay9.png" alt="">-->
		    	        </span>
		    	        <i></i>
		    	    </div>
		    	    <!--选择金额-->
		    	    <div class="changemoney">
		    	        <p class="text">选择金额:</p>
                        <div class="newer">
                            <img src="./../image/pay1.png" alt="">
                        </div>
                        <ul>
                        	<li class="on">
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        	<li>
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        	<li>
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        	<li>
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        	<li>
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        	<li>
                        	    <img class="meal" src="./../image/pay01.png" alt="">
                        	    <img class="special" src="./../image/pay3.png" alt="">
                        	</li>
                        </ul>
		    	    </div>
		    	    <!--输入框-->
		    	    <div class="form-input">
		    	        <input type="text" placeholder="请输入您要选择的金额">
		    	    </div>
		    		<div class="user-btn" style="margin-top:35px;">
						<div  class="save" @click="closeConfirm">
							<img src="./../image/sure-text.png">
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