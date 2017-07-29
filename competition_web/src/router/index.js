import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/module/home/home'
import Discuss from '@/module/discuss/discuss'
import Communication from '@/module/communication/communication'
import Match from '@/module/match/match'
import MatchDetail from '@/module/match/match-detail'
import Arena from '@/module/arena/arena'
import User from '@/module/user/user'
import UserInfo from '@/module/user/user-info'
import Login from '@/module/user/Login'
import Rule from '@/module/rule/rule'   //规则
import NewsDetail from '@/module/news/news-detail'  //新闻详情
import LoginSet from '@/module/user/login-set'  //注册
import ForgetPawd from '@/module/user/forget-pawd'  //忘记密码
//import NewsDetail from '@/module/news/news-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/discuss',
      name: '讨论',
      component: Discuss
    },{
      path: '/communication',
      name: '玩家交流',
      component: Communication
    },{
      path: '/match/:class',
      name: '赛事主页',
      component: Match
    },{
      path: '/match/detail/:id',
      name: '赛事详情',
      component: MatchDetail
    },{
      path: '/arena/:class',
      name: '擂台详情',
      component: Arena
    },{
      path: '/user/',
      name: '个人中心',
      component: User
    },{
      path: '/user-info/',
      name: '个人资料',
      component: UserInfo
    },{
      path: '/Login/',
      name: '登录',
      component: Login
    },{
      path: '/rule',
      name: '规则',
      component: Rule      
    },{
      path: '/news/detail/:id',
      name: '新闻详情',
      component: NewsDetail      
    },{
      path: '/login-set',
      name: '注册',
      component: LoginSet      
    },{
      path: '/forget-pawd',
      name: '忘记密码',
      component: ForgetPawd      
    }
  ]
})
