//alert("Hello World!");

var mainHeading = document.getElementById("main-heading");
var mainParagraph = document.getElementById("main-paragraph");
var myPic = document.getElementById("my-picture");
var myLink = document.getElementById("my-link");


function domChanger(){
 	mainHeading.innerHTML = "ATLS 2200 - Web";
	mainParagraph.innerHTML = "Pop-up chartreuse mumblecore chia yuccie, twee yr fashion axe offal fanny pack copper mug tattooed. Tilde asymmetrical offal schlitz, cornhole trust fund subway tile hella vape post-ironic echo park everyday carry. Craft beer hella asymmetrical, microdosing biodiesel cray pour-over tbh pug iceland. Vegan ethical chillwave, iceland literally gastropub quinoa tumeric. Chambray hoodie taxidermy meh vinyl synth, bitters vaporware poutine drinking vinegar paleo etsy scenester. Bushwick listicle post-ironic, la croix poutine 8-bit green juice next level fixie farm-to-table live-edge gochujang fam vice letterpress. Tbh woke four dollar toast vexillologist cornhole vaporware.";
	myPic.src = "bunnypile.jpg";
	myLink.href = "http://atlas.colorado.edu";
	myLink.innerHTML = "ATLAS Website";

	// mainHeading.style.color = "rgb(255,0,0)";
	// mainHeading.style.fontSize = "3em"

	// mainParagraph.style.fontfamily = "Helvetica";
	// mainParagraph.style.color = "rgb(200,200,200)";
}

// function domChanger2(){
// 	mainHeading.innerHTML = "2nd Bunny";
// 	myPic.src= "bunnypile.jpg";
// }