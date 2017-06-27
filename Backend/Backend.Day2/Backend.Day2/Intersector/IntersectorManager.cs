using System.Collections.Generic;
using System.Linq;
using Backend.Day2.Shapes;

namespace Backend.Day2.Intersector
{
    public class IntersectorManager
    {
        private readonly List<object> _intersectors = new List<object>();

        private readonly ShapesIntersector _defaultIntersector = new ShapesIntersector();

        public void Register<T1, T2>(IIntersector<T1, T2> intersector) 
            where T1 : Shape 
            where T2 : Shape
        {
            _intersectors.Add(intersector);
        }

        public bool IsIntersect<T1, T2>(T1 shape1, T2 shape2)
            where T1 : Shape
            where T2 : Shape
        {
            var intersector = (IIntersector<T1, T2>)_intersectors.FirstOrDefault(i => i is IIntersector<T1, T2>);
            
            return intersector != null 
                ? intersector.IsIntersect(shape1,shape2)
                : _defaultIntersector.IsIntersect(shape1, shape2);
        }
    }
}
