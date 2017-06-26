using System;

namespace Backend.Day1.Models
{
    public class Bullet : GameObject, IProcessable
    {
        public override string Name { get { return "Bullet"; } }
        
        public int Speed { get; set; }

        public int Direction { get; }


        public Bullet(int direction)
        {
            Direction = direction;
        }

        public override void Render()
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            if (X < 0 || Y < 0 || X > Console.BufferWidth || Y > Console.BufferHeight) return;
            Console.SetCursorPosition(X, Y);
            Console.Write(".");
        }


        public void Process()
        {
            switch (Direction)
            {
                case 0: Y--; break;
                case 1: X--; break;
                case 2: Y++; break;
                case 3:X++; break;
            }
        }
    }
}
