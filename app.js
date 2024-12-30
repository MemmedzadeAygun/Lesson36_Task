
let images = document.querySelectorAll(".card img");

images.forEach(img => {
    img.addEventListener('click', (e) => {
        const target = e.target;

        images.forEach(image => {
            if (image !== target) {
                image.style.transform = "scale(1)";
                image.style.transition = "transform 0.3s ease";
            }
        });

        if (target.style.transform === "scale(1.5)") {
            target.style.transform = "scale(1)"; 
            target.style.transition = "transform 0.3s ease";
        } else {
            target.style.transform = "scale(1.5)"; 
            target.style.transition = "transform 0.3s ease";
        }
    });
});

