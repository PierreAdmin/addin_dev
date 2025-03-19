Office.onReady(function() {
    
});

function openTicketingTool(event) {
    var url = "https://oncogard30.sharepoint.com/sites/ticketing";
    Office.context.ui.openBrowserWindow(url);
    event.completed();
}

Office.actions.associate("openTicketingTool", openTicketingTool);
