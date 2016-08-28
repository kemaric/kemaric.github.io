(function(){
    var firebaseURL = "https://kemario.firebaseio.com";
    'use-strict'
    angular.module('MySite', ['ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBEp4bBzxYeALu6UbWtYKci8cGIp6dQOqk',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
})();
