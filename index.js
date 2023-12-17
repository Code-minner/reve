
var linkBtn = document.getElementById("btn");
function linking() {
    linkBtn.innerHTML = "Connecting, Please wait...";
}


var process = document.getElementById("process");
function proceed() {
    proceed.innerHTML = "Processing Please Wait..";
}


setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main_content').style.display = 'block';
  },800);



function showTextarea() {
    document.getElementById('textarea').style.display = 'block';
    document.getElementById('input').style.display = 'none';
    document.querySelector('.input_container_head button.active').classList.remove('active');
    document.querySelector('.input_container_head button:nth-child(1)').classList.add('active');
  }

  function showInput() {
    document.getElementById('textarea').style.display = 'none';
    document.getElementById('input').style.display = 'block';
    document.querySelector('.input_container_head button.active').classList.remove('active');
    document.querySelector('.input_container_head button:nth-child(2)').classList.add('active');
  }