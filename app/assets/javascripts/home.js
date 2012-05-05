// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  // initialize the plugin, pass in the class selector for the sections of content (blocks)
  var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
  
  // assign function to add behavior for onBlockChange event
  scrollorama.onBlockChange(function() {
    var i = scrollorama.blockIndex;
    $('#console')
      .css('display','block')
      .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
  });
  
  scrollorama.animate('#fade-in',{ delay: 400, duration: 700, property:'opacity', start:0 });
  			
  var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			
  // // assign function to add behavior for onBlockChange event
  // scrollorama.onBlockChange(function() {
  //   console.log('hi');
  // });
});
