//https://en.wikipedia.org/w/api.php?action=opensearch&search=billy&callback=?
$(function(){
  
  $("input[type='text']").hide();
  $('button').hide();
  $('.fa-times').hide();
  
  $('#submit').click(function(){
    
    const searchTerm = $('#searchTerm').val();
    
    $.ajax({
        type: 'GET',
        url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&callback=?',
        async: false,
        dataType: 'json',
        success: function(data){
          //console.log(data[2][0]);
          $('#result').html('');
          
          for(var i = 0; i < 10; i++){
            $('#result').append('<a href=' + data[3][i] + ' target="blank"><h1>' + data[1][i] + '</h1></a><h3>' + data[2][i] + '</h3><br>');
          }
        },
        error:function(err){
          alert('Err');
        }
      });
  })
  
  $(".icon").click(function(){
    const $this = $(this);
    if($this.hasClass('fa-search')){
      $("input[type='text']").fadeToggle();
      $('#searchTerm').val('');
      $('button').fadeToggle(); 
      $('.fa-search').hide();
      $('.fa-times').show();
    } else {
      $("input[type='text']").fadeToggle();
      $('button').fadeToggle();
      $('#result').html('');
      $('.fa-search').show();
      $('.fa-times').hide();   
    }
  });

  $('#searchTerm').keypress(function(event){
    if(event.which === 13){
      $('#submit').click();
    };
  });
  
})
