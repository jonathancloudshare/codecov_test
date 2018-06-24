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
    public class Class1Test
    {
        [Test]
        public void SayHello()
        {
            Assert.AreEqual("hi Jonathan", new Class1().SayHello("Jonathan"));
        }
    }
}
