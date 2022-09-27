document.getElementById("submit").onclick = async () => {
   var username = document.getElementById("username").value;

   var response = await fetch('https://api.github.com/users/ferrazleandro');
   var user = await response.json()

    localStorage.setItem("user", JASON.stringfy(user))


   window.location.href = '../repos/index.html'
}