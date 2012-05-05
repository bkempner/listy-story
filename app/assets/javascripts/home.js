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
  			
  // animate some easing examples
  var $easing = $('#easing'),
    $clone = $easing.clone().appendTo('#examples-easing')
      .css({position:'relative',top:'-2.95em'})
      .lettering();
  $easing.css({ color: '#131420', textShadow: '0 1px 0 #363959' });
  easing_array = ['easeOutBounce',
                  'easeOutQuad',
                  'easeOutCubic',
                  'easeOutQuart',
                  'easeOutQuint', 
                  'easeOutExpo'];
  $clone.find('span')
    .each( function( idx, el ){
    scrollorama.animate( $(this), {	delay:400, duration: 500, 
    property:'top', end: 300,
    easing: easing_array[idx] });
  })
  // initialize the plugin, pass in the class selector for the sections of content (blocks)
  var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
			
  // assign function to add behavior for onBlockChange event
  scrollorama.onBlockChange(function() {
    console.log('hi');
  });
});
