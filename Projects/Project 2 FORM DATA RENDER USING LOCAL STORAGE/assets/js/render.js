// HTML elements ko pakarna
const detailsBtn = document.querySelector("#detailsBtn");
const dataListContainer = document.querySelector("#dataListContainer");
const tableBody = document.querySelector("#tableBody");

detailsBtn.addEventListener("click", function () {

    // LocalStorage se data nikalna
    let storedData = localStorage.getItem("studentInfo");

    if (storedData) {
        // String ko wapas Array (Object ki list) banana
        let studentsArray = JSON.parse(storedData);

        // Pehle se agar table mein kuch ho toh usay clear kar do
        tableBody.innerHTML = "";

        // 🌟 Asli Magic: Array par Loop chalana 🌟
        studentsArray.forEach(function (user) {

            // Har user ke liye ek nayi HTML row (tr) banana Template Literals se
            let rowHTML = `
                <tr>
                    <td>${user.fullName}</td>
                    <td>${user.emailAddress}</td>
                    <td>${user.userAge}</td>
                    <td>${user.phone}</td>
                    <td>${user.gender}</td>
                    <td>${user.skills.join(", ")}</td>
                </tr>
            `;

            // Is row ko table body ke andar add (append) karna
            tableBody.innerHTML += rowHTML;
        });

        // Button ko hide karna
        detailsBtn.style.display = "none";

        // Table wale container ko show karna
        dataListContainer.style.display = "block";

    } else {
        alert("NO ENTRY FOUND");
    }
});

// no entry found screen 
// show and hide password and show password when you match root password