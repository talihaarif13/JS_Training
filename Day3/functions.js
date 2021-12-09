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