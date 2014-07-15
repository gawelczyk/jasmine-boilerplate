// TODO: spec Bottega.Models.Range

describe("Range", function () {
    var range1, Range = Motorola.Models.Range;

    beforeEach(function () {
        range1 = new Range(5, 10);
    })

    describe("intersectsWith()", function () {

        describe("seperate ranges ", function () {
            it("after original range, should return false", function () {
                range1.intersectsWith(new Range(20, 25)).should.equal(false);
            });
            it("before original range, should return false", function () {
                range1.intersectsWith(new Range(1, 4)).should.equal(false);
            });

        });

        describe("intersecting ranges returns true ", function () {
            it("included in original, should return true", function () {
                range1.intersectsWith(new Range(6, 8)).should.equal(true);
            });

            it("original included in new, should return true", function () {
                range1.intersectsWith(new Range(4, 12)).should.equal(true);
            });
        });

        describe("overlaping ", function () {
            it("new on the beggining returns true", function () {
                range1.intersectsWith(new Range(3, 7)).should.equal(true);
            });
            it("new on the end returns true", function () {
                range1.intersectsWith(new Range(7, 12)).should.equal(true);
            });
        });

    });

});