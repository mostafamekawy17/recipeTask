(self.webpackChunkrecipes_project=self.webpackChunkrecipes_project||[]).push([[886],{5886:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ShoppingListModule:()=>h});var n=i(5425),s=i(1462),o=i(1858),r=i(8619),c=i(2955),d=i(6190),p=i(1116);const u=["f"];function g(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",13),r.NdJ("click",function(){return r.CHM(t),r.oxw().onDelete()}),r._uU(1,"Delete"),r.qZA()}}let l=(()=>{class t{constructor(t){this._shoppingListService=t,this.editMode=!1}ngOnInit(){this.subscription=this._shoppingListService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this._shoppingListService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=t.value,i=new d.o(e.name,e.amount);this.editMode?this._shoppingListService.updateIngredient(this.editedItemIndex,i):this._shoppingListService.addIngredient(i),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this._shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c._))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){if(1&t&&r.Gf(u,5),2&t){let t;r.iGM(t=r.CRH())&&(e.slForm=t.first)}},decls:20,vars:3,consts:[[1,"row","mt-3"],[1,"col-12"],[1,"row","g-3",3,"ngSubmit"],["f","ngForm"],[1,"row"],[1,"col-sm-5"],["for","name",1,"form-label"],["type","text","name","name","ngModel","","required","",1,"form-control","mb-2"],[1,"col-sm-2"],["type","number","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control","mb-2"],["type","submit",1,"btn","btn-success","me-2",3,"disabled"],["class","btn btn-danger me-2","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary","me-2",3,"click"],["type","button",1,"btn","btn-danger","me-2",3,"click"]],template:function(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"form",2,3),r.NdJ("ngSubmit",function(){r.CHM(t);const i=r.MAs(3);return e.onSubmit(i)}),r.TgZ(4,"div",4),r.TgZ(5,"div",5),r.TgZ(6,"label",6),r._uU(7,"Name"),r.qZA(),r._UZ(8,"input",7),r.qZA(),r.TgZ(9,"div",8),r.TgZ(10,"label",6),r._uU(11,"Amount"),r.qZA(),r._UZ(12,"input",9),r.qZA(),r.qZA(),r.TgZ(13,"div",4),r.TgZ(14,"div",1),r.TgZ(15,"button",10),r._uU(16),r.qZA(),r.YNc(17,g,2,0,"button",11),r.TgZ(18,"button",12),r.NdJ("click",function(){return e.onClear()}),r._uU(19,"Clear"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=r.MAs(3);r.xp6(15),r.Q6J("disabled",t.invalid),r.xp6(1),r.Oqu(e.editMode?"Update":"Add"),r.xp6(1),r.Q6J("ngIf",e.editMode)}},directives:[s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,s.Q7,s.wV,s.c5,p.O5],styles:[""]}),t})();function a(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"ul",3),r.TgZ(1,"a",4),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw().onEditItem(e)}),r._uU(2),r.ALo(3,"titlecase"),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(2),r.AsE("",r.lcZ(3,2,t.name)," (",t.amount,")")}}let m=(()=>{class t{constructor(t){this._shoppingListService=t}ngOnInit(){this.ingredients=this._shoppingListService.getIngredients(),this.igChangeSub=this._shoppingListService.ingredientsChanged.subscribe(t=>{this.ingredients=t})}ngOnDestroy(){this.igChangeSub.unsubscribe()}onEditItem(t){this._shoppingListService.startedEditing.next(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c._))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-shopping-list"]],decls:5,vars:1,consts:[[1,"row"],[1,"col-10"],["class","list-group",4,"ngFor","ngForOf"],[1,"list-group"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r._UZ(2,"app-shopping-edit"),r._UZ(3,"hr"),r.YNc(4,a,4,4,"ul",2),r.qZA(),r.qZA()),2&t&&(r.xp6(4),r.Q6J("ngForOf",e.ingredients))},directives:[l,p.sg],pipes:[p.rS],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild([{path:"",component:m}]),n.m,s.u5]]}),t})()}}]);