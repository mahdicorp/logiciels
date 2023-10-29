//LMSOFT Web Creator Pro, Version:6.0.0.12
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('fr');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(7.00,5.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1000;
LMObjects[objindex++] = LMDiv("PanelHeader",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("LogoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) LogoEdit=FindTagFromId('LogoEdit');
LMObjects[objindex++] = LMImage("Poweredby_img",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Poweredby_img=FindTagFromId('Poweredby_img');
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu2",1,1,0,null,0,null,null,null,null,0);
menusystemmodel001Show("Menu1");
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("DecoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) DecoEdit=FindTagFromId('DecoEdit');
LMObjects[objindex++] = LMDiv("PanelBanner",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMObjWeb("ObjWeb1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter2",1,1,0,null,0,null,null,null,null,0);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3fe,0x7a);
LMObjectAnimate();

