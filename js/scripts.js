

$(document).ready(function(){
  $('#fname, #name, #company, #adress, #city').on('input', function() {
	   var input=$(this);
     var re = /[A-Z]/i
	   var is_name=re.test(input.val());
	   if(is_name ){
       input.removeClass("error").addClass("valid");
     }else{

       input.removeClass("valid").addClass("error");
     }
});
$('#number').on('input', function() {
   var input=$(this);
   var re = /[0-9]/i;
   var is_number=re.test(input.val());
   if(is_number){
    input.removeClass("error").addClass("valid");
    }else{
    input.removeClass("valid").addClass("error");
    }
});

$('#zip').on('input', function() {
   var input=$(this);
   var re = /[0-9]{5}/i;
   var is_number=re.test(input.val());
   if(is_number){
    input.removeClass("error").addClass("valid");
    }else{
    input.removeClass("valid").addClass("error");
    }
});
$('#country').on('input', function() {
  	   var input=$(this);

  	   if(input.attr('option', 'UK') || input.attr('option', 'US') ){
          input.removeClass("error").addClass("valid");
       }else{
          input.removeClass("valid").addClass("error");

       }
});
$('#d1, #d2').onclick('input', function() {
       var input=$(this);
  	   if($('#d1').is(':checked') || $('#d2').is(':checked') ){
          input.removeClass("valid").addClass("error");
       }else{

          input.removeClass("error").addClass("valid");
       }
});




});
