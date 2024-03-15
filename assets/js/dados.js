async function fetchProfileData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ErickDutra/New_repository/main/assets/data/profile.json');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do perfil');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar os dados do perfil:', error);
        return null;
    }
}

async function updatePortfolio() {
    try {
        const profileData = await fetchProfileData();
        if (profileData) {
            const portfolio = document.getElementById('profile.portfolio');
            portfolio.innerHTML = profileData.itens.map(item => {
                return `<li class="item-carrosel current-item item  " >
                <h2>
                   ${item.title} 
                </h2>
                <img src="${item.imagem}" alt="${item.title}" class="project-img">
                    <div class="project-info">
                    <p>
                        ${item.descricao} 
                    </p>
                    <a href="${item.url}">
                        <img src="./assets/icons/github.svg" alt="github">
                        <p>
                            ir para Github
                        </p>
                    </a>
                </div>
            </li>`;
            }).join('');
        }
    } catch (error) {
        console.error('Erro ao atualizar o portfólio:', error);
    }
}

updatePortfolio();
