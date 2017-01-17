
function effacecookie()
{
	setCookie('niveaufait', "", -1);
	setCookie('nbniveau', "", -1);
	nbniveau=1;
	niveaufait=new Array();
}

function setCookie(cname, cvalue) {
    var d = new Date();
    var exdays=365;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user);
        }
    }
}

function insereniveaundanscookie()
{
	var chaine="";
	for (var i=0;i<niveaufait.length;i++)
	{
		if (niveaufait[i]==1)
		{
			if (chaine=="")
			{
				chaine=i.toString();
			}
			else
			{
				chaine=chaine+"-"+i.toString();
			}
		}
	}
	setCookie('niveaufait',chaine);
}

function liretableauduncookie(cname)
{
	var tmp= getCookie(cname);
	var tab=tmp.split("-");
	return tab;
}


function getMaxTableau(tableauNumerique) {
    return Math.max.apply(null, tableauNumerique);
}
function sansAccent(str){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
     
    return str;
}
cookies = document.cookie;
var tmp= getCookie("niveaufait");
niveaufait=new Array();
if (tmp!="")// si un cookie est présent, on rempli la variable des niveaux faits
{
	var tab=liretableauduncookie("niveaufait");

	for (var i=0;i<tab.length;i++)
	{
		niveaufait[Number(tab[i])]=1;
	}
	
}
else
{
	setCookie('niveaufait', "");
}

var tmp= getCookie("nbniveau");
if (tmp!="")// si un cookie est présent, on rempli la variable des niveaux faits
{
	nbniveau=Number(tmp);
	
}
else
{
	nbniveau=1;
	setCookie('nbniveau', 1);

}




fige=false;
pointclique=new Array();


taille=new Array();
taille=[0,3,3,4,4,5,5,3,3,4,4,5,5,3,3,4,4,5,5,3,3,3,3,4,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,6];

decoupe=getMaxTableau(taille);

A = new Array();
for (var i=0;i<(decoupe+1);i++)
{
	for (var j=0;j<(decoupe+1);j++)
	{
		nom_point=i.toString()+j.toString();

		A[nom_point]=new Array();
	}		
}	
var canvas = document.getElementById('mon_canvas');
if (canvas.width<canvas.height)
{
	longueur=canvas.width-30;
}
else
{
	longueur=canvas.height-40;
}	
precision=30;


niveau=new Array();
niveau[1]=["30","01","12","02","21","03","13"];
niveau[2]=["00","10","30","02","32","03","23"];
niveau[3]=["10","20","40","21","41","22","42","03","23","44"];
niveau[4]=["10","30","21","31","41","22","13","04","24","34"];
niveau[5]=["00","30","10","11","21","31","12","42","52","33","53","04","05","15","45"];
niveau[6]=["20","30","50","11","51","12","42","43","53","04","14","54","05","25","45"];
niveau[7]=["20","31","32","03","23"];
niveau[8]=["10","30","02","32","13","33"];
niveau[9]=["00","11","41","04","24","34"];
niveau[10]=["20","01","41","22","43","24"];
niveau[11]=["10","50","21","22","33","44","04","15"];
niveau[12]=["01","30","51","52","03","53","15","45"];
niveau[13]=["30","11","31","02","23","33"];
niveau[14]=["10","31","02","12","22","32","33"];
niveau[15]=["20","30","01","31","02","22","42","03","14","34"];
niveau[16]=["40","01","21","31","02","13","44"];
niveau[17]=["01","11","31","32","43","53","14","55"];
niveau[18]=["20","30","40","11","31","02","12","42","52","33","14","05","35","45","55"];
niveau[19]=["20","01","02","22","33"];
niveau[20]=["10","20","11","02","23","33"];
niveau[21]=["20","31","03","13","23","33"];
niveau[22]=["00","11","32","03","13","23"];
niveau[23]=["00","10","30","11","31","02","22","32","03","13"];
niveau[24]=["00","10","01","31","12","22","32","03","23"];
niveau[25]=["10","20","30","02","22","32","13","33","43","14"];
niveau[26]=["00","10","41","32","33","13","04"];
niveau[27]=["20","40","02","12","42","03","23","44"];
niveau[28]=["10","41","02","32","42","23","14"];
niveau[29]=["10","30","40","01","02","13","24","34","44"];
niveau[30]=["30","40","01","21","22","03","33","14","24","34","44"];
niveau[31]=["00","01","41","12","22","32","44"];
niveau[32]=["20","30","41","02","32","42","03","13","23","24"];
niveau[33]=["00","30","21","22","32","04","24","44"];
niveau[34]=["10","31","03","23","33","43","04"];
niveau[35]=["10","01","02","21","32","43","14","24","34"];
niveau[36]=["00","20","01","21","41","42","04","14","24"];
niveau[37]=["10","20","02","12","53","34","05","35","45","55"];
niveau[38]=["40","21","32","44","55","05","15"];
niveau[39]=["00","10","20","50","21","31","41","02","13","53","24","44","05","25","55"];
niveau[40]=["00","50","41","52","03","23","05","35","45"];
niveau[41]=["40","11","31","51","02","12","22","23","33","43","34","54","15","25","35"];
niveau[42]=["40","41","03","13","23","43","53","45"];
niveau[43]=["60","11","51","02","12","22","23","33","44","34","54","15","25","35"];


consigne=new Array();
consigne[1]=["Trouver un carré."];
consigne[2]=["Trouver un rectangle."];
consigne[3]=["Trouver un carré."];
consigne[4]=["Trouver un rectangle."];
consigne[5]=["Trouver un carré."];
consigne[6]=["Trouver un rectangle."];
consigne[7]=["Trouver un triangle rectangle."];
consigne[8]=["Trouver un triangle rectangle isocèle."];
consigne[9]=["Trouver un triangle isocèle."];
consigne[10]=["Trouver un triangle rectangle."];
consigne[11]=["Trouver un triangle rectangle isocèle."];
consigne[12]=["Trouver un triangle isocèle."];
consigne[13]=["Trouver un trapèze."];
consigne[14]=["Trouver un parallélogramme."];
consigne[15]=["Trouver un losange."];
consigne[16]=["Trouver un trapèze."];
consigne[17]=["Trouver un parallélogramme."];
consigne[18]=["Trouver un losange."];
consigne[19]=["Trouver un triangle rectangle non isocèle."];
consigne[20]=["Trouver un parallélogramme."];
consigne[21]=["Trouver un triangle rectangle isocèle."];
consigne[22]=["Trouver un trapèze."];
consigne[23]=["Trouver un carré."];
consigne[24]=["Trouver un rectangle."];
consigne[25]=["Trouver un losange."];
consigne[26]=["Trouver un triangle isocèle."];
consigne[27]=["Trouver un parallélogramme."];
consigne[28]=["Trouver un trapèze."];
consigne[29]=["Trouver un triangle rectangle isocèle."];
consigne[30]=["Trouver un rectangle."];
consigne[31]=["Trouver un triangle isocèle."];
consigne[32]=["Trouver un carré."];
consigne[33]=["Trouver un parallélogramme."];
consigne[34]=["Trouver un trapèze."];
consigne[35]=["Trouver un rectangle."];
consigne[36]=["Trouver un triangle rectangle isocèle."];
consigne[37]=["Trouver un rectangle."];
consigne[38]=["Trouver un triangle rectangle."];
consigne[39]=["Trouver un carré."];
consigne[40]=["Trouver un parallélogramme."];
consigne[41]=["Trouver un losange."];
consigne[42]=["Trouver un trapèze."];
consigne[43]=["Trouver un losange."];
correctionniveau= new Array();
correctionniveau[1]=["12","02","03","13"];
correctionniveau[2]=["00","30","32","02"];
correctionniveau[3]=["20","40","42","22"];
correctionniveau[4]=["21","31","34","24"];
correctionniveau[5]=["12","15","45","42"];
correctionniveau[6]=["11","51","54","14"];
correctionniveau[7]=["20","23","03"];
correctionniveau[8]=["10","30","32"];
correctionniveau[9]=["04","24","11"];
correctionniveau[10]=["01","41","43"];
correctionniveau[11]=["04","22","44"];
correctionniveau[12]=["01","52","03"];

correctionniveau[13]=["11","31","33","23"];
correctionniveau[14]=["10","31","33","12"];
correctionniveau[15]=["30","22","34","42"];
correctionniveau[16]=["01","02","44","40"];
correctionniveau[17]=["01","11","53","43"];
correctionniveau[18]=["12","31","52","33"];
correctionniveau[19]=["01","02","22"];
correctionniveau[20]=["10","20","33","23"];
correctionniveau[21]=["31","33","13"];
correctionniveau[22]=["00","11","13","03"];
correctionniveau[23]=["02","11","22","13"];
correctionniveau[24]=["01","10","32","23"];
correctionniveau[25]=["02","10","22","14"];
correctionniveau[26]=["00","32","04"];
correctionniveau[27]=["20","40","23","03"];
correctionniveau[28]=["10","14","42","41"];
correctionniveau[29]=["10","40","13"];
correctionniveau[30]=["30","40","44","34"];
correctionniveau[31]=["01","22","41"];
correctionniveau[32]=["20","02","24","42"];
correctionniveau[33]=["30","32","24","22"];
correctionniveau[34]=["03","04","33","31"];
correctionniveau[35]=["10","01","34","43"];
correctionniveau[36]=["20","42","24"];
correctionniveau[37]=["20","02","35","53"];
correctionniveau[38]=["21","32","05"];
correctionniveau[39]=["00","50","55","05"];
correctionniveau[40]=["50","52","05","03"];
correctionniveau[41]=["31","43","35","23"];
correctionniveau[42]=["13","23","41","40"];
correctionniveau[43]=["22","51","44","15"];

function ecritconsigne(message) {
	document.getElementById('consigne').style.backgroundColor='#edffe7';
    document.getElementById('consigne').innerHTML=message;
}

function ecritchgtniveau(message) {
	document.getElementById('consigne').style.backgroundColor='#E8E9E9';
    document.getElementById('consigne').innerHTML=message;
}

function ecritcorrection(message,boolreussite)
{
	if (boolreussite)
	{
		document.getElementById('consigne').style.backgroundColor='#85C630';
	}
	else
	{
		document.getElementById('consigne').style.backgroundColor='#EACFB8';
	}
        document.getElementById('consigne').innerHTML=message;
}

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}
function affichefelicitation()
{
	document.getElementById('msgaide').style.visibility='visible';
	document.getElementById('msgaide-texte').innerHTML="BRAVO TU AS TERMINÉ LE JEU!!!";
}
function afficheaide()
{
	
	if ((document.getElementById('msgaide').style.visibility=='visible')||( fige))
	{
		document.getElementById('msgaide').style.visibility='hidden';
	}
	else
	{
		chaine=sansAccent(consigne[nbniveau].toString());
		var texte = '';

		if (chaine.indexOf("triangle")>-1)
		{
			if(chaine.indexOf("rectangle")>-1)
			{
				if (chaine.indexOf("isocele")>-1)
				{
					if(chaine.indexOf("non isocele")>-1)
					{
						texte="Un triangle rectangle non isocèle est un triangle qui possède un angle droit mais qui n'a pas deux côtés de même longueur.";
					}
					else
					{
						texte="Un triangle rectangle isocèle est un triangle qui possède un angle droit et qui a deux côtés de même longueur.";
					}
				}
				else 
				{	
					texte="Un triangle rectangle est un triangle qui possède un angle droit.";
				}
			}
			else if (chaine.indexOf("isocele")>-1)
			{
				texte="Un triangle isocèle est un triangle qui a deux côtés de même longueur.";
			}
		}
		else if(chaine.indexOf("rectangle")>-1)
		{
			texte="Un rectangle est un quadrilatère qui possède 4 angles droits.";
		}
		else if (chaine.indexOf("carre")>-1)
		{
			texte="Un carré est un quadrilatère qui possède 4 angles droits et ses côtés sont de même longueur.";
		}
		else if (chaine.indexOf("parallelogramme")>-1)	
		{
			texte="Un parallélogramme est un quadrilatère qui a ses côtés deux à deux paralléles.";

		}
		else if (chaine.indexOf("trapeze")>-1)
		{
		texte="Un trapèze est un quadrilatère qui a deux côtés paralléles.";
		}
		else if (chaine.indexOf("losange")>-1)
		{
			texte="Un losange est un quadrilatère qui a ses côtés de même longueur.";
		}
		document.getElementById('msgaide').style.visibility='visible';
        document.getElementById('msgaide-texte').innerHTML=texte;
    }
	
}
var canvas = document.getElementById('mon_canvas');
var context = canvas.getContext('2d');
function dessinertrace()
{
	context.moveTo(A[pointclique[0]]['x'],A[pointclique[0]]['y']);
						
	for (var i=1;i<pointclique.length;i++)
	{
		context.lineTo(A[pointclique[i]]['x'] , A[pointclique[i]]['y']);
	}
}

function trace()
{
	clearCanvas(context, canvas);
	dessinegrille(context,longueur,nbniveau);
	context.beginPath();
	
	context.lineWidth = 5;
	context.strokeStyle="#FF4422";
	context.moveTo(A[pointclique[0]]['x'],A[pointclique[0]]['y']);
		for (var j=1;j<pointclique.length;j++)
		{	
			context.lineTo(A[pointclique[j]]['x'], A[pointclique[j]]['y']);
		}
			context.stroke(); 
		for (var j=0;j<pointclique.length;j++)
		{	
			dessinecercle(A[pointclique[j]]['x'],A[pointclique[j]]['y'],true);
		}
	context.closePath();
	
	
}

canvas.addEventListener('mousemove', function(evt) 
	{if (! fige)
		{
		var mousePos = getMousePos(canvas, evt);
		var changer_curseur=false;
		clearCanvas(context, canvas);
		dessinegrille(context,longueur,nbniveau);
		var pas=longueur/11;
		if (pointclique.length>0)
		{	
			trace();
		}
		for (var i=0;i<niveau[nbniveau].length;i++)
		{
			if ((Math.abs(A[niveau[nbniveau][i]]['x']-mousePos.x)<precision)&&(Math.abs(A[niveau[nbniveau][i]]['y']-mousePos.y)<precision))
			{
				
				dessinecercle(A[niveau[nbniveau][i]]['x'],A[niveau[nbniveau][i]]['y'],true);
				if (pointclique.length>0)
				{			
						context.lineWidth = 5;
						context.fillStyle="#FF4422";
						context.moveTo(A[pointclique[(pointclique.length-1)]]['x'],A[pointclique[(pointclique.length-1)]]['y']);
						context.lineTo(A[niveau[nbniveau][i]]['x'] , A[niveau[nbniveau][i]]['y']);
						context.stroke(); 

				}
				
				
				changer_curseur=true;
			}
		}
		
		if (Math.abs(mousePos.y-15)<4)
		{
			
			if (nbniveau<5)
			{
				
				for (var i=1;i<nbniveau;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2-(nbniveau-i)*pas))<4)
					{
						if (niveaufait[i]==1)
						{
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+i+".");
						}
					}
				}
			}
			else
			{
				
				for (var i=1;i<5;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2-i*pas))<4)
					{
						if (niveaufait[nbniveau-i]==1)
						{
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+(nbniveau-i)+".");
						}
					}
				}
			}

			if (niveau.length-nbniveau<5)
			{
				for (var i=1;i<niveau.length-nbniveau;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2+i*pas))<4)
					{
						
						if (niveaufait[nbniveau+i]==1)
						{
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+(nbniveau+i)+".");
						}
						else if (niveaufait[nbniveau+i-1]==1) // on accepte d'aller un cran plus loin
						{
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+(nbniveau+i)+".");
						}
					}
				}
			}
			else
			{
				for (var i=1;i<5;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2+i*pas))<4)
					{
						if (niveaufait[nbniveau+i]==1)
						{						
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+(nbniveau+i)+".");
						}
						else if (niveaufait[nbniveau+i-1]==1) // on accepte d'aller un cran plus loin
						{
							changer_curseur=true;
							ecritchgtniveau("Aller au niveau "+(nbniveau+i)+".");
						}
					}
				}
			}	
		}
		if (changer_curseur)
		{
			canvas.style.cursor='pointer';
		}
		else
		{
			canvas.style.cursor='default';
			
		}
		}	
	}, false);
	
	  
canvas.addEventListener('click', function(evt) 
	{var pas=longueur/11;
		if (! fige)
		{
		var mousePos = getMousePos(canvas, evt);
		for (var i=0;i<niveau[nbniveau].length;i++)
		{
			if ((Math.abs(A[niveau[nbniveau][i]]['x']-mousePos.x)<precision)&&(Math.abs(A[niveau[nbniveau][i]]['y']-mousePos.y)<precision))
			{
					if (pointclique[(pointclique.length-1)]==niveau[nbniveau][i])
					{
						pointclique.pop();
					}
					else
					{
						if (pointclique[(0)]==niveau[nbniveau][i])
						{
							correction();
						}
						else
						{
							pointclique.push(niveau[nbniveau][i]);
						}
					}
					
					
		}}
		
		if (Math.abs(mousePos.y-15)<4)
		{
			
			if (nbniveau<5)
			{
				
				for (var i=1;i<nbniveau;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2-(nbniveau-i)*pas))<4)
					{
						if ((niveaufait[i]==1)||(niveaufait[i-1]==1))
						{
							nbniveau=i;setCookie('nbniveau', nbniveau);initialisation();
						}
					}
				}
			}
			else
			{
				
				for (var i=1;i<5;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2-i*pas))<4)
					{
						if ((niveaufait[nbniveau-(i)]==1)||(niveaufait[nbniveau-(i)]==1))
						{
							nbniveau=nbniveau-(i);setCookie('nbniveau', nbniveau);initialisation();
						}
					}
				}
			}

			if (niveau.length-nbniveau<5)
			{
				for (var i=1;i<niveau.length-nbniveau;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2+i*pas))<4)
					{
						if ((niveaufait[nbniveau+i]==1)||(niveaufait[nbniveau+i-1]==1))
						{
							nbniveau=nbniveau+i;setCookie('nbniveau', nbniveau);initialisation();
						}					
					}
				}
			}
			else
			{
				for (var i=1;i<5;i++)
				{
					if (Math.abs(mousePos.x-(canvas.width/2+i*pas))<4)
					{
						if ((niveaufait[nbniveau+i]==1)||(niveaufait[nbniveau+i-1]==1))
						{
							nbniveau=nbniveau+i;setCookie('nbniveau', nbniveau);initialisation();
						}
					}
				}
			}	
		}
		}
	},false);
	
function noncroise(pointclique,pointcorrection)
{
	reste=3;
	estnoncroise=true;
	for (var i=0;i<pointclique.length;i++)
		{
			for (var j=0;j<pointcorrection.length;j++)
			{
				if (pointcorrection[j]==pointclique[i])
				{
					var restetmp=j%2;
					estnoncroise=estnoncroise&&(restetmp!=reste);
					reste=restetmp;
				}
			}
		}
		return estnoncroise;
}
function veriftoutestfait()
{
	
	for (var i=0;i<niveau.length;i++)
	{
		if (niveaufait[i]!=1)
		{
			return false;
		}
	}
	return true;
}
function correction()
{
	fige=true;
	canvas.style.cursor='default';
	if (pointclique.length==correctionniveau[nbniveau].length)
	{
		memetableau=true;
		for (var i=0;i<pointclique.length;i++)
		{
			present=false;
			for (var j=0;j<correctionniveau[nbniveau].length;j++)
			{
				present=present||(correctionniveau[nbniveau][j]==pointclique[i]);
			}
			memetableau=memetableau&&present;
		}
		if (memetableau)
		{
			if (correctionniveau[nbniveau].length==4) // c'est un quadrilatère, il faut vérifier qu'il n'est pas croisé
			{
				if (noncroise(pointclique,correctionniveau[nbniveau]))
				{
					if (veriftoutestfait())
					{
						affichefelicitation();
					}
					else
					{
						if (nbniveau+1<niveau.length)
						{
							ecritcorrection('BRAVO, vous passez au niveau suivant.',true);
						}
						else
						{
							ecritcorrection('BRAVO! Il vous reste des niveaux à accomplir.',true);	
						}
						document.getElementById('msgaide').style.visibility='hidden';
						setTimeout(function() {
						fige=false;
						niveaufait[nbniveau]=1;
						insereniveaundanscookie();
						// ajout dans le cookies du niveau fait
						
						if (nbniveau+1<niveau.length)
						{
							nbniveau=nbniveau+1;
							setCookie('nbniveau', nbniveau);
						}
						initialisation();
						}, 2000);
					}
				}
				else
				{
					ecritcorrection('Non, ton quadrilatère est croisé!',false);
					setTimeout(function() {
					fige=false;initialisation();
					}, 2000);
				}
			}
			else // c'est un triangle
			{
				if ((nbniveau+1)==niveau.length)
				{
					affichefelicitation();
				}
				else
				{
					ecritcorrection('BRAVO, vous passez au niveau suivant.',true);
					document.getElementById('msgaide').style.visibility='hidden';
					setTimeout(function() {
					fige=false;niveaufait[nbniveau]=1;insereniveaundanscookie();nbniveau=nbniveau+1;setCookie('nbniveau', nbniveau);initialisation();
					}, 2000);
				}
			}
		}
		else
		{
			ecritcorrection('Non, ce n\'est pas la bonne réponse.',false);
			setTimeout(function() {
			fige=false;initialisation();
			}, 2000);
		}
	}		
	else
	{
			ecritcorrection('Non, ce n\'est pas la bonne réponse.',false);
			setTimeout(function() {
			fige=false;initialisation();
			}, 2000);
	}
}




function initialisation()
{
	
	pointclique=new Array();
	var canvas = document.getElementById('mon_canvas');
	if(!canvas)
	{
		alert("Impossible de récupérer le canvas");
		return;
	}

	if (canvas.width<canvas.height)
	{
		longueur=canvas.width-30;
	}
	else
	{
		longueur=canvas.height-30;
	}
	var canvas = document.getElementById('mon_canvas');
	if(!canvas)
	{
		alert("Impossible de récupérer le canvas");
		return;
	}

	var context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
		return;
	}
	

	clearCanvas(context, canvas);
dessinegrille(context,longueur,nbniveau);
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;

    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
	

}

function reset()
{
	
	var canvas = document.getElementById('mon_canvas');
	if(!canvas)
	{
		alert("Impossible de récupérer le canvas");
		return;
	}

    var context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
		return;
	}
	clearCanvas(context, canvas) ; 
	dessinegrille(context,longueur,nbniveau);
}

function dessinecercle(x,y,colore)
{
	context.beginPath();//On démarre un nouveau trace
	context.setLineDash([0]);
	context.lineWidth = 1;
	context.moveTo(x,y);
	if (colore)
	{
		 context.fillStyle="#FF4422";
	}
	else
	{
		 context.fillStyle="#0000000";
	}
	context.arc(x, y, 8, 0, 2 * Math.PI);
	context.fill();//On trace seulement les lignes pleines
	context.closePath();
}

function dessinecerclerayon(x,y,rayon,colore)
{
	context.beginPath();//On démarre un nouveau trace
	context.save();
	context.setLineDash([0]);
	context.lineWidth = 1;
	context.moveTo(x,y);
	if (colore=='gris')
	{
		 context.fillStyle="#F08080";
	}
	else if (colore=='or')
 	{
			 context.fillStyle="#FFF0BC";
	}
	else
	{
		 context.fillStyle="#0000000";
	}
	context.arc(x, y, rayon, 0, 2 * Math.PI);
	context.fill();//On trace seulement les lignes pleines
	context.restore();
	context.closePath();
}

function placer_point(nbniveau)
{

	var points=niveau[nbniveau];
	for (var i=0;i<points.length;i++)
	{	
		dessinecercle(A[points[i]]['x'], A[points[i]]['y'],false);
	}
		
}
function dessinegrille(context,longueur,nbniveau)	
{
	
	ecritconsigne("Niveau "+nbniveau+" : "+consigne[nbniveau]);

	context.beginPath();//On démarre un nouveau trace
context.lineWidth = 1;
context.fillStyle="#0000000";
	context.setLineDash([0]);
	decoupe=taille[nbniveau];

	var pas=Math.floor(longueur/decoupe);

	for (var i=0;i<(decoupe+1);i++)
	{
		for (var j=0;j<(decoupe+1);j++)
		{
			nom_point=i.toString()+j.toString();
			A[nom_point]['x']=pas*i+15;
			A[nom_point]['y']=40+pas*j+15;
		}		
	}
	
	for (var i=0;i<(decoupe+1);i++)
	{
		context.moveTo(A[i.toString()+"0"]['x'],A[i.toString()+"0"]['y']);

		context.lineTo(A[i.toString()+decoupe.toString()]['x'],A[i.toString()+decoupe.toString()]['y']);
		context.moveTo(A["0"+i.toString()]['x'],A["0"+i.toString()]['y']);

		context.lineTo(A[decoupe.toString()+i.toString()]['x'],A[decoupe.toString()+i.toString()]['y']);
	}
	context.stroke();//On trace seulement les lignes pleines
	context.closePath();
	 placer_point(nbniveau);
	 affichebarre();
}


function affichebarre()
{
	//1 2 3 4 ..5.. 6 7 8 9
	
	context.beginPath();//On dÃ©marre un nouveau trace
	context.lineWidth = 1;
	context.fillStyle="#DCDCDC";
	context.strokeStyle="#DCDCDC";
	var nbniveautotal=niveau.length+1;
	var pas=longueur/11;
	context.setLineDash([0]);
	var largeurbarre=canvas.width-30;

	if (nbniveau<5)
	{
		
		for (var i=0;i<nbniveau;i++)
		{
			if (niveaufait[i+1]==1)
			{
				dessinecerclerayon(canvas.width/2-(nbniveau-i-1)*pas, 15,3,'gris');
			}
			else
			{
				dessinecerclerayon(canvas.width/2-(nbniveau-i-1)*pas, 15,3,'rouge');
			}
		}
		
		context.moveTo(canvas.width/2-(nbniveau-1)*pas,15);
	}
	else
	{
		
		for (var i=1;i<5;i++)
		{
			if (niveaufait[nbniveau-i]==1)
			{
				dessinecerclerayon(canvas.width/2-i*pas, 15,3,'gris');
			}
			else
			{
				dessinecerclerayon(canvas.width/2-i*pas, 15,3,'rouge');
			}
		}
		dessinecerclerayon(canvas.width/2, 15,5,'or');
		context.moveTo(canvas.width/2-4*pas,15);
	}

	if (niveau.length-nbniveau<5)
	{
		context.lineTo(canvas.width/2+(niveau.length-nbniveau-1)*pas,15);
		context.stroke();//On trace seulement les lignes pleines
		context.closePath();
		for (var i=1;i<niveau.length-nbniveau;i++)
		{
			if (niveaufait[nbniveau+i]==1)
			{
				dessinecerclerayon(canvas.width/2+i*pas, 15,3,'gris');
			}
			else
			{
				dessinecerclerayon(canvas.width/2+i*pas, 15,3,'rouge');
			}
		}
	}
	else
	{
		context.lineTo(canvas.width/2+4*pas,15);
		context.stroke();//On trace seulement les lignes pleines
		context.closePath();
		for (var i=1;i<5;i++)
		{
			if (niveaufait[nbniveau+i]==1)
			{
				dessinecerclerayon(canvas.width/2+i*pas, 15,3,'gris');
			}
			else
			{
				dessinecerclerayon(canvas.width/2+i*pas, 15,3,'rouge');
			}
		}
	}	
	dessinecerclerayon(canvas.width/2, 15,5,'or');
	if (niveaufait[nbniveau]==1)
	{
		dessinecerclerayon(canvas.width/2, 15,2,'gris');
	}

}
window.load=initialisation();
