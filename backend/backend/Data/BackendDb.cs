using backend.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace backend.Data
{
    public class BackendDb : IBackEndDb
    {
        //use context her for all crud operations
        readonly BackendDbContext _db;
        public BackendDb(BackendDbContext db)
        {
            this._db = db;   
        }

        public prope GetId(string id)
        {
            var record = _db.Users.Find(id);
            
            var x = "Yes";
            var y = "No";
            if (record != null)
            {
                return record ;
            }
            else
            {
                return record;
                
            }
        }
        public string Check(prope emp)
        {
            var record = _db.Users.Where(e => e.id == emp.id).FirstOrDefault();
           
            var x = "Yes";
            var y = "No";
            //Console.WriteLine(record.id);
            //Console.WriteLine(record.pass);
            //Console.WriteLine(emp.id);
            //Console.WriteLine(emp.pass);
           //onsole.WriteLine((emp.pass).GetType)
            if (record != null)
            {
                if (Equals(emp.pass,record.pass) && Equals(emp.id,record.id))
                { return x; }
                else { return y; }
            }
            else
            {
                return y;

            }
        }
        public void AddNew(prope emp)
        {
            _db.Users.Add(emp);
            _db.SaveChanges(); //this will insert record in database
        }

        public void DeleteEle(string id)
        {
            //find the record by id for deletion
            var record = _db.Users.Find(id);
            if (record != null)
            {
                _db.Users.Remove(record);
                _db.SaveChanges();
            }
        }

        //
    }
}
