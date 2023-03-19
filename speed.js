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
      let speed = prompt("The speed of the car:");
    //if, else and else if to execute the speed conditions  
      if (speed<=70){
        console.log("Ok")
      }
      // accounting for the amount of demerits the speed is eligible for
      else if(speed > 70 && speed <= 130){   
        let demeritPoint = (speed - 70)/5;
        console.log(`demerit points gained are: ${demeritPoint}`);
      }
       //if the users demerits are greater than 12 then a message is printed "license is suspended"
      else{
        console.log("License suspended");
      }
    }
    speedread();
    //output
    