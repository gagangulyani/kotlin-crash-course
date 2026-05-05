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
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copy';
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
        showChapterCompleteBanner();
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

// Progress tracking
function getProgress() {
    try {
        const saved = localStorage.getItem('kotlin-crash-course-progress');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function saveProgress(progress) {
    try {
        localStorage.setItem('kotlin-crash-course-progress', JSON.stringify(progress));
    } catch (e) {}
}

function isChapterComplete(chapter) {
    const progress = getProgress();
    return !!progress[chapter];
}

function markChapterComplete() {
    const chapter = document.body.dataset.chapter;
    if (!chapter) return;
    const progress = getProgress();
    if (!progress[chapter]) {
        progress[chapter] = true;
        saveProgress(progress);
        updateSidebarProgress();
    }
}

function updateSidebarProgress() {
    const progress = getProgress();
    const chapters = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07'];
    const completed = chapters.filter(c => progress[c]).length;
    const percent = Math.round((completed / chapters.length) * 100);

    document.querySelectorAll('.sidebar-progress-fill').forEach(fill => {
        fill.style.width = percent + '%';
    });
    document.querySelectorAll('.sidebar-progress-label span:last-child').forEach(label => {
        label.textContent = percent + '%';
    });

    chapters.forEach(c => {
        document.querySelectorAll(`a[data-chapter="${c}"]`).forEach(link => {
            if (progress[c]) {
                link.classList.add('completed');
            } else {
                link.classList.remove('completed');
            }
        });
    });

    const markBtn = document.getElementById('markCompleteBtn');
    if (markBtn) {
        const chapter = document.body.dataset.chapter;
        if (chapter && progress[chapter]) {
            markBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Completed';
            markBtn.disabled = true;
            markBtn.classList.add('completed');
        }
    }
}

// Show a brief banner when a chapter is completed
function showChapterCompleteBanner() {
    if (document.getElementById('chapterCompleteBanner')) return;

    const chapter = document.body.dataset.chapter;
    if (!chapter) return;

    const chapters = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07'];
    const chapterNames = {
        'ch01': 'Basics & Types',
        'ch02': 'Functions',
        'ch03': 'Null Safety',
        'ch04': 'Collections',
        'ch05': 'Classes & OOP',
        'ch06': 'Coroutines',
        'ch07': 'Android & Compose'
    };

    const completed = chapters.filter(c => isChapterComplete(c)).length;
    const isLastChapter = chapter === 'ch07';
    const message = isLastChapter
        ? 'Course complete! You finished all 7 chapters!'
        : `Chapter complete! ${completed}/7 chapters done.`;

    const banner = document.createElement('div');
    banner.id = 'chapterCompleteBanner';
    banner.className = 'chapter-complete-banner';
    const nextLink = document.getElementById('nextLink');
    const nextHtml = !isLastChapter && nextLink
        ? `<a href="${nextLink.href}" class="banner-next-link">Next chapter <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>`
        : '';

    banner.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${message}</span>${nextHtml}`;

    const content = document.querySelector('.content');
    if (content) {
        content.insertBefore(banner, content.firstChild);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset progress
function resetProgress() {
    localStorage.removeItem('kotlin-crash-course-progress');
    updateSidebarProgress();
    const banner = document.getElementById('chapterCompleteBanner');
    if (banner) banner.remove();
    const markBtn = document.getElementById('markCompleteBtn');
    if (markBtn) {
        markBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Mark as Complete';
        markBtn.disabled = false;
        markBtn.classList.remove('completed');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateSidebarProgress();

    const markBtn = document.getElementById('markCompleteBtn');
    if (markBtn) {
        markBtn.addEventListener('click', () => {
            markChapterComplete();
            showChapterCompleteBanner();
        });
    }

    // If chapter already completed, update button state (no banner on revisit)
    const chapter = document.body.dataset.chapter;
    if (chapter && isChapterComplete(chapter)) {
        const markBtn = document.getElementById('markCompleteBtn');
        if (markBtn) {
            markBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Completed';
            markBtn.disabled = true;
            markBtn.classList.add('completed');
        }
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