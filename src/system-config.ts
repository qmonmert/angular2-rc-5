/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': { 
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/checkbox': { 
    main: 'checkbox.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/button': { 
    main: 'button.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/progress-circle': { 
    main: 'progress-circle.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/card': { 
    main: 'card.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/input': { 
    main: 'input.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/toolbar': { 
    main: 'toolbar.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/my-component-1',
  'app/my-component-2',
  'app/page-not-found',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
