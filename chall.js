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
const marks = prompt("Please enter your marks here:");
studentmark(marks);
// the output






//2.Speed Detector (Toy Problem)

//Write a program that takes as input the speed of a car e.g 
//80. If the speed is less than 70, it should print “Ok”. Otherwise,
// for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. 
//If the driver gets more than 12 points, the function should print: “License suspended”.




//function speedread generates the print message/demerit points as outputs
function speedread (){
  // variable speed is decrared
  let speed = prompt("The speed of the car");
  //if, else and else if to execute the speed conditions
  if (speed<=70){
  // console.log for the output
    console.log("Ok")
  }
  else if(speed > 70 && speed <= 130){
    //variable demeritPoint is decrared
    let demeritPoint = (speed - 70)/5;
    console.log(`demerit points gained are: ${demeritPoint}`);
  }
  else{
    console.log("License suspended");
  }
}
speedread();
//output
