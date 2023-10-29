//LMSOFT Web Creator Pro, Version:6.0.0.12
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('fr');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1000;
LMObjects[objindex++] = LMDiv("PanelHeader",1,1,0,null,0,null,new LMBranchEx("0","./front.png",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,new LMBranchEx("0","https://www.facebook.com/profile.php?id=100089650617203",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img10=FindTagFromId('Img10');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
Img11.PopUp=new Function("LMImageOpenPopUp('Img11',680,398);");
LMObjects[objindex++] = LMImage("Img12",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img12=FindTagFromId('Img12');
Img12.PopUp=new Function("LMImageOpenPopUp('Img12',680,398);");
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./produits.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./gestion5.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./gestion3.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
Img4.PopUp=new Function("LMImageOpenPopUp('Img4',800,488);");
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img7=FindTagFromId('Img7');
Img7.PopUp=new Function("LMImageOpenPopUp('Img7',800,485);");
LMObjects[objindex++] = LMDiv("Box3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
Img8.PopUp=new Function("LMImageOpenPopUp('Img8',800,478);");
LMObjects[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
Img1.PopUp=new Function("LMImageOpenPopUp('Img1',800,453);");
LMObjects[objindex++] = LMDiv("Box6",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
Img3.PopUp=new Function("LMImageOpenPopUp('Img3',800,480);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMObjWeb("Compteur1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
Img9.PopUp=new Function("LMImageOpenPopUp('Img9',1000,586);");
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3fe,0x7a);
LMObjectAnimate();

function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.PopUp();
   //LMSOFT End Event-Action

}


function Img8_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.PopUp();
   //LMSOFT End Event-Action

}


function Img7_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.PopUp();
   //LMSOFT End Event-Action

}


function Img4_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=FindTagFromId("Img4");
   Img4.PopUp();
   //LMSOFT End Event-Action

}



function Img1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=FindTagFromId("Img1");
   Img1.PopUp();
   //LMSOFT End Event-Action

}
function Img3_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img3=FindTagFromId("Img3");
   Img3.PopUp();
   //LMSOFT End Event-Action

}
function Img11_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=FindTagFromId("Img11");
   Img11.PopUp();
   //LMSOFT End Event-Action

}

function Img12_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=FindTagFromId("Img12");
   Img12.PopUp();
   //LMSOFT End Event-Action

}