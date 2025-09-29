// Data for Market Sizing Chart
const marketSizeData = {
    labels: ['Total Addressable Market (TAM) - 6000000', 'Serviceable Addressable Market (SAM) - 2400000', 'Serviceable Obtainable Market (SOM)-36000'],
    datasets: [{
        label: 'Population',
        data: [6000000, 2400000, 36000],
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Create Market Sizing Chart
const marketSizeCtx = document.getElementById('marketSizeChart').getContext('2d');
const marketSizeChart = new Chart(marketSizeCtx, {
    type: 'bar',
    data: marketSizeData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value / 1000000 + 'M'; // Format y-axis labels in millions
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Market Size Estimation'
            }
        }
    }
});

// Data for Onboarding Funnel Chart
const funnelData = {
    labels: ['Sign Ups', 'KYC Complete', 'First Deposit', 'First Trade (Activated)'],
    datasets: [{
        label: 'User Count',
        data: [18000, 15300, 12240, 10550],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Create Onboarding Funnel Chart
const funnelCtx = document.getElementById('funnelChart').getContext('2d');
const funnelChart = new Chart(funnelCtx, {
    type: 'bar',
    data: funnelData,
    options: {
        indexAxis: 'y', // Makes the bar chart horizontal
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Data for Acquisition Channel Chart
const channelData = {
    labels: ['LinkedIn Ads', 'Organic Search', 'Referrals', 'Trading Hackathon', 'Other'],
    datasets: [{
        label: 'New Users',
        data: [7200, 4500, 3600, 1800, 900],
        backgroundColor: [
            '#0077B5', // LinkedIn Blue
            '#4285F4', // Google Blue
            '#34A853', // Green
            '#6f42c1', // Purple
            '#6c757d'  // Grey
        ]
    }]
};

// Create Acquisition Channel Chart
const channelCtx = document.getElementById('channelChart').getContext('2d');
const channelChart = new Chart(channelCtx, {
    type: 'doughnut',
    data: channelData,
    options: {
        responsive: true
    }
});