// TOASTER PROJECT WITH CLOSURE

function createToaster(config) {

    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className =
            `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").classList.add("fixed");
            document.querySelector(".parent").className +=
                `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }

        setTimeout(() => {
            div.remove();
        }, (config.duration || 3) * 1000);
    };
}

let toaster = createToaster({
    positionX: "left",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("Download Done!");
setTimeout(() => {
    toaster("Danish is Coding!")
}, 2000);
