
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LeticiaCastilhoEmery/Publicando-Seu-Portfolio-Profissional-no-GitHub-Pages/refs/heads/main/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
