var step = 1;
var checkLastStep = $(".step-form").children('.form').length;

function gotoStep(){
  $('.step-form .form').removeClass('active')
  $('.steps .step').removeClass('active')
  $('.step-form .form.form-'+step).addClass('active')
  $('.steps .step.step-'+step).addClass('active')

  $("#stesOwl").trigger("to.owl.carousel", [step-1, 1])
  // $('.steps .step.step-'+step).removeClass('active')
}
function buttonDecider(){
  if(checkLastStep === step){
    $('.submit-btn-multistep').text('Continue')
  }else{
    $('.submit-btn-multistep').text('Verify')
  }
  if(step===1){
    $('.back-btn').addClass('displayNone')
  }else{
    // console.log("$('.back-btn')", $('.back-btn'))
    $('.back-btn').removeClass('displayNone')
  }
}

$(".form-control").on("keyup change", function (event) {
  if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
  }
});
var valid = true;
function validation(e){
  valid = true;
  $(".step-form .form.active :input[required]").each(function(){
    var input = $(this); 
    // console.log(input)
    // console.log(parseInt($(this).attr("maxlength")) != $(this).val().length)
    if ($(this).is(':invalid') || !$(this).val()){
      // console.log(input)

      valid = false;
      $(this).addClass('error');
      $(this).parent().siblings('.invalid').show()
    }
  });

  // console.log(step)
  // for invalid input
  // checkValidationStepThree()
  if(step ==1){
    // $("#mobileNumberValue").text()
  }
  if(step==2 ){
    let otpMobile = $("#otpMobile").val();
    let otpEmail = $("#otpEmail").val();
    // check server response if true than validate and retun nathing else retun false
    console.log("in step 2", otpMobile,otpEmail);
    // if((parseInt($(this).attr("maxlength")) != $(this).val().length)){

    // }
    // console.log(otpMobile.length())
    // console.log(typeof $('#otpMobile').val().length)
    
    // if serve response false or otp
    // let mobileOtpResInvalid = true;
    // let EmailOtpResInvalid = false;
    // if(mobileOtpResInvalid || mobileOtpResInvalid ){
      if(parseInt($("#otpMobile").attr("maxlength")) != $("#otpMobile").val().length){
        valid = false;
        $('#otpMobile').addClass('error');
        $('#otpMobile').parent().siblings('.invalid').show()
      }
      if(parseInt($("#otpEmail").attr("maxlength")) != $("#otpEmail").val().length){
        valid = false;
        $('#otpEmail').addClass('error');
        $('#otpEmail').parent().siblings('.invalid').show()
      }
    // }
    

    
  }
  if(step==3){
    
    var passOne = $('#passOne').val(), passTwo = $('#passTwo').val();
    // console.log("in step 2", otpMobile === otpEmail);

    // console.log(otpMobile.length())
    // console.log(typeof $('#otpMobile').val().length)
    
    // if(passOne != passTwo ){
    //   valid = false;
    //   $('.passNotMach').show()
    //   // console.log("otp", otpMobile, otpEmail)
    //   // return true
    // }else{
    //   $('.passNotMach').hide()

    // }
    if(valid){
      $('#mutiStepForm').popup('hide');
      $('#thankYou').popup('show');

    }
  }
  // console.log(valid)
  if(valid) {
    return true
    
  }
}
$('.submit-btn-multistep').on('click', function(e){
  e.preventDefault();
  var valid = validation()
  if(checkLastStep != step && valid){
    step++;
    gotoStep()
    console.log("ckeck", step)
  }
  buttonDecider()
});
$('.back-btn').on('click', function(e){
  $('.steps .step.step-'+step).removeClass('active')
  if(step!=1){
    step--;
    gotoStep()
    buttonDecider()
  }
});


// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   // document.getElementById("progressBar").value = 10 - timeleft;

//   timeleft -= 1;
// }, 1000);

let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  // console.log(s)
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;
  
  if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
  }

  if(!timerOn) {
    // Do validate stuff here
    console.log("timer 0")
    return;
  }
  
  // Do timeout stuff here
  alert('Timeout for otp');
}

// timer(120);

$(document).ready(function() {
  var validateInput = $('input.validate');
    function validateInputs() {
      var password = $('#passOne').val(), conf = $('#passTwo').val();
      var uppercase = password.match(/[A-Z]/), number = password.match(/[0-9]/);
      var specialCharacterPatter = password.match(/([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/);
      valid = true;
      console.log(valid)
      if (password.length < 8) {
        $('.password_length').removeClass('complete');
        valid = false;
      } else $('.password_length').addClass('complete');
      if (uppercase) $('.password_uppercase').addClass('complete');
      else {
        $('.password_uppercase').removeClass('complete');
        valid = false;
      }
      if (number) $('.password_number').addClass('complete');
      else {
        $('.password_number').removeClass('complete');
        valid = false
      }
      if(specialCharacterPatter) $('.special_char').addClass('complete');
      else {
        $('.special_char').removeClass('complete');
        valid = false
      }
      if (password == conf && password != '') $('.password_match').addClass('complete');
      else {
        $('.password_match').removeClass('complete')
        valid = false;
      }
      console.log(valid)

    }

    validateInput.each(validateInputs).on('keyup', validateInputs);
  
});