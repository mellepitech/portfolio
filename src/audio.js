document.addEventListener('DOMContentLoaded', ()=>{

    console.log("script connected");
    
    let beat = new Audio('/src/assets/The-Two-Towers-Soundtrack-08-Evenstar.mp3');
    console.log(beat)
    document.body.addEventListener("mousemove", function () {
        // Play the beat
        beat.play();
        
        // // Pause/stop the beat
        // beat.pause();
        
        // // Reload the beat (back to the start)
        // beat.load();
    })
    
})


