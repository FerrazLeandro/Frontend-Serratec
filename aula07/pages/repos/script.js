var user = JSON.parse(localStorage.getItem("user"))
console.log(user)

document.getElementById('image').src = user.avatar_url
document.getElementById('name').innerText = user.name

async function pegarRepos() {
 var response = await fetch(user.repos_url)
 var repos = await response.json()

var main = document.getElementById('main')


//  for (var i = 0; i < repos.length; i++) {
//     console.log(repos[i].name)

//     main.innerHTML += `
//     <div class="card_container">
//         <strong id="namerepo" >${repos[i].name}</strong>
//         <span>${repos[i].language}</span>
//     </div>
//     `
//  }

 repos.forEach((repositorio) => {
    console.log(repositorio.name)

    main.innerHTML += `
    <div class="card_container">
        <strong>${repositorio.name}</strong>
        <span>${repositorio.language}</span>
    </div>
    `
 });

 
}

pegarRepos()