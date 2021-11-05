const filters = [
  { label: 'Blur', filter: 'blur(#px)', min: 0, max: 10, value: 3 },
  { label: 'Brightness', filter: 'brightness(#%)', min: 0, max: 500, value: 80},
  { label: 'Contrast', filter: 'contrast(#%)', min: 0, max: 500, value: 200 },
  { label: 'Grayscale', filter: 'grayscale(#%)', min: 0, max: 100, value: 50 },
  { label: 'Hue rotate', filter: 'hue-rotate(#deg)', min: 0, max: 360, value: 90 },
  { label: 'Invert', filter: 'invert(#%)', min: 0, max: 100, value: 80 },
  { label: 'Opacity', filter: 'opacity(#%)', min: 0, max: 100, value: 50 },
  { label: 'Saturate', filter: 'saturate(#%)', min: 0, max: 500, value: 200 },
  { label: 'Sepia', filter: 'sepia(#%)', min: 0, max: 100, value: 50 },
];
BlurCheck = document.getElementById("BlurCheck")
BlurRange = document.getElementById("BlurRange")
GrayscaleCheck = document.getElementById("GrayscaleCheck")
GrayscaleRange = document.getElementById("GrayscaleRange")
HueCheck = document.getElementById("HueCheck")
HueRange = document.getElementById("HueRange")
SepiaCheck = document.getElementById("SepiaCheck")
SepiaRange = document.getElementById("SepiaRange")
blurChecked=false
grayscaleChecked=false
hueChecked=false
sepiaChecked=false

BlurCheck.addEventListener('change', function () {
  if (this.checked) {
    blurChecked = true;
  } else {
    blurChecked = false;
    filters[0].filter='blur(#px)'
  }
});
GrayscaleCheck.addEventListener('change', function () {
  if (this.checked) {
    grayscaleChecked = true;
  } else {
    grayscaleChecked = false;
    filters[3].filter='grayscale(#%)'
  }
});
HueCheck.addEventListener('change', function () {
  if (this.checked) {
    hueChecked = true;
  } else {
    hueChecked = false;
    filters[4].filter='hue-rotate(#deg)'
  }
});
SepiaCheck.addEventListener('change', function () {
  if (this.checked) {
    sepiaChecked = true;
  } else {
    sepiaChecked = false;
    filters[8].filter='sepia(#%)'
  }
});

BlurRange.addEventListener('input', function(event) {
  if (blurChecked) {
    filters[0].filter='blur('+event.target.value+'px)'
  }
})
GrayscaleRange.addEventListener('input', function(event) {
  if (grayscaleChecked) {
    'grayscale('+event.target.value+'%)'
    filters[3].filter='grayscale('+event.target.value+'%)'
  }
})
HueRange.addEventListener('input', function(event) {
  if (hueChecked) {
    'hue-rotate('+event.target.value+'deg)'
    filters[4].filter='hue-rotate('+event.target.value+'deg)'
  }
})
SepiaRange.addEventListener('input', function(event) {
  if (sepiaChecked) {
    'sepia('+event.target.value+'%)'
    filters[8].filter='sepia('+event.target.value+'%)'
  }
})


const theFiltersDiv = document.querySelector('#the-filters')
const theImage = document.querySelector('#the-image')

