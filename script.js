function updateStatus() {
    const discordPercentage = document.getElementById('discord-percentage').value;
    document.getElementById('discord-progress').style.width = discordPercentage + '%';
    const discordStatus = discordPercentage < 100 ? 'Active' : 'Online';
    document.getElementById('discord-status').innerText = discordStatus;

    // Hier kannst du die anderen Balken ebenfalls aktualisieren
    // Beispiel:
    // const v3Percentage = 50; // Füge hier eine Logik hinzu
    // document.getElementById('v3-progress').style.width = v3Percentage + '%';
    // document.getElementById('v3-status').innerText = 'Soon'; // Aktualisiere den Status
}
