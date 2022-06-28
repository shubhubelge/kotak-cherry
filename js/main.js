const observer = lozad();
observer.observe();
 
$('.links .link').click(function (e) { 
  e.preventDefault();
  // console.log(this)
  // console.log($(this).data().tab)
  let linkId = $(this).data().tab;
  $('.links .link').removeClass('active')
  $(this).addClass('active')
  let tab = $('.tab-section .tab')
  tab.removeClass('tab-active');
  $("#"+linkId).addClass('tab-active')
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$('#mutiStepForm').popup({
  // closebutton: true,
}).on('hide', function(event) {
  event.preventDefault();
  event.stopPropagation();
});

// $('#mutiStepForm').popup('show');

$('#tAndC').popup({
  closebutton: true,
  background: false,
});

$( function() {
  $( "#datepicker" ).datepicker({
    dateFormat: "yy-mm-dd",
    showOn: "both",
    buttonImageOnly: true,
    buttonImage: "../assets/images/date-icon.png",
    buttonText: "Calendar",
    changeYear: true,
    
    // disabled: true
    // buttonImageOnly: true
  }).on('hide', function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
  
} );


function togglePassType(e){
  // let el = $('.toggleInput').get(0) ;
  // console.log(el.type)
  console.log($(this))
  // if(el.type ==="text"){
  //   el.type = "password"
  // }else{
  //   el.type = "text"
  // }
}

$('.togglePassType').click(function(){
  let siblings = $(this).siblings('.toggleInput').get(0);
  let child = $(this).children('img').get(0);
  if(siblings.type ==="text"){
    siblings.type = "password";
    child.src = "/assets/images/eye-close.png";
  }else{
    siblings.type = "text";
    child.src = "/assets/images/view.png";
  }
})

$('.date-type').focus(function(){
  // $("span").css("display", "inline").fadeOut(2000);
  // $('.dataToggele').removeClass('date-control');
  this.type='date';
});
$('.date-type').blur(function(){
  // $("span").css("display", "inline").fadeOut(2000);
  // $('.dataToggele').addClass('date-control');
  this.type='text';
});


$("#toogleForm").click(function(){
  $('.button-box').toggle()
  $("#formCotainer").toggle()  
})

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.sticky-btn-book-apt').addClass('sticky-block');
    } else {
      $('.sticky-btn-book-apt').removeClass('sticky-block');
    }
  });
  });

  $(".toggle_icon").click(function(){
    $('.mobile-menu').toggleClass('open')
  })

const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("sipValue");

function slider(){
  // console.log(this)
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #002954 ${valPercent}%, #ffeded ${valPercent}%)`;
    sliderValue.textContent = mySlider.value;
}
slider();

const sipPeriod = document.getElementById("sipPeriod");
const sipPeriodValue = document.getElementById("sipPeriodValue");

function sliderSipPeriod(){
  // console.log(this)
    valPercent = (sipPeriod.value / sipPeriod.max)*100;
    sipPeriod.style.background = `linear-gradient(to right, #002954 ${valPercent}%, #ffeded ${valPercent}%)`;
    sipPeriodValue.textContent = sipPeriod.value;
}
sliderSipPeriod();

const retunAmt = document.getElementById("retunAmt");
const retunAmtValue = document.getElementById("retunAmtValue");

function sliderretunAmt(){
  // console.log(this)
    valPercent = (retunAmt.value / retunAmt.max)*100;
    retunAmt.style.background = `linear-gradient(to right, #002954 ${valPercent}%, #ffeded ${valPercent}%)`;
    retunAmtValue.textContent = retunAmt.value;
}
sliderretunAmt();

// $(".check-box").click(function(){
//   console.log("dfsd")
//   $("#checkLab").click(); 
//   // var checkBoxes = $("input[name=vehicle1\\[\\]]");
//   // checkBoxes.prop("checked", !checkBoxes.prop("checked"));
// })


// $(".gotToForm").click(function() {
//   $([document.documentElement, document.body]).animate({
//       scrollTop: $("#bookAptForm").offset().top - 100,
//   }, 2000);
// });

function gotoSection(id){
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#"+id).offset().top,
  }, 1000);
  $('.mobile-menu').toggleClass('open')
};