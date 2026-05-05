// Highlight.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
});

// Copy code
function copyCode(btn) {
    const code = btn.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Comparison boxes toggle
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comparison-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
});

// Concept check quiz
function checkAnswer(el, isCorrect, feedbackCorrect, feedbackWrong) {
    if (el.classList.contains('correct') || el.classList.contains('wrong')) return;

    const parent = el.closest('.concept-check');
    const feedback = parent.querySelector('.check-feedback');

    parent.querySelectorAll('.check-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    if (isCorrect) {
        el.classList.add('correct');
        feedback.textContent = feedbackCorrect || 'Correct!';
        feedback.className = 'check-feedback show correct';
    } else {
        el.classList.add('wrong');
        feedback.textContent = feedbackWrong || 'Not quite. Review the section and try again.';
        feedback.className = 'check-feedback show wrong';
        // Re-enable options after a delay so user can try again
        setTimeout(() => {
            parent.querySelectorAll('.check-option').forEach(opt => {
                opt.classList.remove('wrong');
                opt.style.pointerEvents = '';
            });
            feedback.className = 'check-feedback';
        }, 1500);
    }
}

// Mobile sidebar
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && document.getElementById('prevLink')) {
        document.getElementById('prevLink').click();
    }
    if (e.key === 'ArrowRight' && document.getElementById('nextLink')) {
        document.getElementById('nextLink').click();
    }
});