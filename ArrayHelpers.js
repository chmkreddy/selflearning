Array.prototype.square = function() {
 currArray = new Array;
 for(i=0;i<this.length;i++) {
    currArray[i] = Math.pow(this[i],2);
 }
 return currArray;
};

Array.prototype.cube = function() {
currArray = new Array;
 for(i=0;i<this.length;i++) {
    currArray[i] = Math.pow(this[i],3);
 }
 return currArray;
};

Array.prototype.sum = function() {
var sum = 0;
 for(i=0;i<this.length;i++) {
    sum += this[i];
 }
 return sum;
};

Array.prototype.average = function() {
var sum = 0;
 for(i=0;i<this.length;i++) {
    sum += this[i];
 }
 return sum / this.length;
};

Array.prototype.even = function() {
var currArray = new Array;
var arrayIndex = 0
 for(i=0;i<this.length;i++) {
    if (this[i] % 2 == 0) { currArray[arrayIndex] = this[i]; arrayIndex++; }
 }
 return currArray;
};

Array.prototype.odd = function() {
var currArray = new Array;
var arrayIndex = 0
 for(i=0;i<this.length;i++) {
    if (this[i] % 2 == 1) { currArray[arrayIndex] = this[i]; arrayIndex++; }
 }
 return currArray;
};
