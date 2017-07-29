<template>
    <div v-if="comfirmMessage">
		<!-- 提现到支付宝弹框弹框 -->
    	<div class="confirm-box deposit-toalipay">
		    <div class="relative">
		    	<div class="close" @click="closeConfirm"></div>
		    	<div class="box">
		    	    <!-- <div>
		    	    	<img src="./../image/sure-text.png">
		    	    </div> -->
		    	    <!--
		    	    <p class="confirm-info" v-html="comfirmMessage"></p>
		    	    -->
		    	    <!--可提现数量-->
		    	    <div class="alerynum">
		    	        <span class="color">可提现数量:</span>
		    	        <span class="tomoney">9600</span>
		    	        <span class="icon"></span>
		    	        <span class="money">(约 <em>96</em> 元人民币)</span>
		    	    </div>
		    	    <!--输入框-->
		    	    <div class="form-input">
		    	        <input type="text" placeholder="请输入您要提现的金额">
		    	    </div>
		    	    <div class="rule">
		    	        <p>兑换比例:1金币 = ￥0.01,最低提现金额为15元</p>
		    	        <p>本平台免费提现到您的支付宝账户,申请提现后1-3个工作日到账</p>
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
<!-- <style lang="less">
    @import url('./../module/common/variables.less');
</style> -->
<style lang="less" scoped>
	@baseUrl:"./../image/";
	@deposit-bg11:"deposit-bg11.png";
	@deposit5:"deposit5.png";
/*	.deposit-toalipay{ 
		width: 424px;
		height: 389px;
	    background: url("@{baseUrl}@{deposit-bg11}") no-repeat;
	    .close{
	    	top:-28px;
	    	right: -35px;
	    }
	    .box{
	    	width: 368px;
	    	margin:0 auto;
	    }
	    span{
	    	display: inline-block;
	    }
	    .color{
	    	color: #deb360;
	    	font-size: 12px;
	    }
	    .tomoney{
	    	color: #08b2c9;
	    	font-size: 14px;
	    	font-weight: bold;
	    }
	    .money{
	    	font-size: 12px;
	    	color: #ff6c00;
	    }
	    .icon{
	    	width: 30px;
	    	height: 30px;
	    }
	    em{
	    	font-style: normal;
	    }
	    .alerynum{
	    	margin:58px 0 20px 0;
	    }
	    .form-input{
	    	height: 52px;
	    	line-height: 52px;
	    	width: 368px;
	    	margin:0 auto;
	    	text-align: center;
	    	background: url("@{baseUrl}@{deposit5}") center no-repeat;
	    }
	    input{
	    	background-color: transparent;
		    font-size: 14px;
		    border: none;
		    outline: none;
		    padding-left: 10px;
		    color: #636d72;
		    width: 90%;
	    }
	    .rule{
	    	color: #636d72;
	    	margin-top: 22px;
	    	p{
	    		font-size: 12px;
	    		margin-top: 4px;
	    	}
	    }
	}*/
</style>