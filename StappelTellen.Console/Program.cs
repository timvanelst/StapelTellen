using System;

namespace StappelTellen.Console
{
    class Program
    {
        static void Main(string[] args)
        {

            System.Console.WriteLine("Type een getal");
            var input = System.Console.ReadLine();
            while (input != "x")
            {
                input = Run(input);
            }
            System.Console.WriteLine("Tot ziens!");
        }

        private static string Run(string input)
        {
            uint number = 0;
            if (!uint.TryParse(input, out number))
            {
                System.Console.WriteLine($"Sorry, maar {input} is geen getal.");
            }
            var result = StapelTellen.Logic.StapelTellen.Calculate(number);
            System.Console.WriteLine($"Het antwoord is: {result}");
            System.Console.WriteLine("Type een getal of x om te stoppen.");
            var choice = System.Console.ReadLine();
            return choice;
        }
    }
}
