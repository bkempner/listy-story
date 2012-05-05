// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  // initialize the plugin, pass in the class selector for the sections of content (blocks)
  var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			
  // assign function to add behavior for onBlockChange event
  scrollorama.onBlockChange(function() {
    console.log('hi');
  });

  scrollorama.animate('#logo',{ delay: 50, duration: 50, property:'opacity', start: 0.5, end: 1 });
});
