document.getElementById('greet-btn').addEventListener('click', () => {
    const greetingText = document.getElementById('greeting');
    greetingText.textContent = "Thanks for visiting! More updates coming soon.";
    greetingText.classList.remove('hidden');
});
