function ends_with(){
    let value = "hello there";
    console.log(value.endsWith('f'));
}
function include_value(){
    let value = "hello there, how are you";
    console.log(value.includes("oh"));
}
function index_of(){
    let value = "hello there, how are you";
    console.log(value.indexOf("r"));
    console.log(value.indexOf("r", 10));
    console.log(value.indexOf("r", 19));
}
function last_index_of(){
    let value = "hello there, how are you";
    console.log(value.lastIndexOf('o'));
}
//Returns 1, -1, 0
// 1 if the string is sorted after the compareString
// -1 if the string is sorted before the compareString
// 0 if the two strings are equal
function locale_compare(){
    let string1 = "hello";
    let string2 = "hi";
    console.log(string1.localeCompare(string2)); // -1
    console.log(string2.localeCompare(string1)); // 1
}
//null if not found
function match_string(){
    let text = "The rain in SPAIN stays mainly in the plain"; 
    let result = text.match(/ain/g);
    console.log(result); //[ain, ain, ain]
}
function replace_string(){
    let text = "welcome world";
    console.log("original string = ", text);
    console.log(text.replace("w", "hello")); // replace first found w in string
    console.log(text.replace(/w/g, "hello")); // replace all w in string
}
// difference & similarity; search and indexof
// both return index of first match, case sensitive
// both return -1 in-case not found 
// indexof can take 2nd paramater, index value to start looking after that index
// search method can take regex to search
function search_string(){
    let text = "Mr. Blue has a blue house";
    console.log(text.search(/blue/i));
}
function split_string(){
    let text = "hello there, how are you?";
    console.log(text.split(" ")); // convert string into array
}
function slice_string(){
    let text = "hello there, how are you?";
    console.log(text.slice(4, 2)); // " "
}
function substring_string(){
    let text = "hello there, how are you?";
    console.log(text.substring(4, 2)); //ll 
}
function trim_string(){
    let text = " hey there ";
    console.log("original string=", text);
    console.log(text.trim());
}

