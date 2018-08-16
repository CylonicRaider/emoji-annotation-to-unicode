
const fs = require('fs');
const url = require('url');
const https = require('https');

const EMOJI_MAP_URL = 'https://api.github.com/emojis';
const OUTPUT_FILENAME = 'emoji-annotation-to-unicode.js';

const options = url.parse(EMOJI_MAP_URL);
options.headers = {'User-Agent': 'nodejs'};
https.get(options, (resp) => {
  const accum = [];
  resp.setEncoding('utf-8');
  resp.on('data', piece => accum.push(piece));
  resp.on('end', () => {
    const data = JSON.parse(accum.join(''));
    Object.keys(data).forEach((name) => {
      const m = /\/unicode\/(.+?)\.png/.exec(data[name]);
      if (m) {
        data[name] = m[1];
      } else {
        delete data[name];
      }
    });
    const text = 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync(OUTPUT_FILENAME, text);
  });
});
