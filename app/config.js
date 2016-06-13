/**
 * Created by Administrator on 2016/1/18.
 */
var publicPath=window.location.host.indexOf("localhost")>-1?"http://cartest.jiaxinmore.com/car":"http://"+window.location.host+"/car";
//var publicPath="http://cartest.jiaxinmore.com/car"

window.global_config={
    login:publicPath+"/api/user/login",
    chkOldTradePwd:publicPath+"/api/userInfo/chkOldTradePwd"
}

