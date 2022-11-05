import {cors_fix, wolt_host, wolt_merchant_id, wolt_token} from './constants';

export const getApproxDeliveryTime = async (from: string, to: string) => {
    const response = await fetch(`${cors_fix}/${wolt_host}/${wolt_merchant_id}/delivery-fee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${wolt_token}`
        },
        body: JSON.stringify({
            "pickup": {
                "location": {
                    "formatted_address": `${from}`
                }
            },
            "dropoff": {
                "location": {
                    "formatted_address": `${to}`
                }
            }
        }),
    });

    if (!response.ok)
        return -1

    const result = await response.json();

    return result.time_estimate_minutes + Math.floor(Math.random() * 30);
};
