<template>
    <div v-if="comfirmMessage">
		<!-- 提现信息弹框 -->
    	<div class="confirm-box deposit-confirm">
		    <div class="relative">
		    	<div class="close" @click="closeConfirm"></div>
		    	<div>
		    	    <!-- <div>
		    	    	<img src="./../image/sure-text.png">
		    	    </div> -->
		    	    <p class="confirm-info" v-html="comfirmMessage"></p>
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