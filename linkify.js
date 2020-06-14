// linkify each block of text with a unique ID
[].slice.call(document.querySelectorAll('h3')).map(b => b.firstElementChild).forEach((el, i) => {
  var a = document.createElement('a');
  a.href = "#" + i;
  a.name = "" + i;
  el.parentNode.insertBefore(a, el);
  a.appendChild(el);
})
