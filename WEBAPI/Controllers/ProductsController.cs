using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEBAPI.Data;
using WEBAPI.Models;

namespace WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly TaFoodsContext _context;

        public ProductsController(TaFoodsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult getProducts()
        {
            return Ok(_context.Products.ToList());
        }

        [HttpPost]
        public IActionResult addProducts(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return StatusCode(201);
        }

        [HttpDelete]
        public IActionResult deleteProducts(int id)
        {
            var product = _context.Products.Find(id);
            _context.Products.Remove(product);
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult getSingleItem(int id)
        {
            return Ok(_context.Products.Find(id));
        }

        [HttpPut]
        public IActionResult updateProducts(int id, Product product)
        {
             var prod = _context.Products.Find(id);

                prod.ProductName = product.ProductName;
                prod.Description = product.Description;
                prod.Price = product.Price;


            _context.Products.Update(prod);
            _context.SaveChanges();
            return Ok();
        }

        
    }
}
