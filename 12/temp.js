window.onload = function () {
  loaddata();
};
function loaddata() {
  var url = "http://localhost:5000/read_all";
  $.getJSON(url, function (data) {
    var val = data;
    var humid = (data['data'][(Object.keys(data['data']).length) - 1]['hum']);
    var temper = (data['data'][(Object.keys(data['data']).length) - 1]['temp']);
    document.getElementById("temperature").innerHTML = "<img src = 'temperature.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + temper;
    document.getElementById("humidity").innerHTML = "<img src = 'humidity.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + humid;
    console.log(data['data'][(Object.keys(data['data']).length) - 1]['temp']);
    
  });

}


function loaddata1() {
  var url1 = "http://localhost:5000/read_all1";
  $.getJSON(url1, function (data1) {
    var val = data1;
    var humid1 = (data1['data'][(Object.keys(data1['data']).length) - 1]['hum']);
    var temper1 = (data1['data'][(Object.keys(data1['data']).length) - 1]['temp']);
    document.getElementById("temperature1").innerHTML = "<img src = 'temperature.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + temper1;
    document.getElementById("humidity1").innerHTML = "<img src = 'humidity.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + humid1;
    console.log(data1['data'][(Object.keys(data1['data']).length) - 1]['temp']);
    
  });

}

function loaddata2() {
  var url2 = "http://localhost:5000/read_all2";
  $.getJSON(url2, function (data2) {
    var val = data2;
    var humid2 = (data2['data'][(Object.keys(data2['data']).length) - 1]['hum']);
    var temper2 = (data2['data'][(Object.keys(data2['data']).length) - 1]['temp']);
    var addtime2 = (data2['data'][(Object.keys(data2['data']).length) - 1]['addtime']);
    document.getElementById("temperature2").innerHTML = "<img src = 'temperature.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + temper2;
    document.getElementById("humidity2").innerHTML = "<img src = 'humidity.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + humid2;
    document.getElementById("addtime2").innerHTML = "<img src = 'time.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + addtime2;
    console.log(data2['data'][(Object.keys(data2['data']).length) - 1]['temp']);
    
  });

}

function loaddata_ct() {
  var url_ct = "http://localhost:5000/read_all_ct";
  $.getJSON(url_ct, function (data_ct) {
    var val = data_ct;
    var tds_ct = (data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['tds']);
    var ph_ct = (data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['ph']);
    var O2_ct = (data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['O2']);
    var turbo_ct = (data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['turbo']);
    var addtime_ct = (data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['addtime_ct']);
    document.getElementById("tds").innerHTML = "<img src = 'temperature.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + tds_ct;
    document.getElementById("ph").innerHTML = "<img src = 'humidity.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + ph_ct;
    document.getElementById("O2").innerHTML = "<img src = 'time.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + O2_ct;
    document.getElementById("turbo").innerHTML = "<img src = 'time.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + turbo_ct;
    document.getElementById("addtime_ct").innerHTML = "<img src = 'time.png' height=\"60px\" width=\"60px\" style='vertical-align: middle' />  " + addtime_ct;
    console.log(data_ct['data'][(Object.keys(data_ct['data']).length) - 1]['addtime_ct']);
    
  });

}

window.setInterval(function () {
  loaddata();
}, 5000);

window.setInterval(function () {
  loaddata1();
}, 5000);

window.setInterval(function () {
  loaddata2();
}, 5000);

window.setInterval(function () {
  loaddata_ct();
}, 5000);


