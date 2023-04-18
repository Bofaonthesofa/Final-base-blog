const basil= document.getElementById("blurb");
    const animalRadios = basil.elements.animalType;
    const images = document.getElementsByClassName("imageFilter");
    const spideySearch = basil.elements.mySearch;
    spideySearch.addEventListener('keyup', fishBiscuits())


    for (const animalRadio of animalRadios) {
     
      animalRadio.addEventListener('change', update)}
         
    
      function update {
        imageFilter();
        fishBiscuits();
      }
      
function imageFilter () {
   const spider = animalRadios.value;
  for(const image of images) {
  if (spider !==image.getAttribute('animal') && spider !=='all') {
    image.classList.add('hidden');
    
  } 
    else {image.classList.remove('hidden')}
} 
}
function fishBiscuits() {
    for(const image of images) {
      const spideySearch = basil.elements.mySearch;
      var felipe = image.alt.toLowerCase();
        
        if (felipe.includes(spideySearch.value.toLowerCase())) {
image.classList.remove("hidden")

        } else {
          image.classList.add("hidden")}
        }
    }

    
    
    
  