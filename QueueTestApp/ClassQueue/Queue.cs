using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassQueue
{
    public class Queue<T>
    {
        protected T[] storage;
        protected const int defaultSize = 16;
        protected int allocedSize;
        private int head;
        private int tail;
        public int Size() { return tail - head; }
        public void PrintSize()
        {
            Console.WriteLine("own queue size = {0}, capacity = {1}", Size(), allocedSize);
        }
        public Queue(int startSize = defaultSize)
        {
            allocedSize = startSize;
            storage = new T[allocedSize];
            head = 0;
            tail = 0;
            Console.WriteLine("new own queue created with capacity = {0}", allocedSize);
        }
        public void Push(T elem)
        {
            if (Size() == allocedSize)
            {
                allocedSize = allocedSize * 2;
                T[] new_storage = new T[allocedSize];
                storage.CopyTo(new_storage, head);
                head = 0;
                tail = Size();
                storage = new_storage;
                Console.WriteLine("queue realloced. current size = {0}", Size());
            }
            storage[tail++] = elem;
            Console.WriteLine("new elem pushed to queue. current size = {0}", Size());

        }
        public T Pop()
        {
            if (head < tail)
            {
                Console.WriteLine("head elem from queue. current size = {0}", Size() -1);
                return storage[head++];
            }
            Console.WriteLine("Just return default value of elem type. current size = {0}", Size());
            return default(T);
        }
    }
}
