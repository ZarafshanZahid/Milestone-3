var form = document.getElementById('f1');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>personal information</h3>\n  <p><b>Name:</b>".concat(name, "</p>\n   <p><b>Name:</b>").concat(email, "</p> \n   <p><b>Name:</b>").concat(phone, "</p>\n\n  <h3>Educationn</h3>\n  <p><b>Name:</b>").concat(education, "</p>\n \n   <h3>experience</h3>\n  <p><b>Name:</b>").concat(experience, "</p>\n  \n   <h3>Skills</h3>\n  <p><b>Name:</b>").concat(skills, "</p>\n  ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Something is missing");
    }
});
