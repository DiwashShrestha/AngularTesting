describe(' In quote service ',function(){
	var $httpBackend = null;
	var quoteService = null;
	beforeEach(function(){
		module('quote');
		inject(function(_$httpBackend_,_quoteService_){
			$httpBackend = _$httpBackend_;
			quoteService = _quoteService_;
		});
	});

	it(' when call is successful ',function(){
		$httpBackend.whenJSONP('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=JSON_CALLBACK&lang=en').respond(200,'');
		$httpBackend.expectJSONP('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=JSON_CALLBACK&lang=en');
		quoteService.getQuote();
		$httpBackend.flush();
	});
    
});