using System;
using Xunit;

namespace StapelTellen.Tests
{
    public class StapelTellenTests
    {
        [Theory]
        [InlineData(12, 3)]
        [InlineData(123, 6)]
        [InlineData(987, 6)]
        [InlineData(1019292010, 7)]
        [InlineData(3754296418, 4)]
        public void Test1(uint input, uint expectedResult)
        {
            var result = Logic.StapelTellen.Calculate(input);
            Assert.Equal(expectedResult, result);
        }
    }
}
