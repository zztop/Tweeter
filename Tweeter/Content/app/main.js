﻿require([
// Application.
  "apps/views/app",

// Main Router.
  "apps/router"
],

function (app, Router) {

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
//    app.router = new Router();

//    // Trigger the initial route and enable HTML5 History API support, set the
//    // root folder to '/' by default. Change in app.js.
//    Backbone.history.start({ pushState: false, root: app.root });

//    // All navigation that is relative should be passed through the navigate
//    // method, to be processed by the router. If the link has a `data-bypass`
//    // attribute, bypass the delegation completely.
//    $(document).on("click", "a:not([data-bypass])", function (evt) {
//        // Get the absolute anchor href.
//        var href = $(this).prop("href");
//        // Get the absolute root.
//        var root = location.protocol + "//" + location.host + app.root;

//        // Ensure the protocol is not part of URL, meaning it's relative.
//        if (href && href.indexOf(root)) {
//            // Stop the default event to ensure the link will not cause a page
//            // refresh.
//            evt.preventDefault();

//            // `Backbone.history.navigate` is sufficient for all Routers and will
//            // trigger the correct events. The Router's internal `navigate` method
//            // calls this anyways. The fragment is sliced from the root.
//            Backbone.history.navigate(href.slice(root.length), true);
//        }
//    });

});