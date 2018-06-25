using ClassLibrary1;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1Test
{
    [TestFixture]
    public class Class1Integ
    {
        [Test]
        public void SayHelloAndBoohoo()
        {
            var c = new Class1();

            Assert.AreEqual("hi Jonathan. Jonathan, booo hoooo...", $"{c.SayHello("Jonathan")}. {c.SayBooHoo("Jonathan")}");
        }
    }
}
