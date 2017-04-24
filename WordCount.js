function countWords(str) {
var words = str.match(/\S+/g)
return words ? words.length : 0;
}
