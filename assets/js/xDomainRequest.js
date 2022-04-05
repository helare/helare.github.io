
var xhr = new XMLHttpRequest()

xhr.open("GET", 'https://sheets.googleapis.com/v4/spreadsheets/1chIgh0MSRt3ahHJV-KKqtWMDN5ItPNwEv0jj-XmuRkY/values/Sheet1?key=AIzaSyCP_9mCYNE-d5MBftYGyr0YKjhC9k7DcmI');

xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            addHtml(xhr.responseText);
        }
    }
}

function addHtml(data) {
    var para = document.createElement("div");
    para.innerHTML = getDays(data);
    para.style.fontWeight = "700";
    para.style.position = "relative";
    para.style.width = "50%";
    para.style.fontSize = "350px";
    para.style.textAlign = "center";
    para.style.margin = "0 auto";
    para.style.lineHeight = "352px";
    document.getElementById("parent").appendChild(para);
}

function getDays(data) {
    var lastRow = JSON.parse(data).values.length - 1;
    var lastAccident = JSON.parse(data).values[lastRow][1].split('-').join('/');
    var lastAccidentDate = new Date(lastAccident).getTime();
    var todayDate = new Date().getTime();
    var diffDays = Math.floor(Math.abs((todayDate - lastAccidentDate) / 86400000));
    return diffDays;
}
