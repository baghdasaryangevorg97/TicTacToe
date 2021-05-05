let val = true;
let fin = true;
let count = 0;
var k = document.getElementsByClassName("child");

function f1(vale) {
if(!fin){
return alert("Te ame ended you  cannot countinue")}
  if (vale.innerHTML === "X" || vale.innerHTML === "O") {
  } else {
    vale.innerHTML = val ? "X" : "O";
    val = !val;
		count++;

    if (
      document.getElementById(vale.id[0] + "1").innerHTML ===
        document.getElementById(vale.id[0] + "2").innerHTML &&
      document.getElementById(vale.id[0] + "1").innerHTML ===
        document.getElementById(vale.id[0] + "3").innerHTML
    ) {
			fin = false;
      alert("Winner: " + vale.innerHTML);
    } else if (
      document.getElementById("1" + vale.id[1]).innerHTML ===
        document.getElementById("2" + vale.id[1]).innerHTML &&
      document.getElementById("1" + vale.id[1]).innerHTML ===
        document.getElementById("3" + vale.id[1]).innerHTML
    ) {
			fin = false;
      alert("Winner: " + vale.innerHTML);
    } else if (
      document.getElementById("11").innerHTML ===
        document.getElementById("22").innerHTML &&
      document.getElementById("11").innerHTML ===
        document.getElementById("33").innerHTML &&
      vale.id[0] === vale.id[1]
    ) {
			fin = false;
      alert("Winner: " + vale.innerHTML);
    } else if (
      document.getElementById("31").innerHTML ===
        document.getElementById("22").innerHTML &&
      document.getElementById("31").innerHTML ===
        document.getElementById("13").innerHTML &&
      parseInt(vale.id[0]) + parseInt(vale.id[1]) === 4
    ) {
			fin = false;
      alert("Winner: " + vale.innerHTML);
    } 
  }
if(count === 9 && fin){
alert("Draw")}

}

function res(){
	return location.reload()

}


