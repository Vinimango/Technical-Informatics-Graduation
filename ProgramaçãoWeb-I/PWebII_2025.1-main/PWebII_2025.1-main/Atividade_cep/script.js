document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    // Resetando os alertas
    resetAlerts();

    // Validar campos
    const cep = document.getElementById('cep').value;
    const logradouro = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;

    let isValid = true;

    if (cep.length < 8) {
        showAlert('cep', 'CEP deve ter 8 caracteres');
        isValid = false;
    }
    if (logradouro.length < 3) {
        showAlert('logradouro', 'Logradouro deve ter pelo menos 3 caracteres');
        isValid = false;
    }
    if (bairro.length < 3) {
        showAlert('bairro', 'Bairro deve ter pelo menos 3 caracteres');
        isValid = false;
    }
    if (cidade.length < 3) {
        showAlert('cidade', 'Cidade deve ter pelo menos 3 caracteres');
        isValid = false;
    }
    if (uf.length < 2) {
        showAlert('uf', 'UF deve ter 2 caracteres');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Consultar o ViaCEP apenas se o CEP for válido
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado!');
            } else {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('uf').value = data.uf;
            }
        })
        .catch(error => {
            alert('Erro ao buscar o CEP');
        });
});

function resetAlerts() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.textContent = '';
    });
}

function showAlert(field, message) {
    const alertElement = document.getElementById(`${field}-alert`);
    alertElement.textContent = message;
}