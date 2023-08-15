document.getElementById("hh1").innerHTML="<h1>This is Done in js</h1>"

var button = document.getElementById("enter");
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

function checkLength(){
	return input.value.length
}

function addAndCheck(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li)
		input.value = "";
}

function addListAfterClick(){
	if(checkLength() > 0){
		addAndCheck()

	}
}

function addListAfterKeyPress(event){
	if(checkLength() > 0 && event.keyCode === 13){
		addAndCheck()

	}
}

button.addEventListener("click" ,addListAfterClick) ;


	
input.addEventListener("keypress" ,addListAfterKeyPress);