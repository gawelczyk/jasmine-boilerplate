// TODO: class Bottega.Models.Range

Motorola.Models.Range = (function () {
    var Range = function Range(start, end) {
        this.start = start;
        this.end = end;
    }

    Range.prototype.include = function (val) {
        return ((this.start < val ) && (this.end > val));
    }

    Range.prototype.length = function (val) {
        return this.end - this.start;
    }

    Range.prototype.intersectsWith = function (otherRange) { // => true
        if ((this.end < otherRange.start && this.end < otherRange.end) || (this.start > otherRange.start && this.start > otherRange.end)) {
            return false;
        }
        return true;
    }

    return Range;
})
();

