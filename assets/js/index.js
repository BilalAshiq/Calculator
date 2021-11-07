function calculate() {
	var mainForm = document.getElementById('main-form');
	var value = document.getElementById('value').value;
	var input1 = document.getElementById('input-1').value;
	var input2 = document.getElementById('input-2').value;

		if (input1 == "" || input2 == ""){
			alert('Both Fields Are Required');
		}

		else if( value =='add') {
			answer = Number(input1) + Number(input2);
			alert(answer);
		}
		else if( value=='sub') {
			answer = Number(input1) - Number(input2);
			alert(answer);
		}
		else if( value=='mult') {
			answer = Number(input1) * Number(input2);
			alert(answer);
		}
		else if( value=='div') {
			answer = Number(input1) / Number(input2);
			alert(answer);
		}
}
