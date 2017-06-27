namespace Backend.Day2.Shapes
{
    public class Rect : Shape
    {
        public double Height { get; set; }

        public double Width { get; set; }

        public override Point[] GetVertices()
        {
            return new Point[0]; // points describes rectangle
        }
    }
}
