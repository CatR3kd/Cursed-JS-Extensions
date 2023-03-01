for(let element of document.getElementsByTagName("*")){
  element.addEventListener('click', function(event){
    if(event.target == element){
      event.preventDefault();
      element.remove();
    }
  });
}
