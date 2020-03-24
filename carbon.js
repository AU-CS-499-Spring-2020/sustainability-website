function calculate() {
	    var num1 = document.getElementById("numberOfCommuters").value;
        var num2 = document.getElementById("averageNumberOfMiles").value;
        var result = document.getElementById("result");
        var myResult = num1 * num2;
        result.value = myResult;
}