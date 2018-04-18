$(document).ready(function() {
  var bar = new ProgressBar.Line(container1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0

  var bar2 = new ProgressBar.Line(container2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar2) => {
      bar2.setText(Math.round(bar2.value() * 60) + ' %');
    }
  });

  bar2.animate(1.0);  // Number from 0.0 to 1.0

  var bar3 = new ProgressBar.Line(container3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar3) => {
      bar3.setText(Math.round(bar3.value() * 75) + ' %');
    }
  });

  bar3.animate(1.0);  // Number from 0.0 to 1.0

  var bar4 = new ProgressBar.Line(container4, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar4) => {
      bar4.setText(Math.round(bar4.value() * 80) + ' %');
    }
  });

  bar4.animate(1.0);  // Number from 0.0 to 1.0

  var bar5 = new ProgressBar.Line(container5, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar5) => {
      bar5.setText(Math.round(bar5.value() * 65) + ' %');
    }
  });

  bar5.animate(1.0);  // Number from 0.0 to 1.0

  var bar6 = new ProgressBar.Line(container6, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar6) => {
      bar6.setText(Math.round(bar6.value() * 70) + ' %');
    }
  });

  bar6.animate(1.0);  // Number from 0.0 to 1.0

  var bar7 = new ProgressBar.Line(container7, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar7) => {
      bar7.setText(Math.round(bar7.value() * 85) + ' %');
    }
  });

  bar7.animate(1.0);  // Number from 0.0 to 1.0

  var bar8 = new ProgressBar.Line(container8, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        op: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar8) => {
      bar8.setText(Math.round(bar8.value() * 70) + ' %');
    }
  });

  bar8.animate(1.0);  // Number from 0.0 to 1.0

  window.sr = ScrollReveal({origin : top});
  sr.reveal('#aboutTitle', { duration: 2000 }, 50);
  sr.reveal('#row1', { duration: 2000 }, 50);
  sr.reveal('#imageRow', { duration: 2000 }, 50);
  sr.reveal('#edu', { duration: 2000 }, 50);
  sr.reveal('#edu2', { duration: 2000 }, 50);
  sr.reveal('#edu3', { duration: 2000 }, 50);
  sr.reveal('#proj1', { duration: 2000 }, 50);
  sr.reveal('#proj2', { duration: 2000 }, 50);
  sr.reveal('.section1', { duration: 2000 }, 50);
  sr.reveal('.section2', { duration: 2000 }, 50);
  sr.reveal('.section3', { duration: 2000 }, 50);
  sr.reveal('.section4', { duration: 2000 }, 50);
  sr.reveal('#skills1', { duration: 2000 }, 50);
  sr.reveal('#skills2', { duration: 2000 }, 50);
  sr.reveal('#skill1', { duration: 2000 }, 50);
  sr.reveal('#skill2', { duration: 2000 }, 50);
  sr.reveal('#skill3', { duration: 2000 }, 50);
  sr.reveal('#skill4', { duration: 2000 }, 50);
  sr.reveal('#skill5', { duration: 2000 }, 50);
  sr.reveal('#skill6', { duration: 2000 }, 50);
  sr.reveal('#skill7', { duration: 2000 }, 50);
  sr.reveal('#skill8', { duration: 2000 }, 50);

  window.sr = ScrollReveal({origin : bottom});
  sr.reveal('#skill8', { duration: 2000 }, 50);
  sr.reveal('#skill7', { duration: 2000 }, 50);
  sr.reveal('#skill6', { duration: 2000 }, 50);
  sr.reveal('#skill5', { duration: 2000 }, 50);
  sr.reveal('#skill4', { duration: 2000 }, 50);
  sr.reveal('#skill3', { duration: 2000 }, 50);
  sr.reveal('#skill2', { duration: 2000 }, 50);
  sr.reveal('#skill1', { duration: 2000 }, 50);
  sr.reveal('#skills2', { duration: 2000 }, 50);
  sr.reveal('#skills1', { duration: 2000 }, 50);
  sr.reveal('.section4', { duration: 2000 }, 50);
  sr.reveal('.section3', { duration: 2000 }, 50);
  sr.reveal('.section2', { duration: 2000 }, 50);
  sr.reveal('.section1', { duration: 2000 }, 50);
  sr.reveal('#proj2', { duration: 2000 }, 50);
  sr.reveal('#proj1', { duration: 2000 }, 50);
  sr.reveal('#edu3', { duration: 2000 }, 50);
  sr.reveal('#edu2', { duration: 2000 }, 50);
  sr.reveal('#edu', { duration: 2000 }, 50);
  sr.reveal('#imageRow', { duration: 2000 }, 50);
  sr.reveal('#row1', { duration: 2000 }, 50);
  sr.reveal('#aboutTitle', { duration: 2000 }, 50);

});
