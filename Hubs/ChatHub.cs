using Microsoft.AspNetCore.SignalR;
namespace React_Tableservice.Hubs;

public class ChatHub : Hub
{
   public async Task ReceiveMessage(string connectionId)
    {
        await Clients.All.SendAsync("ReceiveMessage", connectionId);
    }
    public Task NotifyAll(UserConnection userConnection)=>
    Clients.All.SendAsync("NotificationReceived", userConnection.User, userConnection.Room);
}
 