const inputactivity= document.getElementById("myInput")
const inputlist= document.getElementById("List-container")
function add(){
	if(inputactivity.value===""){
		alert("enter task");
		return false;
	}
	else{
		let li= document.createElement("li");
		li.innerHTML=inputactivity.value;
		inputlist.appendChild(li);
		let span =document.createElement('span');
		span.innerHTML="\u00d7";
		span.classList.add('close');
		li.appendChild(span);
	}
	inputactivity.value='';
}
inputlist.addEventListener("click",function(e){
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
var saveData = JSON.parse(localStorage.saveData || null) || {};
function saveStuff(obj) {
  saveData.obj = obj;
  saveData.time = new Date().getTime();
  localStorage.saveData = JSON.stringify(saveData);
}
function loadStuff() {
  return saveData.obj || "default";
}
