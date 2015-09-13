(function($) {
  Parse.initialize("LsnGgzmo7IYX2Zn2hmU35JGLPbCPnC9rI4gtAutg", "h7Bh3bOOueTLCWhIgovDnC2tQWeninfkMIpGXFQc");

  var RSVP = Parse.Object.extend('RSVP');

  var $countdown = $('#countdown');

  $countdown.countdown('2015/10/24 14:00:00', function(e) {
    $countdown.html(e.strftime(
      '<div class="countdown-section"><b>%w</b> <span>weeks</span> </div>' +
      '<div class="countdown-section"><b>%d</b> <span>days</span> </div>' +
      '<div class="countdown-section"><b>%H</b> <span>hours</span> </div>' +
      '<div class="countdown-section"><b>%M</b> <span>minutes</span> </div>' +
      '<div class="countdown-section"><b>%S</b> <span>seconds</span> </div>'
    ));
  });

  $('form').on('submit', function(e) {
    var $el = $(this);
    var rsvp = new RSVP();

    e.preventDefault();

    $.each($el.serializeArray(), function(i, d) {
      rsvp.set(d.name, d.value);
    });

    rsvp
      .save(null, {
        success: function(rsvp) {
          $el.hide();
          $('#post-submit').show();
        },
        error: function(_, err) {
          console.log(err);
        }
      });
  });

})(jQuery);