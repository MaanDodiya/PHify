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
    let output = document.getElementById("listing");
    let files = event.target.files;
    let filePath = []
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        if (files[i].name.slice(-4) == '.mp4' || files[i].name.slice(-4) == '.mkv' || files[i].name.slice(-5) == '.webm') {
            
            filePath.push(files[i]);
            // filePath.push(path() + files[i].webkitRelativePath)
            // let item = document.createElement("li");
            // item.innerHTML = files[i].webkitRelativePath;
            // output.appendChild(item);
        }
    };
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
    filePath.reverse()
    loadVideos(filePath);
    // document.querySelector("body").innerHTML = "<div class=\"container-main\">Well Well Well</div>";
}, false);

function loadVideos(filePath) {
    var COLUMNS = 3;
    var VIDEOS = filePath.length;
    var ROWS = Math.ceil(VIDEOS/COLUMNS);
    var body = document.querySelector("body");
    var style = document.querySelector("link");

    style.href = "css/styles-main.css";
    
    body.innerHTML = "<div class=\"container-main\"></div>";
    for(var i=0;i<ROWS;i++) {
        var row = document.createElement("div");
        row.className = "row";
        body.children[0].appendChild(row);
    }
    
    var allRows = document.querySelectorAll(".row");
    for(var i=0;i<VIDEOS;i++) {
        var div = document.createElement("div");
        div.className = "col-4";


        var video = document.createElement("video");
        video.innerHTML = "<source src=\"../" + refinedPath(filePath[i].webkitRelativePath) + "\" type=\"video/webm\">";
        video.controls = true;

        var innerDiv = document.createElement("div");
        innerDiv.innerHTML = filePath[i].name;

        div.appendChild(video);
        div.appendChild(innerDiv);

        allRows[Math.floor(i/3)].appendChild(div);
    }

    var footer = document.createElement("footer");
    footer.innerHTML = "Made with <i class=\"fa fa-heart pulse\"></i>";
    var footerDiv = document.createElement("div");
    footerDiv.textContent = "2Di Productions, 2020";
    footer.appendChild(footerDiv);

    body.appendChild(footer);
}

// <div class="col-3">
// 		<div class="thumbnail"><img src="images/1.jpg" alt="">
// 			<span>20:21s</span></div>
// 		<div>Movie Name<br></div>
// </div>

{/* <footer>
        Made with <i class="fa fa-heart pulse"></i>
        <div>2Di Productions, 2020</div>
    </footer> */}