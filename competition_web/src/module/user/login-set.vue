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
                    	<div class="ly-input"><span>+86</span><input type="text" placeholder="请输入您的手机号码"></div>
                    </div>
                    <div class="item ly-code">
                    	<p>验证码:</p>
                    	<div class="ly-input ly-input-s">
                    	    <input type="text" placeholder="请输入验证码">
                            <span class="right">获取验证码</span>
                    	</div>
                    </div>
                    <div class="item ly-code">
                    	<p>重新设置密码:</p>
                    	<div class="ly-input">
                    	    <input type="password" placeholder="请输入您要设置的密码">
                    	</div>
                    </div>
                    <div class="item ly-code">
                    	<p>再次输入密码:</p>
                    	<div class="ly-input">
                    	    <input type="password" placeholder="请再次输入密码">
                    	</div>
                    </div>
                    <!--同意服务条款-->
                   <div class="server">
                       <span class="check-to">
                           <img src="./../../image/login-in6.png" alt="">
                       </span>
                       <span class="agree">我已阅读并同意</span>
                       <span class="color">《用户注册与服务条款》</span>
                   </div>            
                    <!--按钮-->
                    <div class="login-set-btn">
                        <span class="to-set" @click="loginSetSuccess">
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
		        
			}
		},
		components:{},
		mounted:function(){
			
		},
		methods:{
			loginSetSuccess(){
                this.$store.state.comfirmMessage = "现在可以直接登录，并前往大厅领取<a href='/' style='color:#08b2c9'>新手大礼包</a>哟!"           
            }
		}
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>