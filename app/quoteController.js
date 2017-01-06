angular.module('quote')
    .controller('quoteController', ['$scope', 'quoteService', function ($scope, quoteService) {
        $scope.quote = {
            'quoteAuthor': 'Buddha', 
            'quoteText': 'Peace comes from within. Do not seek it without.'
        };

        $scope.getQuote = function () {
            quoteService.getQuote()
                .then(
                    function (result) {
                        $scope.quote = {
                            'quoteAuthor': result.data.quoteAuthor,
                            'quoteText': result.data.quoteText
                        };
                    }, 
                    function (error) {
                        $scope.quote = {
                            'quoteAuthor': '',
                            'quoteText': 'Could not get Quote'
                        };
                    }
                );
        };
    }]);
