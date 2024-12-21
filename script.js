
// // trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

document.querySelector('.btn-send').addEventListener('click', (e) => {
    const button = e.target;
    createFirework(button);
});

function createFirework(button) {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.className = 'firework';
    document.body.appendChild(fireworkContainer);

    const shapes = ['❤️', '🎈', '🎈', '💥', '🌟']; // Bentuk love, balon, dan kembang api
    for (let i = 0; i < 50; i++) {
        const shape = document.createElement('div');
        shape.textContent = shapes[i % shapes.length];
        shape.style.position = 'absolute';
        shape.style.left = `${Math.random() * 300 - 150}px`; // Lebihkan jarak untuk penyebaran lebih lebar
        shape.style.top = `${Math.random() * 300 - 150}px`; // Lebihkan jarak untuk penyebaran lebih lebar
        shape.style.animation = `explode 1.5s ease-out forwards`;
        fireworkContainer.appendChild(shape);
    }

    // Menambahkan love di tengah
    const love = document.createElement('div');
    love.className = 'love';
    love.textContent = '❤️';
    fireworkContainer.appendChild(love);

    // Menambahkan balon di tengah
    const balloon1 = document.createElement('div');
    balloon1.className = 'balloon';
    balloon1.textContent = '🎈';
    fireworkContainer.appendChild(balloon1);
    
    const balloon2 = document.createElement('div');
    balloon2.className = 'balloon';
    balloon2.textContent = '🎈';
    fireworkContainer.appendChild(balloon2);

    // Menambahkan efek kembang api (💥, 🎆)
    const fireworks = ['💥', '🎆']; // Kembang api simbol
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework-item';
        firework.textContent = fireworks[i % fireworks.length];
        firework.style.left = `${Math.random() * 300 - 150}px`;
        firework.style.top = `${Math.random() * 300 - 150}px`;
        firework.style.fontSize = `${Math.random() * 20 + 15}px`; // Variasi ukuran
        firework.style.animation = `explode 1.5s ease-out forwards`;
        fireworkContainer.appendChild(firework);
    }

    // Set posisi di tombol
    fireworkContainer.style.left = `${button.offsetLeft + button.offsetWidth / 2 - 50}px`;
    fireworkContainer.style.top = `${button.offsetTop + button.offsetHeight / 2 - 50}px`;

    // Menghapus efek setelah animasi selesai
    setTimeout(() => fireworkContainer.remove(), 1500);
}

// Ambil elemen video, audio, teks dan tombol slide
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const audio = document.querySelector('.song');
const slideButton = document.querySelector('.slide-toggle');
const videoText = document.getElementById('videoText');

// Flag untuk melacak status video (apakah video pertama atau kedua yang sedang ditampilkan)
let isVideo1Visible = true;

// Event listener untuk tombol slide (klik tombol)
slideButton.addEventListener('click', () => {
    if (isVideo1Visible) {
        // Jika video pertama sedang ditampilkan, sembunyikan dan tampilkan video kedua
        video1.style.display = 'none';
        video2.style.display = 'block';

        // Sembunyikan teks
        videoText.style.display = 'none';

        // Hentikan audio
        audio.pause();

        // Putar video kedua
        video2.play();
    } else {
        // Jika video kedua sedang ditampilkan, sembunyikan dan tampilkan video pertama
        video2.style.display = 'none';
        video1.style.display = 'block';

        // Tampilkan teks
        videoText.style.display = 'block';

        // Putar ulang audio
        audio.play();

        // Putar video pertama
        video1.play();
    }

    // Toggle status video
    isVideo1Visible = !isVideo1Visible;
});

// Event listener untuk memulai pemutaran video kedua setelah video pertama selesai
video1.addEventListener('ended', () => {
    // Setelah video pertama selesai, sembunyikan teks dan biarkan tombol slide aktif
    videoText.style.display = 'none';
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.5, {
            visibility: "visible",
        },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        },
            "+=4")
        .to(
            ".four",
            0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
            "+=1")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(
            ".idea-5",
            0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
            "+=1.5"
        )
        .to(
            ".idea-5 span",
            0.7, {
            rotation: 90,
            x: 8,
        },
            "+=1.4"
        )
        .to(
            ".idea-5",
            0.7, {
            scale: 0.2,
            opacity: 0,
        },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
            0.2,
            "+=1.5"
        )
        .staggerFromTo(
            ".baloons img",
            2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
            0.2
        )
        .from(
            ".profile-picture",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
            ".last-smile",
            0.5, {
            rotation: 90,
        },
            "+=1"
        );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}