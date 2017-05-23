// Let's make a Cat constructor!
var totalWeight = 0,
    count = 0;

var Cat = (function(name, weight) {
    if (!name && !weight) {
        throw "error";
    } else {
        this._name = name;
        this._weight = weight;

        count++;
        totalWeight += this._weight;

        Object.defineProperty(this, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
        });
        Object.defineProperty(this, "weight", {
            get: function() {
                return this._weight;
            },
            set: function(value) {
                totalWeight = totalWeight - this._weight + value;
                this._weight = value;
            },
        });
    }

});

Cat.averageWeight = function() {
    return count > 0 ? totalWeight / count : 0;
};
