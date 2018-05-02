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
// Forge Property Server
// by Cyrille Fauvel - Autodesk Developer Network (ADN)
//
'use strict'; // http://www.w3schools.com/js/js_strict.asp

var express =require ('express') ;
var request = require('request');
var url = require('url');
var querystring = require('querystring');
var path =require ('path') ;
var fs =require ('fs') ;
var utils =require ('./utils') ;
var sendMail = require('./sendMail');

var router =express.Router () ;

var fromEmail ='myaddress@gmail.com' ;
var fromEmailSt ='My Sending email <' + fromEmail + '>' ;
var toEmails =[
	'email1@gmail.com',
	'email2@gmail.com'
] ;

var hdlr =function (req, res) {
	console.log (JSON.stringify (req._parsedUrl)) ;

	var qs =querystring.parse(req._parsedUrl.query);
	var xml =qs.xml ;

	//console.log (JSON.stringify (qs)) ;

	res.status (200).end () ;

	var rq = request(xml, function (error, response, body) {
		if (error)
			body ='error' ;
			
		//console.log ('body:', body) ;

		var html =`<html xmlns="http://www.w3.org/TR/REC-html40">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body lang="EN-US"><a href="` + xml.replace (/ /g, '%20') + '">download your file</a><br /><br/>' + body.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</body></html>';

		sendMail({
			'from': fromEmailSt,
			'replyTo': fromEmail,
			'to': toEmails,
			'subject': 'your xml file',
			'html': html,
			'forceEmbeddedImages': true
		});

	}) ;
} ;

router.get ('/', hdlr) ;
router.post ('/', hdlr) ;
router.get ('/update', hdlr) ;
router.post ('/update', hdlr) ;

module.exports =router ;
