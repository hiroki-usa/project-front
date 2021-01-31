const articles = [
   { "name": "論文1", "publish_date": "2010/10/20" },
   { "name": "論文2", "publish_date": "2010/10/02" },
   { "name": "論文3", "publish_date": "2010/10/04" },
   { "name": "論文3", "publish_date": "2010/10/04" },
   { "name": "論文3", "publish_date": "2010/10/04" }
 ];

function addRow(tableID) {
   let tableRef = document.getElementById(tableID);
   let newRow = tableRef.insertRow(-1);
   let newCell = newRow.insertCell(0);
 }

for(var i=0; i < articles.length; i++){
var name_test = articles[i].name;
var publish_date_test = articles[i].publish_date;
var table = document.getElementById('e1');
newRow = table.insertRow();
newCell = newRow.insertCell();
newText = document.createTextNode(name_test);
newCell.appendChild(newText);
newCell = newRow.insertCell();
newText = document.createTextNode(publish_date_test);
newCell.appendChild(newText);
}