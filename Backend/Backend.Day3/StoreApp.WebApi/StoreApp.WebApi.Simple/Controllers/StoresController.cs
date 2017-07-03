using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using StoreApp.WebApi.Simple.Models;
using StoreApp.WebApi.Simple.Repositories;

namespace StoreApp.WebApi.Simple.Controllers
{
    public class StoresController : ApiController
    {
        private readonly IStoresRepository _repo = Services.Get<IStoresRepository>();
        
        // GET: api/Stores
        public IHttpActionResult GetStores()
        {
            return Json(_repo.GetAll());
        }

        // GET: api/Stores/5
        [ResponseType(typeof(Store))]
        public IHttpActionResult GetStore(long id)
        {
            Store store = _repo.Get(id);
            if (store == null)
            {
                return NotFound();
            }

            return Json(store);
        }

        // PUT: api/Stores/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStore(long id, Store store)
        {
            if (!_repo.Update(id, store)) return NotFound();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Stores
        [ResponseType(typeof(Store))]
        public IHttpActionResult PostStore(Store store)
        {
            store = _repo.Add(store);
            return CreatedAtRoute("DefaultApi", new { id = store.Id }, store);
        }

        // DELETE: api/Stores/5
        [ResponseType(typeof(Store))]
        public IHttpActionResult DeleteStore(long id)
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