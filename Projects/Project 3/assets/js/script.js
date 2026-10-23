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
        //yaha bind na ya kia hai jese pehla jab hum  sirfsubmit form lik raha tha to aus sa ya horaha tha ka this hamara form 
        // ko apni value bana raha tha ya agar hum dirct function bhi le raha tha to bhi this haram form ko apni value bana 
        // raha tha lakin bind sa ya hua ka bind na hamara object ko this ki value bana dia  kune ka bind function  ki copy 
        // banata hai aur aus funtion ma jo this hota hai aus ko change kar ka this ki value ko obj kar deta ahi

        //agar question ya ya ka this ki value window kune nahi to ais ka answer ya hai ka wo aus cheez ko apni value banata 
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
    },
    removeUnser: function () { }
};

userManager.init()