using System;
using System.Diagnostics;
using System.Text;

namespace StapelTellen.Logic
{
    public class StapelTellen
    {
        public static long Calculate(long input)
        {
            long result = 0;
            var inputAsString = input.ToString();
            var inputArray = inputAsString.ToCharArray();

            var tempResult = new StringBuilder();
            int i = 0;
            while (i < inputArray.Length)
            {
                char x = inputArray[i];
                char y = (i + 1 < inputArray.Length) ? inputArray[i + 1] : '0';
                var sum = int.Parse(x.ToString()) + int.Parse(y.ToString());
                Console.WriteLine($"{x} + {y} = {sum}");

                tempResult.Append(sum.ToString());

                i += 2;
            }
            Console.WriteLine(tempResult);
            result = long.Parse(tempResult.ToString());

            while (result > 9)
            {
                result = Calculate(result);
            }
            return result;
        }
    }
}
