var sentence = "hello my name is max";

var capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var words = sentence.split(" ").map(capitalize);
console.log(words);
