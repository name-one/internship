using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StoreApp.WebApi.Simple.Models
{
    public class DatabaseContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public DatabaseContext() : base("name=DatabaseContext")
        {
        }

        public DbSet<Store> Stores { get; set; }

        public System.Data.Entity.DbSet<StoreApp.WebApi.Simple.Models.Product> Products { get; set; }
    }
}
