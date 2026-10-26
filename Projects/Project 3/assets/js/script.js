let form = document.querySelector("form");
let username = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let profile = document.querySelector("#photoUrl")


const userManager = {
    users: [],//blank array
    init: function () {
        // form.addEventListener("submit", this.submitForm.bind(userManager));
        form.addEventListener("submit", this.submitForm.bind(this));
        // yaha bind na ya kia hai jese pehla jab hum  sirfsubmit form lik raha tha to aus sa ya horaha tha ka this hamara form 
        // ko apni value bana raha tha ya agar hum direct function bhi le raha tha to bhi this hamara form ko apni value bana 
        // raha tha lakin bind sa ya hua ka bind na hamara object ko this ki value bana dia  kune ka bind function  ki copy 
        // banata hai aur aus funtion ma jo this hota hai aus ko change kar ka this ki value ko obj kar deta ahi

        // agar question ya ya ka this ki value window kune nahi to ais ka answer ya hai ka wo aus cheez ko apni value banata 
        // hai jahan wo function ya object rakha hota hai

        //pehla this ma this form nahi hai lakin wo usermanager hi hai usermanager hi hai lakin jab tum form submit ma jata hoo
        //  to this ki value form ban jati hai ais lia tum bind karta hoo this ki value userManager hi reha

    },
    submitForm: function (e) {
        e.preventDefault(
            this.addUser()
        );

    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            profile: profile.value
        });

        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".users").innerHTML="";
        this.users.forEach(function (user) {
            // 1. Create the main container div
            const card = document.createElement('div');
            card.className = 'bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center';

            // 2. Create the image element
            const img = document.createElement('img');
            img.className = 'w-28 h-28 rounded-full object-cover mb-5 border-4 border-purple-200 shadow-sm';
            img.src = user.profile;
            img.alt = 'User Photo';

            // 3. Create the h2 element for the name
            const name = document.createElement('h2');
            name.className = 'text-2xl font-bold mb-1 text-blue-700';
            name.textContent = user.username;

            // 4. Create the first p element for the job role
            const role = document.createElement('p');
            role.className = 'text-purple-500 mb-2 font-medium';
            role.textContent = user.role;

            // 5. Create the second p element for the description
            const desc = document.createElement('p');
            desc.className = 'text-gray-700 text-center';
            desc.textContent = user.bio;

            // 6. Append all child elements to the main container
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(desc);

            // Optional: Append the newly created card to the DOM (e.g., inside the body)
            document.querySelector(".users").appendChild(card);
        })
    },
    removeUnser: function () { 
        // remove user bana hai click listener kar kaa pop nahi karna kune ka wo last wala hata dega aur remove user karta hii 
        // render ui chalana hai
    },
};

userManager.init()