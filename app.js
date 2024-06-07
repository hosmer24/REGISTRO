document.addEventListener('DOMContentLoaded', (event) => {
    const logDiv = document.getElementById('log');

    async function fetchData() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            logDiv.innerHTML = data.map(entry => `<p>${entry.timestamp} - ID: ${entry.id}</p>`).join('');
        } catch (error) {
            logDiv.innerHTML = 'Error fetching data';
        }
    }

    fetchData();
    setInterval(fetchData, 5000); // Refresh data every 5 seconds
});
