'use strict';

var Cylinder = {
    getVolume: function (radius, height) {
        var baseArea = Math.PI * radius * radius;
        var perimeter = 2 * Math.PI  * radius;
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    }
};

module.exports = Cylinder;