using backend.Models;

namespace backend.Data
{
    public interface IBackEndDb
    {
        prope GetId(string id);

        void DeleteEle(string id);
        void AddNew(prope emp);

        string Check(prope emp);

    }
}
