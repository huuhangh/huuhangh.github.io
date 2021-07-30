$(document).ready(function() {    
  $('#loginModal').hide();  
  $('#errLbl').text('hang');
    
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});

function modal(){
  $('#loginModal').show();
  

}