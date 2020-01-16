Page({
    data: {

    },

    onLoad: function(options) {
        this.setData({
            mid: options.id
        })

        var that = this

        wx.request({
            url: 'https://api.douban.com/v2/movie/subject/' + options.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a',

            header: {
                "content-type": "json"
            },

            success:function(res) {
                //console.log(res)
                if(res.statusCode == 200) {
                    that.setData({
                        movie: res.data
                    })
                }
            }

            
        })

        
    }
})