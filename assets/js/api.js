
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/MattMori/Portfolio-Mateus-Mori--Projeto-DIO/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
