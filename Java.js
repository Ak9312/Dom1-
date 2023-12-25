
let s = 0;


function myFunction() {

  // var i = 1; 
  // while (i < 10) { 
  //   i++;
  // }
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  //  let elem = Number(document.getElementById("Form 1").innerHTML);
  // elem = elem + 1;
  // cell1.innerHTML =  document.getElementById("From 1").innerHTML = String(elem);
  s++;
  cell1.innerHTML = s;
  cell2.innerHTML = document.getElementById("info").value;
}

