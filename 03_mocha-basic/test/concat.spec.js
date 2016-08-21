var should = chai.should();
describe('Test concat function', function() {
    it('test simple concat basic', function () {
        var result = concat('hello', 'world');
        result.should.be.equal('helloworld');
    });

    it('concat with a number', function () {
        var result = concat(2, 30);
        result.should.be.equal('230');
    })
});