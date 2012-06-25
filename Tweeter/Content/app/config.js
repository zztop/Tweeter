require.config({

    // Initialize the application with the main application file.
    deps: ["main"],

    paths: {
        // JavaScript folders.
        libs: "libs",
        app: "app",
        helper:"libs/helper",
        // Libraries.
        jquery: "libs/jquery/jquery",
        underscore: "libs/underscore/underscore",
        backbone: "libs/backbone",
        modenizr:"helper/modenizr",
        json:"helper/json2"
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