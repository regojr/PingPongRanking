/* 
    Processes the necessary data for the rankings
 */

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
}

var player = ["Jake", "Rego", 999];

  function initTable(one, two, three){
    document.getElementById(one).innerHTML= player[0];
    document.getElementById(two).innerHTML= player[1];
    document.getElementById(three).innerHTML= player[2];
  }
