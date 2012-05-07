using System.Web.Mvc;
using Twitterizer;

namespace Tweeter.Controllers
{
    public class UserInfoController : Controller
    {
        private OAuthTokenResponse _token;
        //
        // GET: UserAccount/Index

        public ActionResult Index(string id)
        {
            ViewBag.UserId = id;

            if (User != null && User.Identity.IsAuthenticated)
            {
                _token = Session["UserToken"] as OAuthTokenResponse;
            }

            return View();
        }

    }
}
