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
 
  scrollorama.animate('#opening-pane .subtitle',{ delay: 0, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#opening-pane #popout',{ delay: 250, duration: 0, start:0, property: 'opacity' });
  scrollorama.animate('#listy',{ delay: 300, duration: 500, property:'padding-top', start:200 });
  scrollorama.animate('#opening-pane .callout',{ delay: 900, duration: 50, start:0, property: 'opacity' });
  scrollorama.animate('#opening-pane .end-panel',{ delay: 0, duration: 1000, start:0, property: 'padding-top', pin: true });
  			
  //scrollorama.animate('#unpin',{ duration:500, property:'padding-top', start:400, pin:true });
			
  // // assign function to add behavior for onBlockChange event
  // scrollorama.onBlockChange(function() {
  //   console.log('hi');
  // });
});
