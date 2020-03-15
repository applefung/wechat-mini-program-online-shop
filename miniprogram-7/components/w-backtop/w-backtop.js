// components/w-backtop/w-backtop.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    handleBacktop(){
      wx.pageScrollTo({
          scrollTop: 0
      })
    }
  }
})
