<template>
    <!--注册-->
	<div class="login-bg user-bg-big">
	    <!--公用头部-->
		<competiton-header headerFix='false'></competiton-header>
		<!--内容区-->
		<div class="inner clearfix">
		    <div class="login-set">
                <div class="title">
                    <img src="./../../image/login-set3.png" alt="">
                </div>
                <div class="login-set-ly">
                    <div class="item ly-phone">
                    	<p>你绑定的手机号:</p>
                    	<div class="ly-input"><span>+86</span><input type="text" name="count" v-model="mobile" placeholder="请输入您的手机号码"></div>
                    </div>
                    <div class="item ly-code">
                    	<p>验证码:</p>
                    	<div class="ly-input ly-input-s">
                    	    <input type="text" name="code" v-model="code" placeholder="请输入验证码">
                            <span class="right" @click="sendCode">获取验证码</span>
                    	</div>
                    </div>
                    <div class="item ly-code">
                    	<p>重新设置密码:</p>
                    	<div class="ly-input">
                    	    <input type="password" name="pawd" v-model="password" placeholder="请输入您要设置的密码">
                    	</div>
                    </div>
                    <div class="item ly-code">
                    	<p>再次输入密码:</p>
                    	<div class="ly-input">
                    	    <input type="password" name="pawd2" v-model="password2" placeholder="请再次输入密码">
                    	</div>
                    </div>
                    <!--同意服务条款-->
                   <div class="server">
                       <span class="check-to" @click='isAgree'>
                           <img v-if="isAgreeD" src="./../../image/login-in6.png" alt="">
                           <img v-if="!isAgreeD" src="./../../image/login-in5.png" alt="">
                       </span>
                       <span class="agree">我已阅读并同意</span>
                       <span class="color">《用户注册与服务条款》</span>
                       <!--提示信息-->
                       <span class="hint-layer" v-if="message" v-text="message"></span>
                   </div>            
                    <!--按钮-->
                    <div class="login-set-btn">
                        <span class="to-set" @click="loginSet">
                            <img src="./../../image/login-set6.png" alt="">
                        </span>
                        <span class="to-login">
                            <router-link to='/login' style="display: block;">
                                <img src="./../../image/login-set7.png" alt="">
                            </router-link>
                        </span>
                    </div>
                </div>
		    </div>
		</div>
        <!--公用尾部-->
        <competiton-footer class="footer"></competiton-footer>      
		<!--注册成功弹窗-->
        <confirm-login></confirm-login>
	</div>
</template>
<script>
    //import ConfirmLogin from './../../components/Confirm-loginset'
	export default{
		data:function(){
			return{
		        mobile : "",
                password : "",
                password2 : "",
                code : "",
                type : 1,  //注册类型的短信接口
                message : '', //提示信息
                isAgreeD : false ,//是否同意条款,默认否
                successInfo : "用户注册成功"
			}
		},
		components:{
            
        },
		mounted:function(){
			
		},
		methods:{
            //是否同意条款
            isAgree:function(){
                this.isAgreeD = !this.isAgreeD;
            },            
            //注册成功弹窗
			loginSetSuccess(){
                this.$store.state.comfirmMessage = "现在可以直接登录，并前往大厅领取<a href='/' style='color:#08b2c9'>新手大礼包</a>哟!"           
            },
            //发送验证码
            sendCode:function(){
                var that = this;
                this.message = '';
                this.$http.post("api/sendcode",{
                    mobile : this.mobile,
                    type : this.type
                }).then(function(resule){

                    //根据返回信息看是否发送成功，可在按钮处增加用户体验
                    //that.message = resule.data.info; 
                    console.log(resule.data.info);
                    
                }).catch(function(e){
                    that.message = "发送验证码失败!";
                });
            },
            //立即注册
            loginSet:function(){
                var that = this;

                //判断操作
                if(this.mobile == ""){
                    that.message = '手机号不能为空!'
                }else if(this.password == "" || this.password2 == ""){
                    that.message = "密码不能为空!"
                }else if(this.password != this.password2){
                    that.message = '两次输入的密码不一致';
                }else if(!this.isAgreeD){
                    that.message = "请阅读注册协议和条款!"
                }else{                   
                    this.$http.post("api/user/register",{
                        mobile : this.mobile,
                        password : this.password,
                        code : this.code
                    }).then(function(resule){
                        //如果注册成功,跳弹窗
                        if(resule.data.info == successInfo){
                            this.$store.state.comfirmMessage = "现在可以直接登录，并前往大厅领取<a href='/' style='color:#08b2c9'>新手大礼包</a>哟!"                           
                        }
                    }).catch(function(error){  

                        if(error.response){
                            console.log(error.response.data.info);
                            that.message = error.response.data.info;
                        }else{
                            //一些错误是在设置请求时触发的
                            console.log('Error',error.message);
                        }
                    });
                }
            }
		}
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>