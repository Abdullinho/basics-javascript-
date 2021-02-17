// take the id and store inside constants

const multi_one = document.getElementById("multiple1");
const multi_two = document.getElementById("multiple2");
const range = document.getElementById("range");
const button = document.getElementById("button");
const display = document.getElementById("display");



// Add Event Listener to button
button.addEventListener("click", calculate );

// function 

function calculate(){




  //value of inputs
  let mul1_value = multi_one.value;
  let mul2_value = multi_two.value;
  let range_value = range.value; 
  let sum = 0;



  // validation 

  if(mul1_value === "" && mul2_value === "" ){
    return alert("You need fill atleast one input");

  }

  //loop for calculation of multiples

  for(let i=0; i<range_value; i++){
    if(i % mul1_value === 0 || i % mul2_value===0){

      sum = sum + i;

    }
  }

  


  display.innerHTML = sum;
  
}

