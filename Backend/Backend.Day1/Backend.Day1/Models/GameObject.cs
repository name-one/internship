using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.Day1.Models
{
    public abstract class GameObject
    {
        public int X { get; set; }

        public int Y { get; set; }

        public abstract string Name { get; }

        public virtual void Render()
        {
        }
    }
}
