
using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        //Cancelllation is used to cancel requests when the user cancels/refresh.
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActicities(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActicity(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        // IActionResult - you can return HTTP status like Ok and the likes.
        [HttpPost]
        public async Task<IActionResult> CreateActivity([FromBody] Activity activity)
        {
            return Ok(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        // IActionResult - you can return HTTP status like Ok and the likes.
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, [FromBody] Activity activity)
        {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        // IActionResult - you can return HTTP status like Ok and the likes.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}