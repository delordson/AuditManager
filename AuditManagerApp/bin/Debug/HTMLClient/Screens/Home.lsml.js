/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.ManageAudits_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Audits.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageAuditors_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Auditors.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Settings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyFindingActions_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/AuditActions.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyAuditFindings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MyAuditFindings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.AllAuditFindings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/AllAuditFindings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};