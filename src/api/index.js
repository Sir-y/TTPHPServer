import axios from 'axios'
axios.defaults.baseURL = '../../static/data/'

function banner () {
  return axios.get('banner.json')
}

function icon () {
  return axios.get('Icon.json')
}

function getLiveBroadcast () {
  return axios.get('LiveBroadcast.json')
}

function getFind () {
  return axios.get('Finddata.json')
}

function getStore () {
  return axios.get('getStore.json')
}

function homecontent () {
  return axios.get('homecontent.json')
}

function getStoreList () {
  return axios.get('getStoreList.json')
}

function getStoreNew () {
  return axios.get('getStoreNew.json')
}

function getStoreSales () {
  return axios.get('getStoreSales.json')
}

function getWelfare () {
  return axios.get('Welfare.json')
}

function getCate () {
  return axios.get('cate.json')
}

function getSearch () {
  return axios.get('Search.json')
}

function getWeLook () {
  return axios.get('welook.json')
}

// 商城的热销榜单
function getShoppingMall () {
  return axios.get('ShoppingMall.json')
}
// 商城的好货精选
function getSelected () {
  return axios.get('Selected.json')
}

function getDynamic () {
  return axios.get('dynamic.json')
}

function getDetails () {
  return axios.get('details.json')
}
export {
  banner,
  icon,
  getLiveBroadcast,
  getFind,
  getStore,
  homecontent,
  getStoreList,
  getStoreNew,
  getStoreSales,
  getWelfare,
  getCate,
  getSearch,
  getWeLook,
  getShoppingMall,
  getSelected,
  getDynamic,
  getDetails
}
