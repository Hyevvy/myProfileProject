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


 
function zoomIn(event) {
  //sns아이콘에 마우스 커서가 올라왔을때
  event.target.style.width = "70px";
  event.target.style.height = "70px";
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  //sns아이콘에 올라갔던 마우스 커서가 다시 나올 때 
  event.target.style.width = "50px";
  event.target.style.height = "50px";
  event.target.style.transition = "all 0.5s";
}