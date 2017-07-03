using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using StoreApp.WebApi.Simple.Models;

namespace StoreApp.WebApi.Simple.Repositories.Entity
{
    public abstract class Repository<T> : IRepository<T>
        where T : class, IIdEntity
    {
        private readonly DbContext _ctx;
        private readonly DbSet<T> _table;

        protected Repository(DbContext ctx, DbSet<T> table)
        {
            _ctx = ctx;
            _table = table;
        }

        public T Add(T item)
        {
            T res = _table.Add(item);
            _ctx.SaveChanges();

            return res;
        }

        public bool Delete(long id)
        {
            T item = Get(id);
            if (item == null) return false;

            _table.Remove(item);
            _ctx.Dispose();
            return true;
        }

        public T Get(long id)
        {
            return _table.Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return _table;
        }

        public bool Update(long id, T item)
        {
            _ctx.Entry(item).State = EntityState.Modified;

            try
            {
                _ctx.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return false;
                }

                throw;
            }

            return true;
        }
        private bool ProductExists(long id)
        {
            return _table.Count(e => e.Id == id) > 0;
        }

        public void Dispose()
        {
            _ctx?.Dispose();
        }
    }
}