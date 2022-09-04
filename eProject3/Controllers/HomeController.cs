using eProject3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace eProject3.Controllers
{
    public class HomeController : Controller
    {
        private NGO_testEntities db = new NGO_testEntities();
        private SessionCheck sc = new SessionCheck();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult LoginStart(string usn, string pwd)
        {
            TempData["LoginResult"] = "";
            var currentAdmin = db.Users.Include(a => );
            if (String.IsNullOrEmpty(pwd))
            {
                return RedirectToAction("Login");
            }
            else
            {
                string hashPw = sc.HashPW(pwd);
                CurrentAdmin = CurrentAdmin.Where(a => a.Username == AdminName)
                                           .Where(a => a.AdminPassword == tempPw)
                                           .Where(a => a.Deleted == false);
            }
        }
    }
}