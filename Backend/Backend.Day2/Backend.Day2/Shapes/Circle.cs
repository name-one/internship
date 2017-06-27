namespace Backend.Day2.Shapes
{
    public class Circle : Shape
    {
        public double R { get; set; }

        public override Point[] GetVertices()
        {
            return new Point[0]; // points describes circle
        }
    }
}
