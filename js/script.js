
// User Interface Logic
function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input:checked");
    const userSelectionsArray = Array.from(userSelections);
    const resetButton = document.getElementById('reset')
    const resultsHeading = document.createElement("h2");
    resultsHeading.append("You selected: ");
    document.body.append(resultsHeading);
    resetButton.addEventListener('click', function() {
        window.location.reload();
    });
    userSelectionsArray.forEach(function(element) {
        const paragraph = document.createElement("p");
        paragraph.append(element.value);
        document.body.append(paragraph);
    })
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#flavorlist").addEventListener("submit", handleForm);
  

});
