define([
// Libraries.
  "jquery",
  "underscore",
  "backbone",
  "modenizr",
  "json",

// Plugins.
  "libs/bootstrap/js/bootstrap"
],
function ($, _, Backbone) {

    // Patch collection fetching to emit a `fetch` event.
    Backbone.Collection.prototype.fetch = function () {
        var fetch = Backbone.Collection.prototype.fetch;

        return function () {
            this.trigger("fetch");

            return fetch.apply(this, arguments);
        };
    } ();

    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application through.
        root: "/"
    };
});
