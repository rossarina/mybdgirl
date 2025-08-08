// Function to open specific tab content
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Automatically open the first tab when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    // Check if there are tab buttons before trying to click
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.click();
    }
});

// Love Quote Generator
const loveQuotes = [
    "ขอบคุณที่เข้ามาเป็นความสุขของเค้านะ",
    "ทุกวันที่อยู่กับคุณมันเป็นวันสำคัญทั้งหมด",
    "อยากให้คุณยิ้มเยอะๆ เพราะคุณมีรอยยิ้มที่สวยมากๆเลย",
    "เค้ารักคุณ แค่คุณคนเดียว",
    "มาใช้เวลาด้วยกันไปเรื่อยๆกันเถอะ!",
    "รู้จักกันมากี่เดือนก็ยังน่ารักเสมอเลยนะ",
    "มาดูหนังให้หมดทุกเรื่อง กินข้าวด้วยกันทุกมื้อกันนะคะ",
    "รอเค้าด้วยนะ :)"
];

function generateLoveQuote() {
    const quoteDisplay = document.getElementById('loveQuoteDisplay');
    if (quoteDisplay) {
        const randomIndex = Math.floor(Math.random() * loveQuotes.length);
        quoteDisplay.textContent = loveQuotes[randomIndex];
    }
}