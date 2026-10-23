let form = document.querySelector("form");

let username = document.querySelector("#username");
let useremail = document.querySelector("#useremail");
let userage = document.querySelector("#userage");
let usernumber = document.querySelector("#usernumber");
let userpassword = document.querySelector("#userpassword");


form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = username.value.trim();
    const email = useremail.value.trim();
    const age = Number(userage.value);
    const mobile = usernumber.value.trim();
    const password = userpassword.value;

    let selectedSkills = [];
    let skillBoxes = document.querySelectorAll('input[name="skills"]:checked');
    skillBoxes.forEach(function (box) {
        selectedSkills.push(box.value);
    });

    let genderInput = document.querySelector('input[name="gender"]:checked');

    if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        username.focus();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Unvalid email");
        useremail.focus();
        return;
    }

    if (age < 1 || age > 100 || userage.value.trim() === "") {
        alert("age is not beween 1 to 100");
        userage.focus();
        return;
    }

    const mobilePattern = /^(?:\+923|03)\d{9}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Enter a valid Pakistani mobile number.");
        usernumber.focus();
        return;
    }

    if (selectedSkills.length === 0) {
        alert("Please select at least one skill.");
        return;
    }

    const passwordPattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;

    if (!passwordPattern.test(userpassword.value)) {
        alert(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );

        userpassword.focus();
        return;
    }


    if (!genderInput) {
        alert("Please select your gender.");
        return;
    }

    let userGender = genderInput.value;


    const userData = {
        fullName: name,
        emailAddress: email,
        userAge: age,
        phone: mobile,
        skills: selectedSkills,
        gender: userGender,
        password: password
    };


    let existingData = localStorage.getItem("studentInfo");

    let studentsArray = [];

    if (existingData) {
        studentsArray = JSON.parse(existingData);
    }


    studentsArray.push(userData);

    localStorage.setItem("studentInfo", JSON.stringify(studentsArray));

    alert("Form submitted successfully!");

})
