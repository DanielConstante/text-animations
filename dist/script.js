$(document).ready(function () {
  var entries = [
  { label: 'BACK TO TOP' },
  { label: 'BOOTSTRAP' },
  { label: 'HTML' },
  { label: 'CSS'},
  { label: 'JAVASCRIP' },
  { label: 'CODEPEN' },
  { label: 'JAVA' },
  { label: 'C++'},
  { label: 'C#'},
  { label: '.NET'},
  { label: 'CORE'},
  { label: 'PHP'},
  { label: 'AWS'},
  { label: 'TWITTER'},
  { label: 'VISUAL BASIC'},
  { label: 'PASCAL' },
  { label: 'PYTHON'},
  { label: 'GITHUB'},
  { label: 'REACT'},
  { label: 'REACT NATIVE'},
  { label: 'NODE.JS'},
  { label: 'NPM'},
  { label: 'VISUAL STUDIO'},
  { label: 'ANGULAR'},
  { label: 'SASS'},
  { label: 'jQUERY'},
  { label: 'WORDPRESS'},
  { label: 'DANIEL CONSTANTE'},
  { label: 'WEB DEVELOPER'},
  { label: 'GIT'}];
  

  var settings = {
    entries: entries,
    width: 1940,
    height: 1080,
    radius: '45%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'black',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'BioRhyme',
    fontSize: '20',
    fontColor: '#16F1D4',
    fontWeight: 'bold', //bold
    fontStyle: 'BioRhyme', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $('#tag-cloud').svg3DTagCloud(settings);
});
