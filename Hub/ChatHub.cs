using Microsoft.AspNetCore.SignalR;

namespace Hub;

public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
{
    private readonly ILogger<ChatHub> _logger;

    public ChatHub(ILogger<ChatHub> logger)
    {
        _logger = logger;
    }
    public async Task ReceiveMessage(string message)
    {
        _logger.LogInformation("Receiving message from {ConnectionId}: {Message}", Context.ConnectionId, message);
        await Clients.All.SendAsync("ReceiveMessage", message);
    }

    public override async Task OnConnectedAsync()
    {
        _logger.LogInformation("Hello {ConnectionId}", Context.ConnectionId);
        await Clients.All.SendAsync("other_client_connected", Context.ConnectionId);
    }

    public Task NotifyAll(UserConnection userConnection) =>
        Clients.All.SendAsync("NotificationReceived", userConnection.User, userConnection.Room);
}