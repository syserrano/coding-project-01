const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const charCount = document.getElementById('char-count');
const feedbackDisplay = document.getElementById('user-feedback');
const messages = document.getElementById('messages');

//tooltip functions
form.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('field')){
        showTooltip(e.target);
    }});

form.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('field')) {
        hideTooltip(e.target);
    }});


//character count
commentInput.addEventListener('input', function() {
    charCount.textContent = `${commentInput.value.length}/500 characters`; 
});

//form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    messages.textContent = '';
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();


    const feedbackEntry = document.createElement('div');
    
    feedbackEntry.textContent = `Name: ${name}, Email: ${email}, Comment: ${comment}`;
    feedbackDisplay.appendChild(feedbackEntry);
    
    form.reset();
    charCount.textContent = '0/500 characters';
});

document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('feedback-entry')) {
        e.target.stopPropagation();
    }
});

function showTooltip(element) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = element.getAttribute(element.id);
    document.body.appendChild(tooltip);
}

function hideTooltip(element) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}