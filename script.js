function compute() {
    //sets variables to calculate annual interest on principal over set years
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    //sets the variable 'yr' to calculate year from current date
    var d = new Date();
    var y = d.getFullYear();
    var yr = parseInt(y) + parseInt(years);

    //if principal is blank, 0, or negative, sends alert & focus back to principal field
    if (principal == "" || principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    if (years == "-years-") {
        alert("Select number of years");
        years.focus();
        return false;
    }
    //sends the result onclick of button to return variables & calculated interest
    document.getElementById("result").innerHTML = "If you deposit <mark>" + currency.format(principal) + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
        "You will receive an amount of <mark>" + currency.format(interest+principal) + "</mark>,<br>" +
        "in the year <mark>" + yr + "</mark>.";
}

//updates shown value next to interest rate range slider
function updateRate(val) {
    document.getElementById("int").value = val;
}

//formats numbers to currency with '$' and ',' with 2 decimal places with prefix "currency.format(<value>)"
const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
