// For browse button diverting it to file tag
$("button").click(function () {
    $("#filepicker").click();
})


function path() {
    string = window.location.pathname;
    count = 0
    i = 0
    for (i = string.length - 1; i >= 0; i--) {
        if (string[i] === '/') count++;
        if (count == 3) break;
    }
    return string.slice(0, i + 1);
}
function refinedPath(s) {
    count = 0
    i = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] === '/') break;
    }
    return s.slice(i + 1, s.length);
}

// Finds video files
document.getElementById("filepicker").addEventListener("change", function (event) {
    // let output = document.getElementById("listing");
    // let files = event.target.files;
    // let filePath = []
    // console.log(files)
    // for (let i = 0; i < files.length; i++) {
    //     if (files[i].name.slice(-4) == '.mp4' || files[i].name.slice(-4) == '.mkv' || files[i].name.slice(-5) == '.webm') {
    //         filePath.push(refinedPath(files[i].webkitRelativePath))
    //         filePath.push(path() + files[i].webkitRelativePath)
    //         let item = document.createElement("li");
    //         item.innerHTML = files[i].webkitRelativePath;
    //         output.appendChild(item);
    //     }
    // };
    // console.log(output);
    // var v1 = document.querySelector(".thumbnail")
    // var s = filePath[0]
    // var v = document.createElement("video")
    // v.controls = true
    // sas = "<source src=\"../" + s + "\" type=\"video/webm\">"
    // v.innerHTML = "<source src=\"../" + s + "\" type=\"video/webm\">";
    // i = document.querySelector("img")
    // v1.removeChild(i)
    // v1.appendChild(v)
    // filePath.reverse()
    loadVideos();
    // document.querySelector("body").innerHTML = "<div class=\"container-main\">Well Well Well</div>";
}, false);

function loadVideos() {
    var COLUMNS = 3;
    var VIDEOS = 10;
    var ROWS = Math.ceil(VIDEOS/COLUMNS);
    var body = document.querySelector("body");
    body.innerHTML = "<div class=\"container-main\">Well Well Well</div>";
    for(i=0;i<ROWS;i++) {
        var row = document.createElement("div");
        row.textContent = "Row: " + toString(i);
        body.appendChild(row);
    }

}