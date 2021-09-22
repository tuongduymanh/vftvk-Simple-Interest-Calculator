function show_value(x){
	document.getElementById("demo").innerHTML=x;
}

function compute(){
	let principal = document.getElementById("principal").value;
	let years = document.getElementById("years").value;
	let rate = document.getElementById("Rate").value;
	if(principal <=0)
	{
		var print = "Enter a Positive Number";
		document.getElementById('my-output').innerHTML = print;
	}
	else
	{
		let today = new Date();
		let presentYear = today.getFullYear()+ +years;
		const interest = (principal*years*rate)/100;
		let msg1 = "If you deposit " + principal + ", <br>"
		let msg2 = "at an interest rate of "+ rate + "%. <br>"
		let msg3 = "You will receive an amount of " + interest + ",<br> in the year " + presentYear ;
		var print = msg1+msg2+msg3;
		document.getElementById('my-output').innerHTML = print; 
	}
}
