## Bernnardo francisco de oliveira Silva RA: 10435832
# Exemplo de uso da Fetch API em um projeto JavaScript

Este projeto demonstra como utilizar o método assíncrono `fetch` no JavaScript para realizar requisições HTTP e exibir uma mensagem religiosa ao usuário. O projeto é composto por um arquivo HTML, um arquivo CSS, e um arquivo JavaScript, todos integrados para fornecer uma interface simples e funcional.

## Estrutura do projeto

A estrutura de arquivos do projeto é a seguinte:

```
fetch-example/
│
├── index.html
├── script.js
├── styles.css
└── arquivo.png
```

## Funcionamento do projeto

### 1. Arquivo `index.html`

O arquivo `index.html` contém a estrutura da página. Ele define um título, um botão, e uma área onde a mensagem será exibida ao clicar no botão. O arquivo também faz a ligação com o arquivo CSS (`styles.css`) e o arquivo JavaScript (`script.js`).

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API Exemplo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Fetch API Exemplo</h1>
        <button id="fetchButton">Obter Mensagem</button>
        <div id="output"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### 2. Arquivo `script.js`

Este é o arquivo JavaScript responsável por implementar a funcionalidade assíncrona com o método `fetch`. O código faz uma requisição HTTP para um recurso fictício e, quando a resposta é recebida, uma mensagem religiosa é exibida na página.

- **`fetch`**: O método `fetch` é utilizado para fazer uma requisição a uma API externa.
- **Promise e `.then()`**: A função `fetch` retorna uma **Promise**, e utilizamos o método `.then()` para processar a resposta, convertendo-a em formato JSON.
- **Exibição da mensagem**: Uma vez que os dados são recebidos, o conteúdo do `div` na página é atualizado para exibir uma mensagem religiosa em português.

```javascript
document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
    const output = document.getElementById("output");
    output.innerHTML = "Carregando...";

    
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na resposta da rede");
            }
            return response.json();
        })
        .then(data => {
            
            output.innerHTML = `
                <h2>Confie no Senhor</h2>
                <p>"Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento." – Provérbios 3:5</p>
            `;
        })
        .catch(error => {
            output.innerHTML = `Erro: ${error.message}`;
        });
}
```

### 3. Arquivo `styles.css`

O arquivo CSS estiliza a página de forma a deixá-la atraente e fácil de ler. O botão é centralizado e o conteúdo é apresentado de forma organizada com espaçamento adequado.

- **Botão estilizado**: O botão muda de cor quando o mouse passa sobre ele.
- **Área de saída (`output`)**: A área onde a mensagem é exibida possui bordas arredondadas e uma leve sombra para destacá-la.

```css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

h1 {
    color: #4CAF50;
    text-align: center;
    margin-bottom: 20px;
}

#fetchButton {
    display: block;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    margin: 0 auto;
}

#fetchButton:hover {
    background-color: #45a049;
}

#output {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: center;
}

h2 {
    color: #333;
    margin-bottom: 10px;
}

p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
}
```

## Funcionamento do método `fetch`

O método `fetch` utilizado neste projeto demonstra a funcionalidade de fazer requisições HTTP e receber dados de um servidor. No exemplo, a requisição é feita para um serviço fictício e, quando os dados são recebidos, uma mensagem religiosa é exibida no corpo da página.

### Passos para o funcionamento:

1. O usuário clica no botão **"Obter Mensagem"**.
2. O método `fetch` faz uma requisição a um serviço web.
3. O resultado da requisição é convertido para JSON e exibido na tela.
4. Em caso de erro, uma mensagem de erro é exibida.

## Visualização

Veja abaixo uma captura de tela do projeto em funcionamento:

![image](https://github.com/user-attachments/assets/00defc04-fc60-4086-81db-473d862bba6d)

![Exemplo de Projeto](./arquivo.png)

A imagem acima mostra como o projeto aparece após a requisição ser concluída com sucesso.

## Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fetch-example.git
   ```

2. Abra o arquivo `index.html` no navegador.

## Conclusão

Este projeto serve como uma introdução simples ao uso da Fetch API para realizar requisições assíncronas em JavaScript. Ao clicar no botão, o usuário pode ver uma mensagem religiosa em português, proporcionando uma experiência interativa e fácil de entender sobre como a Fetch API funciona.

