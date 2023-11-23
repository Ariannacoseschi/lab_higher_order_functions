const sum = (number1, number2) ==> {
    console.log(number1 + number2);

}

const subtract = (number1,number2) ==> {
    console.log(number1 - number2);
}
 
const doCalculation = (number1, number2, operation) ==>{
    if (operation === "sum"){
        sum(number1, number2);
   }else if (operation === "subtract"){
       subtract(number1,number2);
   }

   const doCalculation = (number1, number2, callback) ==> {
    callback(number1, number2);
   }
  }

    //doCalculation(2, 3, "sum");

    doCalculation(5, 10,(num1, num2) ==> {console.log(num1 * num2)});
//}

//enumeration methods 




