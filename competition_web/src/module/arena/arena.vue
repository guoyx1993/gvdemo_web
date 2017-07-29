<template>
	<div :class="classify+'-bg'">
	    <competiton-header headerFix='true'></competiton-header>
	    <div class="game-header">
	        <div class="inner clearfix">
	        	<div v-for="(tab,idx) in tabList" :class="{'class-active':tab.ischeck}" @click="gameTab(tab,idx)">
	        	   <p v-if="!tab.ischeck"><img :src="tab.img | url"></p>
	        	   <p v-if="tab.ischeck"><img :src="tab.imgCheck | url"></p>
		    	   <span v-text="tab.name"></span>
		    	</div>
	        </div>
	    </div>
	    <div class="inner clearfix">
	    	<div class="match-left"> 
    			<div class="task-box arena-bar clearfix">
    			    <div>
    			    	<router-link to="/" class="home-bar">
			    			<img src="./../../image/home-icon.png">
		    			</router-link>
    			    </div>
    			    <div  class="second-menu-bar">
    			        <router-link to="/" class="home-arrow">
				    		<img src="./../../image/home-arrow.png">
				    	</router-link>
	    			  	<router-link :to="'/match/'+classify">王者荣耀</router-link>
    			    </div>
    			    <div>
    			    	<router-link :to="'/match/'+classify">
				    		<img src="./../../image/second-arrow.png">
				    	</router-link>
    			    </div>
    			  <div style="margin-left:15px;">无敌银河战队的擂台赛房间</div>
    			</div>  
	    	    <div class="sports-team-detail clearfix">
    				<div class="left team-head">
    					<img src="./../../image/rank-no.png">
    				</div>
    				<div class="left" style="width:678px;">
    				    <div class="team-title-bar clearfix">
    				    	<p class="team-tit left">无敌银河战队</p>
    					    <p class="win-percent right"><img src="./../../image/win-percent.png">我的胜率：50%</p>
    				    </div>
    				    <div class="color-grey" style="margin-bottom:30px;">发布时间：6-29 12:00</div>
    					<div class="clearfix left">
    						<img src="./../../image/team-dot.png" class="left">
    						<div class="left team-result">
    							<p><span class="team-item">战术风格：</span><span>稳健运营</span></p>
    							<p>
	    							<span class="team-item">历史战绩：</span>胜：<span class="c-num-red marR16">3</span>
	    							平：<span class="marR16">3</span>
	    							负：<span class="c-number-blue">3</span>
    							</p>
    							<p><span class="team-item">累计战绩：</span><span>63</span></p>
    						</div>
    						<img src="./../../image/team-dot.png" class="left" style="margin-left:40px;">
    						<div class="left team-result">
    							<p><span class="team-item">累计场次：</span><span>650场</span></p>
    							<p>
	    							<span class="team-item">累计收益：</span>
	    							<span>63  </span>
	    							<span class="diamonds-enter" style="vertical-align: -7px;"></span>
    							</p>
    							<p><span class="team-item">累计收益：</span><span>63</span></p>
    						</div>
    					</div>
    					<div>
    						
    						<p class="result-history-detail" >查看历史战绩  <span class="more-right"></span></p>
    					</div>
    				</div>
    			</div>
    			<div class="challenge-result-bg">
				    <p>
				        <!-- <img src="./../../image/challenge-success.png"> -->
				        <img src="./../../image/challenge-fail.png">
				    </p>
					<p style="margin-top:-25px;">
						<!-- <img src="./../../image/congratulations-text.png"> -->
						<img src="./../../image/fail-text.png">
					</p>
					<!-- <div class="lineup-challenger-me" style="margin:15px auto;text-align:left;">
				        <span class="head-border-process2">
		    	        	<img src="./../../image/person.png">
		    	        </span>	
				    	<span class="challenge-name" style="margin-right:8px;">无敌银河战队</span>
				    	<span class="color-red font13">(挑战者)</span>
				    	<span class="challenge-name" style="margin-left:8px;">赢得了比赛</span>
				    </div> -->
				    <div class="lineup-challenger-fail" style="margin:15px auto;text-align:left;">
				        <span class="head-border-process2">
		    	        	<img src="./../../image/person.png">
		    	        </span>	
				    	<span class="challenge-name" style="margin-right:8px;">无敌银河战队</span>
				    	<span class="color-blue1 font13">(擂主)</span>
				    	<span class="challenge-name" style="margin-left:8px;">赢得了比赛</span>
				    </div>
				    <!-- <p class="result-gold">您将获得5<img style="vertical-align:middle;" src="./../../image/diamonds.png">到您的账户</p> -->
				    <!-- <p class="result-desc">双方实力势均力敌，幸运女神眷顾着你，祝你赢得了比赛！</p> -->
				    <p class="result-desc" style="margin-top:60px;">双方实力势均力敌，可惜运气不在你这边，再接再厉！</p>
				    <p class="result-desc" style="margin-top:17px;">当前胜率：<span class="c-number-blue">60%</span><span>12胜利</span><span>10负</span></p>
				</div>
				<div class="see-process-bar">查看过程<span class="icon-open"></span></div>
    			<div class="tit-bg-big" v-if="challengeState == 2">
					<span class="tit-chinese">对拼过程</span>
				    <span class="tit-eng">THE EVENT</span>
				</div>
				<div v-if="challengeState == 2" class="challenge-process task-box">
					<div class="challenge-team clearfix">
					    <div class="lineup-challenger">
					    	<span class="color-blue1 font13">(擂主)</span>
					    	<span class="challenge-name" style="margin-left:8px;margin-right:40px;">无敌银河战队</span>
					    	<span class="head-border-process1">
			    	        	<img src="./../../image/person.png">
			    	        </span>	
					    </div>
					    <div class="challenger-center"><img src="./../../image/competition-icon.png"></div>
					    <div class="lineup-challenger-me">
					        <span class="head-border-process2">
			    	        	<img src="./../../image/person.png">
			    	        </span>	
					    	<span class="challenge-name" style="margin-right:8px;">无敌银河战队</span>
					    	<span class="color-red font13">(挑战者)</span>
					    </div>
					</div>
					<div class="center">
						<img src="./../../image/start-pk.png" style="margin-bottom:35px;">
					</div>
					<div class="porcess-list">
						<div>
							<ul class="porcess-list-data" id="porcess-list-data">
								<li class="clearfix">
								    <div class="left bar" style="height: 50px;margin-top: 20px;">
								    	<span class="new-icon" style="top:-2px;"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right special-process">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！哈哈哈哈哈哈
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right special-process">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
								<li class="clearfix">
								    <div class="left bar">
								    	<span class="new-icon"></span>
								    </div>
								    <div class="desc right">
								    	<p>MCLS拿到了厂长的一血!<span class="process-time color-grey">(11'1)</span></p>
										<span>
											<span class="process-name">MCLS</span>从对方野区绕到背后，<span class="process-name">小虎</span>这边立刻传送到中路三角草丛！形成了包夹阵型，<span class="process-name">香锅锅</span>拿到一血！
										</span>
								    </div>
								</li>
							</ul>
						</div>
					</div>
					<div class="process-btn">
						<img src="./../../image/process-text.png">
					</div>
				</div>
    			<div class="tit-bg-big">
					<span class="tit-chinese">对拼阵容</span>
				    <span class="tit-eng">THE EVENT</span>
				</div>
				<div class="match-lineup clearfix task-box">
					<div class="left">
					    <div class="lineup-number">
					    	<img src="./../../image/lineup-challenger.png" v-if="challengeState == 1">
					    	<img src="./../../image/lineup-challenger-blue.png" v-if="challengeState == 2">
					    </div>
					    <div class="lineup-summary">
					    	<p>
					    	    <span class="fight-icon"></span>
						    	<span>总战力</span>
						    	<span class="color-blue1">2632.2</span>
					    	</p>
						    <p class="summary-money">
						        <span class="summary-icon"></span>
							    <span>总花费</span>
							    <span class="color-red">200万</span>
						    </p>
					    </div>
					</div>
					<div class="left" style="margin-left:20px;">
						<div class="lineup-person clearfix">
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
									<span class="person-tag">
										<img src="./../../image/icon-lineup1.png">
									</span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup2.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup3.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup4.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup5.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
						</div>
					</div>
				</div>
				<div class="match-lineup clearfix task-box" v-if="challengeState == 2">
					<div class="left">
					    <div class="lineup-number">
					    	<img src="./../../image/lineup-challenger-me.png">
					    </div>
					    <div class="lineup-summary">
					    	<p>
					    	    <span class="fight-icon"></span>
						    	<span>总战力</span>
						    	<span class="color-blue1">2632.2</span>
					    	</p>
						    <p class="summary-money">
						        <span class="summary-icon"></span>
							    <span>总花费</span>
							    <span class="color-red">200万</span>
						    </p>
					    </div>
					</div>
					<div class="left" style="margin-left:20px;">
						<div class="lineup-person clearfix">
							<div>
								<p class="lineup-person-bg" @click="showLineupBox">
								    <img src="./../../image/person.png">
									<span class="person-tag">
										<img src="./../../image/icon-lineup1.png">
									</span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup2.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup3.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup4.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
							<div class="line-dot-active">··········</div>
							<div>
								<p class="lineup-person-bg">
								    <img src="./../../image/person.png">
								    <span class="person-tag">
								    	<img src="./../../image/icon-lineup5.png">
								    </span>
									<span class="lineup-person-name">张三</span>
								</p>
								<p class="state-line-active"></p>
							</div>
						</div>
					</div>
				</div>
				<div class="tit-bg-big">
					<span class="tit-chinese">挑战记录</span>
				    <span class="tit-eng">THE EVENT</span>
				</div>
				<div class="challenge-record task-box">
					<ul>
				    	<li class="record-item clearfix">
					    	<div class="column1">
					    	    <p>
					    	        <span class="color-blue1 font13">(擂主)</span>
					    	    	<span class="challenge-name" style="margin-left:8px;">无敌银河战队</span>
					    	    </p>
					    	</div>
					    	<div class="challengeer1">
					    		<span class="head-border-challenge">
				    	        	<img src="./../../image/person.png">
				    	        </span>	
					    	</div>
					    	<div class="column-score">
					    	    1
					    	</div>
					    	<div class="vs"></div>
					    	<div class="column-score">
					    	    2
					    	</div>
					    	<div class="challengeer2">
					    		<span class="head-border-challenge">
				    	        	<img src="./../../image/person.png">
				    	        </span>	
					    	</div>
					    	<div class="column6 relative">
					    	    <span class="challenge-name" style="margin-right:8px;">无敌银河战队</span>
					    	    <span class="color-red font13">(挑战者)</span>
					    	</div>
					    	<div class="win"></div>
					    </li>
					    <li class="record-item clearfix">
					    	<div class="column1 relative">
					    	    <div class="win-l"></div>
					    	    <p>
					    	        <span class="color-blue1 font13">(擂主)</span>
					    	    	<span class="challenge-name" style="margin-left:8px;">无敌银河战队</span>
					    	    </p>
					    	</div>
					    	<div class="challengeer1">
					    		<span class="head-border-challenge">
				    	        	<img src="./../../image/person.png">
				    	        </span>	
					    	</div>
					    	<div class="column-score">
					    	    3
					    	</div>
					    	<div class="vs"></div>
					    	<div class="column-score">
					    	    2
					    	</div>
					    	<div class="challengeer2">
					    		<span class="head-border-challenge">
				    	        	<img src="./../../image/person.png">
				    	        </span>	
					    	</div>
					    	<div class="column6">
					    	    <span class="challenge-name" style="margin-right:8px;">无敌银河战队</span>
					    	    <span class="color-red font13">(挑战者)</span>
					    	</div>
					    </li>
				    </ul>
				</div>
	    	</div>
	    	<div class="match-right">
		    	<div class="task-box launch-arena">
		    		<img  class="number-img" src="./../../image/accpet-text-before.png">
		    		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		    		<img  class="number-img" src="./../../image/accpet-text-after.png">
		    		<span class="arena-number">26</span>
		    		<p class="color-t"  style="margin-top:14px;" v-if="challengeState == 1">还可以挑战6次</p>
		    		<p class="color-t"  style="margin-top:14px;" v-if="challengeState == 2">其中6人挑战成功</p>
		    		<p style="margin-top:40px;">
		    		    <img src="./../../image/win-text.png" style="vertical-align:-2px;">
		    		    <span class="arena-num">5</span>
		    		    <span class="diamonds-enter"></span>
		    		</p>
		    		<div v-if="challengeState == 1" class="enter-btn" @click="startChallenge">
		    		20 <span class="diamonds-enter"></span>挑战
		    		</div>
		    		<div v-if="challengeState == 2" class="challengeing-btn">
		    		</div>
		    	</div>
		    	<div class="task-box">
		    		<div class="tit-bg">
						<span class="tit-chinese">数据对比</span>
					    <span class="tit-eng">THE EVENT</span>
					</div>
					<div class="challenge-data">
						<ul>
							<li class="clearfix">
							    <div class="challenge-score-left">10</div>
							    <div class="challenge-data-process">
							    	<span class="process-blue" style="width:60%;"></span>
							    </div>
							    <div class="challenge-cen"></div>
							    <div class="challenge-center">
							    	<span class="challenge-type"><span class="font10">击杀</span></span>
							    </div>
								<div class="challenge-data-process">
									<span class="process-red" style="width:30%;"></span>
								</div>
								<div class="challenge-score-right">50</div>
							</li>
							<li class="clearfix">
							    <div class="challenge-score-left">10</div>
							    <div class="challenge-data-process">
							     	<span class="process-blue" style="width:90%;"></span>
							    </div>
							    <div class="challenge-cen"></div>
							    <div class="challenge-center">
							    	<span class="challenge-type"><span class="font10">进攻</span></span>
							    </div>
								<div class="challenge-data-process">
									<span class="process-red" style="width:100%;"></span>
								</div>
								<div class="challenge-score-right">16</div>
							</li>
							<li class="clearfix">
							    <div class="challenge-score-left">10</div>
							    <div class="challenge-data-process">
							    	<span class="process-blue" style="width:60%;"></span>
							    </div>
							    <div class="challenge-cen"></div>
							    <div class="challenge-center">
							    	<span class="challenge-type"><span class="font10">防御</span></span>
							    </div>
								<div class="challenge-data-process">
									<span class="process-red" style="width:30%;"></span>
								</div>
								<div class="challenge-score-right">50</div>
							</li>
							<li class="clearfix">
							    <div class="challenge-score-left">10</div>
							    <div class="challenge-data-process">
							    	<span class="process-blue" style="width:60%;"></span>
							    </div>
							    <div class="challenge-cen"></div>
							    <div class="challenge-center">
							    	<span class="challenge-type"><span class="font10">助攻</span></span>
							    </div>
								<div class="challenge-data-process">
									<span class="process-red" style="width:30%;"></span>
								</div>
								<div class="challenge-score-right">50</div>
							</li>
							<li class="clearfix">
							    <div class="challenge-score-left">10</div>
							    <div class="challenge-data-process">
							    	<span class="process-blue" style="width:60%;"></span>
							    </div>
							    <div class="challenge-cen"></div>
							    <div class="challenge-center">
							    	<span class="challenge-type"><span class="font10">推塔</span></span>
							    </div>
								<div class="challenge-data-process">
									<span class="process-red" style="width:30%;"></span>
								</div>
								<div class="challenge-score-right">50</div>
							</li>
						</ul>
					</div>
		    	</div>
		    	<div class="task-box">
					<div class="tit-bg">
						<span class="tit-chinese">挑战列表</span>
					    <span class="tit-eng">THE EVENT</span>
					</div>
					<div class="clearfix sign-list">
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-box">
							<img src="./../../image/person.png">
						</div>
						<div class="sign-number">301</div>
					</div>
				</div>
				<div class="match-special">
					<img src="./../../image/speical.jpg">
					<div class="speical-info">
						<p class="speical-tit">LPL夏季赛</p>
						<p class="speical-tit-small">新手免费训练赛</p>
						<p class="go-btn-white"></p>
					</div>
				</div>
	    	</div>
	    </div>
	    <competiton-footer class="footer"></competiton-footer>
        <lineup :isShowLineupBox="isShowLineupBox" @getChildMess='listenToConfirm'></lineup>
	</div>
</template>
<script>
    import './../../plugins/scroll/jquery.mCustomScrollbar.css'
	import Lineup from './../../components/Lineup'
	import Ranking from './../../components/Ranking'
	//加入支持滚轮功能
	require("jquery-mousewheel");
	//自定义滚动条
	require("malihu-custom-scrollbar-plugin");
	export default{
		data:function(){
			return{
				isShowLineupBox:false, //是否显示阵容弹框,默认不显示
				challengeState:1, //挑战状态：1：未开始挑战 2：挑战中
				classify:this.$route.params.class,
                tabList:[{
                	name:'竞猜',
                	img:'game-class1.png',
                	imgCheck:"game-class1-active.png",
                	ischeck:true
                },{
                	name:'虚拟竞技赛',
                	img:'game-class2.png',
                	imgCheck:"game-class2-active.png",
                	ischeck:false
                },{
                	name:'真实互动赛',
                	img:'game-class3.png',
                	imgCheck:"game-class3-active.png",
                	ischeck:false
                }]
			}
		},
		components:{Lineup},
		mounted:function(){ 
			window.scrollTo(0,0);//页面跳转时在顶部
	    },
		methods:{
		    startChallenge(){
		    	this.challengeState = 2;
		    	this.$nextTick(function () {
			        setTimeout(function(){
			    		$("#porcess-list-data").mCustomScrollbar({
							autoDraggerLength:true //自动调节滚动条高度
						});
			    	},0)
			    })
		    },
		    showLineupBox(){
		    	this.isShowLineupBox =true;
		    	window.scrollTo(0,200);//打开弹框时显示弹框顶部
		    },
		    //获取布阵组件返回来的组件显示状态
		    listenToConfirm(isShow){ 
	            this.isShowLineupBox = isShow;
	        }
		},
		//本地图片显示过滤
        filters: {
            url: function (url) {
                return require("./../../image/"+url);
            }
        }
	}
</script>
<style lang="less">
	@import url('./arena.less');
</style>