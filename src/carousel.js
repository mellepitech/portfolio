
  document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
      currentIndex: 1,
      images: [
        "/src/assets/photo-projet1.png",
        "/src/assets/projet-puissance4.png",
        "/src/assets/projet-spotify.png",
        "/src/assets/projet-maquettehmtl.png",
      ],
      previous() {
        if (this.currentIndex > 1) {
          this.currentIndex = this.currentIndex - 1;
        }
      },
      forward() {
        if (this.currentIndex < this.images.length) {
          this.currentIndex = this.currentIndex + 1;
        }
      },
    }));
  });
