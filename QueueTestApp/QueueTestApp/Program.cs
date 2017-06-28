using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassQueue;

namespace QueueTestApp
{
    class MyOwnSuperClass
    {
        public MyOwnSuperClass(int newIntegerVar = 0, string newStringVar = "")
        {
            integerVar = newIntegerVar;
            stringVar = newStringVar;
        }
        public int integerVar;
        public string stringVar;
    }

    class Program
    {
        static void Main(string[] args)
        {
            ClassQueue.Queue<MyOwnSuperClass> myQueue = new ClassQueue.Queue<MyOwnSuperClass>();
            myQueue.Push(new MyOwnSuperClass(1, "one"));
            myQueue.Pop();
            myQueue.Push(new MyOwnSuperClass(2, "two"));
            myQueue.Push(new MyOwnSuperClass(4, "four"));
            myQueue.Push(new MyOwnSuperClass(3, "three"));
            myQueue.Pop();
            myQueue.Pop();
            myQueue.Pop();
            myQueue.Pop();
            
        }
    }
}
