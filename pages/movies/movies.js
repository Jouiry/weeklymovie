Page({
  data: {
    WeeklyMovieList:[
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒",
        imagePath: "/images/titanic.jpg",
        isHighlyRecomment: false,
        id: 1
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecomment: true,
        id: 2
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影",
        imagePath: "/images/jiaofu.jpg",
        isHighlyRecomment: true,
        id: 3
      }
    ],
    currentIndex: 1
  },

  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.WeeklyMovieList.length - 1
    })
  },

  f0: function (event) {
    this.setData({
      currentIndex: this.data.WeeklyMovieList.length - 1
    })  
  },

  f1: function (event) {
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  }
})