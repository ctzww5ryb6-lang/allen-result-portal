const results = {
    "DEMO001": {
        name: "Harshit Kumar",
        test: "Practice Test 01",
        physics: 145,
        chemistry: 157,
        biology: 308
    },

    "DEMO002": {
        name: "Rahul Sharma",
        test: "Practice Test 01",
        physics: 120,
        chemistry: 145,
        biology: 277
    },

    "DEMO003": {
        name: "Aman Kumar",
        test: "Practice Test 02",
        physics: 160,
        chemistry: 150,
        biology: 325
    }
};


function showResult() {

    const formId = document.getElementById("formId")
        .value
        .trim()
        .toUpperCase();

    displayResult(formId);
}


function displayResult(formId) {

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    if (!results[formId]) {

        result.style.display = "none";

        error.textContent =
            "No demo result found for this Form ID.";

        return;
    }

    const student = results[formId];

    const total =
        student.physics +
        student.chemistry +
        student.biology;

    const percentage =
        ((total / 720) * 100).toFixed(2);


    document.getElementById("studentName").textContent =
        student.name;

    document.getElementById("studentId").textContent =
        formId;

    document.getElementById("testName").textContent =
        student.test;

    document.getElementById("physics").textContent =
        student.physics;

    document.getElementById("chemistry").textContent =
        student.chemistry;

    document.getElementById("biology").textContent =
        student.biology;

    document.getElementById("total").textContent =
        total;

    document.getElementById("percentage").textContent =
        percentage + "%";


    document.getElementById("physicsBar").style.width =
        (student.physics / 180 * 100) + "%";

    document.getElementById("chemistryBar").style.width =
        (student.chemistry / 180 * 100) + "%";

    document.getElementById("biologyBar").style.width =
        (student.biology / 360 * 100) + "%";


    error.textContent = "";

    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth"
    });
}


/* Check Form ID from URL */

const params = new URLSearchParams(window.location.search);

const urlFormId = params.get("id");

if (urlFormId) {

    const formId = urlFormId
        .trim()
        .toUpperCase();

    document.getElementById("formId").value = formId;

    displayResult(formId);
}