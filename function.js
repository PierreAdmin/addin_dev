Office.onReady(function() {
    
});

function openTicketingTool(event) {
    var url = "https://oncogard30.sharepoint.com/:u:/s/ticketing/EbRCh-ruOYtOoPh2rkqYTPMB3nHrH_7An8_YfxWeLGNubA?e=082PHs";
    Office.context.ui.openBrowserWindow(url);
    event.completed();
}

Office.actions.associate("openTicketingTool", openTicketingTool);
