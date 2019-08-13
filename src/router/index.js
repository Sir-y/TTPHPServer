import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Store from '@/components/store/Store'
import Live from '@/components/Live/Live'
import Me from '@/components/me/Me'

import HomeContent1 from '@/components/home/Homecontent/HomeContent1'
import HomeContent2 from '@/components/home/Homecontent/HomeContent2'
import HomeContent15 from '@/components/home/Homecontent/HomeContent15'
// 直播
import Popular from '@/components/live/LiveBroadcast/Popular'
import Dressing from '@/components/live/LiveBroadcast/Dressing'
import Beautymakeup from '@/components/live/LiveBroadcast/Beautymakeup'
import Page1 from '@/components/store/components/StoreLists/page1'

// 首页-跳转-图墙导航
import Item01 from '@/components/home/Homecontent/components/Hctop/components/wallList/Item01'

// 分类
import cate from '@/components/cate/cate'
import alls from '@/components/cate/goods/alls'
import soles from '@/components/cate/goods/soles'
import news from '@/components/cate/goods/news'

// import Search from '@/components/home/components/HomeTop/components/Search'

// 搜索框
import Search01 from '@/common/Search'

// 购物车
import ShopCart from '@/components/shop/ShopCart'
// 商城页好物精选
import SuperGoods from '@/components/store/components/StoreTops/Home/Home'
import ShoppingMall from '@/components/store/components/StoreTops/ShoppingMall/ShoppingMall'
import Bottling from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Bottling'
import Dress from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Dress'
import Jacket from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Jacket'
import Life from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Life'
import Suit from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Suit'
import Matching from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Matching'
import Beauty from '@/components/store/components/StoreTops/ShoppingMall/Shopping/Beauty'

// 详情页
import dynamic01 from '@/components/cate/dynamic'
// 详情页
import Detail from '@/components/home/Homecontent/components/Hctop/components/wallList/Detail'

// 直播详情页
import coverView from '@/components/live/livePages/coverView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coverView',
    name: 'coverView',
    component: coverView
  },
  {
    path: '/SuperGoods',
    name: 'SuperGoods',
    component: SuperGoods
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/ShoppingMall',
    name: 'ShoppingMall',
    component: ShoppingMall,
    children: [{
      path: '',
      name: 'Dress',
      component: Dress
    },
    {
      path: 'Jacket',
      name: 'Jacket',
      component: Jacket
    },
    {
      path: 'Bottling',
      name: 'Bottling',
      component: Bottling
    },
    {
      path: 'Suit',
      name: 'Suit',
      component: Suit
    },
    {
      path: 'Life',
      name: 'Life',
      component: Life
    },
    {
      path: 'Matching',
      name: 'Matching',
      component: Matching
    },
    {
      path: 'Beauty',
      name: 'Beauty',
      component: Beauty
    }
    ]
  },
  {
    path: '/ShopCart',
    name: 'ShopCart',
    component: ShopCart
  },
  {
    path: '/Search01',
    name: 'Search01',
    component: Search01
    // children: [{
    //   path: '/',
    //   name: 'Search01',
    //   component: Search01
    // }]
  },
  {
    path: '/cate',
    name: 'cate',
    component: cate,
    children: [{
      path: 'alls',
      name: 'alls',
      component: alls
    },
    {
      path: 'soles',
      name: 'soles',
      component: soles
    },
    {
      path: 'news',
      name: 'news',
      component: news
    },
    {
      path: '/',
      name: 'alls',
      component: alls
    }
    ]
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    name: 'Page1',
    path: '/Page1',
    component: Page1
  },
  {
    path: '/live',
    name: 'Live',
    component: Live,
    children: [{
      path: '',
      name: 'Popular',
      component: Popular
    },
    {
      path: 'Dressing',
      name: 'Dressing',
      component: Dressing
    },
    {
      path: 'Beautymakeup',
      name: 'Beautymakeup',
      component: Beautymakeup
    }
    ]
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/HomeContent1',
    name: 'HomeContent1',
    component: HomeContent1
  },
  {
    path: '/HomeContent2',
    name: 'HomeContent2',
    component: HomeContent2,
    children: [{
      path: 'Item01/:id',
      name: 'Item01',
      component: Item01
    }]
  },
  {
    path: '/HomeContent15',
    name: 'HomeContent15',
    component: HomeContent15
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: dynamic01
  }

  ]
})
