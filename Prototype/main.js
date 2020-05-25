var imgNum = 1;

function colorChange() {
  if(imgNum > 5) imgNum = 0
  
  console.log(imgNum);
  document.getElementById("normalBox").src= 'images/image_'+imgNum+'.png';
  imgNum++
}