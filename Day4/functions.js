function current_day(){
    let d = new Date()
    const days = [ "Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.getElementById("today").innerHTML = days[d.getDay()];
}
function add_number(){
    let number = document.getElementById("number").value;
    console.log(number);
    if(!isNaN(number)){
        let lists = document.querySelectorAll("li");
        for(let item of lists){
            item.textContent = parseInt(item.textContent, 10) + parseInt(number, 10);
        }
        // Array.from(lists).forEach(function(item){
        // });
    }
}