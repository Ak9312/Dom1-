
let idCounter = 0;


function myFunction() {

  // var i = 1; 
  // while (i < 10) { 
  //   i++;
  // }
  const userInput = document.getElementById("info").value;
  if (userInput.trim() === '') {
    alert('Please enter some text.');
    return;
  }
  let table = document.getElementById("myTable");
  let row = table.insertRow(-1);
  let idCell = row.insertCell(0);
  let textCell = row.insertCell(1);
  //  let elem = Number(document.getElementById("Form 1").innerHTML);
  // elem = elem + 1;
  // cell1.innerHTML =  document.getElementById("From 1").innerHTML = String(elem);
  idCounter++;
  idCell.textContent = idCounter;
  textCell.textContent =userInput;
  document.getElementById('info').value = '';
}

