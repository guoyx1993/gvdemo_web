<template>
    <!-- 个人资料编辑页 -->
	<div class="user-bg-big">
		<competiton-header headerFix='false'></competiton-header>
		<div class="inner clearfix">
			<div class="user-left">
				<p class="bar-title">个人信息设置</p>
				<div class="user-form">
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">选择头像</span>
					</p>
					<p class="bet-btn-radio clearfix relative">
						<span class="game-btn3" @click="toggleHeadBox(true)">选择系统通用</span>
						<span class="game-btn4">上传</span>
						<input type="file" class="file">	
					</p>
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">用户昵称</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="text" placeholder="请输入你想要的昵称" v-model="user.nickname">
					</div>
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">绑定你的支付宝账号</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="text" placeholder="请输入你的支付宝账号" v-model="user.pay">
						<span class="input-unit" style="left:485px;width:106px;" v-if="user.pay" @click="showInput" :class="{'color-user':isShowInput}" v-text="btnText"></span>
					</div>
					<div class="bet-guess-form" v-if="isShowInput">
						<input class="bet-input" type="text" placeholder="请输入你的新的支付宝账号">
					</div>
					<div class="bet-guess-form" v-if="isShowCode">
						<input class="bet-input" type="text" placeholder="请输入验证码">
						<span class="input-unit" style="left:467px;width:124px;">获取验证码</span>
					</div>
					<div  class="notice"><img src="./../../image/notice-icon.png"><span>只需要输入账号用于提现奖金，平台工作人员不会以任何名义向你问取密码</span></div>
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">绑定你的微信账号</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="text" placeholder="请输入你的微信号码">
						<span class="input-unit" style="left:483px;width:108px;">立即绑定</span>
					</div>
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">邀请码</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="text" placeholder="请输入邀请码" v-model="user.code">
					</div>
					<div class="user-btn">
						<div  class="save">
							<img src="./../../image/save-btn-text.png">
						</div>
					</div>
				</div>
			</div>
			<div class="user-right">
				<user-info :isGetUser="isGetUser" @getChildInfo='listenToU'></user-info>
			</div>
		</div>
		<competiton-footer class="footer"></competiton-footer>
		<confirm></confirm>
		<div class="head-select-box" v-if="isShowHeadBox">
		    <div class="relative">
		    	<div class="close" @click="toggleHeadBox(false)"></div>
		    	<div class="head-select">
		    		<p class="title">
						<img src="./../../image/head-select-text.png">
					</p>
					<div class="head-list clearfix">
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div class="head-selected">
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
						<div>
						    <img src="./../../image/head.jpg">
						</div>
					</div>
					<div class="user-btn" style="margin-top:35px;">
						<div  class="save">
							<img src="./../../image/save-btn-text.png">
						</div>
					</div>
		    	</div>
		    </div>
		</div>
		<!-- 遮罩层 -->
	    <div class="mask-box" v-if="isMaskBox"></div>
	</div>
</template>
<script>
    import UserInfo from './../../components/Userinfo'
	export default{
		data:function(){
			return {
                isShowHeadBox:false,//是否显示头像选择层
                isShowInput:false,
                isShowCode:true,
                btnText:"更改账户",
                isGetUser:false,
                isMaskBox:false, //是否显示遮罩层
			}
		},
		components:{UserInfo},
		computed:{
			user(){
				return this.$store.state.user;
			}
		},
		mounted:function(){
			//如果状态中没有用户信息对象才查询否则直接取
			if(!this.user.nickname){
                this.getUserInfo();
			}else{
				this.isGetUser = true;
				if(this.user.pay){
                    this.isShowCode =false;
                }
			}
		},
		methods:{
			//获取子组件的值并处理
			listenToU(boolean){
				this.isMaskBox =boolean;
			},
			toggleHeadBox(boolean){
				this.isShowHeadBox = boolean;
				this.isMaskBox = boolean;
			},
			getUserInfo(){
				this.$http.get("api/user/userinfo").then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.user = respose.data.data;
                            this.$store.state.user = respose.data.data;
                            this.isGetUser = true;
                            if(this.user.pay){
                                this.isShowCode =false;
                            }
		    			}
		    		}
		        );
			},
			showInput(){
				if(this.btnText == '更改账户'){
                    this.isShowInput = true;
	                this.isShowCode =true;
	                this.btnText = '修改账户';
				}
			}
		}
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>