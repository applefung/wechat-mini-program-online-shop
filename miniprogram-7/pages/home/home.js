// pages/home/home.js
import{
  getMultiData,
  getGoodsData
}from '../../service/home.js'
const TOP_DISTANCE=10;
Page({

  /**
   * Page initial data
   */
  data: {
    banners:[],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods:{
      'POP': {page: 0, list: []},
      'NEW': {page: 0, list: []},
      'SELL': {page: 0, list: []}
    },
    currentType: 'POP',
    showBacktop: false,
    isFixed: false
  },
  _getMultidata(){
  
  getMultiData().then (res=>{
    //取出輪播圖數據
    const banners=res.data.data.banner.list;
    const recommends=res.data.data.recommend.list;
    console.log(banners)
    //將banners and recommend放到data中
    this.setData({
      banners: banners,
      recommends: recommends
    })
  })
  },
  _getGoodsData(type){
    //獲取頁碼
    const page=this.data.goods[type].page+1;
    //發送網絡請求
    getGoodsData('type',page).then(res=>{
      //取出數據
      const list=res.data.data.list;
      //將數據設置到對應type的list中
      const oldList=this.data.goods[type].list;
      oldList.push(...CSSRuleList)
     //將數據設置到data中的goods中
     const typeKey='goods.$(type).list'
     const pageKey='goods.$(type).page'
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  handleTabClick(event){
    const index=event.detail.index;
    console.log(index);
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //1.請求輪播圖
    this._getMultidata()
    this._getGoodsData('POP')
    this._getGoodsData('NEW')
    this._getGoodsData('SELL')
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  onReachBottom(){
    //下拉加載更多
  },
  onPageScroll(options){
    //取出scrolltop
    const scrolltop=options.scrollTop;
    //修改showBacktop屬性
    this.setData({
      showBacktop: scrolltop>=TOP_DISTANCE
    })
  }
})