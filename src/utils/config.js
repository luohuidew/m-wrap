/* 测试的环境还要在goods与ship的api中去修改写死的url地址 */
let yide;
if (process.env.NODE_ENV === 'development') {
    // dev
    yide = 'http://dev-api.middleware.weget.com/';
    // yide = 'https://weget.dev/';

    // BASE_API = 'http://app.weget.pzjhw.com:8088/wap/';
} else if (process.env.VUE_APP_TITLE === 'testing') {
    // testing
    yide = 'http://dev-api.middleware.weget.com/';
} else {
    // build
    yide = 'https://app.weget.com/';
    // yide = 'https://weget.dev/';
}
export let GO_LANG = yide;
