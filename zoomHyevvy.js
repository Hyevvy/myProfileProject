function zoomInHyevvy(event) {
    //Hyevvy아이콘에 마우스 커서가 올라왔을때
    event.target.style.fontSize = "20px";
    event.target.style.transition = "all 0.5s";
  }
  function zoomOutHyevvy(event) {
    //Hyevvy아이콘에 올라갔던 마우스 커서가 다시 나올 때 
    event.target.style.fontSize = "15px";
    event.target.style.transition = "all 0.5s";
  }