using System.Web;
using System.Web.Optimization;

namespace eProject3_User
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/bootstrap.css",
                      "~/Content/css/style.css"));

            bundles.Add(new ScriptBundle("~/bundles/javascript").Include(
                        "~/Scripts/wow.min.js",
                        "~/Scripts/custom.js",
                        "~/Scripts/revolution-active.js",
                        "~/Scripts/revolution/extensions/revolution.extension.slideanims.min.js",
                        "~/Scripts/revolution/extensions/revolution.extension.navigation.min.js",
                        "~/Scripts/revolution/extensions/revolution.extension.layeranimation.min.js",
                        "~/Scripts/revolution/extensions/revolution.extension.actions.min.js",
                        "~/Scripts/revolution/jquery.themepunch.revolution.min.js",
                        "~/Scripts/revolution/jquery.themepunch.tools.min.js",
                        "~/Scripts/jquery.lazy.min.js",
                        "~/Scripts/slick.min.js",
                        "~/Scripts/jquery.colorbox-min.js",
                        "~/Scripts/select2.min.js",
                        "~/Scripts/mixitup.min.js",
                        "~/Scripts/jquery.waypoints.min.js",
                        "~/Scripts/jquery.counterup.min.js",
                        "~/Script/jquery.countdown.min.js"
                        ));
        }
    }
}
