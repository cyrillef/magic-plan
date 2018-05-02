//
// Copyright (c) Autodesk, Inc. All rights reserved
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
// Forge Extractor
// by Cyrille Fauvel - Autodesk Developer Network (ADN)
//
var Mailjet = require('mailjet-sendemail');

var MJ_APIKEY_PUBLIC = 'your mailjet public key' ;
var MJ_APIKEY_PRIVATE = 'your mailjet private key' ;
function sendMail1(mail) {
	mail.to = mail.to || config.mailTo;
	if (   mail.to === ''
		|| (typeof mail.to === 'object' && mail.to.length === 0)
	)
		return;
	if (typeof mail.to === 'string')
		mail.to = [mail.to];
	var mjet = new Mailjet(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);
	for (var i = 0; i < mail.to.length; i++) {
		mjet.sendContent(
			mail.from,
			mail.to[i],
			mail.subject,
			'html',
			mail.html
		);
	}
}

module.exports = sendMail1;
