document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
    const output = document.getElementById("output");
    output.innerHTML = "Carregando...";

    // Fazendo uma requisição HTTP GET usando fetch
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na resposta da rede");
            }
            return response.json();
        })
        .then(data => {
            // Manipulando os dados recebidos
            output.innerHTML = `
                <h2>Confie no Senhor</h2>
                <p>"Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento." – Provérbios 3:5</p>
            `;
        })
        .catch(error => {
            output.innerHTML = `Erro: ${error.message}`;
        });
}
