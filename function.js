Office.onReady(function() {
    
});

function openTicketingTool(event) {
    var url = "https://oncogard30.sharepoint.com/sites/ticketing/SitePages/ITHelpdeskHome.aspx";
    Office.context.ui.openBrowserWindow(url);
    event.completed();
}

Office.actions.associate("openTicketingTool", openTicketingTool);
