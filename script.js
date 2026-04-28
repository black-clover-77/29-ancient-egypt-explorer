const audio = document.getElementById('bg-audio');
const audioToggle = document.getElementById('audio-toggle');
const loader = document.getElementById('loader');

let isAudioPlaying = false;

function init() {
    // SAFETY TIMEOUT
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
}

audioToggle.onclick = () => {
    if (isAudioPlaying) {
        audio.pause();
        audioToggle.textContent = '🎵';
    } else {
        audio.play().catch(() => {});
        audioToggle.textContent = '🔊';
    }
    isAudioPlaying = !isAudioPlaying;
};

window.addEventListener('load', init);
setTimeout(init, 5000);