// Stage name (as it appears in the Talent sheet) -> web photo.
// Source cards live in assets/talent/*.png; web/ holds 600px WebP copies.
// Add a line here when a new performer gets a photo card.
window.OD_TALENT_PHOTOS = {
  'lil miss firefly':  'crystal-lockhart',
  'choon tan':         'choon-tan',
  'bridget the midget':'cheryl-murphy',
  'felix da smurf':    'felix-nyberg',
  'bulldogg steven':   'steven-marroquin',
  'lil johnny':        'jonathan-johnny',
  'zach morris':       'zach-morris',
  'mini durango king': 'ezequiel-virgen',
  'lil maria':         'maria-virgen',
  'isaiah vijil':      'isaiah-vijil',
  'sadie lynn':        'mercedes-lynn',
  'benny bacardi':     'kenneth-beckner',
  'mc teo':            'tony-elliott',
  'hotlanta hannah':   'hannah-taylor',
  'michael massett':   'michael-massett',
  'bad boy brian':     'brian-thoe',
  'rowdy ruff rich':   'richard-huizenga-rayos',
  'tiny tania':        'tania-barbosa',
  'leif manson':       'leif-manson',
  'gabriel pimentel':  'gabriel-pimentel',
  'little star':       'zuri-virgen',
  'pocket rocket':     'david-clarke',
  'magic mike':        'michael-kuhns',
  'scotty g':          'scott-seidman',
  'mighty mike murga': 'michal-murga',
  'kat the midget':    'kathleen-hoffman',
  'pint size pablo':   'pablo-aguiar',
};
window.odTalentPhoto = function (name) {
  var key = (name || '').toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  var file = window.OD_TALENT_PHOTOS[key];
  return file ? 'assets/talent/web/' + file + '.webp' : null;
};
