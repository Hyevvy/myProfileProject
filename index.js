$(document).ready(function(){ 
    var changedTextcolor = document.querySelectorAll('.profileChangedName');
    setTimeout(function() {
        console.log('Works!');
      }, 10000);

    for (var i=0; i<changedTextcolor.length; i++ ){
        var text = changedTextcolor.item(i);
        text.style.color="violet";
    }
  
   
 }); 