// For browse button diverting it to file tag

document.querySelector("button").addEventListener("click", function () {
    document.querySelector("#filepicker").click();
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
    for (let i = 0; i < files.length; i++) {
        if (files[i].name.slice(-4) == '.mp4' || files[i].name.slice(-4) == '.mkv' || files[i].name.slice(-5) == '.webm') {
            filePath.push(files[i]);
        }
    };
    filePath.reverse()
    loadVideos(filePath);
}, false);

function videoTitle(name) {
    for(var i=name.length-1; i>=0; i--) {
        if(name[i]==".") {
            return name.substring(0, i);
        }
    }
    return name;
}

function loadVideos(filePath) {
    var COLUMNS = 3;
    var VIDEOS = filePath.length;
    var ROWS = Math.ceil(VIDEOS/COLUMNS);
    var body = document.querySelector("body");
    var style = document.querySelector("link");

    style.href = "css/styles-main.css";
    body.innerHTML = "<header class=\"logo\"><h1><div class=\"phify-container\" onclick=refresh()>PH<span class=\"ify\">ify</span></div></h1><div class=\"github\"><a href=\"https://github.com/MaanDodiya/\" target=\"_blank\"><img src=\"images/github-logo.png\" class=\"github-logo\"></img>Maan Dodiya</a></div></header>";
    
    body.innerHTML += "<div class=\"container-main\"></div>";
    for(var i=0;i<ROWS;i++) {
        var row = document.createElement("div");
        row.className = "row";
        body.children[1].appendChild(row);
    }
    
    var allRows = document.querySelectorAll(".row");
    for(var i=0;i<VIDEOS;i++) {
        var div = document.createElement("div");
        div.className = "col-4";

        var video = document.createElement("video");
        video.addEventListener("mouseenter", function (event) {
           event.target.controls = true; 
        });
        video.addEventListener("mouseleave", function (event) {
           event.target.controls = false; 
        });
        video.title = videoTitle(filePath[i].name);
        video.disablePictureInPicture = true;
        video.innerHTML = "<source src=\"../" + refinedPath(filePath[i].webkitRelativePath) + "\" type=\"video/webm\">";
        video.currentTime = 60;
        video.controls = false;

        var innerDiv = document.createElement("div");
        innerDiv.title = videoTitle(filePath[i].name);
        innerDiv.innerHTML = videoTitle(filePath[i].name);
        
        var span = document.createElement("span");
        
        div.appendChild(video);
        div.appendChild(innerDiv);
        div.appendChild(span);

        allRows[Math.floor(i/3)].appendChild(div);
    }
    var videos = document.querySelectorAll("video");
    for(var i=0;i<videos.length;i++) {
        videos[i].onloadedmetadata = function() {
            var total = this.duration;
            total = Math.floor(total);
            var hours = Math.floor(total/3600);
            var minutes = Math.floor(total/60);
            var seconds = Math.floor(total%60);
            var time = "";
            if(hours!=0) {
                time+=hours.toString()+"h:";
                if(minutes<10) {
                    time+="0";
                }
            }
            time+=minutes.toString()+":"
            if(seconds<10) {
                time+="0";
            }
            time+=seconds.toString();
            
            this.parentElement.lastElementChild.innerText = time;
        }
    }

    var footer = document.createElement("footer");
    footer.innerHTML = "Made with <img src=\"images/heart.png\" class=\"heart\">";
    var footerDiv = document.createElement("div");
    footerDiv.textContent = "2Di Productions, 2020";
    footer.appendChild(footerDiv);
    body.appendChild(footer);
}

function refresh() {
    location.reload();
}

