

(function (isNode) {
    var chai, add;

    if (isNode) {
        chai = require('chai');
        add = require('../js/add.js');
    } else {
        add = window.add;
        chai = window.chai;
    }

    chai.should();
    describe('Test add function', function() {
        it('test simple add basic', function () {
            var result = add(2, 1);
            result.should.be.equal(3);
        });

        it('add with a string', function () {
            var result = add(2, 'kerker');
            result.should.be.equal(2);
        })
    });

}(typeof module !== 'undefined' && module.exports));

