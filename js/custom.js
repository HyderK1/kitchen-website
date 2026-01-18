(function ($) {
  "use strict";

  // AOS ANIMATIONS
  AOS.init({ once: true });

  // NAVBAR: collapse on click
  $('.navbar-nav .nav-link').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // Scrollspy for active nav links
  $(function () {
    $('body').scrollspy({ target: '#navbarNav', offset: 90 });
  });

  // Smooth scroll
  $('a[href*="#"]').on('click', function (event) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate(
          { scrollTop: target.offset().top - 78 },
          800
        );
      }
    }
  });

  // CONTACT FORM (static hosting): open user's email client with pre-filled enquiry
  const CONTACT_TO = 'info@hackerkitchens-london.com';

  $('.contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = ($('#name').val() || '').trim();
    const email = ($('#email').val() || '').trim();
    const phone = ($('#phone').val() || '').trim();
    const postcode = ($('#postcode').val() || '').trim();
    const message = ($('#message').val() || '').trim();

    const interests = [];
    if ($('#checkbox1').is(':checked')) interests.push('Design consultation');
    if ($('#checkbox2').is(':checked')) interests.push('Quotation');
    if ($('#checkbox3').is(':checked')) interests.push('Supply & installation');

    const subject = `Häcker Küchen enquiry${name ? ' - ' + name : ''}${postcode ? ' (' + postcode + ')' : ''}`;

    const bodyLines = [
      'New enquiry from the website',
      '',
      `Name: ${name || '—'}`,
      `Email: ${email || '—'}`,
      `Phone: ${phone || '—'}`,
      `Postcode: ${postcode || '—'}`,
      `Interested in: ${interests.length ? interests.join(', ') : '—'}`,
      '',
      'Project details:',
      message || '—',
      '',
      '---',
      'Sent via hackerkitchens-london.com'
    ];

    const mailto = `mailto:${CONTACT_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
  });
})(window.jQuery);
