using Backend.Day2.Shapes;

namespace Backend.Day2.Intersector
{
    public interface IIntersector<TShape1, TShape2> 
        where TShape1 : Shape 
        where TShape2 : Shape
    {
        bool IsIntersect(TShape1 s1, TShape2 s2);
    }
}
