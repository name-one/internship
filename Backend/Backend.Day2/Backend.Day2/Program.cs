using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Backend.Day2.Intersector;
using Backend.Day2.Shapes;

namespace Backend.Day2
{
    class Program
    {
        static void Main(string[] args)
        {
            var c1 = new Circle();
            var c2 = new Circle();
            var r = new Rect();

            var manager = new IntersectorManager();
            manager.IsIntersect(r, c1);
            manager.IsIntersect(c1, c2);
            manager.Register<Circle, Rect>(new CircleRectIntersector());
            manager.IsIntersect(r, c1);
            manager.IsIntersect(c1, c2);
        }
    }
}
