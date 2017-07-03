using System;
using System.Collections.Generic;

namespace StoreApp.WebApi.Simple
{
    public static class Services
    {
        private static readonly Dictionary<Type, Func<object>> Map = new Dictionary<Type, Func<object>>();

        private static readonly object Sync = new object();

        public static void Add<T>(Func<T> creator)
        {
            lock (Sync)
            {
                Map[typeof(T)] = () => creator();
            }
        }

        public static T Get<T>()
        {
            lock (Sync)
            {
                Func<object> creator;
                if (!Map.TryGetValue(typeof(T), out creator))
                    return default(T);

                return (T) creator();
            }
        }
    }
}