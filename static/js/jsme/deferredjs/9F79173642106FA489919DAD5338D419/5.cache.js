$wnd.jsme.runAsyncCallback5('function bR(){this.pb=on("file");this.pb[Zc]="gwt-FileUpload"}r(358,339,ji,bR);_.yd=function(a){sv(this,a)};function cR(a){var b=$doc.createElement(zd);CK(pg,b.tagName);this.pb=b;this.b=new lL(this.pb);this.pb[Zc]="gwt-HTML";kL(this.b,a,!0);tL(this)}r(362,363,ji,cR);function dR(){$x();var a=$doc.createElement("textarea");!cu&&(cu=new bu);!au&&(au=new $t);this.pb=a;this.pb[Zc]="gwt-TextArea"}r(402,403,ji,dR);\nfunction eR(a,b){var c,d;c=$doc.createElement(Pg);d=$doc.createElement(zg);d[Bc]=a.a.a;d.style[Vg]=a.b.a;var e=(eu(),fu(d));c.appendChild(e);du(a.d,c);Ev(a,b,d)}function iR(){Gw.call(this);this.a=(Jw(),Qw);this.b=(Rw(),Uw);this.e[Vc]=$a;this.e[Uc]=$a}r(411,355,Ah,iR);_.Td=function(a){var b;b=qn(a.pb);(a=Iv(this,a))&&this.d.removeChild(qn(b));return a};\nfunction jR(a){try{a.w=!1;var b,c,d,e,f;d=a.hb;c=a.ab;d||(a.pb.style[Wg]=re,a.ab=!1,a.ee());b=a.pb;b.style[Ce]=0+(lp(),If);b.style[Hg]=ab;e=An()-kn(a.pb,wf)>>1;f=zn()-kn(a.pb,vf)>>1;UM(a,dj(Bn($doc)+e,0),dj(Cn($doc)+f,0));d||((a.ab=c)?(Ox(a.pb,Vf),a.pb.style[Wg]=Xg,Ai(a.gb,200)):a.pb.style[Wg]=Xg)}finally{a.w=!0}}function kR(a){a.i=(new gM(a.j)).rc.Ve();ov(a.i,new lR(a),(qq(),qq(),rq));a.d=F(my,o,41,[a.i])}\nfunction mR(){oN();var a,b,c,d,e;LN.call(this,(cO(),dO),null,!0);this.Tg();this.db=!0;a=new cR(this.k);this.f=new dR;this.f.pb.style[Zg]=cb;av(this.f,cb);this.Rg();fN(this,"400px");e=new iR;e.pb.style[qe]=cb;e.e[Vc]=10;c=(Jw(),Kw);e.a=c;eR(e,a);eR(e,this.f);this.e=new Yw;this.e.e[Vc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Vw(this.e,a);eR(e,this.e);tN(this,e);pM(this,!1);this.Sg()}r(671,672,FI,mR);_.Rg=function(){kR(this)};\n_.Sg=function(){var a=this.f;a.pb.readOnly=!0;var b=ev(a.pb)+"-readonly";$u(a.Gd(),b,!0)};_.Tg=function(){oM(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function lR(a){this.a=a}r(674,1,{},lR);_.ed=function(){vN(this.a,!1)};_.a=null;function nR(a){this.a=a}r(675,1,{},nR);\n_.Ic=function(){jv(this.a.f.pb,!0);this.a.f.pb.focus();var a=this.a.f,b;b=ln(a.pb,Ug).length;if(0<b&&a.kb){if(0>b)throw new $F("Length must be a positive integer. Length: "+b);if(b>ln(a.pb,Ug).length)throw new $F("From Index: 0  To Index: "+b+"  Text Length: "+ln(a.pb,Ug).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function oR(a){kR(a);a.a=(new gM(a.b)).rc.Ve();ov(a.a,new pR(a),(qq(),qq(),rq));a.d=F(my,o,41,[a.a,a.i])}\nfunction qR(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";oM(a.I.b,"Paste")}function rR(a){oN();mR.call(this);this.c=a}r(677,671,FI,rR);_.Rg=function(){oR(this)};_.Sg=function(){av(this.f,"150px")};_.Tg=function(){qR(this)};_.ee=function(){KN(this);Vm((Sm(),Tm),new sR(this))};_.a=null;_.b=null;_.c=null;function tR(a){oN();rR.call(this,a)}r(676,677,FI,tR);_.Rg=function(){var a;oR(this);a=new bR;ov(a,new uR(this),(WJ(),WJ(),XJ));this.d=F(my,o,41,[this.a,a,this.i])};\n_.Sg=function(){av(this.f,"150px");IB(new vR(this),this.f)};_.Tg=function(){qR(this);this.k+=" Or drag and drop a file on it."};function uR(a){this.a=a}r(678,1,{},uR);_.dd=function(a){var b,c;b=new FileReader;a=(c=a.a.target,c.files[0]);wR(b,new xR(this));b.readAsText(a)};_.a=null;function xR(a){this.a=a}r(679,1,{},xR);_.ef=function(a){bB();Zx(this.a.a.f,a)};_.a=null;function vR(a){this.a=a;this.b=new yR(this);this.c=this.d=1}r(680,510,{},vR);_.a=null;function yR(a){this.a=a}r(681,1,{},yR);\n_.ef=function(a){this.a.a.f.pb[Ug]=null!=a?a:j};_.a=null;function pR(a){this.a=a}r(685,1,{},pR);_.ed=function(){if(this.a.c){var a=this.a.c,b;b=new ZA(a.a,0,ln(this.a.f.pb,Ug));PB(a.a.a,b.a)}vN(this.a,!1)};_.a=null;function sR(a){this.a=a}r(686,1,{},sR);_.Ic=function(){jv(this.a.f.pb,!0);this.a.f.pb.focus()};_.a=null;r(687,1,Th);_.Xc=function(){var a,b;a=new zR(this.a);void 0!=$wnd.FileReader?b=new tR(a):b=new rR(a);hN(b);jR(b)};function zR(a){this.a=a}r(688,1,{},zR);_.a=null;r(689,1,Th);\n_.Xc=function(){var a;a=new mR;var b=this.a,c;Zx(a.f,b);b=(c=eG(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);av(a.f,20*(10>b?b:10)+If);Vm((Sm(),Tm),new nR(a));hN(a);jR(a)};function wR(a,b){a.onload=function(a){b.ef(a.target.result)}}V(671);V(677);V(676);V(688);V(674);V(675);V(685);V(686);V(678);V(679);V(680);V(681);V(362);V(411);V(402);V(358);x(EI)(5);\n//@ sourceURL=5.js\n')
