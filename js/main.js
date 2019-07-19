// 在此放置代码!

function play() {
    var file = document.getElementById("file").files[0].path;
    document.querySelector("video").src = file;
    console.log(document.getElementById("file").files[0].path)
    document.querySelector("video").play();
};

play_button.onclick = play;