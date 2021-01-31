var restrants;
function func1() {
   var jan = document.forms.form1.input_message.value;
axios.get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=276170a85746bbaefe88a4ce71f60084&name='+jan+'&pref=PREF13')
.then(function (response) {
    restrants = response.data.rest;
    for(var n=0 ;n<restrants.length ; n++){
        $("#2").append(`<tr><td>${restrants[n].name}</td><td>${restrants[n].tel}</td><td>${restrants[n].access.line + restrants[n].access.station + " (徒歩" + restrants[n].access.walk + "分)"}</td></tr>`);
    }
    // handle success
  console.log(response);
})
.catch(function (error) {
    // handle error
  console.log(error);
})
.finally(function () {
    // always executed
});
}

function clearText(){
  document.getElementById(2).innerHTML = '<tr bgcolor="teal"><th>店名</th><th>電話番号</th><th>最寄り駅</th></tr>'
}

