<template>
    <!-- 登录 -->
	<div class="user-bg-big">
		<competiton-header headerFix='false'></competiton-header>
		<div class="inner clearfix">
		    <!--之前login-->
<!-- 			<div class="user-left">
				<p class="bar-title">登录</p>
				<div class="user-form">
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">手机号码</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" name="mobile" v-model="mobile" type="text" placeholder="请输入你的手机号码">
					</div>
					<p class="title">
					    <span class="tag-icon"></span>
						<span class="user-item">密码</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" name="password" v-model="password" type="password" placeholder="请输入你的密码">
					</div>
					<div class="user-btn">
						<div  class="save" @click="login">
							<img src="./../../image/save-btn-text.png">
						</div>
					</div>
				</div>
			</div> -->
			<!--登录中间内容区-->
			<div class="login-in-box">
                  <div class="left login-in-banner">
					<swiper :options="swiperOptionSimple">
				        <swiper-slide><div class="img"><img src="./../../image/login-in9.png"></div></swiper-slide>
				        <swiper-slide><div class="img"><img src="./../../image/login-in9.png"></div></swiper-slide>
			            <div class="swiper-pagination" slot="pagination"></div>
					</swiper>                  
                    <!-- <img src="./../../image/login-in9.png" alt=""> -->
                  </div>
                  <div class="left login-in-r">
                       <div class="login-layer">
                           <h3 class="title">竞联赛登录</h3>
                           <!--手机号-->
                           <div class="form form-count">
                               <span class="count-icon"></span><input class="count" name="count" v-model="mobile" type="text" placeholder="请输入您的手机号">
                           </div>
                           <!--密码-->
                           <div class="form form-pawd">
                               <span class="pawd-icon"></span><input class="pawd" name="pawd" v-model="password" type="password" placeholder="请输入您的密码">
                           </div>
                           <div class="server">
                               <span class="check-to" @click='isAgree'>
                                   <img v-if="isAgreeD" src="./../../image/login-in6.png" alt="">
                                   <img v-if="!isAgreeD" src="./../../image/login-in5.png" alt="">
                               </span>
                               <span class="agree">同意并遵守</span>
                               <span class="color">《服务条款》</span>
                               <span class="hint-layer" v-if="message" v-text="message"></span>
                           </div>
                           <!--登陆按钮-->
                           <div class="login-btn" @click="login"><img style="margin-top: 12px" src="./../../image/login-l.png" alt=""></div>
                           <div class="login-other">
                               <span>还没有账号?</span>
                               <router-link to="/login-set">
                                   <span class="color">免费注册</span>
                               </router-link>
                               <router-link to="/forget-pawd" class="right">
                                   <span class="color">忘记密码?</span>
                               </router-link>
                           </div>
                       </div>
                  </div>
			</div>
		</div>
		<competiton-footer class="footer"></competiton-footer>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				mobile:'',
				password:'',
				message:'',
				isAgreeD : false,
				info : "登录成功", //登录成功返回的信息
			    swiperOptionSimple:{
			    	pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay: 2000
			    },				
			}
		},
		computed:{
		    swiper() {
		        return this.$refs.mySwiper.swiper;
		    }			
		},

		methods:{
			// login(){
			// 	this.$http.post("api/user/login", {
			// 	    mobile: this.mobile,
			// 	    password: this.password
			// 	}).then(
		 //    		respose=>{
		 //    			//成功后显示列表
		 //    			if(!respose.data.code){
   //                          window.localStorage.t = respose.data.data.auth_token;
   //                          location.href="/#/user";
		 //    			}
		 //    		}
		 //        );
			// },
			login:function(){

				var that = this;
				//先判断账户密码是否为空值，是否阅读条款
				if(this.mobile == ''){
                    that.message = "账户不能为空!";
				}else if(this.password == ''){
			        that.message = "密码不能为空!";
				}else if(!this.isAgreeD){
					that.message = "需同意服务条款!";
				}else{
					//请求接口并操作,发生错误看状态判断提示信息
					this.$http.post("api/user/login",{
						mobile:this.mobile,
						password:this.password
					}).then(function(resule){

                        if(resule.data.info == that.info){
                        	//储存
                        	window.localStorage.t = resule.data.data.auth_token;
                        	location.href="/#/user";
                        }
						console.log(resule.data.info);
					}).catch(function(e){
                            console.log(e);
                        	//账户或者密码不正确
                        	//that.message = "账户或者密码错误!";
                       
					});					
				}


			},
			test:function(){
				this.$http.get("api/noticelist").then(function(resule){
                    console.log(resule);
				});
			},
			//是否同意条款
			isAgree:function(){
                this.isAgreeD = !this.isAgreeD;
			}
		}
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>