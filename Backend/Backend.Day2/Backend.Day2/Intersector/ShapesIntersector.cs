using System;
using Backend.Day2.Shapes;

namespace Backend.Day2.Intersector
{
    public class ShapesIntersector: IIntersector<Shape, Shape>
    {
        public bool IsIntersect(Shape s1, Shape s2)
        {
            var points1 = s1.GetVertices();
            var points2 = s2.GetVertices();
            Console.WriteLine("Shape intersector.");

            return false; // Add checking
        }
    }
}
