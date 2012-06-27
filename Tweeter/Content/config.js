require.config({

    // Initialize the application with the main application file.
    deps: ["app/main"],
   // baseUrl:"../",

    paths: {
        // JavaScript folders.
        libs: "libs",
        helper:"libs/helper",
        apps:"app",
        // Libraries.
        jquery: "libs/jquery/jquery",
        underscore: "libs/underscore/underscore",
        backbone: "libs/backbone/backbone",
        modernizr:"libs/helper/modernizr",
        json:"libs/helper/json2",
        text:"libs/Require/text"
    },

    shim: {
        // Backbone library depends on lodash and jQuery.
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        // Twitter Bootstrap depends on jQuery.
        "libs/bootstrap/js/bootstrap": ["jquery"]
    }

});