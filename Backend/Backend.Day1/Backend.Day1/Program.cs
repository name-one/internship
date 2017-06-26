using System;
using Backend.Day1.Models;
using Backend.Day1.Models.Weapon;

namespace Backend.Day1
{
    class Program
    {
        static void Main(string[] args)
        {
            Game g = new Game();
            g.AddObject(new Tree("Oak", 1, 3));
            g.Player.Weapon = new Riffle(g.Player);

            ConsoleKeyInfo c;
            do
            {
                Console.Clear();
                g.Run();
                g.Render();
                c = Console.ReadKey(true);
                if (c.Key == ConsoleKey.S)
                {
                    g.Player.Weapon.Shot(g);
                }
            } while (c.Key != ConsoleKey.Escape);
        }
    }
}
