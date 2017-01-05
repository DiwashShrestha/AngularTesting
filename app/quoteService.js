angular.module('quote')
    .service('quoteService', ['$http', '$sce', function ($http, $sce) {
        var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en';
        url = $sce.trustAsResourceUrl(url);

        return {
            getQuote: function () {
                $http.jsonp(url, {jsonpCallbackParam: 'jsonp'}); 
        }
    }
}]);