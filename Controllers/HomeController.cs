using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HybridSPA.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult PostExample()
        {
            return View(new ExampleModel());
        }

        [HttpPost]
        public IActionResult PostExample(ExampleModel model)
        {
            return RedirectToAction("Index", this.GetNoLayoutParams());
        }
    }
}
