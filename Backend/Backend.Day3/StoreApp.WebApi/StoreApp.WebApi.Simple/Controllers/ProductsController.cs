using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using StoreApp.WebApi.Simple.Models;
using StoreApp.WebApi.Simple.Repositories;

namespace StoreApp.WebApi.Simple.Controllers
{
    public class ProductsController : ApiController
    {
        private readonly IProductsRepository _repo = Services.Get<IProductsRepository>();

        // GET: api/Products
        public IHttpActionResult GetProducts()
        {
            return Json(_repo.GetAll());
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(long id)
        {
            Product product = _repo.Get(id);
            if (product == null)
            {
                return NotFound();
            }

            return Json(product);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(long id, Product product)
        {
            if(!_repo.Update(id, product)) return NotFound();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            _repo.Add(product);

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(long id)
        {
            if (!_repo.Delete(id)) return NotFound();

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }
            base.Dispose(disposing);
        }

    }
}