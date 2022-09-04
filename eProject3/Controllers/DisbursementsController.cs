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
    public class DisbursementsController : Controller
    {
        private NGO_testEntities db = new NGO_testEntities();

        // GET: Disbursements
        public ActionResult Index()
        {
            var disbursements = db.Disbursements.Include(d => d.Project);
            return View(disbursements.ToList());
        }

        // GET: Disbursements/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Disbursement disbursement = db.Disbursements.Find(id);
            if (disbursement == null)
            {
                return HttpNotFound();
            }
            return View(disbursement);
        }

        // GET: Disbursements/Create
        public ActionResult Create()
        {
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName");
            return View();
        }

        // POST: Disbursements/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DisbursementId,ProjectId,Date,AmountSpend")] Disbursement disbursement)
        {
            if (ModelState.IsValid)
            {
                db.Disbursements.Add(disbursement);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", disbursement.ProjectId);
            return View(disbursement);
        }

        // GET: Disbursements/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Disbursement disbursement = db.Disbursements.Find(id);
            if (disbursement == null)
            {
                return HttpNotFound();
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", disbursement.ProjectId);
            return View(disbursement);
        }

        // POST: Disbursements/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "DisbursementId,ProjectId,Date,AmountSpend")] Disbursement disbursement)
        {
            if (ModelState.IsValid)
            {
                db.Entry(disbursement).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "ProjectName", disbursement.ProjectId);
            return View(disbursement);
        }

        // GET: Disbursements/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Disbursement disbursement = db.Disbursements.Find(id);
            if (disbursement == null)
            {
                return HttpNotFound();
            }
            return View(disbursement);
        }

        // POST: Disbursements/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Disbursement disbursement = db.Disbursements.Find(id);
            db.Disbursements.Remove(disbursement);
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
