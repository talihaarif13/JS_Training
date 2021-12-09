//Grade calculate
function calculate_grade(){
    let value = document.getElementById('marks').value;
    if(!isNaN(value)){
        if(value>=90){
            document.write("Grade is A");
        }else if(value>=86 && value<90){
            document.write("Grade is A-");
        }else if(value>=82 && value<86){
            document.write("Grade is B+");
        }else if(value>=76 && value<82){
            document.write("Grade is B-");
        }else if(value>=60 && value<76){
            document.write("Grade is C+");
        }else if(value>=50 && value<60){
            document.write("Grade is D+");
        }else{
            document.write("Grade is F");
        }
    }else{
        document.write("Not a valid value!");
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    console.log(ca);
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function check_cookie(){
    let user_name = getCookie("user_name");
    if(user_name!=""){
        alert("welcome" + user_name);
    }else{
        user_name = prompt("Enter Name");
        if(user_name!="" && user_name!==null){
            setCookie("user_name", user_name, 365);
        }
    }
}