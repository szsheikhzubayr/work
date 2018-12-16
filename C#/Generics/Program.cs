//Generics in C#
/*Advantages of generics:
  1. Removes any boxing/unboxing that is otherwise associated with any conversions from value type to reference type
     or vice-versa.
  2. Generally the naming convention for declaring generics is <T> but one can use any notation.  */
using System;

namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            bool equal = Calculator.AreEqual<string>("A","A");
            if(equal)
            {
                Console.WriteLine("Equal");
            }
            else
            {
                Console.WriteLine("Not equal");
            }
            
        }
    }
    public class Calculator<T>
    {
        public static bool AreEqual(T value1,T value2)
        {
            return value1.Equals(value2);
        }
    }
}
