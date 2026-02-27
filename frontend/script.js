const api_url = "https://localhost:8080/usuarios";

function listarUsuarios() {
  fetch(api_url).then(res => res.json())
    .then(dados => {
      const tabela = document.getElementById("tabelaUsuarios");
      tabela.innerHTML = "";
      dados.forEach(usuario => {
        tabela.innerHTML += `
            <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td class= "actions">
            <button onclick="editarUsuarios(${usuario.id}, '${usuario.nome}')
            <button onclick= "excluirUsuario(${usuario.id})">Excluir</button> 
            </td>
            </tr>
            ;
            `
      })
    })
    .catch(err => alert("Erro ao listar usuários"))

  function salvarUsuarios() {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value

    if (!nome || !email) {
      alert("Preencha todos os campos");
      return
    }

    const usuarios = { nome, email };

    if (id) {
      fetch(api_url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(usuario)
      }).then(() => {
        limparFormulario();
        listarUsuarios;
      })
    }
  }

  function editarUsuario(id, nome, email){
    document.getElementById("id").value = id;
    document.getElementById("nome").value = nome;
    document.getElementById("email").value = email;
  
  }


  function excluirUsuario(id){
    if(!confirm("Deseja realmente excluir?")) {
      
    }
  }

}