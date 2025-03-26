const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
var circle = document.querySelector(".circle");
var songList=document.querySelectorAll(".musics audio")
var musicbox=document.querySelector(".music-box")
var currentSongIndex=0;

playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused || audioPlayer.currentTime === 0) {

        if (!audioPlayer.src) {
            var songName=document.createElement("p")
            songName.textContent=audioPlayer.src.textContent;
            audioPlayer.src ="Bewafa Tera Masoom Chehra LYRICAL Rochak Kohli Feat Jubin Nautiyal Rashmi V  Karan Mehra Ihana.mp3"; // Make sure a valid src is assigned
        }
        audioPlayer.play();
        circle.style.animationPlayState = "running"; // Animation start karo
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        // Audio ko pause karna hai
        audioPlayer.pause();
        circle.style.animationPlayState = "paused"; // Animation pause karo
        playPauseBtn.textContent = "▶ Play";
    }
});

function playSong(index){
    if(index>=0 || index<songList.length){
        audioPlayer.src=songList[index].src
    }
}