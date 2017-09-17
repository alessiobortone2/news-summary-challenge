const guardian = require('guardian-js');

let api = new guardian(19278393-44be-4a3f-9215-bdb99ba30d99, false);

var alpha = api.content.search('football', {
  tag: 'sports'
});

document.getElementById('test').innerHTML = alpha;
