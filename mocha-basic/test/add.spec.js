var expect = chai.expect;
var should = chai.should();
describe('Test add function', function() {
    it('test simple add basic', function () {
        var result = add(2, 1);
        result.should.be.equal(3);
    })
});