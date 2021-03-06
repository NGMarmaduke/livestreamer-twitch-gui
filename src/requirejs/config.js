/* global requirejs */

/**
 * RequireJS Configuration
 * This will also be used as the requirejs optimization config
 */
requirejs.config({
	"shim": {
		"Ember": {
			"deps": [ "JQuery" ],
			"exports": "Ember"
		},
		"EmberData": {
			"deps": [ "Ember" ],
			"exports": "DS"
		},
		"EmberDataLS": [ "EmberData" ]
	},

	"map": {
		"*": {
			"EmberHtmlbars": "EmberHtmlbarsWrapper"
		},
		// export wrapper
		"EmberHtmlbarsWrapper": {
			"EmberHtmlbars": "EmberHtmlbars"
		}
	},

	"paths": {
		// RequireJS plugins
		"commonjs": "../requirejs/plugins/commonjs/commonjs",
		"file"    : "../requirejs/plugins/file/file.dev",
		"json"    : "../requirejs/plugins/json/json.dev",
		"hbs"     : "../requirejs/plugins/hbs/hbs.dev",

		// Vendor
		"Ember"        : "../vendor/ember/ember.debug",
		"EmberHtmlbars": "../vendor/ember/ember-template-compiler",
		"EmberData"    : "../vendor/ember-data/ember-data",
		"EmberDataLS"  : "../vendor/ember-localstorage-adapter/localstorage_adapter",
		"JQuery"       : "../vendor/jquery/dist/jquery",
		"Selecter"     : "../vendor/Selecter/jquery.fs.selecter",
		"Moment"       : "../vendor/momentjs/moment",
		"Masonry"      : "../vendor/masonry/dist/masonry.pkgd",

		// Wrappers
		"EmberHtmlbarsWrapper": "../requirejs/wrappers/EmberHtmlbarsWrapper",

		// Application paths
		"root"        : "..",
		"requirejs"   : "../requirejs",
		"config"      : "../app/config",
		"initializers": "../app/initializers",
		"mixins"      : "../app/mixins",
		"services"    : "../app/services",
		"helpers"     : "../app/helpers",
		"models"      : "../app/models",
		"controllers" : "../app/controllers",
		"routes"      : "../app/routes",
		"components"  : "../app/components",
		"store"       : "../app/store",
		"utils"       : "../app/utils",
		"gui"         : "../app/gui",
		"templates"   : "../templates"
	}
});
