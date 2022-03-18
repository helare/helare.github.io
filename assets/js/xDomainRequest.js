
var xhr = new XMLHttpRequest()

xhr.open("GET", 'https://sheets.googleapis.com/v4/spreadsheets/1chIgh0MSRt3ahHJV-KKqtWMDN5ItPNwEv0jj-XmuRkY/values/Sheet1!c2?key=AIzaSyCP_9mCYNE-d5MBftYGyr0YKjhC9k7DcmI');

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
    para.innerHTML = JSON.parse(data).values[0];
    para.style.fontWeight = "700";
    para.style.position = "relative";
    para.style.width = "50%";
    para.style.fontSize = "350px";
    para.style.textAlign = "center";
    para.style.margin = "0 auto";
    para.style.lineHeight = "352px";
    document.getElementById("parent").appendChild(para);
}
