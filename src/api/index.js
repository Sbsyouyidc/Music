import request from "./resquest";
//
export const getHomepage = () => request.get("/banner");
//
export const getRECsongs = () =>
  request.get("/recommend/songs?realIP=116.25.146.177");
//登录
export const getLogin = (phone, captcha) =>
  request.get(
    `/login/cellphone?phone=${phone}&captcha=${captcha}&realIP=116.25.146.177`
  );
//获取验证码
export const sent = (phone) => request.get(`/captcha/sent?phone=${phone}`);
//获取账号信息
export const getaccount = () => request.get(`/user/account`);
//游客登录
export const reqguester = () => request.get("/register/anonimous");
//获取新歌曲
export const reqNewsong = () => request.get("/personalized/newsong");
//获取每日推荐歌单
export const reqPersonalized = () => request.get("/personalized?limit=12");
//获取歌曲url
export const reqSongurl = (id) => request.get(`/song/url?id=${id}`);
//获取歌曲详细
export const reqSongdetail = (id) => request.get(`/song/detail?ids=${id}`);
