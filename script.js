const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
      const target = 
link.getAttribute('href').substring(1);
    sections.forEach(sec =>
sec.classList.remove('active'));

document.getElmentaryById(target).classList.add('active');
    })
})

function showLevel(level) {

document.querySelectorAll('.resource-level').forEach(div => div.style.display = 'none');
document.getElementById(level).style.display = 'block';
}

function showSemester(level, semester) {
    ['first', 'second', 'pq'].forEach(s => {
        document.getElementById('${level}-${s}').style.display = (s === semester) ?
        'block' : 'none' ;
    })
}