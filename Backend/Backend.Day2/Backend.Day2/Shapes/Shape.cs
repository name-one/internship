namespace Backend.Day2.Shapes
{
    public abstract class Shape
    {
        public Point Position { get; set; }

        public abstract Point[] GetVertices();
    }
}
