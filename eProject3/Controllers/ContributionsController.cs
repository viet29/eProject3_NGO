using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using eProject3.Models;

namespace eProject3.Controllers
{
    public class ContributionsController : Controller
    {
        private NGO_testEntities db = new NGO_testEntities();

        // GET: Contributions
        public ActionResult Index()
        {
            var contributions = db.Contributions.Include(c => c.Project).Include(c => c.User);
            return View(contributions.ToList());
        }

        // GET: Contributions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contribution contribution = db.Contributions.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            return View(contribution);
        }

        // GET: Contributions/Create
        public ActionResult Create()
        {
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName");
            ViewBag.UserId = new SelectList(db.Users, "UserId", "Username");
            return View();
        }

        // POST: Contributions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ContributionId,UserId,ProjectId,Amount,Date,Message")] Contribution contribution)
        {
            if (ModelState.IsValid)
            {
                db.Contributions.Add(contribution);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", contribution.ProjectId);
            ViewBag.UserId = new SelectList(db.Users, "UserId", "Username", contribution.UserId);
            return View(contribution);
        }

        // GET: Contributions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contribution contribution = db.Contributions.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", contribution.ProjectId);
            ViewBag.UserId = new SelectList(db.Users, "UserId", "Username", contribution.UserId);
            return View(contribution);
        }

        // POST: Contributions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ContributionId,UserId,ProjectId,Amount,Date,Message")] Contribution contribution)
        {
            if (ModelState.IsValid)
            {
                db.Entry(contribution).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", contribution.ProjectId);
            ViewBag.UserId = new SelectList(db.Users, "UserId", "Username", contribution.UserId);
            return View(contribution);
        }

        // GET: Contributions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contribution contribution = db.Contributions.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            return View(contribution);
        }

        // POST: Contributions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Contribution contribution = db.Contributions.Find(id);
            db.Contributions.Remove(contribution);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
