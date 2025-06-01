function cadastrarCliente(){
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;

    const cliente = {
        nome,
        telefone,
        email,
        endereco,
        cpf
    };

    localStorage.setItem('cliente', JSON.stringify(cliente));

    alert('cliente cadastrado!');

    document.getElementById('formCliente').reset();
}