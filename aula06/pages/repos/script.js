var user = JSON.parse(localStorage.getItem("user"))
console.log(user)

document.getElementById('image').src = user.avatar_url
document.getElementById('name').innerText = user.name

async function pegarRepos() {
 var response = await fetch(user.repos_url)
 var repos = await response.json()

var main = document.getElementById('main')

 for (var i = 0; i < repos.length; i++) {
    console.log(repos[i])

    main.innerHTML += `
    <div class="card_container">
        <strong>Clone-Tesla</strong>

}