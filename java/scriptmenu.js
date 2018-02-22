var hamburger = document.querySelector('#hamburger');

  var mNav = document.querySelector('.mobilenav');

  hamburger.onclick = function(){

    var status = mNav.classList.contains('active');
    if(!status) {
      mNav.classList.add('active');
    } else {
      mNav.classList.remove('active');
    }
  
  }