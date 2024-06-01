let SiteNameInput = document.getElementById('SiteName');
let SiteURLInput = document.getElementById('SiteURL');

let sitesContainer = []
if (localStorage.getItem('allSites') != null) {
    sitesContainer = JSON.parse(localStorage.getItem('allSites'))
    displaySite()

}


function addSite() {
    if (ValidationName() == true && ValidationUrl() == true) {
        let site = {
            name: SiteNameInput.value,
            Url: SiteURLInput.value,
        }
        sitesContainer.push(site)
        localStorage.setItem('allSites', JSON.stringify(sitesContainer))
        displaySite()
        clearInputs()
        SiteNameInput.classList.remove("is-valid")
        SiteURLInput.classList.remove("is-valid")
    } else {
        alertVa()

    }

}




function displaySite() {
    let box = ""

    for (let i = 0; i < sitesContainer.length; i++) {
        box += `
        <tr>
                            <th class="ps-5">${i + 1}</th>
                            <td> ${sitesContainer[i].name}</td>
                            <td>   <button type="button" class="btn btn-success   visit"><a target="_blank" href="${sitesContainer[i].Url}"><i
                            class="  fa-solid fa-eye pe-2"></i>Visit</a></button></td>
                            <td> <button onclick="deleteItem(${i})" type="button" class="btn btn-danger"><i
                                        class="fa-solid fa-trash pe-2"></i>Delete</button></td>
                        </tr>`
    }
    document.getElementById('demo').innerHTML = box
}
function clearInputs() {
    SiteNameInput.value = ""
    SiteURLInput.value = ""
}



function deleteItem(index) {
    sitesContainer.splice(index, 1)
    localStorage.setItem('allSites', JSON.stringify(sitesContainer))
    displaySite()
}

function ValidationName() {
    var text = SiteNameInput.value
    var regex = /^[A-Z]{0-1}|[a-z]{3,20}$/

    if (regex.test(text) == true) {
        SiteNameInput.classList.add("is-valid");
        SiteNameInput.classList.remove("is-invalid");
        return true;


    } else {
        SiteNameInput.classList.add("is-invalid")
        SiteNameInput.classList.remove("is-valid")
        return false;

    }


}
function ValidationUrl() {
    var text = SiteURLInput.value
    const urlRegex = /^(?:https?|ftp):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::\d+)?(?:\/|\/(?:[\w#!:.?+=&%@!-/]))?$/;

    if (urlRegex.test(text) == true) {
        SiteURLInput.classList.add("is-valid");
        SiteURLInput.classList.remove("is-invalid");
        return true;


    } else {
        SiteURLInput.classList.add("is-invalid")
        SiteURLInput.classList.remove("is-valid")
        return false;

    }


}
function alertVa() {
    let alertVa = document.getElementById('modal');

    alertVa.classList.add("d-block")
    alertVa.classList.remove("d-none")

}

function closeModal() {
    let alertVa = document.getElementById('modal');

    alertVa.classList.add("d-none")
    alertVa.classList.remove("d-block")

}








