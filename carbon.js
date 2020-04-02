			function multiply(x, y) {
				answer = x * y;
				return answer;
			}

			function calculate() {
	    		var num1 = document.getElementById("numberOfCommutersAndFaculty").value;
        		var num2 = document.getElementById("averageNumberOfMiles").value;
        		var result = document.getElementById("result");
        		myResult = multiply(num1, num2);
       			result.value = myResult;
			}