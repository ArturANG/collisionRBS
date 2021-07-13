// Copyright 2021, University of Colorado Boulder

/**
 * Converts the font awesome icon data from metadata/icons.json to modules that can be loaded in scenery.
 * Also creates a list of all icons that can be used for testing.
 * Icon filenames are converted to camelcase with uppercase.
 * Icon files that begin with a non-alphabetical character are prefixed with "FA"
 *
 * Usage:
 * cd sherpa
 * node js/fontawesome-5/modulifyFontAwesomeIcons.js
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
const fs = require( 'fs' ); // eslint-disable-line
const _ = require( '../../lib/lodash-4.17.4.min.js' ); // eslint-disable-line

const json = fs.readFileSync( 'lib/fontawesome-free-5.15.2-desktop/metadata/icons.json', 'utf8' );
const root = JSON.parse( json );
const keys = Object.keys( root );
const directory = 'js/fontawesome-5';

// These icons fail during Shape assembly, so are left off the master list for now.  The icon module files
// are still created, but they are omitted from iconList.js
const failures = `Amazon
Aviato
Bitcoin
CanadianMapleLeaf
CcAmex
CcJcb
CcVisa
Confluence
DAndDBeyond
Discord
Discourse
DumpsterFire
Ember
Evernote
FilePdf
FireAlt
FirefoxBrowser
FreeCodeCamp
Frog
GithubSquare
Grav
Gripfire
Grunt
Hooli
Hornbill
ItchIo
ItunesNote
Java
JediOrder
Jira
Keycdn
KissWinkHeart
Language
Lastfm
Lyft
Mdb
Napster
Odnoklassniki
Pagelines
Paypal
Phabricator
PinterestSquare
Playstation
Pushed
PuzzlePiece
RProject
Rebel
Ribbon
Rockrms
Salesforce
Sass
Shopify
Studiovinari
StumbleuponCircle
Usps
Viber
Vnv
WatchmanMonitoring
Wix
WizardsOfTheCoast
Wordpress
Yarn
YoutubeSquare
Zhihu`.split( '\n' );

/**
 * Capitalize the first character in a string.
 * @param string
 * @returns {string}
 */
const capitalize = string => string.charAt( 0 ).toUpperCase() + string.slice( 1 );

// Indicate that the file was automatically generated.
const autoGeneratedComment = 'Auto-generated by modulifyFontAwesomeIcons.js, please do not modify directly.';

/**
 * Fill in the template for an icon file
 * @param {string} typeName
 * @param {string} path
 */
const getIconFileText = ( typeName, path ) => `// Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)

// ${autoGeneratedComment}

export default '${path}';`;

const getShapeFileText = ( typeName, style ) => {

  const term = `${typeName}${style !== 'brands' ? capitalize( style ) : ''}String`;
  return `// Copyright 2021, University of Colorado Boulder

// ${autoGeneratedComment}

import Shape from '../../../${style === 'brands' ? '../' : ''}kite/js/Shape.js';
import ${term} from './${term}.js';

export default new Shape( ${term} );`;
};

const list = [];
keys.forEach( key => {
  const entry = root[ key ];
  entry.styles.forEach( style => {

    // Create the style directory if it does not already exist.
    try {
      fs.mkdirSync( `${directory}/${style}` );
    }
    catch( e ) {
      if ( !e.message.includes( 'file already exists' ) ) {
        throw e;
      }
    }

    let typeName = `${_.camelCase( key )}`;

    // Start with alphabetical characters, not numbers
    const char = typeName.charAt( 0 );
    if ( char.toLowerCase() === char.toUpperCase() ) {
      typeName = `fa${capitalize( typeName )}`;
    }

    const path = entry.svg[ style ].path;
    const text = getIconFileText( typeName, path );

    const filename = style === 'brands' ? `${directory}/${style}/${typeName}String.js` :
                     `${directory}/${typeName}${capitalize( style )}String.js`;
    fs.writeFileSync( filename, text );

    const shapeText = getShapeFileText( typeName, style );
    const shapeFilename = style === 'brands' ? `${directory}/${style}/${typeName}Shape.js` :
                          `${directory}/${typeName}${capitalize( style )}Shape.js`;
    fs.writeFileSync( shapeFilename, shapeText );

    if ( !failures.includes( typeName ) ) {
      list.push( { filename: filename, text: text, typeName: typeName, style: style } );
    }
  } );

  const getImportPath = element => {
    if ( element.style === 'brands' ) {
      return `'./${element.style}/${element.typeName}Shape.js'`;
    }
    else {
      return `'./${element.typeName}${capitalize( element.style )}Shape.js'`;
    }
  };
  const importStatements = list.map( element => `import ${element.typeName}_${element.style} from ${getImportPath( element )};` );
  const names = list.map( element => `${element.typeName}_${element.style}` );

  const iconList = `// Copyright 2021, University of Colorado Boulder

/**
 * ${autoGeneratedComment}
 * Provides constructors (types) for all auto-generated Font Awesome icons. 
 */
${importStatements.join( '\n' )}

const array = [ ${names.join( ', ' )} ];
export default array;`;

  fs.writeFileSync( `${directory}/iconList.js`, iconList );
} );