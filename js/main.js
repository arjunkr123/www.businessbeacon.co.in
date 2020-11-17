(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);




/*Title: Cool Modal Popup Sign In/Out Form*/

$(function() {
  //defining all needed variables
  var $overlay = $('.overlay');
  var $mainPopUp = $('.main-popup')
  var $signIn = $('#sign-in');
  var $register = $('#register');
  var $formSignIn = $('form.sign-in');
  var $formRegister = $('form.register');

  var $firstChild = $('nav ul li:first-child');
  var $secondChild = $('nav ul li:nth-child(2)');
  var $thirdChild = $('nav ul li:nth-child(3)');

  //defining function to create underline initial state on document load
  function initialState() {
    $('.underline').css({
      "width": $firstChild.width(),
      "left": $firstChild.position().left,
      "top": $firstChild.position().top + $firstChild.outerHeight(true) + 'px'
    });
  }
  initialState(); //() used after calling function to call function immediately on doc load

  //defining function to change underline depending on which li is active
  function changeUnderline(el) {
    $('.underline').css({
      "width": el.width(),
      "left": el.position().left,
      "top": el.position().top + el.outerHeight(true) + 'px'
    });
  } //note: have not called the function...don't want it called immediately

  $firstChild.on('click', function(){
    var el = $firstChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $secondChild.removeClass('active');
    $thirdChild.removeClass('active');
    $(this).addClass('active');
  });

  $secondChild.on('click', function(){
    var el = $secondChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $firstChild.removeClass('active');
    $thirdChild.removeClass('active');
    $(this).addClass('active');
  });

  $thirdChild.on('click', function(){
    var el = $thirdChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $firstChild.removeClass('active');
    $secondChild.removeClass('active');
    $(this).addClass('active');
  });


  $('#sus_submit').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });

    $('#standard').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
    $('#basic').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
    $('#premium').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
  $overlay.on('click', function(){
    $(this).removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  $('#popup-close-button a').on('click', function(e){
    e.preventDefault();
    $overlay.removeClass('visible');
    $mainPopUp.removeClass('visible');
  });

  $signIn.on('click', function(){
    $signIn.addClass('active');
    $register.removeClass('active');
    $formSignIn.removeClass('move-left');
    $formRegister.removeClass('move-left');
  });

  $register.on('click', function(){
    $signIn.removeClass('active');
    $register.addClass('active');
    $formSignIn.addClass('move-left');
    $formRegister.addClass('move-left');
  });

  $('input').on('submit', function(e){
    e.preventDefault(); //used to prevent submission of form...remove for real use
  });
});










(function($) {
    "use strict";

  // Options for Message
  //----------------------------------------------
  var options = {
    'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
    'btn-success': '<i class="fa fa-check"></i>',
    'btn-error': '<i class="fa fa-remove"></i>',
    'msg-success': 'All Good! Redirecting...',
    'msg-error': 'Wrong login credentials!',
    'useAJAX': true,
  };

  // Login Form
  //----------------------------------------------
  // Validation
  $("#login-form").validate({
    rules: {
      lg_username: "required",
      lg_password: "required",
    },
    errorClass: "form-invalid"
  });

  // Form Submission
  $("#login-form").submit(function() {
    remove_loading($(this));

    if(options['useAJAX'] == true)
    {
      // Dummy AJAX request (Replace this with your AJAX code)
      // If you don't want to use AJAX, remove this
      dummy_submit_form($(this));

      // Cancel the normal submission.
      // If you don't want to use AJAX, remove this
      return false;
    }
  });

  // Register Form
  //----------------------------------------------
  // Validation
  $("#register-form").validate({
    rules: {
      reg_username: "required",
      reg_password: {
        required: true,
        minlength: 5
      },
      reg_password_confirm: {
        required: true,
        minlength: 5,
        equalTo: "#register-form [name=reg_password]"
      },
      reg_email: {
        required: true,
        email: true
      },
      reg_agree: "required",
    },
    errorClass: "form-invalid",
    errorPlacement: function( label, element ) {
      if( element.attr( "type" ) === "checkbox" || element.attr( "type" ) === "radio" ) {
        element.parent().append( label ); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
      }
      else {
        label.insertAfter( element ); // standard behaviour
      }
    }
  });

  // Form Submission
  $("#register-form").submit(function() {
    remove_loading($(this));

    if(options['useAJAX'] == true)
    {
      // Dummy AJAX request (Replace this with your AJAX code)
      // If you don't want to use AJAX, remove this
      dummy_submit_form($(this));

      // Cancel the normal submission.
      // If you don't want to use AJAX, remove this
      return false;
    }
  });

  // Forgot Password Form
  //----------------------------------------------
  // Validation
  $("#forgot-password-form").validate({
    rules: {
      fp_email: "required",
    },
    errorClass: "form-invalid"
  });

  // Form Submission
  $("#forgot-password-form").submit(function() {
    remove_loading($(this));

    if(options['useAJAX'] == true)
    {
      // Dummy AJAX request (Replace this with your AJAX code)
      // If you don't want to use AJAX, remove this
      dummy_submit_form($(this));

      // Cancel the normal submission.
      // If you don't want to use AJAX, remove this
      return false;
    }
  });

  // Loading
  //----------------------------------------------
  function remove_loading($form)
  {
    $form.find('[type=submit]').removeClass('error success');
    $form.find('.login-form-main-message').removeClass('show error success').html('');
  }

  function form_loading($form)
  {
    $form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
  }

  function form_success($form)
  {
    $form.find('[type=submit]').addClass('success').html(options['btn-success']);
    $form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
  }

  function form_failed($form)
  {
    $form.find('[type=submit]').addClass('error').html(options['btn-error']);
    $form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
  }

  // Dummy Submit Form (Remove this)
  //----------------------------------------------
  // This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
  function dummy_submit_form($form)
  {
    if($form.valid())
    {
      form_loading($form);

      setTimeout(function() {
        form_success($form);
      }, 2000);
    }
  }

})(jQuery);
