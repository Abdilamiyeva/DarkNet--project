var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');
scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(750, 0);
});
scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-750, 0);
});