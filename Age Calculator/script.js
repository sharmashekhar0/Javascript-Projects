
const dateOfBirth = document.querySelector("#date-of-birth");
const calculateBtn = document.querySelector("#calculate-btn");
const yourAge = document.querySelector("#your-age");

calculateBtn.addEventListener("click", function() {

    const date = dateOfBirth.value;
    console.log(date);

    const currentDate = new Date();
    
   const dd = currentDate.getDate();
    const mm = currentDate.getMonth() + 1;
    const yy = currentDate.getFullYear();
    const arr = date.split('-');
    console.log(yy + " " + mm + " " + dd);
    const age = yy - arr[0];

    if(age < 0) alert("Invalid Date of Birth");
    else if(mm < arr[1] || mm == arr[1] && dd < arr[2]) {
        yourAge.innerText = `You are ${age - 1} Years Old`;
    }
    else if(mm > arr[1] || mm == arr[1] && dd >= arr[2]) {
        yourAge.innerText = `You are ${age} Years Old`;
    }
    
});
