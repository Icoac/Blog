function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function showEssay(essayId) {
    const essays = document.querySelectorAll('#essays > div');
    essays.forEach(essay => {
        essay.style.display = 'none';
    });
    document.getElementById(essayId).style.display = 'block';
}