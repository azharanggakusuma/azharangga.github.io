if (document.getElementById("slider--text")) {
    //Membuat teks slider
    let slides = [
        "<h2>Selamat Datang<small>Di Website Saya</small></h2>",
        "<h2>#Ayo Belajar<small>Pemrograman</small></h2>",
    ];

    let i = 0;

    //Efek slider
    const slider = () => {
        document.getElementById("slider--text").innerHTML = slides[i];
        document.getElementById("slider--text").classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    slider(); // Start slider immediately
    setInterval(slider, 4000); // Slide every 4 seconds
}

