using System;
using Backend.Day1.Models.Weapon;

namespace Backend.Day1.Models
{
    public class Person : GameObject
    {
        private readonly string _name;
        public override string Name { get { return _name; } }

        public Person(string name)
        {
            _name = name;
        }

        public override void Render()
        {
            Console.ForegroundColor = ConsoleColor.White;
            if (X < 0 || Y < 0 || X > Console.BufferWidth || Y > Console.BufferHeight) return;
            Console.SetCursorPosition(X, Y);
            Console.Write("P");
        }

        public IWeapon Weapon { get; set; }
        public IWeapon1 Weapon1 { get; set; }

        public int Direction { get; set; }
    }
}
