fem = document.querySelector('#F');
male = document.querySelector('#M');
height = document.querySelector('#height');
weight = document.querySelector('#weight');
bmi = document.querySelector('#bmi');
display = document.querySelector('.display')
dis = document.querySelector('#dis')
stat = document.querySelector('#stat');
clear = document.querySelector('#clear');

bmi.addEventListener('click', function () {
   if (fem.checked == false && male.checked == false) {
      alert("Select Gender")
   }

   else if (height.value == "" || weight.value == "") {
      alert("Enter all details")
   }
   
   else if(isNaN(height.value)==true || isNaN(weight.value)==true)
   {
      alert("Enter numbers")
   }

   else {
      var bmicalc = (weight.value * 100 * 100) / (height.value * height.value);
      display.classList.add('active')
      dis.innerHTML = "BMI: " + parseFloat(bmicalc).toFixed(3) + " kg/m<sup>2";

      if (bmicalc <= 18.5) {
         stat.innerHTML = "Underweight"
      }
      else if (bmicalc > 18.5 && bmicalc <= 24.9) {
         stat.innerHTML = "Healthy"
      }

      else if (bmicalc > 24.9 && bmicalc <= 29.9) {
         stat.innerHTML = "Overweight"
      }

      else if (bmicalc > 29.9 && bmicalc <= 34.9) {
         stat.innerHTML = "Obese";
      }

      else {
         stat.innerHTML = "Extremely Obese"
      }

   }
})

clear.addEventListener('click',function(){
   fem.checked =false; 
   male.checked = false;
   height.value = "" ;
   weight.value = "";
   display.classList.remove('active')

})