function getUsers() {
    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {

            document.querySelector(".users").innerHTML="";

            data.results.forEach(function (user) {
                // Select the body
                let body = document.querySelector("body");

                // Create main card
                let card = document.createElement("div");
                card.className = "bg-gray-800 w-[348px] p-6 rounded-lg flex items-center gap-4 shadow-lg";

                // Create profile image
                let img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "User Avatar";
                img.className = "w-14 h-14 rounded-full object-cover border-2 border-gray-500";

                // Create user information container
                let userInfo = document.createElement("div");
                userInfo.className = "flex flex-col";

                // Create username
                let username = document.createElement("h2");
                username.className = "text-white text-lg font-semibold";
                username.textContent = user.name.first + " " + user.name.last;

                // Create email
                let email = document.createElement("p");
                email.className = "text-gray-400 text-sm";
                email.textContent = user.email;

                // Create status badge
                let status = document.createElement("span");
                status.className = "bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full w-fit mt-2";
                status.textContent = "Active";

                // Append elements
                userInfo.append(username, email, status);

                card.append(img, userInfo);

                document.querySelector(".users").appendChild(card);

            })
        })
        .catch((err) => console.log(err));
}

getUsers();// pehli bar user get karna ka lia

document.querySelector("#refreshBtn").addEventListener("click",function(){
    getUsers();
})

//if i write code in event listner user will refesh hoga sir button click pa

//abhi button click aur window refresh dono pa horaha hai

