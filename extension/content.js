chrome.storage.local.get("selectedText", async (data) => {
    if (data.selectedText) {
        console.log("Content script received selected text:", data.selectedText);
        
        try {
            const response = await fetch("http://127.0.0.1:5001/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: data.selectedText })
            });

            const result = await response.json();
            
            if (result.summary) {
                chrome.storage.local.set({ summary: result.summary }, () => {
                    showCustomAlert(result.summary);
                });
            } else {
                alert("Summarization failed.");
            }
        } catch (error) {
            console.error("Error fetching summary:", error);
            alert("Failed to get summary.");
        }
    }
});


// Function to show custom alert
function showCustomAlert(message) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    // Create alert box
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.backgroundColor = 'white';
    alertBox.style.padding = '20px';
    alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.zIndex = '1000';
    alertBox.innerHTML = `
        <p>${message}</p>
        <div style="display: flex; justify-content: space-between; margin-top: 10px;">
            <button id="readSummaryButton" style="flex: 1; margin-right: 10px;">Read Summary</button>
            <button id="closeAlertButton" style="flex: 1;">Close</button>
        </div>
    `;
    document.body.appendChild(alertBox);

    // Add event listeners
    document.getElementById('closeAlertButton').addEventListener('click', function() {
        document.body.removeChild(overlay);
        document.body.removeChild(alertBox);
    });

    document.getElementById('readSummaryButton').addEventListener('click', function() {
        const utterance = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(utterance);
    });
}