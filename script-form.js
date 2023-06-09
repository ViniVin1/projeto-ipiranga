const form = document.getElementById('form-pesquisa');
const pegaModal = document.getElementById('modal')

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const formData = new FormData(form);

      fetch('http://127.0.0.1:5000/pesquisa', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Exibe o modal com a mensagem 'Dados enviados com sucesso!!'
        $('#modal').modal('show');
        form.reset();
      })
      .catch(error => console.error(error));
    });

    // Fecha o modal
    function fechaModal() {
      $('#modal').modal('hide');
    }