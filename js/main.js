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
        feedback.textContent = feedbackCorrect || 'Correct! 🎉';
        feedback.className = 'check-feedback show correct';
        markChapterComplete();
    } else {
        el.classList.add('wrong');
        feedback.textContent = feedbackWrong || 'Not quite. Review the section and try again.';
        feedback.className = 'check-feedback show wrong';
    }
}

// Progress tracking
function getProgress() {
    const saved = localStorage.getItem('kotlin-crash-course-progress');
    return saved ? JSON.parse(saved) : {};
}

function saveProgress(progress) {
    localStorage.setItem('kotlin-crash-course-progress', JSON.stringify(progress));
}

function markChapterComplete() {
    const chapter = document.body.dataset.chapter;
    if (!chapter) return;
    const progress = getProgress();
    progress[chapter] = true;
    saveProgress(progress);
    updateSidebarProgress();
}

function updateSidebarProgress() {
    const progress = getProgress();
    const chapters = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07'];
    const completed = chapters.filter(c => progress[c]).length;
    const percent = Math.round((completed / chapters.length) * 100);

    const fill = document.querySelector('.sidebar-progress-fill');
    const label = document.querySelector('.sidebar-progress-label span:last-child');
    if (fill) fill.style.width = percent + '%';
    if (label) label.textContent = percent + '%';

    chapters.forEach(c => {
        const link = document.querySelector(`a[data-chapter="${c}"]`);
        if (link && progress[c]) {
            link.classList.add('completed');
        }
    });
}

// Mark as complete button
document.addEventListener('DOMContentLoaded', () => {
    updateSidebarProgress();

    const markBtn = document.getElementById('markCompleteBtn');
    if (markBtn) {
        markBtn.addEventListener('click', () => {
            markChapterComplete();
            markBtn.textContent = '✓ Completed';
            markBtn.disabled = true;
            markBtn.style.opacity = '0.7';
        });
    }
});

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
