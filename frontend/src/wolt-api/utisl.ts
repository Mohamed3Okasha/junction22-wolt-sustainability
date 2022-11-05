import { cors_fix, wolt_host, wolt_merchant_id, wolt_token } from './constants';

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

export const requestDelivery = async (from: string, to: string, scheduled_time: string|null) => {
    const response = await fetch(`${cors_fix}/${wolt_host}/${wolt_merchant_id}/delivery-order`, {
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
                },
                "comment": "The box is in front of the door",
                "contact_details": {
                    "name": "John Doe",
                    "phone_number": "+358123456789",
                    "send_tracking_link_sms": false
                }
            },
            "dropoff": {
                "location": {
                    "formatted_address": `${to}`
                },
                "contact_details": {
                    "name": "John Doe's wife",
                    "phone_number": "+358123456789",
                    "send_tracking_link_sms": false
                },
                "comment": "Leave at the door, please"
            },
            "customer_support": {
                "email": "string",
                "phone_number": "string",
                "url": "string"
            },
            "merchant_order_reference_id": null,
            "is_no_contact": true,
            "contents": [
                {
                    "count": 1,
                    "description": "affordable and tasty meal",
                    "identifier": "12345",
                    "tags": []
                }
            ],
            "tips": [],
            "min_preparation_time_minutes": scheduled_time ? 0 : 10,
            "scheduled_dropoff_time": scheduled_time
        })
    });

    if (!response.ok)
        return -1

    const result = await response.json();

    return result.tracking.url
}
