(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"99Un":function(n,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",(function(){return u}));var i=e("ofXK"),o=e("TEn/"),r=e("3Pt+"),c=e("tyNb"),s=e("fXoL"),b=e("dU+L");function a(n,t){if(1&n){const n=s.Lb();s.Kb(0,"ion-col",6),s.Kb(1,"ion-card"),s.Kb(2,"ion-card-header"),s.Kb(3,"ion-card-title",7),s.fc(4),s.Jb(),s.Jb(),s.Kb(5,"ion-card-content"),s.Kb(6,"ion-grid"),s.Kb(7,"ion-row",8),s.Kb(8,"ion-col",9),s.Kb(9,"p"),s.fc(10),s.Jb(),s.Jb(),s.Kb(11,"ion-col",9),s.Kb(12,"p"),s.fc(13),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(14,"ion-item"),s.Kb(15,"ion-button",10),s.Sb("click",(function(){s.bc(n);const e=t.index;return s.Ub().verCharacter(e+1)})),s.fc(16," Personajes "),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()}if(2&n){const n=t.$implicit;s.xb(4),s.hc(" ",n.title," "),s.xb(6),s.hc("Episodio : ",n.episode_id,""),s.xb(3),s.hc("Director : ",n.director,"")}}const l=[{path:"",component:(()=>{class n{constructor(n,t){this.startWarsSVC=n,this.router=t,this.films=[]}ngOnInit(){this.showFilms()}showFilms(){this.startWarsSVC.getFilms().subscribe(n=>{this.films=n.results})}verCharacter(n){this.router.navigate(["/characters",n])}}return n.\u0275fac=function(t){return new(t||n)(s.Hb(b.a),s.Hb(c.g))},n.\u0275cmp=s.Bb({type:n,selectors:[["app-home"]],decls:9,vars:3,consts:[[3,"translucent"],["color","primary"],[1,"ion-text-center"],[3,"fullscreen"],["fixed","",1,".films"],["size","12","size-sm","6","size-lg","4",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-lg","4"],[1,"title"],[1,"ion-align-items-center"],["size","6"],["slot","end",3,"click"]],template:function(n,t){1&n&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar",1),s.Kb(2,"ion-title",2),s.Kb(3,"h1"),s.fc(4,"Star Wars"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(5,"ion-content",3),s.Kb(6,"ion-grid",4),s.Kb(7,"ion-row"),s.ec(8,a,17,3,"ion-col",5),s.Jb(),s.Jb(),s.Jb()),2&n&&(s.Zb("translucent",!0),s.xb(5),s.Zb("fullscreen",!0),s.xb(3),s.Zb("ngForOf",t.films))},directives:[o.m,o.s,o.r,o.k,o.l,o.p,i.h,o.j,o.f,o.h,o.i,o.g,o.n,o.d],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(l)],c.i]}),n})();var p=e("j1ZV");let u=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[i.b,r.a,o.t,f,p.a]]}),n})()}}]);