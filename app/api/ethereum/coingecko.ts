import axios from 'axios';

async function getEthToUsdRate() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const ethToUsdRate = response.data.ethereum.usd;
        return ethToUsdRate;
    } catch (error) {
        console.error('Error fetching the ETH to USD rate:', error);
        return null;
    }
}

export async function convertEthToUsd(ethAmount: number) {
    const ethToUsdRate = await getEthToUsdRate();
    if (ethToUsdRate !== null) {
        return ethAmount * ethToUsdRate;
    } else {
        throw new Error('Unable to fetch the ETH to USD rate.');
    }
}
