module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    // ? 'https://vip.udn.com/newmedia/2020/her_stories/'
    ? 'http://nmdap.udn.com.tw/test/youth_in_remote_area/'
    : '/'
}