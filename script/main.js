
function addToList() {
    var tbodyRef = document.getElementById('tableHinzufugen').getElementsByTagName('tbody')[0];
    var msg1 = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    var menge = document.getElementById('menge');
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow(-1);

    // Insert a cell at the end of the row
    var newCellName = newRow.insertCell(0);
    var newCellPzn = newRow.insertCell(1);
    var newCellMenge = newRow.insertCell(2);

    // Append a text node to the cell
    let insertMsg1 = document.getElementById("msg1").value;
    let insertMsg2 = document.getElementById("msg2").value;
    let insertMenge = document.getElementById("menge").value;
    console.log(insertMsg1);
    console.log(insertMsg2);
    
    newCellName.innerHTML = insertMsg1;
    newCellPzn.innerHTML = insertMsg2;
    newCellMenge.innerHTML = insertMenge;

    msg1.value = '';
    msg2.value = '';
    menge.value = '1';

}
