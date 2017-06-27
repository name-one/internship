using System;
using Backend.Day2.Shapes;

namespace Backend.Day2.Intersector
{
    public class CircleRectIntersector : IIntersector<Circle, Rect>, IIntersector<Rect, Circle>
    {
        public bool IsIntersect(Circle s1, Rect s2)
        {
            Console.WriteLine("Circle intersector.");
            return false; // Add checking
        }

        public bool IsIntersect(Rect s1, Circle s2)
        {
            return IsIntersect(s2, s1);
        }
    }
}
