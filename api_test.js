const showResult = result => {
  result.rest.map( item => {
    $("#table").append(`<tr><td>${item.name}</td><td>${item.opentime}</td></tr>`)
  })
}
  const url = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
  const params = {
    keyid: "",
    latitude: 34.702492,
    longitude: 135.495965,
    range: 3
  };
("#submit").click(() => {
  params.keyid = $("#key").val()
  $.getJSON(url, params, result => {
    showResult(result)
  })
});