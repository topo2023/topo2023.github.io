function topoCheckForm() {
    var acceptedConduct = document.getElementById("topo-checkbox-conduct").checked;
    var acceptedData = document.getElementById("topo-checkbox-data").checked;
    console.log(acceptedConduct);
    console.log(acceptedData);
    document.getElementById("topo-submit-button").disabled = !(acceptedConduct && acceptedData);
    console.log(!(acceptedConduct && acceptedData));
}

function topoRegistrationFormSelect(val) {
    abstractInput = document.getElementById("entry.1115675442");
    abstractLabel = document.getElementById("label-abstract");
    titleInput = document.getElementById("entry.618002362");
    titleLabel = document.getElementById("label-title");
    if (val==="Talk") {
        abstractInput.style.display = "block";
        abstractLabel.style.display = "block";
        titleInput.style.display = "block";
        titleLabel.style.display = "block";
    } else if (val==="Poster") {
        abstractInput.style.display = "none";
        abstractLabel.style.display = "none";
        titleInput.style.display = "block";
        titleLabel.style.display = "block";
    } else if (val==="Attend") {
        abstractInput.style.display = "none";
        abstractLabel.style.display = "none";
        titleInput.style.display = "none";
        titleLabel.style.display = "none";
    }
}
