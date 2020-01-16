Page({
    data: {

    },

    onLoad: function(options) {
        this.setData({
            mid: options.id
        })

        var that = this

        wx.request({
            url: 'https://api.douban.com/v2/movie/subject/1291841?apikey=0df993c66c0c636e29ecbb5344252a4a',

            success:function(res) {
                console.log(res)
                that.setData({
                    movie: res.data
                })
            }

            
        })

        
    }
})