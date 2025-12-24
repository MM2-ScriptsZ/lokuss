// Placeholder for task gating + Linkvertise
const submitKey = document.getElementById('submitKey');
const userKey = document.getElementById('userKey');
const keyMessage = document.getElementById('keyMessage');

submitKey.addEventListener('click', () => {
    const key = userKey.value.trim();
    if(!key) return keyMessage.textContent = "Please enter a key.";

    // TODO: Call your backend API for key validation here
    keyMessage.textContent = "Validating key...";
    
    // Simulate async check
    setTimeout(() => {
        // Example: replace with real API response
        if(key === "TEST-KEY") {
            keyMessage.textContent = "✅ Key valid! Redirecting...";
            // window.location.href = "dashboard.html"; // Example redirect
        } else {
            keyMessage.textContent = "❌ Invalid key. Complete the task or check link.";
        }
    }, 1500);
});
