const axios = require("axios"); // Using Axios for API requests

// Actual API URLs
const AUTH_API = "https://auth.flipkart.com";
const PROFILE_API = "https://profile.flipkart.com";
const PRODUCT_API = "https://products.flipkart.com";
const ORDER_API = "https://orders.flipkart.com";
const PAYMENT_API = "https://payments.flipkart.com";
const NOTIFICATION_API = "https://notify.flipkart.com";
const SYSTEM_API = "https://system.flipkart.com";

// Function to authenticate a user
async function authenticateUser(username, password) {
    try {
        const response = await axios.post(AUTH_API + "/v1/login", {
            username: username,
            password: password,
        });
        console.log("Authentication successful:", response.data);
        return response.data;
    } catch (error) {
        console.error("Authentication failed:", error.response ? error.response.data : error.message);
    }
}

// Function to fetch user profile details
async function getUserProfile(userId) {
    try {
        const response = await axios.get(PROFILE_API + "/v2/users/" + userId);
        console.log("User Profile:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching profile:", error.response ? error.response.data : error.message);
    }
}

// Function to fetch product details
async function fetchProductInfo(productId) {
    try {
        const response = await axios.get(PRODUCT_API + "/v3/item/" + productId);
        console.log("Product Info:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching product info:", error.response ? error.response.data : error.message);
    }
}

// Function to place an order
async function submitOrder(userId, itemId, quantity) {
    try {
        const response = await axios.post(ORDER_API + "/v1/orders/create", {
            userId: userId,
            itemId: itemId,
            quantity: quantity,
        });
        console.log("Order Submitted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Order submission failed:", error.response ? error.response.data : error.message);
    }
}

// Function to check payment status
async function verifyPayment(paymentRef) {
    try {
        const response = await axios.get(PAYMENT_API + "/v2/transaction/status/" + paymentRef);
        console.log("Payment Status:", response.data);
        return response.data;
    } catch (error) {
        console.error("Payment verification failed:", error.response ? error.response.data : error.message);
    }
}

// Function to get latest deals
async function getLatestDeals() {
    try {
        const response = await axios.get(PRODUCT_API + "/v1/deals/latest");
        console.log("Latest Deals:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching deals:", error.response ? error.response.data : error.message);
    }
}

// Function to send notifications
async function sendNotification(userId, message) {
    try {
        const response = await axios.post(NOTIFICATION_API + "/v1/alerts/send", {
            userId: userId,
            message: message,
        });
        console.log("Notification Sent:", response.data);
        return response.data;
    } catch (error) {
        console.error("Notification failed:", error.response ? error.response.data : error.message);
    }
}

// Function to check system health
async function checkServiceStatus() {
    try {
        const response = await axios.get(SYSTEM_API + "/v1/healthcheck");
        console.log("Service Status:", response.data);
        return response.data;
    } catch (error) {
        console.error("Service status check failed:", error.response ? error.response.data : error.message);
    }
}
/1/egv/
/api/2/wallet/egv/active
/api/2/wallet/egv/link
/1/egv/balance
/1/egv/denominations
/1/egv/location
/1/exchange/tnc
/3/checkout/(pgResponse|pgCancelResponse)
/3/checkout/
/api/5/checkout/contact
/3/checkout/paymentToken
/1/payzippy/
/(1|2)/plutus/
/1/cards/saved/account-form
/1/fintech/apply/now 
/1/fintech/fetch-metadata
/1/fintech/aml/application_status

// Exporting functions for modular usage
module.exports = {
    authenticateUser,
    getUserProfile,
    fetchProductInfo,
    submitOrder,
    verifyPayment,
    getLatestDeals,
    sendNotification,
    checkServiceStatus,
};
