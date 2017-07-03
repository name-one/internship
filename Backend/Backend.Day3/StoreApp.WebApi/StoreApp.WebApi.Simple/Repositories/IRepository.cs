using System;
using System.Collections.Generic;
using StoreApp.WebApi.Simple.Models;

namespace StoreApp.WebApi.Simple.Repositories
{
    public interface IRepository<TItem> : IDisposable
        where TItem : IIdEntity
    {
        TItem Get(long id);

        IEnumerable<TItem> GetAll();

        bool Update(long id, TItem item);

        bool Delete(long id);

        TItem Add(TItem item);
    }
}