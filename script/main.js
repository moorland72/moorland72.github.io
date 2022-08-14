
   window.onload = populateSelect();

   function populateSelect() {
       // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
       var xhr = new XMLHttpRequest(),
           method = 'GET',
           overrideMimeType = 'application/json',
           url = '../../json/medis.json';        // ADD THE URL OF THE FILE.

       xhr.onreadystatechange = function () {
           if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

               // PARSE JSON DATA.
               let birds = JSON.parse(xhr.responseText);

               let ele = document.getElementById('sel');
               for (let i = 0; i < birds.length; i++) {
                   // BIND DATA TO <select> ELEMENT.
                   ele.innerHTML = ele.innerHTML +
                       '<option value="' + birds[i].pzn + '">' + birds[i].name + '</option>';
               }
           }
       };
       xhr.open(method, url, true);
       xhr.send();
   }

   function show(ele) {
       // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
       var msg = document.getElementById('msg');
       var msg1 = document.getElementById('msg1');
       var msg2 = document.getElementById('msg2');
       msg1.value = ele.options[ele.selectedIndex].text;
       msg2.value = ele.options[ele.selectedIndex].value;
       /*  msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
            'ID: <b>' + ele.value + '</b>'; */
   }

function addToList() {
    var tbodyRef = document.getElementById('tableHinzufugen').getElementsByTagName('tbody')[0];
    var msg1 = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    var menge = document.getElementById('menge');
    var uzenet = document.getElementById


    // Append a text node to the cell
    let insertMsg1 = msg1.value;
    let insertMsg2 = msg2.value;
    let insertMenge = menge.value;


    if (insertMsg1 != "") {

        // Insert a row at the end of table
        var newRow = tbodyRef.insertRow(-1);

        // Insert a cell at the end of the row
        var newCellName = newRow.insertCell(0);
        var newCellPzn = newRow.insertCell(1);
        var newCellMenge = newRow.insertCell(2);

        newCellName.innerHTML = insertMsg1;
        newCellPzn.innerHTML = insertMsg2;
        newCellMenge.innerHTML = insertMenge;

        console.log(insertMsg1);
        console.log(insertMsg2);

        msg1.value = '';
        msg2.value = '';
        menge.value = '1';
        insertMsg1 = '';
    }

    else {

    }





}
