using StoreApp.WebApi.Simple.Models;

namespace StoreApp.WebApi.Simple.Repositories.Entity
{
    public class StoresRepository : Repository<Store>, IStoresRepository
    {
        public StoresRepository(DatabaseContext ctx)
            : base(ctx, ctx.Stores)
        {
        }
    }
}