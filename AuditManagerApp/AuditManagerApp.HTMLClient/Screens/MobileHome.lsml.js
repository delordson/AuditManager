/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.Audits_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAudits.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Auditors_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAuditors.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.AllFindings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAllAuditFindings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyFindings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyAuditFindings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyActions_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAuditActions.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileSettings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};