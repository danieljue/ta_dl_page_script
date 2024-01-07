// Custom :contains selector
function contains(selector, text) {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).filter(element => RegExp(text).test(element.textContent));
}

// Get all buttons with the text "Download now"
const downloadButtons = contains('button', 'Download now');

// Click each button with a delay of 1/5 second
downloadButtons.forEach((button, index) => {
    setTimeout(() => {
        button.click();
        console.log(`Clicked button with text: "${button.textContent}" and id: "${button.id}"`);
    }, index * 200); // 1000 milliseconds = 1 second
});
