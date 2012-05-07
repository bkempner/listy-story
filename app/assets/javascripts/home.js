// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  // initialize the plugin, pass in the class selector for the sections of content (blocks)
  var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
  
  // assign function to add behavior for onBlockChange event
  scrollorama.onBlockChange(function() {
    var i = scrollorama.blockIndex;
    /*
    $('#console')
      .css('display','block')
      .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
    */
    console.log('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
  });

  // Opening Pane
  scrollorama.animate('#opening-pane .subtitle',{ delay: 0, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#opening-pane #popout',{ delay: 250, duration: 0, start:0, property: 'opacity' });
  scrollorama.animate('#listy',{ delay: 300, duration: 500, property:'padding-top', start:200 });
  scrollorama.animate('#opening-pane .callout',{ delay: 900, duration: 50, start:0, property: 'opacity' });
  scrollorama.animate('#opening-pane .ending-panel',{ delay: 0, duration: 1200, start:0, property: 'padding-top', pin: true });

  // Badguy Pane
  scrollorama.animate('#badguy-pane .cityscape-back',{ delay: 900, duration: 700, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .cityscape-front',{ delay: 900, duration: 500, start:200, property: 'padding-top' });
  scrollorama.animate('#badguy-pane .dr-slum',{ delay: 2000, duration: 100, start:0, end: 400, property: 'margin-left' });
  scrollorama.animate('#badguy-pane .dr-slum',{ delay: 2000, duration: 100, start:-350, end: -550, property: 'margin-top' });
  scrollorama.animate('#badguy-pane .frog-1',{ delay: 2000, duration: 100, start:-150, end: 50, property: 'margin-top' });
  scrollorama.animate('#badguy-pane .apt1',{ delay: 2250, duration: 100, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt2',{ delay: 2250, duration: 100, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt3',{ delay: 2250, duration: 100, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt4',{ delay: 2250, duration: 100, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt5',{ delay: 2250, duration: 100, start:0, property: 'opacity' });
  //scrollorama.animate('#badguy-pane .dr-slum',{ delay: 2000, duration: 500, start:200, property: 'margin-right' });
  scrollorama.animate('#badguy-pane .ending-panel',{ delay: 0, duration:3500, property:'padding-top', start:0, pin:true });

  // Pane #3
  scrollorama.animate('#panel3 .ending-panel',{ delay: 0, duration:2000, property:'padding-top', start:0, pin:true });

  // Pane #4
  scrollorama.animate('#panel4 .ending-panel',{ delay: 0, duration:2000, property:'padding-top', start:0, pin:true });
			
  // // assign function to add behavior for onBlockChange event
  // scrollorama.onBlockChange(function() {
  //   console.log('hi');
  // });
});
