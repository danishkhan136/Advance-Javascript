// HTML elements ko pakarna
const detailsBtn = document.getElementById("detailsBtn");
const dataListContainer = document.getElementById("dataListContainer");

// Button par click event lagana
detailsBtn.addEventListener("click", function () {

    // LocalStorage se data nikalna
    let storedData = localStorage.getItem("studentInfo");

    if (storedData) {
        // String ko wapas Object banana
        let userData = JSON.parse(storedData);

        // Data ko HTML ke spans mein dalna
        document.getElementById("rName").innerText = userData.fullName;
        document.getElementById("rEmail").innerText = userData.emailAddress;
        document.getElementById("rAge").innerText = userData.userAge;
        document.getElementById("rMobile").innerText = userData.phone;
        document.getElementById("rGender").innerText = userData.gender;

        // Skills array ko comma se jodna
        document.getElementById("rSkills").innerText = userData.skills.join(", ");

        // Button ko hide karna
        detailsBtn.style.display = "none";

        // List ko show karna
        dataListContainer.style.display = "block";

    } else {
        alert("Koi data nahi mila! Pehle index.html se form fill karein.");
    }
});