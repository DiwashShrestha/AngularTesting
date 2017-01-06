describe('quote module', function () {
    beforeEach(function () {
        browser.get('/index.html');
    });

    it (' should exist heading ', function () {
        expect($('#quoteTitle').getText()).toBe('Quote of the Day');
    });

    it (' quote text and author should exist ', function () {
        expect($('#quoteText').getText()).toBe('Peace comes from within. Do not seek it without.');
        
        expect($('#quoteAuthor').getText()).toBe('Buddha');
    });

    describe ('when button is clicked ', function () {
        var newButton;
        beforeEach(function () {
            newButton = element(by.buttonText('New Quote'));
            newButton.click();
        });

        it (' should get new quote ', function () {
            expect($('#quoteText').getText()).not.toBe('Peace comes from within. Do not seek it without.');
        });
    });
});