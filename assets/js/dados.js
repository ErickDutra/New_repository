const fs = require('fs');


fs.readFile('assets/data/profile.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        
        const dados = JSON.parse(data);

        
        function updatePortfolio(dados) {
            const portfolio = document.getElementById('profile.portfolio')
            portfolio.innerHTML = dados.itens.map(item => {
                return `<li class="item-carrosel current-item item">
                            <img src="${item.imagem}" alt="netflix copia login" class="project-img">
                            <a href="${item.url}" target="_blank">
                                <img src="./assets/icons/github.svg" alt="github">
                                <p>${item.titulo}</p>
                            </a>
                            <button class="open-popup-1">Info</button>
                            <dialog class="project-1">
                                <div>
                                    <h2>${item.titulo}</h2>
                                    <p>${item.descrição}</p>
                                </div>
                                <button>fechar</button>
                            </dialog>
                        </li>`
            }).join('');
        }

        // Chamando a função para atualizar o portfolio
        updatePortfolio(dados);

    } catch (error) {
        console.error('Erro ao analisar o JSON:', error);
    }
});
