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
            g.AddObject(new Tree("Oak", 10, 10));
            g.AddObject(new Rock("Kryptonite", 20, 20));
            g.Player.Weapon = new Riffle(g.Player);
            g.Player.Weapon1 = new AK47(g.Player);

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
                else if (c.Key == ConsoleKey.D)
                {
                    g.Player.Weapon1.Shot(g);
                }
            } while (c.Key != ConsoleKey.Escape);
        }
    }
}
