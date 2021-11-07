function calculate() {
		
	const amount = document.querySelector('#amount').value;

	const rate = document.querySelector('#rate').value;

	const month = document.querySelector('#months').value;

	const interest = (amount * (rate*0.01)) / month;

	const total = ((amount / month) + interest).toFixed(2);

	document.querySelector('#total')
	.innerHTML = "EMI : " + total;
	
	}
