using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace auth.Controllers
{
    public class ShopController : Controller
    {
        public IActionResult Index()
        {
            
            return View();
        }
        public IActionResult Details()
        {

            return View();
        }
        public IActionResult Cart()
        {
            return View();
        }
        public IActionResult Checkout()
        {
            return View();
        }
    }
}