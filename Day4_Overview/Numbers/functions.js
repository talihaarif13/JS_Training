function check_number(){
    console.log(123, Number.isNaN(123));
    console.log(-1.23, Number.isNaN(-1.23));
    console.log(3, Number.isNaN(5-2));
    console.log(0, Number.isNaN(0));
    console.log('123', Number.isNaN('123'));
    console.log(0 / 0, Number.isNaN(0 / 0));
    console.log('NaN', Number.isNaN('NaN'));

}
function max_value(){
    console.log(Number.MAX_VALUE);
}
function min_value(){
    console.log(Number.MIN_VALUE);
}
function value_of(){
    let x = 5;
    console.log(x.valueOf());
}
//prototype add new method and properties to numbers
Number.prototype.additionNumber = function(){
    return this.valueOf() + 2;
}
function proto_type(){
    let value = 10;
    console.log(value.additionNumber());
}
function fixed_number(){
    let x = 3.145678;
    console.log(x.toFixed(2));
}
function to_string(){
    let x = 15;
    let converted = x.toString();
    console.log(converted, typeof(converted));
}