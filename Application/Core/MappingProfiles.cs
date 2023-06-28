using AutoMapper;
using Domain;

// This class is used to map create/post request to their respsective fields.
namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}