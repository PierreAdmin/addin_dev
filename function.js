Office.onReady(function() {
    Office.actions.associate("openTicketingTool", openTicketingTool);
});

function openTicketingTool(event) {
    var url = "https://oncogard30.sharepoint.com/:l:/s/ticketing/FKnIXnnjAb5Fnw5nUfWqks8BBlHciHQyNF1BkQzLkhXDPw?nav=MDUyZjg2NWQtNDE0Ni00MDcyLTg4ZTYtY2U4OGQ2YmM4ZThj";
    Office.context.ui.openBrowserWindow(url);
    event.completed();
}
