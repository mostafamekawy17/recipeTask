(self.webpackChunkrecipes_project=self.webpackChunkrecipes_project||[]).push([[73],{8073:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AuthModule:()=>m});var n=i(1858),o=i(1462),s=i(5425),r=i(8619),c=i(3841),p=i(1116);let a=(()=>{class t{constructor(){this.close=new r.vpe}onClose(){this.close.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],["id","pop-up",1,"alert-box"],[1,"alert-boc-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.NdJ("click",function(){return e.onClose()}),r.qZA(),r.TgZ(1,"div",1),r.TgZ(2,"p"),r._uU(3),r.qZA(),r.TgZ(4,"div",2),r.TgZ(5,"button",3),r.NdJ("click",function(){return e.onClose()}),r._uU(6,"Close"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Oqu(e.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000000bf;z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}#pop-up[_ngcontent-%COMP%]{top:-400px;animation:drop .5s ease forwards}@keyframes drop{70%{transform:translateY(700px)}to{transform:translateY(650px)}}"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-spinner"]],decls:3,vars:0,consts:[[1,"lds-ripple"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r._UZ(1,"div"),r._UZ(2,"div"),r.qZA())},styles:[".lds-ripple[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}to{top:0;left:0;width:72px;height:72px;opacity:0}}"]}),t})();function d(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"app-alert",5),r.NdJ("close",function(){return r.CHM(t),r.oxw().onHandleError()}),r.qZA()}if(2&t){const t=r.oxw();r.Q6J("message",t.isError)}}function u(t,e){1&t&&(r.TgZ(0,"div",6),r._UZ(1,"app-spinner"),r.qZA())}function g(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"form",7,8),r.NdJ("ngSubmit",function(){r.CHM(t);const e=r.MAs(1);return r.oxw().onSubmit(e)}),r.TgZ(2,"div",9),r.TgZ(3,"label",10),r._uU(4,"E-Mail"),r.qZA(),r._UZ(5,"input",11),r.qZA(),r.TgZ(6,"div",9),r.TgZ(7,"label",12),r._uU(8,"Password"),r.qZA(),r._UZ(9,"input",13),r.qZA(),r.TgZ(10,"div",0),r.TgZ(11,"div",14),r.TgZ(12,"button",15),r._uU(13),r.qZA(),r.TgZ(14,"button",16),r.NdJ("click",function(){return r.CHM(t),r.oxw().onSwitchMode()}),r._uU(15),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=r.MAs(1),e=r.oxw();r.xp6(12),r.Q6J("disabled",!t.valid),r.xp6(1),r.Oqu(e.isLoginMode?"Login":"Sign Up"),r.xp6(2),r.hij("Switch to ",e.isLoginMode?"Sign Up":"Login","")}}let f=(()=>{class t{constructor(t,e){this._authService=t,this.router=e,this.isLoginMode=!0,this.isLoading=!1,this.isError=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(!t.valid)return;const e=t.value.email,i=t.value.password;let n;this.isLoading=!0,n=this.isLoginMode?this._authService.login(e,i):this._authService.signup(e,i),n.subscribe(t=>{console.log(t),this.isLoading=!1,this.router.navigate(["/recipes"])},t=>{console.log(t),this.isError=t,this.isLoading=!1}),t.reset()}onHandleError(){this.isError=null}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c.e),r.Y36(n.F0))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-auth"]],decls:5,vars:3,consts:[[1,"row"],[1,"col-12","col-md-6","offset-md-3"],[3,"message","close",4,"ngIf"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[3,"message","close"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],[1,"col-12"],["type","submit",1,"btn","btn-primary","me-3",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.YNc(2,d,1,1,"app-alert",2),r.YNc(3,u,2,0,"div",3),r.YNc(4,g,16,3,"form",4),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.Q6J("ngIf",e.isError),r.xp6(1),r.Q6J("ngIf",e.isLoading),r.xp6(1),r.Q6J("ngIf",!e.isLoading))},directives:[p.O5,a,l,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.Q7,o.on,o.wO],encapsulation:2}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.m,o.u5,n.Bz.forChild([{path:"",component:f}])]]}),t})()}}]);