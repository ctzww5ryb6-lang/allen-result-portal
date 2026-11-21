// Demo result records
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

function showResult() {
  const formId = document.getElementById("formId").value.trim().toUpperCase();
  displayResult(formId);
}

function displayResult(formId) {
  const error = document.getElementById("error");
  const result = document.getElementById("result");
  const student = results[formId];

  if (!student) {
    result.style.display = "none";
    error.textContent = "No result found for this Form ID. Please check and try again.";
    return;
  }

  const total = student.physics + student.chemistry + student.biology;
  const percentage = ((total / 720) * 100).toFixed(2);

  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentId").textContent = formId;
  document.getElementById("testName").textContent = student.test;
  document.getElementById("testDate").textContent = student.testDate;

  document.getElementById("physics").textContent = student.physics;
  document.getElementById("chemistry").textContent = student.chemistry;
  document.getElementById("biology").textContent = student.biology;
  document.getElementById("total").textContent = total;
  document.getElementById("percentage").textContent = percentage + "%";

  document.getElementById("physicsBar").style.width = (student.physics / 180 * 100) + "%";
  document.getElementById("chemistryBar").style.width = (student.chemistry / 180 * 100) + "%";
  document.getElementById("biologyBar").style.width = (student.biology / 360 * 100) + "%";

  error.textContent = "";
  result.style.display = "block";
  result.scrollIntoView({behavior:"smooth", block:"start"});
}

// Optional direct result link: index.html?id=2460638731
const params = new URLSearchParams(window.location.search);
const urlFormId = params.get("id");
if (urlFormId) {
  const formId = urlFormId.trim().toUpperCase();
  document.getElementById("formId").value = formId;
  displayResult(formId);
}
