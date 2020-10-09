alert("Javascript connected!!")
document.getElementById("filepicker").addEventListener("change", function (event) {
    let output = document.getElementById("listing");
    let files = event.target.files;
    let filePath = []
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        if (files[i].name.slice(-4) == '.mp4' || files[i].name.slice(-4) == '.mkv' || files[i].name.slice(-5) == '.webm') {
            filePath.push(refinedPath(files[i].webkitRelativePath))
            filePath.push(path() + files[i].webkitRelativePath)
            let item = document.createElement("li");
            item.innerHTML = files[i].webkitRelativePath;
            output.appendChild(item);
        }
    };
    var v1 = document.querySelector(".thumbnail")
    var s = filePath[0]
    var v = document.createElement("video")
    v.controls = true
    sas = "<source src=\"../" + s + "\" type=\"video/webm\">"
    v.innerHTML = "<source src=\"../" + s + "\" type=\"video/webm\">";
    i = document.querySelector("img")
    v1.removeChild(i)
    v1.appendChild(v)
    filePath.reverse()
}, false);

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

// document.querySelector(".thumbnail").addEventListener("click", function () {
//     document.querySelector("body").style.display = "none";
// });