using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.Day1.Models
{
    public class Rock : GameObject
    {
        private readonly string _name;

        public override string Name
        {
            get { return "Rock '" + _name + "'"; }
        }

        public Rock(string name, int x, int y)
        {
            _name = name;
            X = x;
            Y = y;
        }

        public override void Render()
        {
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.SetCursorPosition(X, Y);
            Console.Write("O");
        }
    }
}
