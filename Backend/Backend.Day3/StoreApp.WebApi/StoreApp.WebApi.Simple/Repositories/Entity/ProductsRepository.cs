using StoreApp.WebApi.Simple.Models;

namespace StoreApp.WebApi.Simple.Repositories.Entity
{
    public class ProductsRepository : Repository<Product>, IProductsRepository
    {
        public ProductsRepository(DatabaseContext ctx)
            : base(ctx, ctx.Products)
        {
        }
    }
}