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
