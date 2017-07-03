using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StoreApp.WebApi.Simple.Models
{
    public class Store : IIdEntity
    {
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Location { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}