async function fetchProfileData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ErickDutra/New_repository/main/assets/data/profile.json"
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do perfil");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar os dados do perfil:", error);
    return null;
  }
}

async function updatePortfolio() {
    try {
  const profileData = await fetchProfileData();
  if (profileData) {
    const portfolio = document.getElementById("projects-card");
    portfolio.innerHTML = profileData.itens
      .map((item) => {
        return `<div class="projects-box-item">
                            <img class="img-stack" src="${item.imagem}" alt="">
                            <h2>${item.title}</h2>
                            <p>${item.descricao}</p>
                            <a href="${item.url}" class="btn-image" ><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=purple" alt=""></a>
                        </div>`;
      })
      .join("");
  }
  
}catch (error) {
    console.error('Erro ao atualizar o portfólio:', error);
} }

updatePortfolio();
