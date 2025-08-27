
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LeticiaCastilhoEmery/Publicando-Seu-Portfolio-Profissional-no-GitHub-Pages/refs/heads/main/Publicando%20Seu%20Portf%C3%B3lio%20Profissional%20no%20GitHub%20Pages/data/profile.json;
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
