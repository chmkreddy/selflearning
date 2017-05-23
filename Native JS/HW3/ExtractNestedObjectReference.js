Object.prototype.hash = function(string) {
    var obj = this;
    var a = string.split(".");
    a.forEach(function(i) {
        if (obj) {
            obj = obj[i];
        }
    });
    return obj;
}
