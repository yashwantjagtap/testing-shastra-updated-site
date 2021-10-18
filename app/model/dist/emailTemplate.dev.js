"use strict";

var template = {
  webinar: function webinar(student_name) {
    var html = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n        <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" style=\"width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0\">\n        <head>\n        <meta charset=\"UTF-8\">\n        <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\">\n        <meta name=\"x-apple-disable-message-reformatting\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta content=\"telephone=no\" name=\"format-detection\">\n        <title>New message</title>\n        <!--[if (mso 16)]>\n        <style type=\"text/css\">\n        a {text-decoration: none;}\n        </style>\n        <![endif]-->\n        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->\n        <!--[if gte mso 9]>\n        <xml>\n        <o:OfficeDocumentSettings>\n        <o:AllowPNG></o:AllowPNG>\n        <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]-->\n        <!--[if !mso]><!-- -->\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i\" rel=\"stylesheet\">\n        <!--<![endif]-->\n        <style type=\"text/css\">\n        #outlook a {\n        padding:0;\n        }\n        .ExternalClass {\n        width:100%;\n        }\n        .ExternalClass,\n        .ExternalClass p,\n        .ExternalClass span,\n        .ExternalClass font,\n        .ExternalClass td,\n        .ExternalClass div {\n        line-height:100%;\n        }\n        .es-button {\n        mso-style-priority:100!important;\n        text-decoration:none!important;\n        }\n        a[x-apple-data-detectors] {\n        color:inherit!important;\n        text-decoration:none!important;\n        font-size:inherit!important;\n        font-family:inherit!important;\n        font-weight:inherit!important;\n        line-height:inherit!important;\n        }\n        .es-desk-hidden {\n        display:none;\n        float:left;\n        overflow:hidden;\n        width:0;\n        max-height:0;\n        line-height:0;\n        mso-hide:all;\n        }\n        .es-button-border:hover a.es-button, .es-button-border:hover button.es-button {\n        background:#3498db!important;\n        border-color:#3498db!important;\n        }\n        .es-button-border:hover {\n        border-color:#1f68b1 #1f68b1 #1f68b1 #1f68b1!important;\n        background:#3498db!important;\n        }\n        [data-ogsb] .es-button {\n        border-width:0!important;\n        padding:10px 40px 10px 40px!important;\n        }\n        td .es-button-border:hover a.es-button-1 {\n        background:#2980d9!important;\n        border-color:#2980d9!important;\n        }\n        td .es-button-border-2:hover {\n        background:#2980d9!important;\n        }\n        [data-ogsb] .es-button.es-button-3 {\n        padding:10px 40px!important;\n        }\n        @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:26px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:26px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:13px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:13px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:11px!important } *[class=\"gmail-fix\"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }\n        </style>\n        </head>\n        <body style=\"width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0\">\n        <div class=\"es-wrapper-color\" style=\"background-color:#2980D9\">\n        <!--[if gte mso 9]>\n        <v:background xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"t\">\n        <v:fill type=\"tile\" color=\"#2980d9\"></v:fill>\n        </v:background>\n        <![endif]-->\n        <table class=\"es-wrapper\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" style=\"padding:0;Margin:0\">\n        <table cellpadding=\"0\" cellspacing=\"0\" class=\"es-content\" align=\"center\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%\">\n        <tr style=\"border-collapse:collapse\">\n        <td class=\"es-info-area\" align=\"center\" style=\"padding:0;Margin:0\">\n        <table bgcolor=\"#FFFFFF\" class=\"es-content-body\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"left\" style=\"Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px\">\n        <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"center\" valign=\"top\" style=\"padding:0;Margin:0;width:560px\">\n        <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td class=\"es-infoblock es-m-txt-c\" align=\"center\" style=\"padding:0;Margin:0;line-height:13px;font-size:11px;color:#CCCCCC\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:13px;color:#CCCCCC;font-size:11px\">Pune's Rapidly growing Software Training Institute</p></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table>\n        <table class=\"es-content\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"center\" style=\"padding:0;Margin:0\">\n        <table class=\"es-content-body\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"transparent\" align=\"center\">\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;padding-top:25px;background-position:center top\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:600px\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"center\" style=\"padding:0;Margin:0;font-size:0px\"><a target=\"_blank\" href=\"https://viewstripo.email\" style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2980D9;font-size:14px\"><img class=\"adapt-img\" src=\"https://lxldjh.stripocdn.email/content/guids/CABINET_af4485b9c2dbaafe8d1f66b3572adf00/images/43681631719628798.png\" alt style=\"display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic\" width=\"600\"></a></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center top;background-color:#ffffff\" bgcolor=\"#ffffff\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:560px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom;background-color:transparent\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"transparent\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"left\" style=\"padding:0;Margin:0;padding-bottom:5px;padding-top:10px\"><h3 style=\"Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#2980d9\">Dear ".concat(student_name, ",</h3></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"left\" style=\"padding:0;Margin:0;padding-top:10px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666;font-size:14px\">Thank you for registering \"Live Webinar on Selenium\".&nbsp;</p></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"left\" style=\"padding:0;Margin:0;padding-top:5px;padding-bottom:5px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666;font-size:14px\">Here is your personalized joining link: https://us02web.zoom.us/meeting/register/tZYocuysrz4oHtEre40wYX9YaYy_tYy9KqMK</p></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;background-position:center bottom\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:600px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#ffffff;border-radius:0px 0px 5px 5px\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#ffffff\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td height=\"15\" align=\"center\" style=\"padding:0;Margin:0\"></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:560px\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td height=\"10\" align=\"center\" style=\"padding:0;Margin:0\"></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;background-position:center bottom\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:600px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#ffffff;border-radius:5px 5px 0px 0px\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#ffffff\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td height=\"16\" align=\"center\" style=\"padding:0;Margin:0\"></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom;background-color:#ffffff\" bgcolor=\"#ffffff\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:560px\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"left\" style=\"padding:0;Margin:0;padding-top:5px;padding-bottom:5px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#666666;font-size:16px\">Glimpse of this Live Webinar</p></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"left\" style=\"padding:0;Margin:0;padding-bottom:5px;padding-left:5px;padding-right:5px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#2980d9;font-size:14px\">\u25BA This Webinar covers 4 components of Selenium</p><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#666666;font-size:14px\"><span style=\"color:#2980d9\">\u25BA</span>&nbsp;Role of Selenium WebDriver in Test Automation</p><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#666666;font-size:14px\"><span style=\"color:#2980d9\">\u25BA</span>&nbsp;Different tools that we can integrrate with Selenium</p><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#666666;font-size:14px\"><span style=\"color:#2980d9\">\u25BA</span>&nbsp;Test Automation Framework and its designin strategies</p><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#666666;font-size:14px\"><span style=\"color:#2980d9\">\u25BA</span>&nbsp;Career opportunities in Test Automation</p></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td bgcolor=\"transparent\" align=\"center\" style=\"padding:0;Margin:0;padding-bottom:5px;padding-top:10px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#2980d9;font-size:14px\"><strong>Please register to zoom.us to join this webinar.</strong></p></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td class=\"es-m-p20b\" align=\"left\" style=\"padding:0;Margin:0;width:560px\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"center\" style=\"padding:0;Margin:0;padding-top:10px;padding-bottom:10px\"><span class=\"es-button-border\" style=\"border-style:solid;border-color:#2980D9;background:#2980D9;border-width:0px;display:inline-block;border-radius:5px;width:auto\"><a href=\"https://calendar.google.com/event?action=TEMPLATE&tmeid=MjNyMmw5bTBpamx2ZGtsZHJkaGhkbG5tN3EgMnRubzdmdXRwMmgxa2E5cjFpN2hjaHZjMjRAZw&tmsrc=2tno7futp2h1ka9r1i7hchvc24%40group.calendar.google.com\" class=\"es-button es-button-3\" target=\"_blank\" style=\"mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#2980D9;border-width:10px 40px;display:inline-block;background:#2980D9;border-radius:5px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center\">Add event to calendar </a></span></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"padding:0;Margin:0;background-position:center bottom\" align=\"left\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:600px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#ffffff;border-radius:0px 0px 5px 5px\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#ffffff\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td height=\"32\" align=\"center\" style=\"padding:0;Margin:0\"></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table>\n        <table class=\"es-footer\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"center\" style=\"padding:0;Margin:0\">\n        <table class=\"es-footer-body\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#FFFFFF\" align=\"center\">\n        <tr style=\"border-collapse:collapse\">\n        <td style=\"Margin:0;padding-top:15px;padding-left:20px;padding-right:20px;padding-bottom:25px;background-position:center bottom;background-color:transparent\" bgcolor=\"transparent\" align=\"left\">\n        <!--[if mso]><table style=\"width:560px\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"width:270px\" valign=\"top\"><![endif]-->\n        <table class=\"es-left\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;width:270px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td class=\"es-m-txt-c\" align=\"left\" style=\"padding:0;Margin:0;padding-top:5px;padding-bottom:10px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#EFEFEF;font-size:14px\">It is a long established fact that a reader will be distracted by the readable&nbsp;</p></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table>\n        <!--[if mso]></td><td style=\"width:20px\"></td><td style=\"width:270px\" valign=\"top\"><![endif]-->\n        <table class=\"es-right\" cellspacing=\"0\" cellpadding=\"0\" align=\"right\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right\">\n        <tr style=\"border-collapse:collapse\">\n        <td align=\"left\" style=\"padding:0;Margin:0;width:270px\">\n        <table style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\">\n        <tr style=\"border-collapse:collapse\">\n        <td class=\"es-m-txt-c\" align=\"right\" style=\"padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0\">\n        <table class=\"es-table-not-adapt es-social\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\" style=\"mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px\">\n        <tr style=\"border-collapse:collapse\">\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;padding-right:10px\"><a target=\"_blank\" href=\"https://www.facebook.com/ts.avinashpingale/\" style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px\"><img title=\"Facebook\" src=\"https://lxldjh.stripocdn.email/content/assets/img/social-icons/rounded-white/facebook-rounded-white.png\" alt=\"Fb\" width=\"32\" style=\"display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic\"></a></td>\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0;padding-right:10px\"><a target=\"_blank\" href=\"https://www.instagram.com/testingshastra/\" style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px\"><img title=\"Instagram\" src=\"https://lxldjh.stripocdn.email/content/assets/img/social-icons/rounded-white/instagram-rounded-white.png\" alt=\"Inst\" width=\"32\" style=\"display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic\"></a></td>\n        <td valign=\"top\" align=\"center\" style=\"padding:0;Margin:0\"><a target=\"_blank\" href=\"https://www.youtube.com/channel/UCg_SUG_BAPtVUvTSKse2xBg\" style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px\"><img title=\"Youtube\" src=\"https://lxldjh.stripocdn.email/content/assets/img/social-icons/rounded-white/youtube-rounded-white.png\" alt=\"Yt\" width=\"32\" style=\"display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic\"></a></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table>\n        <!--[if mso]></td></tr></table><![endif]--></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table></td>\n        </tr>\n        </table>\n        </div>\n        </body>\n        </html>");
    return html;
  },
  enquiry: function enquiry(data) {
    var message = "<p>Hello Sir/Ma'am,</p>\n                  <p>There is a new enquiry on Testing Shastra Website</p>\n                  <p>Details are as follow:</p>\n                  <table>\n                    <tbody>\n                      <tr>\n                        <td>Name</td>\n                        <td>".concat(data.contactName, "</td>\n                      </tr>\n                      <tr>\n                        <td>Email Id</td>\n                        <td>").concat(data.contactEmailId, "</td>\n                      </tr>\n                      <tr>\n                        <td>Contact Number</td>\n                        <td>").concat(data.contactPhoneNumber, "</td>\n                      </tr>\n                      <tr>\n                        <td>Enquiry Text</td>\n                        <td>").concat(data.contactMessage, "</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                ");
    return message;
  }
};
module.exports = template;
//# sourceMappingURL=emailTemplate.dev.js.map