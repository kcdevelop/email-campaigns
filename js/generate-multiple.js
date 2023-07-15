import schoolData from './modules/contact-data.js';

const emailContent = document.querySelector('.content');
const emailTemplate = `<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title>ADAPT Creative Arts After-School Program</title>

		<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Bakbak+One&family=Bubblegum+Sans&family=Luckiest+Guy&family=Mate+SC&display=swap" rel="stylesheet" />

		<style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Bakbak+One&family=Bubblegum+Sans&family=Luckiest+Guy&family=Mate+SC&display=swap');
            
			a:link,
			span.MsoHyperlink {
				mso-style-priority: 99;
			}
			a:link,
			u + #body a,
			span.MsoHyperlink,
			a[x-apple-data-detectors] {
				text-decoration: none !important;
			}
			u + #body a,
			a[x-apple-data-detectors] {
				color: #000 !important;
			}
            body {
                margin: 0px;
                padding: 0px;
            }
    		@media screen and (min-width: 0px) and (max-width: 675px) {
                body {
                    margin: 0px  !important;
                    padding: 0px  !important;
                }
				.percent100 {
					width: 100% !important;
					min-width: 100% !important;
					max-width: 100% !important;
				}
                .percent95 {
					width: 95% !important;
					min-width: 95% !important;
					max-width: 95% !important;
				}
                .percent93 {
                    width: 93% !important;
					min-width: 93% !important;
					max-width: 93% !important;
				}
				.percent90 {
					width: 90% !important;
					min-width: 90% !important;
					max-width: 90% !important;
				}
                .percent85 {
					width: 85% !important;
					min-width: 85% !important;
					max-width: 85% !important;
				}
                .percent80 {
					width: 80% !important;
					min-width: 80% !important;
					max-width: 80% !important;
				}
                .percent75 {
					width: 75% !important;
					min-width: 75% !important;
					max-width: 75% !important;
				}
                .cta-button,
                .no-cta-button,
                .yes-cta-button {
                    width: 145px !important;
                    min-width: 145px !important;
                    max-width: 145px !important;
                    height: 42px !important;
                }
                .cta-block .hrz-spacer-15 {
                    width: 7px !important;
                    min-width: 7px !important;
                    max-width: 7px !important;
                }
				.header {
					line-height: 30px !important;
					font-size: 28px !important;
				}
				.header-contact {
					line-height: 18px !important;
				}
                .bilateral-left-right,
                .bilateral-right-left,
                table.main-message-block,
                table.footer-block-bottom {
                    background-image: url('') !important;
                    background-image: none !important;
                    background-image: unset !important;
                }
                .footer-block-bottom,
                table.main-message-block {
                    background-color: #490780 !important;
                    border: 7px solid #e21111 !important;
                    padding: 7px !important;
                }
                td.main-message-block {
                    border-radius: 5px !important;
                    padding: 10px 0px 7px !important
                }
                td.main-message-block,
                .footer-block-bottom td.stage-front {
                    border: 2px solid #ffe225 !important;
                }
                .section-block,
                .bilateral-left-right,
                .bilateral-right-left {
                    border-radius: 15px !important;
                }
                .footer-block-bottom {
                    border-radius: 25px 25px 0px 0px;
                }
                .footer-block-bottom td.stage-front {
                    border-radius: 15px 15px 0px 0px;
                }
                .stage-image,
                .message-copy,
                .message-content,
                .contact-email,
                .contact-number {
                    height: auto !important;
                }
                .cta-block .spacer-20 {
                    height: 12px !important;
                }
                .mobile-spacer-25 .spacer-15 {
                    height: 25px !important;
                }
                .contact-info {
                    margin: 0px auto !important;
                    padding-bottom: 0px !important;
                    padding-top: 0px !important;
                }
                .mobile-faux-header {
                    padding-top: 7px !important;
                }
                .contact-email,
                .contact-number {
                    padding-top: 0px !important;
                }
                .contact-email {
                    padding-bottom: 7px !important;
                }
                .contact-number {
                    padding-bottom: 0px !important;
                }
				.mobile-padding12 {
					padding-bottom: 12px !important;
				}
                .stage-front {
                    padding-bottom: 2px !important;
                }
                .bilateral-left-right .message-content,
                .bilateral-right-left .message-content {
                    padding-bottom: 19px !important;
                }
                .mobile-show {
					display: block !important;
				}
                .mobile-show-flex {
					display: flex !important;
                }
                .mobile-show-table {
					display: table !important;
                }
                .contact-block .mobile-show-flex {
                    flex-direction: column-reverse !important;
                }
                .bilateral-left-right,
                .bilateral-right-left,
                table.main-message-block {
                    box-shadow: 0px 5px 7px rgba(0,0,0,.5) !important;
                }
                .mobile-hide,
                .contact-icon,
                .section-block,
                .footer-block-bottom,
                .bilateral-left-right,
                .bilateral-right-left,
                .contact-block .hrz-spacer-15,
                .footer-block-bottom td.stage-front {
                    overflow: hidden !important;
                }
				.mobile-hide,
                .contact-icon,
                .contact-block .hrz-spacer-15 {
					mso-hide: all !important;
					display: none !important;
					max-height: 0px !important;
                    overflow: hidden !important;
				}
                .mobile-show,
                .mobile-show-table {
					mso-hide: none !important;
                    display: block !important;
					max-height: none !important;
					overflow: visible !important;
				}
			}
		</style>
		<!--[if gte mso 15]>
		<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
	</head>
	<body>
        <!--[if !mso]><!-- -->
        <div class="preview-text" style="margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">The Adolescent Dramatic And Performance Training (ADAPT) program is a two to four-week workshop. It provides an introduction to Acting and the theatrical process. Our program promotes exploration of the creative process, emotional awareness/connectedness, public speaking, and self-confidence. We are searching for a school to host our after-school Theater Arts program. If your school is interested in providing such a program to your students, we would be glad to partner with you.</div>
        <!--<![endif]-->

		<table class="page-frame" cellspacing="0" cellpadding="0" style="width: 100%; min-width: 100%; max-width: 100%; margin: 0px; padding: 0px; background-color: #ffffff;">
			<tr>
				<td class="page-frame" valign="top" align="center" width="100%" style="width: 100%; min-width: 100%; max-width: 100%; margin: 0px; padding: 0px;">
                    <table class="view-in-browser percent100" cellspacing="0" cellpadding="0" width="650" style="width: 650px; min-width: 650px; max-width: 650px; padding: 0px;">
                        <tr>
                            <td class="view-in-browser percent100" width="650" height="15" align="right" valign="middle" style="width: 650px; min-width: 650px; max-width: 650px; height: 15px; margin: 0px; padding: 2px 2px 7px 0px; font-family: arial, sans-serif;">
                                <a class="view-in-browser-link" href="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/adapt-program-introduction.html#SCHOOL_NAME" target="_blank" style="margin: 0px; padding: 0px; font-family: arial, sans-serif; font-size: 14px; font-weight: normal; text-decoration: none; color: #000000;">View in browser&#8201;&#10095;</a>
                            </td>
                        </tr>
                    </table>
                    <!--[if gte mso 9]><!-- -->
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                            <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/abstract-sunburst.jpg" color="#ffe225" />
                          <v:textbox inset="0,0,0,0">
                    <!--<![endif]-->
                    <table class="page percent100" cellspacing="0" cellpadding="0" bgcolor="#490780" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/abstract-sunburst.jpg); background-repeat: no-repeat; background-position: center top; background-color: #ffe225; background-size: cover;">
                        <tr>
                            <td class="page percent100" valign="top" align="center" width="650px" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; padding: 0px;">
                                <table class="hero-block percent100" cellspacing="0" cellpadding="0" width="650" style="width: 650px; min-width: 650px; max-width: 650px; padding: 0px;">
                                    <tr>
                                        <td class="hero percent100" width="650" valign="top" align="left" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; padding: 0px;">
                                            <img class="stage-image percent100" width="650" height="241" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/adapt-creative-arts-hero.png" style="display: block; width: 650px; min-width: 650px; max-width: 650px; height: 241px; margin: 0px; padding: 0px;" alt="ADAPT Creative Arts Hero" />
                                        </td>
                                    </tr>
                                </table>
                                <table class="vertical-spacer mobile-spacer-25 percent100" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; padding: 0px;">
                                    <tr>
                                        <td class="spacer-15 percent100" width="650" height="15" align="center" valign="middle" style="width: 650px; min-width: 650px; max-width: 650px; height: 15px; margin: 0px; padding: 0px;"></td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]><!-- -->
                                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:400px;">
                                        <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/main-marquee.png" />
                                      <v:textbox inset="0,0,0,0">
                                <!--<![endif]-->
                                <table class="main-message-block section-block percent95" width="580" cellspacing="0" cellpadding="0" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/main-marquee.png); background-repeat: no-repeat; background-position: center top; background-color: transparent; background-size: contain;">
                                    <tr>
                                        <td class="main-message-block section-block percent100" width="580" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 38px 0px 85px;">
                                            <table class="lateral-callout percent93" cellspacing="0" cellpadding="0" valign="top" align="center" width="485" style="width: 485px; min-width: 485px; max-width: 485px; margin: 0px; padding: 0px;">
                                                <tr>
                                                    <td class="message-copy percent100" width="485" valign="top" align="left" style="width: 485px; min-width: 485px; max-width: 485px; padding: 0px 0px 9px; font-family: arial, sans-serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #ffffff;">
                                                        <span style="font-family: arial, sans-serif; font-size: 16px; color: #ffffff;">The Adolescent Dramatic And Performance Training (ADAPT) program is a two to four-week workshop. It provides an introduction to Acting and the theatrical process. Our program promotes exploration of the creative process, emotional awareness/connectedness, public speaking, and self-confidence.</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="message-copy percent100" width="485" valign="top" align="left" style="width: 485px; min-width: 485px; max-width: 485px; padding: 0px 0px 9px; font-family: arial, sans-serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #ffffff;">
                                                        <span style="font-family: arial, sans-serif; font-size: 16px; color: #ffffff;">Each afternoon, students will start with a fifteen to twenty-minute vocal and physical warm-up, followed by a 20-minute interactive lesson. In the last two hours, students will work on their end-of-session production.</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="message-copy percent100" width="485" valign="top" align="left" style="width: 485px; min-width: 485px; max-width: 485px; padding: 0px 0px 5px; font-family: arial, sans-serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #ffffff;">
                                                        <span style="font-family: arial, sans-serif; font-size: 16px; color: #ffffff;">We are searching for a school to host our after-school Theater Arts program. If your school is interested in providing such a program to your students, we would be glad to partner with you.</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]><!-- -->
                                        </v:textbox>
                                    </v:rect>
                                <!--<![endif]-->
                                <table class="vertical-spacer mobile-spacer-25 percent90" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px;">
                                    <tr>
                                        <td class="spacer-15 percent100" width="580" height="15" align="center" valign="middle" style="width: 580px; min-width: 580px; max-width: 580px; height: 15px; margin: 0px; padding: 0px;"></td>
                                    </tr>
                                </table>
                                <table class="section-block percent100" cellspacing="0" cellpadding="0" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px;">
                                    <tr>
                                        <td class="section-block percent100" width="580" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; padding: 0px;">
                                            <table class="secondary-marquee percent95 mobile-hide" cellspacing="0" cellpadding="0" width="580" style="width: 580px; min-width: 580px; max-width: 580px; padding: 0px;">
                                                <tr>
                                                    <td class="secondary-marquee-top percent100 mobile-hide" width="580" valign="top" align="left" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px;">
                                                        <img class="secondary-marquee-top-image percent100 mobile-hide" width="580" height="24" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/secondary-marquee-top.png" style="display: block; width: 580px; min-width: 580px; max-width: 580px; height: 24px; margin: 0px; padding: 0px;" alt="Secondary Marquee Top" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if gte mso 9]><!-- -->
                                                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                                                    <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-left-orange.png" color="#f59907" />
                                                  <v:textbox inset="0,0,0,0">
                                            <!--<![endif]-->
                                            <table class="bilateral-left-right percent95" cellspacing="0" cellpadding="0" valign="top" align="center" width="580" bgcolor="#f59907" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-left-orange.png); background-repeat: no-repeat; background-position: left top; background-color: #f59907; background-size: cover;">
                                                <tr>
                                                    <td class="message-content percent100" width="290" height="259" align="center" valign="middle" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <!--[if !mso]><!-- -->
                                                        <table class="mobile-image-content mobile-show-table" cellspacing="0" cellpadding="0" valign="top" align="center" width="100%" style="width: 100%; min-width: 100%; max-width: 100%; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                            <tr>
                                                                <td class="mobile-image mobile-show" width="100%" valign="top" align="left" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 15px;">
                                                                    <img class="mobile-image" width="100%" height="100%" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-one.jpg" style="display: block; width: 100%; min-width: 100%; max-width: 100%; height: auto; padding: 0px;" alt="Marquee One" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!--<![endif]-->
                                                        <table class="bilateral-message percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="message-heading percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 7px; font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; color: #000; display: block;">Theater Games</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="message-copy percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 21px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: arial, sans-serif; font-size: 17px; color: #000;">Students will learn Acting and emotional awareness skills through fun theater games and improvisation.</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="message-accent mobile-hide" width="290" height="259" valign="top" align="right" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <img width="290" height="259" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-one-sm.jpg" style="display: block; width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;" alt="Marquee One Small" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if gte mso 9]><!-- -->
                                                    </v:textbox>
                                                </v:rect>
                                            <!--<![endif]-->
                                            <!--[if !mso]><!-- -->
                                            <table class="vertical-spacer mobile-show percent100" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                <tr>
                                                    <td class="spacer-25 percent100" width="580" height="25" align="center" valign="middle" style="width: 580px; min-width: 580px; max-width: 580px; height: 25px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                            <!--<![endif]-->
                                            <!--[if gte mso 9]><!-- -->
                                                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                                                    <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-right-green.png" color="#18e810" />
                                                  <v:textbox inset="0,0,0,0">
                                            <!--<![endif]-->
                                            <table class="bilateral-right-left percent95" cellspacing="0" cellpadding="0" valign="top" align="center" width="580" bgcolor="#18e810" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-right-green.png); background-repeat: no-repeat; background-position: right top; background-color: #18e810; background-size: cover;">
                                                <tr>
                                                    <td class="message-accent mobile-hide" width="290" height="259" valign="top" align="right" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <img width="290" height="259" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-two-sm.jpg" style="display: block; width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;" alt="Marquee Two Small" />
                                                    </td>
                                                    <td class="message-content percent100" width="290" height="259" align="center" valign="middle" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <!--[if !mso]><!-- -->
                                                        <table class="mobile-image-content mobile-show-table percent100" cellspacing="0" cellpadding="0" width="100%" style=" margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                            <tr>
                                                                <td class="mobile-image percent100 mobile-show" width="100%" valign="top" align="left" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 15px;">
                                                                    <img class="mobile-image" width="100%" height="100%" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-two.jpg" style="display: block; width: 100%; min-width: 100%; max-width: 100%; height: auto; padding: 0px;" alt="Marquee Two" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!--<![endif]-->
                                                        <table class="bilateral-message percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="message-heading percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 7px; font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; color: #000; display: block;">Grades 3-8 will learn:</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="list-block percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Acting for the Stage</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Movement for the Stage</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Vocal Production</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Theater games</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if gte mso 9]><!-- -->
                                                    </v:textbox>
                                                </v:rect>
                                            <!--<![endif]-->
                                            <!--[if !mso]><!-- -->
                                            <table class="vertical-spacer mobile-show percent100" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                <tr>
                                                    <td class="spacer-25 percent100" width="580" height="25" align="center" valign="middle" style="width: 580px; min-width: 580px; max-width: 580px; height: 25px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                            <!--<![endif]-->
                                            <!--[if gte mso 9]><!-- -->
                                                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                                                    <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-left-blue.png" color="#27d5ea" />
                                                  <v:textbox inset="0,0,0,0">
                                            <!--<![endif]-->
                                            <table class="bilateral-left-right percent95" cellspacing="0" cellpadding="0" valign="top" align="center" width="580" bgcolor="#27d5ea" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-left-blue.png); background-repeat: no-repeat; background-position: left top; background-color: #27d5ea; background-size: cover;">
                                                <tr>
                                                    <td class="message-content percent100" width="290" height="259" align="center" valign="middle" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <!--[if !mso]><!-- -->
                                                        <table class="mobile-image-content mobile-show-table percent100" cellspacing="0" cellpadding="0" valign="top" align="center" width="100%" style="width: 100%; min-width: 100%; max-width: 100%; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                            <tr>
                                                                <td class="mobile-image percent100 mobile-show" width="100%" valign="top" align="left" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 15px;">
                                                                    <img class="mobile-image" width="100%" height="100%" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-three.jpg" style="display: block; width: 100%; min-width: 100%; max-width: 100%; height: auto; padding: 0px;" alt="Marquee Three" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!--<![endif]-->
                                                        <table class="bilateral-message percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="message-heading percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 7px; font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; color: #000; display: block;">Grades 6-8 will learn:</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="list-block percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Character Development</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Play &amp; Scene Analysis</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Monologue Preparation</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="list-item" height="21" valign="top" align="center" style="height: 21px; padding: 0px 2px 0px 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 19px; -webkit-text-size-adjust: none; color: #000;">Public Speaking</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="message-accent mobile-hide" width="290" height="259" valign="top" align="right" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <img width="290" height="259" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-three-sm.jpg" style="display: block; width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;" alt="Marquee Three Small" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if gte mso 9]><!-- -->
                                                    </v:textbox>
                                                </v:rect>
                                            <!--<![endif]-->
                                            <!--[if !mso]><!-- -->
                                            <table class="vertical-spacer mobile-show percent100" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                <tr>
                                                    <td class="spacer-25 percent100" width="580" height="25" align="center" valign="middle" style="width: 580px; min-width: 580px; max-width: 580px; height: 25px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                            <!--<![endif]-->
                                            <!--[if gte mso 9]><!-- -->
                                                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                                                    <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-right-pink.png" color="#fa81df" />
                                                  <v:textbox inset="0,0,0,0">
                                            <!--<![endif]-->
                                            <table class="bilateral-right-left percent95" cellspacing="0" cellpadding="0" valign="top" align="center" width="580" bgcolor="#fa81df" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/spotlight-curtain-right-pink.png); background-repeat: no-repeat; background-position: right top; background-color: #fa81df; background-size: cover;">
                                                <tr>
                                                    <td class="message-accent mobile-hide" width="290" height="259" valign="top" align="right" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <img width="290" height="259" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-four-sm.jpg" style="display: block; width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;" alt="Marquee Four Small" />
                                                    </td>
                                                    <td class="message-content percent100" width="290" height="259" align="center" valign="middle" style="width: 290px; min-width: 290px; max-width: 290px; height: 259px; padding: 0px;">
                                                        <!--[if !mso]><!-- -->
                                                        <table class="mobile-image-content mobile-show-table percent100" cellspacing="0" cellpadding="0" valign="top" align="center" width="100%" style="width: 100%; min-width: 100%; max-width: 100%; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                            <tr>
                                                                <td class="mobile-image percent100 mobile-show" width="100%" valign="top" align="left" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 15px;">
                                                                    <img class="mobile-image" width="100%" height="100%" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/marquee-four.jpg" style="display: block; width: 100%; min-width: 100%; max-width: 100%; height: auto; padding: 0px;" alt="Marquee Four" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <!--<![endif]-->
                                                        <table class="bilateral-message percent85" cellspacing="0" cellpadding="0" valign="top" align="center" width="75%" style="width: 75%; min-width: 75%; max-width: 75%; margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="message-heading percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px 0px 7px; font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; mso-line-height-rule: exactly; line-height: 22px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: Bakbak One, arial, sans-serif; font-size: 20px; font-weight: bold; color: #000; display: block;">Technical Theater</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="message-copy percent100" width="100%" valign="top" align="center" style="width: 100%; min-width: 100%; max-width: 100%; padding: 0px; font-family: arial, sans-serif; font-size: 17px; font-weight: bold; mso-line-height-rule: exactly; line-height: 21px; -webkit-text-size-adjust: none; color: #000;">
                                                                    <span style="font-family: arial, sans-serif; font-size: 17px; color: #000;">Students who like working with their hands will build scenery/props and participate as stage crew for the end-of-session production.</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if gte mso 9]><!-- -->
                                                    </v:textbox>
                                                </v:rect>
                                            <!--<![endif]-->
                                            <!--[if !mso]><!-- -->
                                            <table class="vertical-spacer mobile-show percent100" cellspacing="0" cellpadding="0" valign="top" align="center" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px; mso-hide: all; display: none; max-height: 0px; overflow: hidden;">
                                                <tr>
                                                    <td class="spacer-25 percent100" width="580" height="25" align="center" valign="middle" style="width: 580px; min-width: 580px; max-width: 580px; height: 25px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                            <!--<![endif]-->
                                            <table class="secondary-marquee percent95 mobile-hide" cellspacing="0" cellpadding="0" width="580" style="width: 580px; min-width: 580px; max-width: 580px; padding: 0px;">
                                                <tr>
                                                    <td class="secondary-marquee-bottom percent100 mobile-hide" width="580" valign="top" align="left" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px;">
                                                        <img class="secondary-marquee-bottom-image percent100 mobile-hide" width="580" height="24" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/secondary-marquee-bottom.png" style="display: block; width: 580px; min-width: 580px; max-width: 580px; height: 24px; margin: 0px; padding: 0px;" alt="Secondary Marquee Bottom" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table class="footer-block-top percent100 mobile-hide" cellspacing="0" cellpadding="0" width="650" style="width: 650px; min-width: 650px; max-width: 650px; padding: 0px;">
                                    <tr>
                                        <td class="stage-floor percent100 mobile-hide" width="650" valign="top" align="left" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; padding: 0px;">
                                            <img class="stage-floor-image percent100 mobile-hide" width="650" height="45" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/stage-floor.png" style="display: block; width: 650px; min-width: 650px; max-width: 650px; height: 45px; margin: 0px; padding: 0px;" alt="Footer Stage Floor" />
                                        </td>
                                    </tr>
                                </table>
                                 <!--[if gte mso 9]><!-- -->
                                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:580px;height:177px;">
                                        <v:fill type="tile" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/stage-front.png" color="#503e2c" />
                                        <v:textbox inset="0,0,0,0">
                                <!--<![endif]-->
                                <table class="footer-block-bottom percent100" cellspacing="0" cellpadding="0" width="650" style="width: 650px; min-width: 650px; max-width: 650px; padding: 0px; background-image: url(https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/stage-front.png); background-repeat: repeat; background-position: right top; background-color: #503e2c; background-size: cover;">
                                    <tr>
                                        <td class="stage-front percent100" width="650" height="75" align="center" valign="middle" style="width: 650px; min-width: 650px; max-width: 650px; margin: 0px; height: 75px; padding: 0px;">
                                            <table class="cta-block" cellspacing="0" cellpadding="0" style="margin: 0px; padding: 0px;">
                                                <tr>
                                                    <td class="spacer-20" width="100%" height="20" colspan="3" style="width: 100%; min-width: 100%; max-width: 100%; height: 20px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                                <tr>
                                                    <td class="cta-button" width="28" height="51" align="center" valign="middle" style="width: 177px; min-width: 177px; max-width: 177px; height: 51px; margin: 0px; padding: 0px;">
                                                        <a href="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/interest.html#SCHOOL_NAME#interested" target="_blank" style="margin: 0px; padding: 0px; text-decoration: none;">
                                                            <img class="yes-cta-button" width="177" height="51" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/yes-cta.png" style="display: block; width: 177px; min-width: 177px; max-width: 177px; height: 51px; margin: 0px; padding: 0px;" alt="Interested CTA" />
                                                        </a>
                                                    </td>
                                                    <td class="hrz-spacer-15" width="15" height="51" style="width: 15px; min-width: 15px; max-width: 15px; height: 51px; margin: 0px; padding: 0px;"></td>
                                                    <td class="cta-button" width="177" height="51" align="center" valign="middle" style="width: 177px; min-width: 177px; max-width: 177px; height: 51px; margin: 0px; padding: 0px;">
                                                        <a href="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/interest.html#SCHOOL_NAME#declined" target="_blank" style="margin: 0px; padding: 0px; text-decoration: none;">
                                                            <img class="no-cta-button" width="28" height="28" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/no-cta.png" style="display: block; width: 177px; min-width: 177px; max-width: 177px; height: 51px; margin: 0px; padding: 0px;" alt="Not Interested CTA" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="spacer-20" width="100%" height="20" colspan="3" style="width: 100%; min-width: 100%; max-width: 100%; height: 20px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                            <table class="contact-block" cellspacing="0" cellpadding="0" style="margin: 0px; padding: 0px; font-family: arial, sans-serif;">
                                                <tr>
                                                    <td class="contact-heading" align="center" valign="middle" colspan="3" style="margin: 0px; padding: 0px 0px 4px; font-size: 15px; font-weight: bold; mso-line-height-rule: exactly; line-height: 17px; -webkit-text-size-adjust: none; border-bottom: 2px solid #ffffff; color: #ffffff;">
                                                        Questions or Comments? Reach out...
                                                    </td>
                                                </tr>
                                                <tr class="mobile-show-flex">
                                                    <td class="contact-info mobile-faux-footer" align="left" valign="middle" style="margin: 0px; padding: 3px 0px;">
                                                        <table class="contact-info-block" cellspacing="0" cellpadding="0" style="margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="contact-icon" width="28" height="28" align="center" valign="middle" style="width: 28px; min-width: 28px; max-width: 28px; height: 28px; margin: 0px; padding: 3px 7px 0px 0px;">
                                                                    <a href="tel:301-621-0777" target="_blank" style="margin: 0px; padding: 0px; text-decoration: none;"></a>
                                                                        <img class="phone-icon" width="21" height="21" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/phone-icon.png" style="display: block; width: 21px; min-width: 21px; max-width: 21px; height: 21px; margin: 0px; padding: 0px;" alt="Phone Icon" />
                                                                    </a>
                                                                </td>
                                                                <td class="contact-number" align="center" valign="middle" style="margin: 0px; padding: 3px 0px; font-size: 15px; font-weight: normal; mso-line-height-rule: exactly; line-height: normal; -webkit-text-size-adjust: none; color: #ffffff;">
                                                                    <a href="tel:301-621-0777" target="_blank" style="margin: 0px; padding: 0px; font-size: 14px; font-weight: normal; text-decoration: none; color: #ffffff;">301-621-0777</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="hrz-spacer-15 mobile-hide" width="15" style="width: 15px; min-width: 15px; max-width: 15px; margin: 0px; padding: 0px;"></td>
                                                    <td class="contact-info mobile-faux-header" align="left" valign="middle" style="margin: 0px; padding: 3px 0px;">
                                                        <table class="contact-info-block" cellspacing="0" cellpadding="0" style="margin: 0px; padding: 0px;">
                                                            <tr>
                                                                <td class="contact-icon" width="28" height="28" align="center" valign="middle" style="width: 28px; min-width: 28px; max-width: 28px; height: 28px; margin: 0px; padding: 3px 7px 0px 0px;">
                                                                    <a href="mailto:adaptcreativearts@gmail.com" target="_blank" style="margin: 0px; padding: 0px; text-decoration: none;">
                                                                        <img class="email-icon" width="21" height="21" src="https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/images/email-icon.png" style="display: block; width: 21px; min-width: 21px; max-width: 21px; height: 21px; margin: 0px; padding: 0px;" alt="Email Icon" />
                                                                    </a>
                                                                </td>
                                                                <td class="contact-email" align="center" valign="middle" style="margin: 0px; padding: 3px 0px; font-size: 14px; font-weight: normal; mso-line-height-rule: exactly; line-height: normal; -webkit-text-size-adjust: none; color: #ffffff;">
                                                                    <a href="mailto:adaptcreativearts@gmail.com" target="_blank" style="margin: 0px; padding: 0px; font-size: 15px; font-weight: normal; text-decoration: none; color: #ffffff;">adaptcreativearts@gmail.com</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="spacer-15" width="100%" height="15" colspan="3" style="width: 100%; min-width: 100%; max-width: 100%; height: 15px; margin: 0px; padding: 0px;"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]><!-- -->
                                        </v:textbox>
                                    </v:rect>
                                <!--<![endif]-->
                            </td>
                        <tr>
                    </table>
                    <!--[if gte mso 9]><!-- -->
                            </v:textbox>
                        </v:rect>
                    <!--<![endif]-->
				</td>
			<tr>
		</table>
	</body>
</html>`;
 
function createCodeField(template, schoolName) {
    let currentHeading = document.createElement('h1'),
    currentField = document.createElement('textarea');

    currentHeading.setAttribute('class', 'raw-code-heading');
    currentHeading.innerHTML = schoolName;
    
    currentField.setAttribute('class', 'raw-code');
    currentField.insertAdjacentHTML("afterbegin", template);

    return currentField;
}

function populateData(template=null, schoolInfo, index) {
    let { schoolName, contactPerson, email } = schoolInfo;
    if(
        template !== null && 
        schoolName !== ''
    ) {
        schoolName = schoolName.replaceAll(' ', '+');
        template = template.replaceAll('SCHOOL_NAME', schoolName);

        if(index === 0) {
            emailContent.insertAdjacentHTML(
                "afterbegin", 
                template
            );
        }

        emailContent.insertAdjacentHTML(
            "beforeend", 
            `<h1 class="raw-code-heading">${schoolName.replaceAll('+', ' ')}</h1>
             <p class="recipients">${contactPerson}</p>
             <p class="emails">${email}</p>
            `
        );
        emailContent.append(createCodeField(template));
    }
}

function genenrateTemplates(dataSet) {
    dataSet.forEach((schoolData, index) => {
        populateData(emailTemplate, schoolData, index);
    });
}
genenrateTemplates(schoolData);