using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.Day1.Models
{
    public class Tree : GameObject
    {
        private readonly string _name;

        public override string Name
        {
            get { return "Tree '" + _name + "'"; }
        }

        public Tree(string name, int x, int y)
        {
            _name = name;
            X = x;
            Y = y;
        }

        public override void Render()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.SetCursorPosition(X, Y);
            Console.Write("T");
        }
    }
}
