using System;

namespace StappelTellen.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            long maxValue = long.MaxValue;
            System.Console.WriteLine($"Type een getal (lager dan {maxValue})");
            var input = System.Console.ReadLine();
            while (input != "x")
            {
                input = Run(input);
            }
            System.Console.WriteLine("Tot ziens!");
        }

        private static string Run(string input)
        {
            if (long.TryParse(input, out long number))
            {
                var result = StapelTellen.Logic.StapelTellen.Calculate(number);
                System.Console.WriteLine($"Het antwoord is: {result}");
            }
            else
            {
                System.Console.WriteLine($"Sorry, maar {input} is geen getal.");
            }
                System.Console.WriteLine("Type een getal of x om te stoppen.");
                var choice = System.Console.ReadLine();
                return choice;
        }
    }
}
