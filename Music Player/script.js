const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const circle = document.querySelector(".circle");
const songList = document.querySelectorAll(".musics audio");
let currentSongIndex = 0;

// Load and play song
function loadSong(index) {
    const selectedSong = songList[index];
    if (selectedSong) {
        audioPlayer.src = selectedSong.src;
        audioPlayer.play();
        playPauseBtn.textContent = "⏸ Pause";
        circle.style.animationPlayState = "running";
    }
}

// Play/pause toggle
playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused || audioPlayer.currentTime === 0) {
        if (!audioPlayer.src) {
            loadSong(currentSongIndex);
        } else {
            audioPlayer.play();
            circle.style.animationPlayState = "running";
            playPauseBtn.textContent = "⏸ Pause";
        }
    } else {
        audioPlayer.pause();
        circle.style.animationPlayState = "paused";
        playPauseBtn.textContent = "▶ Play";
    }
});

// Go to next song
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songList.length) {
        currentSongIndex = 0; // Loop to the beginning
    }
    loadSong(currentSongIndex);
}
