window.onload = () => {

    const text =
    document.getElementById("anniversaryText");

    setTimeout(() => {

        text.style.transition =
        "2s";

        text.style.opacity = "1";

        text.style.transform =
        "scale(1.2)";

    },1000);

};

const message = `

My Baby ❤️

                    Thank you for being the most beautiful
                    part of my life.

                    You have made my life filled with happiness.
                    Tu Jugnu Chamakta, Main Jungle ghanera 
                    Main Tera Main Tera Main Tera
                  
                    Life feels brighter because you're in it.

                    No matter where life takes us,
                    I promise to keep choosing you,
                    every single day.

                    Happy First Anniversary ❤️

`;

let i = 0;

function typeWriter() {

    if(i < message.length){

        document
        .getElementById("typedText")
        .innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);
    }
}

window.onload = typeWriter;

document
.getElementById("yesBtn")
.addEventListener("click",function(){

document
.getElementById("answer")
.innerHTML =

`
❤️ YAY ❤️

Thank you for being my favourite
chapter, my favourite memory,
and my favourite person.

Here's to forever,
more adventures,
more laughter,
and endless love.

Happy Anniversary My Love ❤️
`;

});
