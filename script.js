function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
    if (principal <= 0 || principal=="") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("principal").classList.add("invalid");
    } else {
        /*
        When "Compute Interest" is clicked, set its inner html property to the below text.
            If you deposit 1000000,
            at an interest rate of 3.5%.
            You will receive an amount of 175000,
            in the year 2025
        */
        document.getElementById("principal").classList.remove("invalid");
        var result_text = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
        document.getElementById("result").innerHTML= result_text;
    }
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}