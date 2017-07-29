<template>
    <!--忘记密码-->
	<div class="login-bg user-bg-big">
	    <!--公用头部-->
		<competiton-header headerFix='false'></competiton-header>
		<!--内容区-->
		<div class="inner clearfix">
		    <div class="login-set">
                <div class="title">
                    <img src="./../../image/login-set4.png" alt="">
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
                    	    <input type="text" placeholder="请输入您要设置的密码">
                    	</div>
                    </div>
                    <div class="item ly-code">
                    	<p>再次输入密码:</p>
                    	<div class="ly-input">
                    	    <input type="text" placeholder="请再次输入密码">
                    	</div>
                    </div>
                    <!--按钮-->
                    <div class="login-set-btn">
                        <span class="to-set">
                            <img src="./../../image/login-set6.png" alt="">
                        </span>
                        <span class="to-login">
                            <img src="./../../image/login-set7.png" alt="">
                        </span>
                    </div>
                </div>
		    </div>
		</div>
		<!--公用尾部-->
		<competiton-footer class="footer"></competiton-footer>	    
	</div>
</template>
<script>
    import competitonFooter from './../../components/Footer'
	export default{
		data:function(){
			return{
		
			}
		},
		components:{competitonFooter},
		mounted:function(){
			
		},
		methods:{
			
		}
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>