<template>
    <!--玩家交流-->
	<div>
	    <competiton-header headerFix="false"></competiton-header>
	    <p>交流什么的</p>
	    <!--测试的div-->
        <ranking></ranking>
        <bet></bet>
        <test></test>
	</div>
</template>
<script type="text/javascript">

    import Ranking from './../../components/Ranking'
    import Bet from './../../components/Bet'
    import Test from './../../components/Test'

    export default{
    	data : function(){
    		return{
    			myMatchShow:false, //我的比赛数据是否显示
				gameOpen:false, //赛事投注情况默认隐藏
    		}
    	},
    	//钩子
    	mounted : function(){},
    	components : {Ranking,Bet,Test},
    	computed : {},
    	methods : {},
    }
</script>
