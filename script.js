const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "✨"
];


function createHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (16 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },7000);

}


setInterval(createHeart,700);


/* MESSAGE BUTTON */

const memoryBtn =
    document.getElementById("memoryBtn");


memoryBtn.addEventListener(
    "click",
    function(){

        for(let i = 0; i < 25; i++){

            setTimeout(() => {

                createHeart();

            }, i * 80);

        }

        memoryBtn.innerText =
            "Memory Created ❤️";

    }
);


/* SCROLL EFFECT */

window.addEventListener(
    "scroll",
    function(){

        const navbar =
            document.querySelector(".navbar");

        if(window.scrollY > 50){

            navbar.style.background =
                "rgba(5,1,7,.92)";

        }else{

            navbar.style.background =
                "rgba(10,2,10,.65)";

        }

    }
);