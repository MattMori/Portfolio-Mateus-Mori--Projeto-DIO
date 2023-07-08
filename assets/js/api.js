
// Função assíncrona que busca os dados do perfil
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/MattMori/Portfolio-Mateus-Mori--Projeto-DIO/main/data/profile.json';
    // Define a URL de onde os dados serão buscados.
    const response = await fetch(url)
     // Faz uma solicitação HTTP assíncrona para a URL fornecida e aguarda a resposta.
    const profileData = await response.json()
     // Converte a resposta em formato JSON em um objeto JavaScript e aguarda o resultado
    return profileData
    // Retorna os dados do perfil obtidos
}
