describe('In quote controller ', function () {
    var $scope = {};
    var $httpBackend = null;
    beforeEach(function () {
        module('quote');

        inject (function ($controller, _$httpBackend_, $rootScope) {
            $httpBackend = _$httpBackend_;

            $scope = $rootScope.$new();

            $controller('quoteController', { $scope: $scope });

        })
    });
    it ('for successful call', function () {
        var testQuote = {
            'quoteAuthor': 'Buddha', 
            'quoteText': 'Peace comes from within. Do not seek it without.'
        }

        $httpBackend.whenJSONP('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=JSON_CALLBACK&lang=en')
            .respond(200, testQuote);

        $scope.getQuote();        

        $httpBackend.flush();

        expect($scope.quote.quoteAuthor).toEqual('Buddha');
    });
    it(' when the call fails ',function(){
        var testQuote = {
            'quoteAuthor': '',
            'quoteText': 'Could not get Quote'
        };

		$httpBackend.whenJSONP('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=JSON_CALLBACK&lang=en')
            .respond(500, testQuote);
		$scope.getQuote();

		$httpBackend.flush();
		expect($scope.quote.quoteText).toEqual('Could not get Quote');
	});
});