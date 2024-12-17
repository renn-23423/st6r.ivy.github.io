document.querySelectorAll('.video-container video').forEach(video => {
    const container = video.closest('.video-container');
    container.addEventListener('mouseenter', () => video.play());
    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset playback
    });
});
