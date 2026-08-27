    const form = document.getElementById("issueForm");
form.addEventListener("submit",async function(event){
    
    event.preventDefault();
    const formData = new FormData(form);
    const name = 
    formData.get("userName");
        const usn =
    formData.get("USN"); 
        const location = 
    formData.get("location");
        const category = 
    formData.get("category");
        const describtion = 
    formData.get("description");
        const ratings =
    formData.get("ratings");
        const photo = formData.get("photo");
       let photoData = "";

        if (photo && photo.size > 0) {
            photoData = await new Promise(function(resolve, reject) {

            const reader = new FileReader();

            reader.onload = function() {
                resolve(reader.result);
        };

        reader.onerror = function() {
            reject(reader.error);
        };

        reader.readAsDataURL(photo);

    });
}
        

    console.log("Name:",name);
    console.log("USN:",usn);
    console.log("Location:",location);
    console.log("Category:",category);
    console.log("Description:",describtion);
    console.log("Ratings:",ratings);
        let reports =
    document.getElementById("reports");

    if(!reports){
        reports=
    document.createElement("div");
        reports.id="reports";
    document.body.appendChild(reports);

    }
        const reportCard =
    document.createElement("div");
    reportCard.className =
    "report-card";
    reportCard.innerHTML= `
        <h3>Campus issue Report</h3>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>USN:</strong>${usn}</p>
        <p><strong>Location:</strong>${location}</p>
        <p><strong>category:</strong>${category}</p>
        <p><strong>Description:</strong>${describtion}</p>
        <p><strong>Ratings:</strong>${ratings}</p>
        `;
        reports.appendChild(reportCard);
        const savedReports =
        JSON.parse(localStorage.getItem("reports"))||[];
        const reportId =
            "RPT-"+Date.now();
        savedReports.push({
            reportId: reportId,
            name: name,
            usn: usn,
            location: location,
            category: category,
            description: describtion,
            ratings: ratings,
            photo: photoData,
            status: "Reported"
        });
        localStorage.setItem("reports",JSON.stringify(savedReports));
        document.getElementById("successMessage").innerHTML =
            "Your issue has been successfully submitted!<br><br>" +
            "<strong>Your Report ID is: " + reportId + "</strong><br>" +
            "Please save this ID to track your report.";

        alert("Thank you, " + name +"! Your report has been submitted.\n\n" +"Your Report ID is: " + reportId
    );
        
});
//const savedReports =
///JSON.parse(localStorage.getItem("reports"))||[];