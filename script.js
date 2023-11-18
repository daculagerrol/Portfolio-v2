const content = document.getElementById('content');
const learnMore = document.getElementById('learnMore');

learnMore.addEventListener('click', funcion(event) {
  event.preventDefault();

  if (content.classlist.contains('expanded')) {
    content.style.maxHeight = '50px';
    content.classList.remove('expanded');
  } else {
    content.style.maxHeight = content.scrollheight + 'px';
    content.classlist.add('expanded');
  }
})