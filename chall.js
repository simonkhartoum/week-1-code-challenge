//1. Student Grade Generator (Toy Problem)

//Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.




// function studentmark generates the grades
function studentmark(marks){
    //if, else and else if to execute the marks conditions
    if (marks >= 80 && marks <= 100 ){
        return alert("A");
    }else if (marks >= 60 && marks <= 79){
        return alert("B");
    }else if (marks >= 50 && marks <= 59){
        return alert("C");
    }else if ( marks >= 40 && marks <= 49){
        return alert("D");
    }else if (marks >= 0 && marks <= 39){
        return alert("E")
    }else{
        return alert("invalid marks")
    }   
}
//prompting the user to enter the student mark inorder to generate the student grade
const marks = prompt("Please enter your marks here to be graded:");
studentmark(marks);
// the output