# emoji-annotation-to-unicode

Map emoji shortcodes to Unicode code point sequences.

Forked from the apparently defunct original.

## Install

    $ npm install --save git+https://github.com/CylonicRaider/emoji-annotation-to-unicode

## Update

    $ node generate-map.js

## Data sources

The bulk of the shortcode mappings are drawn from the GitHub API. They are
enriched with mappings for missing emoji and converted into well-formed
fully-qualified emoji sequences using data from the `unicode-emoji` NPM
package.

## License

MIT
