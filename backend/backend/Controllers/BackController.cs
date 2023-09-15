using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BackController : ControllerBase
    {
        readonly IBackEndDb dal;
        public BackController(IBackEndDb dal)
        {
            this.dal = dal;
        }
        // GET: api/<BackController>
        /*[HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }*/

        // GET api/<BackController>/5
        [HttpGet("{id}")]
        //[Route("Login")]
        public prope Get(string id)
        {
            return dal.GetId(id);
        }

        // POST api/<BackController>
        [HttpPost]
        public string Post([FromBody] prope emp)
        {
            dal.AddNew(emp);
            return "done";
        }

        [HttpPost]
        [Route("Login")]
        public string PostCheck([FromBody] prope emp)
        {
           
            return dal.Check(emp);
            /*if(dal.Check(emp)=="Yes")
            { return "Yes"; }

            else { return "No"; }*/

        }

        /*[HttpPost("id")]
        public string Post([FromBody] prope id)
        {
            

        }*/

        // PUT api/<BackController>/5
        [HttpPut("{id}")]
        public void Put(string id, string pass, [FromBody] string value)
        {
        }

        // DELETE api/<BackController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
        }
    }
}
