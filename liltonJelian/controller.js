 function on_hover(){
	$('#letter').fadeIn('slow');
	var background=document.getElementById('myVideo');
	var div=document.getElementById('letter_message');
	var bg_music=document.getElementById('bg_music');
	/*widht: 62*/
	/*max limit 503*/
	var message=" I vow to help you love life, to always hold you with tenderness and to have the patience that love demands, "
	+"to speak when words are needed and to share the silence when they are not, to agree to disagree on red velvet cake, and to live "
	+"within the warmth of your heart and always call it home. "
	+"I will keep you with me forever "
	+"Mainit minsan panahon, minsan yakap mo "
	+"I vow to fiercely love you in all your forms, "
	+"now and forever. I promise to never forget that this is a once in a lifetime love "
	+"and to always know in the deepest part of my soul that no matter what challenges might carry us appart "
	+"we will always find our way back to each other. "
	+"I wanted to tell you that wherever I am, what ever happens, I'll always think of you and the time we spent together, as my happiest time. "
	+"I'd do it all over again, if I had the choice. NO regrets "
	+"Our love is written in the stars. Looking down on us. They can see that we are separated by distance. But in sparkling delight they know we will find our way to each other. "
	+"The maps have been written in our hearts. "
	+"I love you. Remember. They cannot take it. "
	+"I often catch myself constantly wondering how you are, sitting alone with my mind set so far, reminiscing about your smile, your voice and touch. I'm missing you too much "
	+"You have this incredible way of making my heart happy. I loved you then, I love you still, always have and always will. Hoping to hold your hand again soon";
	/*m=1388*/
	var m=message.length;
	bg_music.play();
	//background.style.backgroundImage = "url('giphy_2.gif')";
	//background.style.backgroundSize  = "1000px 1000px";
	background.play();
	for(var i=0;i<m;i++){
		display_message(message[i],i,div,m,1);
		}
		display_message('<img src="hands.jpg"  height="500" width="500" style="margin-left:400px;">',i,div,m+1,0);
	}
	
function display_message(chr,i,div,m,sw){
	setTimeout(function(){ 
	
	if(chr===' ')
		chr='\u00a0';
	if(sw)
		div.innerText+=chr;
	else 
		div.innerHTML=chr;

	if(i>0 && i%100===0)
		div.innerText+='\n';
	
	else if(i+1<m && i%503===0)
		div.innerText='';
	
	},(i+1)*175);
}

setTimeout(on_hover,4000);
 
