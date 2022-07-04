const modal = document.getElementById('modal');

document.getElementById('login').onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";   
}

document.getElementById('close-modal').onclick = function() {
    modal.style.display='none';
  }

  document.getElementById('cancel-btn').onclick = function() {
    modal.style.display='none';
  }