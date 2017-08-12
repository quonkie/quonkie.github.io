var gradschool;
gradschool = 0;

var teachenglish;
teachenglish = 0;

var barista;
barista=0;

var worldtraveler;
worldtraveler = 0;

var skibum;
skibum = 0;

var textscore;
textscore=0;

var webscore;
webscore = 0;

var textscore;
textscore=0;

var imagescore;
imagescore = 0;

var webscore;
webscore = 0;

var textscore;
textscore=0;

var sumscore; 



function quizcheck(form) {
	
    var textdisplay = document.getElementById("textdisplay");

	var choice1;
	choice1=document.getElementById("question1").selectedIndex;

	var choice2;
	choice2=document.getElementById("question2").selectedIndex;

	var choice3;
	choice3=document.getElementById("question3").selectedIndex;

	var choice4;
	choice4=document.getElementById("question4").selectedIndex;

	var choice5;
	choice5=document.getElementById("question5").selectedIndex;

	var choice6;
	choice6=document.getElementById("question6").selectedIndex;

	var choice7;
	choice7=document.getElementById("question7").selectedIndex;

	var choice8;
	choice8=document.getElementById("question8").selectedIndex;

	var choice9;
	choice9=document.getElementById("question9").selectedIndex;

	var choice10;
	choice10=document.getElementById("question10").selectedIndex;

        
	if (choice1==0){ //Alerts the user if they did not answer question 1.
	 	alert("You have not answered question 1");
	}
	if (choice2==0 && choice1 != 0){ //Alerts the user if they did not answer question 2.
		alert("You have not answered question 2");
	}
	if (choice3==0 && choice1 != 0 && choice2 != 0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered question 3");
	
	} 

	if (choice4==0 && choice1 != 0 && choice2 != 0 && choice3 != 0){ //Alerts the user if they did not answer question 4.
		alert("You have not answered question 4");
	
	}
	if (choice5==0 && choice1 != 0 && choice2 != 0 && choice3 && choice4 != 0){ //Alerts the user if they did not answer question 5.
		alert("You have not answered question 5");
	
	}
	if (choice6==0){ //Alerts the user if they did not answer question 6.
		alert("You have not answered question 6");
	
	}
	if (choice7==0){ //Alerts the user if they did not answer question 7.
		alert("You have not answered question 7");
	
	}
	if (choice8==0){ //Alerts the user if they did not answer question 8.
		alert("You have not answered question 8");
	
	}
	if (choice9==0){ //Alerts the user if they did not answer question 9.
		alert("You have not answered question 9");
	
	}
	if (choice10==0){ //Alerts the user if they did not answer question 10.
		alert("You have not answered question 10");
	
	}

	if(choice1 > 0 && choice2 > 0 && choice3 > 0){
	
		if (choice1==1){
			imagescore++;
		}

		if (choice1==2){
			webscore++;
		}

		if (choice1==3){
			textscore++;
		}


	    
	    if (choice2==1){ 
			imagescore++;
		}

		if (choice2==2){
			webscore++;
		}

		if (choice2==3){ 
			textscore++;
		}



		if (choice3==1){ 
			imagescore++;
		}

		if (choice3==2){ 
			webscore++;
		}

		if (choice3==3){ 
			textscore++;
		}



		//document.getElementById("imagedisplay").innerHTML = "Image Score: "+imagescore;
		//document.getElementById("webdisplay").innerHTML = "Web Score: "+webscore;
		//document.getElementById("textdisplay").innerHTML = "Text Score: "+textscore;


			
		//if(webscore > imagescore && webscore > textscore){
			//window.location.href="http://www.google.com";
			//window.open("http://www.colorado.edu");
		//}

		//if(imagescore > webscore && imagescore > textscore){
			//window.location.href="http://www.colorado.edu";
		//}

		//if(textscore > webscore && textscore > imagescore){
			//window.location.href="http://atlas.colorado.edu";
		//}

		//if(textscore == 1 && webscore == 1 && imagescore == 1){
			//window.location.href="http://creative.colorado.edu/~halesi";
		//}
		





		//imagescore = 0;
		//webscore = 0;
		//textscore = 0;

	}

	        sumscore = choice1+choice2+choice3+choice4+choice5+choice6+choice7+choice8+choice9+choice10;

	        //imagedisplay.innerHTML = " ";
	        //webdisplay.innerHTML = " ";
      
      if(sumscore<20){
          textdisplay.innerHTML = "...a skim bum! You will adventure around all the mountains of Colorado as you ski all day and relax all night with your friends. To earn money you will teach cute little kiddos and maybe even adults about the wonders of sking and snowboarding. It may not be the most financially stable life, but hey, you're living in the moment and enjoying the ride.";
      }

      if(sumscore>20 && sumscore <40){
      	textdisplay.innerHTML = "...a travel blogger! Pack up your bags, buy a ticket, and jump on a plane! You are going to start crossing things off your bucket list and livin it up! You decide to use your new found web coding skills to make a website that will host all of your blog posts and videos about your current adventures. Eventually you gain a pretty impressive following on your blog and social media accounts, learn the art of capturing the perfect aesthetic, and make lifelong friends along the way.";

      }

      if(sumscore>40 && sumscore<60){
      	textdisplay.innerHTML = "...going to grad school! You decide to take your education and your expensive piece of paper called a bachelor's degree and run to yet another institution to expand your brain and fill it with knowledge! ";

      }

      if(sumscore>60){
      	textdisplay.innerHTML = "...Supreme Ruler Overlord of Badassery and All Things That Are Awesome and Extremely Fun!";

      }
}