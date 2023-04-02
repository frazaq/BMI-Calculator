function calculateBMI() {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value / 100;
	var bmi = (weight / (height * height)).toFixed(1);

	document.getElementById("bmi-result").innerHTML = bmi;

	if (bmi < 18.5) {
		document.getElementById("bmi-category").innerHTML = "Underweight";
		document.getElementById("bmi-category").style.color = "#ffc107";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		document.getElementById("bmi-category").innerHTML = "Normal weight";
		document.getElementById("bmi-category").style.color = "#28a745";
	} else if (bmi >= 25 && bmi <= 29.9) {
		document.getElementById("bmi-category").innerHTML = "Overweight";
		document.getElementById("bmi-category").style.color = "#ffc107";
	} else {
		document.getElementById("bmi-category").innerHTML = "Obese";
		document.getElementById("bmi-category").style.color = "#dc3545";
	}
}
