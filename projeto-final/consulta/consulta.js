var json = localStorage.getItem("cpf");
var cpf = JSON.parse(json);
document.getElementById("inputCpf").value = cpf;


const limparFormulario = () => {
    document.getElementById("inputNome").value = '';
    document.getElementById("inputCpf").value = '';
    document.getElementById("inputEmail").value = '';
    document.getElementById("inputTelefone").value = '';
    document.getElementById('inputStatus').value = '';
}



document.getElementById("consultar").onclick = pesquisar;

async function pesquisar() {
    var cpf = document.getElementById("inputCpf").value;

    if (cpf === '' || cpf.length < 11) {
        alert('CPF inválido')
    } else {
        var repo = await fetch("https://6333633c433198e79dc444a9.mockapi.io/cadastro/");
        var pessoas = await repo.json();
        var pessoa

        if (pessoa = pessoas.find((pessoas) => pessoas.cpf === cpf)) {
            document.getElementById("inputNome").value = pessoa.nome;
            document.getElementById("inputTelefone").value = pessoa.telefone;
            document.getElementById("inputEmail").value = pessoa.email;
            document.getElementById("inputStatus").value = pessoa.status;
        } else {
            alert("CPF " + cpf + " não encontrado :(");
            limparFormulario();
        }
        localStorage.removeItem('cpf');
        localStorage.clear();

    }

}