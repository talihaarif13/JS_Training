function two_table(){
    var i=1;
    while(i<=5){
        document.write(i*2 + "<br/>");
        i++;
    }
}
function pattern_printing(){
    for(let i=0;i<=5;i++){
        for(let j=5-i; j>0;j--){
            document.write("*");
        }
        document.write("<br/>");
    }
}