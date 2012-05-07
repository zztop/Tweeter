using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Twitterizer;

namespace Tweeter.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        public ActionResult LogOn()
        {
            string callbackUrl = string.Concat(
                Request.Url.GetLeftPart(UriPartial.Authority),
                VirtualPathUtility.ToAbsolute(this.Url.Action("CallBack", "Account")));
            var token = OAuthUtility.GetRequestToken(
                 ConfigurationManager.AppSettings["Twitterizer.ConsumerKey"],
                 ConfigurationManager.AppSettings["Twitterizer.ConsumerSecret"],
                 callbackUrl).Token;

            return Redirect(OAuthUtility.BuildAuthorizationUri(token, true).ToString());
        }
        //
        // GET: /Account/Callback

        public ActionResult CallBack(string oauth_token, string oauth_verifier)
        {
            var tokens = OAuthUtility.GetAccessToken(
                ConfigurationManager.AppSettings["Twitterizer.ConsumerKey"],
                ConfigurationManager.AppSettings["Twitterizer.ConsumerSecret"],
                oauth_token,
                oauth_verifier);
            Session["UserToken"] = tokens;
            
            FormsAuthentication.SetAuthCookie(tokens.ScreenName, false);
            return RedirectToRoute(new {controller = "UserInfo", action = "Index", id = tokens.ScreenName});
        }
    }
}
