var selector, elems, makeActive;
//selector = '.item i';
elems = document.querySelectorAll('.fas');


makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('paint');
    this.classList.add('paint');
    console.log(elems);
};

for (var i = 0; i < elems.length; i++)
elems[i].addEventListener('click', makeActive);

function removeClase(){ 
    for (var i = 0; i < elems.length; i++)
      elems[i].classList.remove('paint');
}

var starsElement = document.getElementById('liststar');
console.log(starsElement);
window.addEventListener('click', function(event) {
  var isClickInside = starsElement.contains(event.target);
  if (!isClickInside) {
    console.log("hola");
    removeClase();
  }
});