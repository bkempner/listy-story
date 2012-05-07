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
  scrollorama.animate('#badguy-pane #caption1',{ delay: 1000, duration: 400, start: 0, property: 'opacity' });
  scrollorama.animate('#badguy-pane #caption2',{ delay: 2500, duration: 400, start: 0, property: 'opacity' });
  scrollorama.animate('#badguy-pane #caption3',{ delay: 3500, duration: 400, start: 0, property: 'opacity' });
  scrollorama.animate('#badguy-pane #caption3',{ delay: 3500, duration: 400, start: 360, property: 'rotate' });
  scrollorama.animate('#badguy-pane .cityscape-back',{ delay: 900, duration: 700, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .cityscape-front',{ delay: 900, duration: 500, start:200, property: 'padding-top' });
  scrollorama.animate('#badguy-pane .dr-slum',{ delay: 2000, duration: 1000, start:0, end: 400, property: 'margin-left' });
  scrollorama.animate('#badguy-pane .dr-slum',{ delay: 2000, duration: 1000, start:-350, end: -550, property: 'margin-top' });
  scrollorama.animate('#badguy-pane .frog-1',{ delay: 2000, duration: 1000, start:-150, end: 50, property: 'margin-top' });
  scrollorama.animate('#badguy-pane .apt1',{ delay: 2250, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt2',{ delay: 2500, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt3',{ delay: 2250, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt4',{ delay: 2750, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .apt5',{ delay: 3000, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .heart-cl',{ delay: 3000, duration: 250, start:0, property: 'opacity' });
  scrollorama.animate('#badguy-pane .ending-panel',{ delay: 0, duration:4000, property:'padding-top', start:0, pin:true });

  // Lab Pane
  scrollorama.animate('#lab-pane .lab',{ delay: 500, duration:1500, property:'opacity', start:0 });
  scrollorama.animate('#lab-pane .lab-on',{ delay: 3000, duration:100, property:'opacity', start:0 });
  scrollorama.animate('#lab-pane .ending-panel',{ delay: 0, duration:3700, property:'padding-top', start:400, pin:true });

  // Pane #5
  //scrollorama.animate('#panel5 .ending-panel',{ delay: 0, duration:4000, property:'padding-top', start:400, pin:true });
  
	// Tech Pane
	scrollorama.animate('#tech-pane .background img',{ delay: 0, duration: 10, end: 1, property: 'z-index' });
	scrollorama.animate('#tech-pane .listy1',{ delay: 500, duration: 150, start: 0, property: 'opacity' });
	scrollorama.animate('#tech-pane .background img',{ delay: 2000, duration: 10, end: 20, property: 'z-index' });
	scrollorama.animate('#tech-pane .listy2',{ delay: 2000, duration: 150, start: 0, property: 'opacity' });
	scrollorama.animate('#tech-pane .side-text',{ delay: 3000, duration: 10, start: 0, property: 'opacity' });
	scrollorama.animate('#tech-pane .background img',{ delay: 3000, duration: 10, end: 40, property: 'z-index' });
	scrollorama.animate('#tech-pane .listy3',{ delay: 3000, duration: 150, start: 0, property: 'opacity' });
	scrollorama.animate('#tech-pane .background img',{ delay: 4000, duration: 10, end: 60, property: 'z-index' });
	scrollorama.animate('#tech-pane .listy4',{ delay: 4000, duration: 150, start: 0, end:1, property: 'opacity' });
	scrollorama.animate('#tech-pane .background img',{ delay: 5000, duration: 10, end: 80, property: 'z-index' });
	scrollorama.animate('#tech-pane .back-text',{ delay: 5000, duration: 10, start: 0, property: 'opacity' });
	scrollorama.animate('#tech-pane .listy5',{ delay: 5000, duration: 150, start: 0, end:1, property: 'opacity' });
	scrollorama.animate('#tech-pane .background img',{ delay: 6000, duration: 10, end: 100, property: 'z-index' });
	scrollorama.animate('#tech-pane .listy6',{ delay: 6000, duration: 150, start: 0, end:1, property: 'opacity' });
	scrollorama.animate('#tech-pane .ending-panel',{ delay: 0, duration:7000, property:'padding-top', start:0, pin:true });
	
	// end pane
	//scrollorama.animate('#end-pane .caption1',{ delay: 500, duration: 150, start: 0, property: 'opacity' });
	//scrollorama.animate('#end-pane .caption2',{ delay: 300, duration: 150, start: 0, property: 'opacity' });
	//scrollorama.animate('#end-pane .caption3',{ delay: 600, duration: 150, start: 0, property: 'opacity' });
	//scrollorama.animate('#end-pane .ending-panel',{ delay: 0, duration:2000, property:'padding-top', start:0, pin:true });

	scrollorama.animate('#cliffhanger .canlisty1',{ delay: 750, duration: 300, start: 0, property: 'opacity' });
	scrollorama.animate('#cliffhanger .canlisty1',{ delay: 750, duration: 300, start: 720, property: 'rotate' });
	scrollorama.animate('#cliffhanger .canlisty2',{ delay: 1500, duration: 300, start: -1400, property: 'left' });
	scrollorama.animate('#cliffhanger .canlisty3',{ delay: 3000, duration: 100, start: 0, property: 'opacity' });
	scrollorama.animate('#cliffhanger .canlisty3',{ delay: 3000, duration: 1000, start: 8, property: 'zoom' });
  scrollorama.animate('#cliffhanger .ending-panel',{ delay: 0, duration:5000, property:'padding-top', start:400, pin:true });

	scrollorama.animate('#lolcat .itwasyou',{ delay: 300, duration: 150, start: 0, property: 'opacity' });
  scrollorama.animate('#lolcat .ending-panel',{ delay: 0, duration:3000, property:'padding-top', start:400, pin:true });
			
  // // assign function to add behavior for onBlockChange event
  // scrollorama.onBlockChange(function() {
  //   console.log('hi');
  // });
});
