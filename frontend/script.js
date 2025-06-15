// frontend/script.js
document.getElementById('fetchNodeApi').addEventListener('click', async () => {
    try {
        // Substitua esta URL pela URL do seu serviço Node.js no Render após o deploy
        const response = await fetch('https://ci-cd-test.onrender.com/');
        const text = await response.text();
        document.getElementById('message').innerText = `API Node.js: ${text}`;
    } catch (error) {
        document.getElementById('message').innerText = `Erro ao buscar API Node.js: ${error.message}`;
        console.error('Erro ao buscar API Node.js:', error);
    }
});

document.getElementById('fetchPythonApi').addEventListener('click', async () => {
    try {
        // Substitua esta URL pela URL do seu serviço Python no Render após o deploy
        const response = await fetch('https://ci-cd-test-python.onrender.com/'); // Exemplo de nome
        const data = await response.json();
        document.getElementById('pythonMessage').innerText = `API Python: ${data.message}`;
    } catch (error) {
        document.getElementById('pythonMessage').innerText = `Erro ao buscar API Python: ${error.message}`;
        console.error('Erro ao buscar API Python:', error);
    }
});

// Mensagem inicial de carregamento
document.getElementById('message').innerText = 'Clique para buscar API Node.js!';
document.getElementById('pythonMessage').innerText = 'Clique para buscar API Python!';
