let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://sheets.googleapis.com/v4/spreadsheets/1chIgh0MSRt3ahHJV-KKqtWMDN5ItPNwEv0jj-XmuRkY/values/Sheet1!c2?key=AIzaSyCP_9mCYNE-d5MBftYGyr0YKjhC9k7DcmI')
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(xhr.status); // e.g. 404: Not Found
    } else { // show the result
        addHtml(xhr.responseText);
    }
};
xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        alert(event.loaded);
    } else {
        console.log(event.loaded); // no Content-Length
    }
};

xhr.onerror = function () {
    console.log("Request failed");
};

function addHtml(data) {
    const para = document.createElement("div");
    para.innerHTML = JSON.parse(data).values[0];
    para.style.fontWeight = "bold";
    para.style.position = "relative";
    para.style.top = "5%";
    document.getElementById("parent").appendChild(para);
}


