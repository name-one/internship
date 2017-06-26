using System.Collections.Generic;
using System.Linq;

namespace Backend.Day1.Models
{
    public class Game
    {
        public List<GameObject> Objects { get; }

        public Person Player { get; }

        public Game()
        {
            Objects = new List<GameObject>();
            Player = new Person("Me")
            {
                X = 6,
                Y = 6,
            };
            AddObject(Player);
        }

        public void AddObject(GameObject obj)
        {
            Objects.Add(obj);
        }

        public void Run()
        {
            foreach (var p in Objects.Where(o => o is IProcessable).Cast<IProcessable>())
            {
                p.Process();
            }
        }

        public void Render()
        {
            foreach (var o in Objects)
            {
                o.Render();
            }
        }
    }
}
