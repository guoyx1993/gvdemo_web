<template>
    <!-- 游戏详情页 -->
	<div class="match-banner">
	    <competiton-header headerFix='false'></competiton-header>
	    <div class="controller-match">
	    	<div class="match-bar">
	    		<div class="inner clearfix">
	    		    <!--报名-->
	    			<div v-if="state==1" class="enter-btn left" @click="changeState(2)">20 <span class="diamonds-enter"></span>加入</div>
	    			<!--布阵-->
	    			<div v-if="state==2" class="append-btn left">追加1<span class="diamonds-enter"></span></div>
	    			<!--等待比赛-->
	    			<div v-if="state==3" class="matching-btn left"></div>
	    			<!--成绩结果-->
	    			<div v-if="state==4" class="finish-btn left"></div>
	    			<div class="match-text-icon left"></div>
	    			<div class="match-person right">
	    				<span class="gold-area"><span class="match-gold"></span>51/55</span>
	    				<span class="match-remind">距离比赛开始还有</span>
	    				<countdown endTime="1500081593" :callback="callback" endText="已经结束了"></countdown>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="inner clearfix">
	    		<div class="controller-left left">
	    			<div class="tit-bg-big">
						<span class="tit-chinese">赛事状态</span>
					    <span class="tit-eng">THE EVENT</span>
					</div>
					<div class="match-state">
						<div class="match-state-icon clearfix">
							<div>
							    <p class="sign-active"></p>
								<span class="state-title " :class="{'state-title-checked':state==1}">比赛报名</span>
								<p class="color-blue1 font10" v-if="state==1">进行中</p>
								<p class="arrow-down-blue" v-if="state==1"></p>
							</div>
							<!--中间的线-->
							<div class="line-dot  line-dot-active">····· <span class="state-line-active"></span> ·····</div>
							<div>
								<p :class="{'array-active':state>=2,'array':state<2}"></p>
								<span class="state-title" :class="{'state-title-checked':state==2}">布置阵容</span>
								<p class="color-blue1 font10" v-if="state==2">进行中</p>
								<p class="arrow-down-blue" v-if="state==2"></p>
							</div>
							<div class="line-dot" :class="{'line-dot-active':state>=2}">····· <span :class="{'state-line-active':state>=2,'state-line':state<2}"></span> ·····</div>
							<div>
								<p :class="{'matching-active':state>=3,'matching':state<3}"></p>
								<span class="state-title" :class="{'state-title-checked':state==3}">等待比赛</span>
								<p class="color-blue1 font10" v-if="state==3">进行中</p>
								<p class="arrow-down-blue" v-if="state==3"></p>
							</div>
							<div class="line-dot" :class="{'line-dot-active':state>=3}">····· <span :class="{'state-line-active':state>=3,'state-line':state<3}"></span> ·····</div>
							<div>
								<p :class="{'finish-active':state==4,'finish':state<4}"></p>
								<span class="state-title" :class="{'state-title-checked':state==4}">比赛结果</span>
								<p class="color-blue1 font10" v-if="state==4">进行中</p>
								<p class="arrow-down-blue" v-if="state==4"></p>
							</div>
						</div>
						<div class="rule">
							<img src="./../../image/match-rule.jpg">
							<span class="rule-title">（每场比赛结算的积分为五位选手得分的总和）</span>
							<div class="clearfix rule-list">
								<img class="left" src="./../../image/rule-icon.png" >
								<ul class="left rule-detail">
									<li class="clearfix">
										<span class="left">杀人1(kill)</span>
										<span class="right">+2分</span></li>
									<li class="clearfix">
										<span class="left">死亡1(dead)</span>
										<span class="right">+1.5分</span>
									</li>
									<li class="clearfix">
										<span class="left">助攻1(assist)</span>
										<span class="right">-2分</span>
									</li>
									<li class="clearfix">
										<span class="left">一血</span>
										<span class="right">+2分</span>
									</li>
								</ul>
								<ul class="right rule-detail">
									<li class="clearfix">
										<span class="left">补刀1</span>
										<span class="right">+2分</span></li>
									<li class="clearfix">
										<span class="left">输出伤害1点</span>
										<span class="right">+1.5分</span>
									</li>
									<li class="clearfix">
										<span class="left">承受伤害1点</span>
										<span class="right">-2分</span>
									</li>
									<li class="clearfix">
										<span class="left">推塔1</span>
										<span class="right">+2分</span>
									</li>
								</ul>
								<img class="right" src="./../../image/rule-icon.png" >
							</div>
						</div>
						<div class="rule-btn">
							如何玩
						</div>
					</div>
					<!--等待比赛-->
					<div v-if="state==3">
						<div class="tit-bg-big">
							<span class="tit-chinese">比赛直播</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="match-live">
							<video src="'./../../static/video.mp4" controls="controls">
							</video>
						</div>
					</div>
					<div v-if="state==1 || state==3">
						<div class="tit-bg-big">
							<span class="tit-chinese">引用比赛</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="match-include">
							<ul>
						    	<li class="include-item clearfix" v-for="include in includeMatch.clubs">
							        <div class="star"></div>
							    	<div class="column1">
							    	    <p>
							    	    	<span class="game-name" v-text="include.title"></span>
							    	    </p>
							    	</div>
							    	<div class="column2">
							    	    <p class="game-k">
							    	    	<img :src="include.items[0].logo">
							    	    </p>
							    	    <span class="blod" v-text="include.items[0].name"></span>
							    	</div>
							    	<div class="column4">
							    	    <p class="vs-icon"></p>
							    	    <span class="game-t">{{include.begin_time | time("MM-dd hh:mm",include.begin_time)}}</span>
							    	</div>
							    	<div class="column6">
							    	    <p class="game-we">
							    	    	<img :src="include.items[1].logo">
							    	    </p>
							    	    <span class="blod" v-text="include.items[1].name"></span>
							    	</div>
							    </li>
						    </ul>
						</div>
					</div>
					<div v-if="state!=1">
						<div class="tit-bg-big">
							<span class="tit-chinese">我的阵容</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="match-lineup match-lineup-game clearfix">
							<div class="left">
							    <div class="lineup-number">
							    	<img src="./../../image/lineup1.png">
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
								    <div :class="{'game-btn1':state!=2,'game-btn3':state==2}" @click="showLineupBox">修改阵容</div>
							    </div>
							</div>
							<div class="left">
								<div class="lineup-person clearfix">
									<div>
										<p class="lineup-person-bg">
										    <img src="./../../image/person.png">
											<span class="person-tag">
												<img src="./../../image/icon-lineup1.png">
											</span>
											<span class="lineup-person-name">张三</span>
										</p>
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
									</div>
								</div>
								<div class="lineup-result" v-if="state==4">
								    <div>
									    <strong>阵容总得分：</strong>
									    <span class="color-blue1">25663分</span>
									</div>
									<div class="lineup-c">
									    <strong>阵容创造收益：</strong>
									    <span class="color-blue1">25663分<span class="diamonds-first"></span></span>
									</div>
									<div class="lineup-r">
									    <strong>我的排名：</strong>
									    <span class="color-blue1">第9名</span>
									</div>
								</div>
							</div>
						</div>
						<div class="match-lineup match-lineup-game clearfix">
							<div class="left">
							    <div class="lineup-number">
							    	<img src="./../../image/lineup2.png">
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
								    <div :class="{'game-btn1':state!=2,'game-btn3':state==2}" @click="showLineupBox">修改阵容</div>
							    </div>
							</div>
							<div class="left">
								<div class="lineup-person clearfix">
									<div>
										<p class="lineup-person-bg">
										    <img src="./../../image/person.png">
											<span class="person-tag">
												<img src="./../../image/icon-lineup1.png">
											</span>
											<span class="lineup-person-name">张三</span>
										</p>
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
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
										<p class="state-line-active" v-if="state!=4"></p>
										<p class="state-line-score" v-if="state==4">2265分</p>
									</div>
								</div>
								<div class="lineup-result" v-if="state==4">
								    <div>
									    <strong>阵容总得分：</strong>
									    <span class="color-blue1">25663分</span>
									</div>
									<div class="lineup-c">
									    <strong>阵容创造收益：</strong>
									    <span class="color-blue1">25663分<span class="diamonds-first"></span></span>
									</div>
									<div class="lineup-r">
									    <strong>我的排名：</strong>
									    <span class="color-blue1">第9名</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--比赛结束-->
					<div v-if="state==4">
						<div class="tit-bg-big">
							<span class="tit-chinese">比赛数据</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="match-data clearfix">
							<table cellspacing="0" cellpadding="0">
							    <thead>
							    	<tr class="thead">
							    		<td style="margin-right:30px;" @mouseenter="showColBg(0)"  @mouseleave="hideColBg">选手</td>
							    		<td @mouseenter="showColBg(1)" @mouseleave="hideColBg">名称</td>
							    		<td @mouseenter="showColBg(2)" @mouseleave="hideColBg">位置</td>
							    		<td @mouseenter="showColBg(3)" @mouseleave="hideColBg">队伍</td>
							    		<td @mouseenter="showColBg(4)" @mouseleave="hideColBg">总分</td>
							    		<td @mouseenter="showColBg(5)" @mouseleave="hideColBg">场均分</td>
							    		<td style="width:52px" @mouseenter="showColBg(6)" @mouseleave="hideColBg">参赛场次</td>
							    		<td @mouseenter="showColBg(7)" @mouseleave="hideColBg">杀人(2)</td>
							    		<td @mouseenter="showColBg(8)" @mouseleave="hideColBg">死亡(-1)</td>
							    		<td @mouseenter="showColBg(9)" @mouseleave="hideColBg">助攻(1.5)</td>
							    		<td @mouseenter="showColBg(10)" @mouseleave="hideColBg">补刀(0.01)</td>
							    		<td @mouseenter="showColBg(11)" @mouseleave="hideColBg">输出伤害(0.0002)</td>
							    		<td @mouseenter="showColBg(12)" @mouseleave="hideColBg">承受伤害(0.0001)</td>
							    		<td @mouseenter="showColBg(13)" @mouseleave="hideColBg">推塔(0.5)</td>
							    		<td @mouseenter="showColBg(14)" @mouseleave="hideColBg">一血(1.5)</td>
							    	</tr>
						    	</thead>
								<tr class="data-column">
								    <span class="data-line-bottom"></span>
									<td style="margin-right:20px;">
									<img class="data-person-blue" src="./../../image/person.png">
									</td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>
								<tr class="data-column">
								    <span class="data-line-bottom"></span>
								    <span class="data-line-top"></span>
									<td style="margin-right:20px;"><img class="data-person-blue" src="./../../image/person.png"></td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>
								<tr class="data-column">
								    <span class="data-line-top"></span>
									<td style="margin-right:20px;"><img class="data-person-blue" src="./../../image/person.png"></td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>
								<tr class="data-column">
								    <span class="data-line-bottom-red"></span>
									<td style="margin-right:20px;">
									<img class="data-person-red" src="./../../image/person.png">
									</td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>
								<tr class="data-column">
								    <span class="data-line-bottom-red"></span>
								    <span class="data-line-top-red"></span>
									<td style="margin-right:20px;"><img class="data-person-red" src="./../../image/person.png"></td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>
								<tr class="data-column">
								    <span class="data-line-top-red"></span>
									<td style="margin-right:20px;"><img class="data-person-red" src="./../../image/person.png"></td>
									<td>pertt</td>
									<td>上单</td>
									<td>JAG</td>
									<td>80.5</td>
									<td>60.563</td>
									<td style="width:52px">3</td>
									<td style="width:40px">11</td>
									<td style="width:45px">3</td>
									<td style="width:49px">11</td>
									<td style="width:56px">3</td>
									<td style="width:94px">11</td>
									<td style="width:94px">43520</td>
									<td style="width:49px">110052</td>
									<td style="width:49px">3</td>
								</tr>	
							</table>
							<div class="sel" :style="colPosition"></div>
						</div>
					</div>
	    		</div>
	    		<div class="controller-right right">
	    			<div class="task-box">
						<div class="tit-bg">
							<span class="tit-chinese">赛事奖金</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="clearfix match-rank">
							<div class="left">
								<p class="match-head2">
									<img src="./../../image/rank-no.png">
								</p>
								<p class="color-blue" v-if="state==4" v-text="rankList[0].name"></p>
								<p class="color-score" v-if="state==4" v-text="rankList[0].score+'分'"></p>
								<span class="c-pei match-timer-small">20</span><span class="diamonds-normal"></span>
							</div>
							<div class="left">
								<p class="match-head1">
									<img src="./../../image/rank-no.png">
								</p>
								<p class="color-blue" v-if="state==4" v-text="rankList[1].name"></p>
								<p class="color-score" v-if="state==4" v-text="rankList[1].score+'分'"></p>
								<span class="c-pei match-timer">20</span><span class="diamonds-first"></span>
							</div>
							<div class="left">
								<p class="match-head3">
									<img src="./../../image/rank-no.png">
								</p>
								<p class="color-blue" v-if="state==4" v-text="rankList[2].name"></p>
								<p class="color-score" v-if="state==4" v-text="rankList[2].score+'分'"></p>
								<span class="c-pei match-timer-small">20</span><span class="diamonds-normal"></span>
							</div>
						</div>
						<div class="anal-money">
							<div class="clearfix">
								<span class="c-pei left">当前总奖金:</span>
								<span class="money right">￥7000</span>
							</div>
						</div>
						<div class="anal-tit-small color-blue">前50%有奖</div>
						<ul class="ranking-list-detail">
							<li v-for="(rank,idx) in rankList" v-if="idx>2">
							    <span v-if="idx<9" :class="{'rank':state<4,'rank-finish':state==4}">第<span class="color-blue r-rank">{{idx+1}}</span>名</span>
							    <span v-if="idx>=9" :class="{'rank-last':state<4,'rank-last-finish':state==4}">第<span class="color-blue r-rank">{{idx+1}}</span>名</span>
							    <span class="color-blue r-name" v-if="state==4" v-text="rank.name"></span>
								<span class="match-rank-score" v-if="state==4" v-text="rank.score+'分'"></span>
								<span class="match-rank-score" v-if="state<4">暂无分数</span>
								<span class="c-pei right">{{rank.gold}}<span class="diamonds-normal"></span></span>
							</li>
						</ul>
					</div>
					<div class="task-box">
						<div class="tit-bg">
							<span class="tit-chinese">报名列表</span>
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
	    </div>
	    <competiton-footer class="footer"></competiton-footer>
	    <lineup :isShowLineupBox="isShowLineupBox" @getChildMess='listenToConfirm'></lineup>
	</div>
</template>
<script>
	import Countdown from './../../components/Countdown'
	import Lineup from './../../components/Lineup'
	export default{
		data:function(){
			return{
				matchBanner:require("./../../image/match-banner.jpg"),
				state:1, //1.报名 2.布阵 2.等待比赛 3.比赛结果
                rankList:[{
                	name:'大时代插曲',
                	score:2665,
                	gold:18
                },{
                	name:'大曲',
                	score:2225,
                	gold:15
                },{
                	name:'大时g',
                	score:2225,
                	gold:13
                },{
                	name:'大时代插曲',
                	score:2225,
                	gold:1
                },{
                	name:'锅煽曲',
                	score:2225,
                	gold:1
                },{
                	name:'大时',
                	score:225,
                	gold:1
                },{
                	name:'大时代插曲',
                	score:25,
                	gold:1
                },{
                	name:'大时代插曲',
                	score:5,
                	gold:1
                },{
                	name:'大时插曲',
                	score:5,
                	gold:1
                },{
                	name:'大时代插曲',
                	score:4,
                	gold:1
                }],
                isShowLineupBox:false, //是否显示阵容弹框,默认不显示
                colLeft:[37,88,124,156,190,225,272,334,383,439,498,563,665,771,829],
                colPosition:{},
                includeMatch:{}
			}
		},
		components:{Lineup,Countdown},
		mounted:function(){ 
		    window.scrollTo(0,0);//页面跳转时在顶部
		    //this.getMatchDetail();
	    },
		methods:{
			showLineupBox(){
		    	this.isShowLineupBox =true;
		    	window.scrollTo(0,200);//打开弹框时显示弹框顶部
		    },
		    //获取布阵组件返回来的组件显示状态
		    listenToConfirm(isShow){ 
	            this.isShowLineupBox = isShow;
	        },
	        callback(){},
		    showColBg(idx){
		    	var _this =this;
	    		var event = event || window.event;
		        var srcEle = event.srcElement||event.target;
		        _this.colPosition = {
		        	left:_this.colLeft[idx]+"px",
		        	width:($(srcEle).width()+5)+"px",
		        	height:$(".match-data").height()+"px"
		        }
		    },
		    hideColBg(){
		    	this.colPosition = {left:0,width:0,height:0}
		    },
		    changeState(state){
		    	this.state = state;
		    },
		    getMatchDetail(){
		    	this.$http.get("api/activity/675").then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.includeMatch = respose.data.data;
                            this.state = respose.data.data.match_status;
		    			}
		    		}
		        );
		    }
		}
	}
</script>
<style lang="less">
	@import url('./match-detail.less');
</style>