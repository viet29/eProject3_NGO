using eProject3.Models;
using System.Data.Entity;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace eProject3.Controllers
{
    public class SessionCheck
    {
        public string HashPW(string pass)
        {
            SHA1Managed sha1 = new SHA1Managed();
            var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(pass));
            var pw = new StringBuilder(hash.Length * 2);
            foreach (byte b in hash)
            {
                pw.Append(b.ToString("x2"));
            }

            return pw.ToString();
        }

        public bool AdminCheck(User admin)
        {
            return (
                admin.UserId == (int)HttpContext.Current.Session["UserId"] &&
                admin.Username == HttpContext.Current.Session["Username"].ToString() &&
                admin.Role == (int) HttpContext.Current.Session["Role"]
                );
        }

        public bool SessionChecking()
        {
            return (
                HttpContext.Current != null &&
                HttpContext.Current.Session != null &&
                HttpContext.Current.Session["AdminName"] != null &&
                HttpContext.Current.Session["AdminRole"] != null
                );
        }

        public void AutoLogOut()
        {

            if (this.SessionChecking())
            {
                NGO_testEntities db = new NGO_testEntities();
                User adm = db.Users.Find((int)HttpContext.Current.Session["AdminId"]);
                db.Entry(adm).State = EntityState.Modified;
                db.SaveChanges();
                HttpContext.Current.Session.Clear();
            }

        }
    }
}