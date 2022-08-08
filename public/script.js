const baseUrl = window.location.origin
console.log(baseUrl);

function getRule() {
    const url = `${baseUrl}/api/rules`
    const ruleContainer = document.getElementById("getRule")
    fetch(url, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            let { name, description } = data[0];
            let ruleCard = `<div class="ruleCard">
                <h2>${name}</h2>
                <h3>${description}</h3>
            </div>`
            ruleContainer.innerHTML = ruleCard
        })
        .catch(error => console.error(error))
}

function addRule() {
    const url = `${baseUrl}/api/new`
    const name = document.getElementById("rule-form-name").value
    const description = document.getElementById("rule-form-description").value
    const body = [{
        name: name,
        description: description
    }]
    fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            document.getElementById("rule-form-name").value = ""
            document.getElementById("rule-form-description").value = ""
        })
}