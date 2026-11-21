// Demo Student Results
const results = {

    "2460638731": {
        name: "Harshit Kumar",
        test: "Minor Test CBT Mode",
        testDate: "21 Nov, 2026",
        physics: 138,
        chemistry: 150,
        biology: 310
    },

    "123456": {
        name: "Sakshi Priyashi",
        test: "Practice Test 01",
        testDate: "Date not provided",
        physics: 120,
        chemistry: 145,
        biology: 320
    },

    "2461004056": {
        name: "Divyanshu Kiahan",
        test: "Practice Test 02",
        testDate: "Date not provided",
        physics: 160,
        chemistry: 150,
        biology: 325
    }

};


// Show Result Function
function showResult() {

    const formId = document.getElementById("formId")
        .value
        .trim()
        .toUpperCase();

    displayResult(formId);
}


// Display Result Function
function displayResult(formId) {

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    if (!results[formId]) {

        result.style.display = "none";

        error.textContent =
            "No demo result found for this Form ID. Please try again.";

        return;
    }

    const student = results[formId];


    // Calculate Total
    const total =
        student.physics +
        student.chemistry +
        student.biology;


    // Calculate Percentage
    const percentage =
        ((total / 720) * 100).toFixed(2);


    // Student Information
    document.getElementById("studentName").textContent =
        student.name;

    document.getElementById("studentId").textContent =
        formId;


    // Test Information
    document.getElementById("testName").textContent =
        student.test || "Test details unavailable";

    document.getElementById("testDate").textContent =
        student.testDate || "Date not provided";


    // Subject Marks
    document.getElementById("physics").textContent =
        student.physics;

    document.getElementById("chemistry").textContent =
        student.chemistry;

    document.getElementById("biology").textContent =
        student.biology;


    // Total Score
    document.getElementById("total").textContent =
        total;


    // Percentage
    document.getElementById("percentage").textContent =
        percentage + "%";


    // Subject Percentage
    const physicsPercent =
        (student.physics / 180) * 100;

    const chemistryPercent =
        (student.chemistry / 180) * 100;

    const biologyPercent =
        (student.biology / 360) * 100;


    // Animated Progress Bars
    document.getElementById("physicsBar").style.width =
        physicsPercent + "%";

    document.getElementById("chemistryBar").style.width =
        chemistryPercent + "%";

    document.getElementById("biologyBar").style.width =
        biologyPercent + "%";


    // Display Subject Percentages
    document.getElementById("physicsPercent").textContent =
        physicsPercent.toFixed(1) + "%";

    document.getElementById("chemistryPercent").textContent =
        chemistryPercent.toFixed(1) + "%";

    document.getElementById("biologyPercent").textContent =
        biologyPercent.toFixed(1) + "%";


    // Clear Error
    error.textContent = "";


    // Show Result
    result.style.display = "block";


    // Smooth Scroll
    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// Check Form ID From URL
const params = new URLSearchParams(window.location.search);

const urlFormId = params.get("id");

if (urlFormId) {

    const formId = urlFormId
        .trim()
        .toUpperCase();

    document.getElementById("formId").value = formId;

    displayResult(formId);

}