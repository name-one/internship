using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StoreApp.WebApi.Simple.Models
{
    public class Product  : IIdEntity
    {
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Price { get; set; }

        public virtual ICollection<Store> Stores { get; set; }
    }
}