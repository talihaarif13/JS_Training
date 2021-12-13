function concat_array(){
    const arr1 = [1, 2, 3, 4];
    const arr2 = [5, 6, 7];
    const arr3 = [9, 4];
    const combine = arr1.concat(arr2, arr3);
    console.log(combine);
}
//every apply on all elemnets of array
function every_array(){
    const ages = [24, 23, 18, 19];
    console.log(ages.every(check_age));
}
function check_age(age){
    return age > 18;
}
//filter return all values passing specific filter/condition 
//find just return first value passing specific filter/condition
function filter_array(){
    const ages = [25, 23, 18, 19];
    const result = ages.filter(check_filters);
    console.log(result);
}
function check_filters(age){
    return age > 18;
}
function for_each(){
    const fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
}
function myFunction(item, index){
    console.log(item, index);
}
//indexOf takes value as param to find and findIndex takes callback function
function index_of_array(){
    var ages = [3, 10, 18, 20];
    console.log(ages.indexOf(18));
}
function join_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.join();
    console.log(text);
    console.log(typeof(text));
}
function last_index_of(){
    const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
    let index = fruits.lastIndexOf("Apple", -2);
    console.log(index); //3
}
// every return true if all match condition
// map chnage/apply some function on each value => returns new array
//foreach just iterate over values
function map_array(){
    const arr1=[1,2,3];
    console.log(arr1.map(square));
}
function square(elem){
    return elem * 2;
}
function pop_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log("remove item", fruits.pop()); //mango(last value)
    console.log("array now", fruits);
}
function push_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.push("Kiwi")); // 5 (new length)
}
function reduce_array(){
    const numbers = [175, 50, 25];
    console.log(numbers.reduce(sub)); //100 (175-50-25)
}
function sub(final, elem){
    return final - elem ;
}
function reduce_right(){
    const numbers = [175, 50, 25];
    console.log(numbers.reduceRight(sub)); // -200 start from end
}
function reverse_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.reverse());
}
function shift_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.shift()); // orange, apple, mango
    console.log(fruits);
}
function slice_array(){
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits.slice(-2, -1)); //apple
}
function some_array(){
    const ages = [2, 3, 4];
    console.log(ages.some(check)); // return (atleast one true)
}
function check(age){
    return age > 3;
}
function sort_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort());
}
// specific position add/ remove
function splice_array(){

}
// add elements in start
function unshift_array(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon","Pineapple"); 
}
function array_to_string(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.toString();
    console.log(text);
}