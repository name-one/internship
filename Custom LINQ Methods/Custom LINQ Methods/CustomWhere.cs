using System;
using System.Collections.Generic;

namespace Custom_LINQ_Methods
{
    public static class CustomWhere
    {
        public static IEnumerable<T> CWhere<T>(this IEnumerable<T> source,Func<T,bool> temp)
        {
            foreach (T e in source)
            {
                if (temp(e))
                    yield return e;
            }
        }

        public static IEnumerable<TResult> CSelect<T,TResult>(this IEnumerable<T> source, Func<T, TResult> selector)
        {
            List<TResult> list = new List<TResult>();

            int i = 0;

            foreach (T e in source)
            {
                yield return selector(e);
                checked { i++;}
            }
        }
    }
}