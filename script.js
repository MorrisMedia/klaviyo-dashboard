document.addEventListener('DOMContentLoaded', () => {
    fetchCampaigns();
});

function fetchCampaigns() {
    // Replace 'YOUR_KLAVIYO_API_KEY' with your actual Klaviyo API key
    const apiKey = 'YOUR_KLAVIYO_API_KEY';
    const url = 'https://a.klaviyo.com/api/v1/campaigns';

    fetch(url, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => displayCampaigns(data))
    .catch(error => console.error('Error fetching campaigns:', error));
}

function displayCampaigns(campaigns) {
    const campaignList = document.getElementById('campaign-list');
    campaignList.innerHTML = '';

    campaigns.forEach(campaign => {
        const campaignDiv = document.createElement('div');
        campaignDiv.classList.add('campaign');
        campaignDiv.innerHTML = `
            <h3>${campaign.name}</h3>
            <p>Open Rate: ${campaign.open_rate}</p>
            <p>Click Rate: ${campaign.click_rate}</p>
        `;
        campaignList.appendChild(campaignDiv);
    });
}
