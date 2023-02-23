$().ready(function() {
  // Add click event listener to accordion header
  $('.accordion-header').click(function() {
    // Toggle the active class on the accordion item
    $(this).parent().toggleClass('active');

    // Toggle the hidden class on the accordion content
    $(this).siblings('.accordion-content').toggleClass('hidden');
  });
});
// JavaScript Document