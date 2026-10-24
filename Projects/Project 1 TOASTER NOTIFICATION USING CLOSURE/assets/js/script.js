// TOASTER PROJECT WITH CLOSURE

function createToaster(config) {

    return function (str) {
        let parent = document.querySelector(".parent");
        let div = document.createElement("div");
        div.textContent = str;

        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        parent.appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            parent.classList.add("fixed");
            parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }

        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "left",
    positionY: "top",
    theme: "dark",
    duration: 5,
});

toaster("Download Done!");
setTimeout(() => {
    toaster("Danish is Coding!")
}, 2000);

