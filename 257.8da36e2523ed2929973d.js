(self.webpackChunkrecipes_project=self.webpackChunkrecipes_project||[]).push([[257],{3257:(e,t,i)=>{"use strict";i.r(t),i.d(t,{RecipesModule:()=>k});var r=i(5425),n=i(1858),o=i(611),c=i(9996),s=i(8619),p=i(3841);let a=(()=>{class e{constructor(e,t){this._authService=e,this.router=t}canActivate(e,t){return this._authService.user.pipe((0,o.q)(1),(0,c.U)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(p.e),s.LFG(n.F0))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=i(873),u=i(1116);function l(e,t){if(1&e&&(s.TgZ(0,"li",11),s._uU(1),s.ALo(2,"titlecase"),s.qZA()),2&e){const e=t.$implicit;s.xp6(1),s.AsE("",s.lcZ(2,2,e.name)," - ",e.amount,"")}}let g=(()=>{class e{constructor(e,t,i){this._recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this._recipeService.getRecipe(this.id)})}onAddToShoppingList(){this._recipeService.addIngredientsToShoppingList(this.recipe.ingredient)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDelete(){this._recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(d.j),s.Y36(n.gz),s.Y36(n.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:4,consts:[[1,"row"],[1,"col-12"],["alt","",1,"img-fluid","w-100",2,"max-height","18rem",3,"src"],[1,"row","mb-3"],[1,"btn-group"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._UZ(2,"img",2),s.qZA(),s.qZA(),s.TgZ(3,"div",0),s.TgZ(4,"div",1),s.TgZ(5,"h1"),s._uU(6),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"div",3),s.TgZ(8,"div",1),s.TgZ(9,"div",4),s.TgZ(10,"div",5),s.TgZ(11,"button",6),s._uU(12," Manage Recipe "),s.qZA(),s.TgZ(13,"ul",7),s.TgZ(14,"li"),s.TgZ(15,"a",8),s.NdJ("click",function(){return t.onAddToShoppingList()}),s._uU(16,"To Shopping List"),s.qZA(),s.qZA(),s.TgZ(17,"li"),s.TgZ(18,"a",8),s.NdJ("click",function(){return t.onEditRecipe()}),s._uU(19,"Edit Recipe"),s.qZA(),s.qZA(),s.TgZ(20,"li"),s.TgZ(21,"a",8),s.NdJ("click",function(){return t.onDelete()}),s._uU(22,"Delete Recipe"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(23,"div",3),s.TgZ(24,"div",1),s._uU(25),s.qZA(),s.qZA(),s.TgZ(26,"div",0),s.TgZ(27,"div",1),s.TgZ(28,"ul",9),s.YNc(29,l,3,4,"li",10),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("src",t.recipe.imagePath,s.LSH),s.xp6(4),s.Oqu(t.recipe.name),s.xp6(19),s.hij(" ",t.recipe.description," "),s.xp6(4),s.Q6J("ngForOf",t.recipe.ingredient))},directives:[u.sg],pipes:[u.rS],styles:["h1[_ngcontent-%COMP%]{color:#fff;font-weight:900}"]}),e})();class Z{constructor(e,t,i,r){this.name=e,this.description=t,this.imagePath=i,this.ingredient=r}}var m=i(1462);function h(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",16),s.TgZ(1,"div",17),s._UZ(2,"input",18),s.qZA(),s.TgZ(3,"div",19),s._UZ(4,"input",20),s.qZA(),s.TgZ(5,"div",19),s.TgZ(6,"button",5),s.NdJ("click",function(){const t=s.CHM(e).index;return s.oxw().onDeleteIngredient(t)}),s._uU(7,"X"),s.qZA(),s.qZA(),s.qZA()}2&e&&s.Q6J("formGroupName",t.index)}const v=function(e){return{"is-invalid":e}};let f=(()=>{class e{constructor(e,t,i){this.route=e,this._recipeService=t,this.router=i,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}onSubmit(){const e=new Z(this.recipeForm.value.name,this.recipeForm.value.description,this.recipeForm.value.imagePath,this.recipeForm.value.ingredients);this.editMode?this._recipeService.updateRecipe(this.id,e):this._recipeService.addRecipe(e),this.onCancel()}initForm(){let e="",t="",i="",r=new m.Oe([]);if(this.editMode){const n=this._recipeService.getRecipe(this.id);if(e=n.name,t=n.imagePath,i=n.description,n.ingredient)for(let e of n.ingredient)r.push(new m.cw({name:new m.NI(e.name,m.kI.required),amount:new m.NI(e.amount,[m.kI.required,m.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new m.cw({name:new m.NI(e,m.kI.required),imagePath:new m.NI(t,m.kI.required),description:new m.NI(i,m.kI.required),ingredients:r})}getControls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new m.cw({name:new m.NI(null,m.kI.required),amount:new m.NI(null,[m.kI.required,m.kI.pattern(/^[1-9]+[0-9]*$/)])}))}forValidation(){return this.recipeForm.controls}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(n.gz),s.Y36(d.j),s.Y36(n.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipe-edit"]],decls:36,vars:13,consts:[[1,"row"],[1,"col-12"],[3,"formGroup","ngSubmit"],[1,"row","mb-3"],["type","submit",1,"btn","btn-success","me-2",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["for","name",1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["for","imagePath",1,"form-label"],["type","text","formControlName","imagePath",1,"form-control",3,"ngClass"],["imagePath",""],["alt","",1,"img-fluid",3,"src"],["type","text","rows","6","formControlName","description",1,"form-control",3,"ngClass"],["formArrayName","ingredients",1,"row"],["class","row mb-3",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row","mb-3",3,"formGroupName"],[1,"col-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"div",1),s.TgZ(5,"button",4),s._uU(6,"Save"),s.qZA(),s.TgZ(7,"button",5),s.NdJ("click",function(){return t.onCancel()}),s._uU(8,"Cancel"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"div",3),s.TgZ(10,"div",1),s.TgZ(11,"label",6),s._uU(12,"Name"),s.qZA(),s._UZ(13,"input",7),s.qZA(),s.qZA(),s.TgZ(14,"div",3),s.TgZ(15,"div",1),s.TgZ(16,"label",8),s._uU(17,"Image URL"),s.qZA(),s._UZ(18,"input",9,10),s.qZA(),s.qZA(),s.TgZ(20,"div",3),s.TgZ(21,"div",1),s._UZ(22,"img",11),s.qZA(),s.qZA(),s.TgZ(23,"div",3),s.TgZ(24,"div",1),s.TgZ(25,"label",6),s._uU(26,"Description"),s.qZA(),s._UZ(27,"textarea",12),s.qZA(),s.qZA(),s.TgZ(28,"div",13),s.TgZ(29,"div",1),s.YNc(30,h,8,1,"div",14),s._UZ(31,"hr"),s.TgZ(32,"div",0),s.TgZ(33,"div",1),s.TgZ(34,"button",15),s.NdJ("click",function(){return t.onAddIngredient()}),s._uU(35,"Add Ingredient"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.MAs(19);s.xp6(2),s.Q6J("formGroup",t.recipeForm),s.xp6(3),s.Q6J("disabled",t.recipeForm.invalid),s.xp6(8),s.Q6J("ngClass",s.VKq(7,v,t.forValidation().name.errors&&t.forValidation().name.touched)),s.xp6(5),s.Q6J("ngClass",s.VKq(9,v,t.forValidation().imagePath.errors&&t.forValidation().imagePath.touched)),s.xp6(4),s.Q6J("src",e.value,s.LSH),s.xp6(5),s.Q6J("ngClass",s.VKq(11,v,t.forValidation().description.errors&&t.forValidation().description.touched)),s.xp6(3),s.Q6J("ngForOf",t.getControls())}},directives:[m._Y,m.JL,m.sg,m.Fj,m.JJ,m.u,u.mk,m.CE,u.sg,m.x0,m.wV],styles:[""]}),e})(),q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(s.TgZ(0,"h3"),s._uU(1,"Please select a Recipe!"),s.qZA())},styles:[""]}),e})();var A=i(2255);let T=(()=>{class e{constructor(e,t){this._dataStorageService=e,this._recipeService=t}resolve(e,t){const i=this._recipeService.getRecipes();return 0===i.length?this._dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(A.Z),s.LFG(d.j))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _=function(e){return[e]};let b=(()=>{class e{constructor(e){this._recipeService=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(d.j))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:11,vars:7,consts:[["routerLinkActive","active",1,"card","float-left","mb-2","p-1"],[1,"row"],[1,"col-sm-7"],[1,"card-block"],[1,"card-title"],[1,"stretched-link",2,"cursor","pointer",3,"routerLink"],[1,"col-sm-5"],[1,"d-block","w-100","rounded-end",2,"max-height","10rem",3,"src","alt"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"h5",4),s._uU(5),s.qZA(),s.TgZ(6,"p"),s._uU(7),s.qZA(),s.qZA(),s._UZ(8,"a",5),s.qZA(),s.TgZ(9,"div",6),s._UZ(10,"img",7),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(5),s.Oqu(t.recipe.name),s.xp6(2),s.Oqu(t.recipe.description),s.xp6(1),s.Q6J("routerLink",s.VKq(5,_,t.index)),s.xp6(2),s.Q6J("src",t.recipe.imagePath,s.LSH)("alt",t.recipe.name))},directives:[n.Od,n.yS],styles:[".card.active[_ngcontent-%COMP%]{background-color:#254e58;color:#fff}p[_ngcontent-%COMP%]{font-size:small}h5[_ngcontent-%COMP%]{font-weight:900}"]}),e})();function w(e,t){if(1&e&&s._UZ(0,"app-recipe-item",4),2&e){const e=t.index;s.Q6J("recipe",t.$implicit)("index",e)}}let S=(()=>{class e{constructor(e,t,i){this._recipeService=e,this.route=t,this.router=i}ngOnInit(){this.subscription=this._recipeService.recipeChanged.subscribe(e=>{this.recipes=e}),this.recipes=this._recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(d.j),s.Y36(n.gz),s.Y36(n.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"button",2),s.NdJ("click",function(){return t.onNewRecipe()}),s._uU(3,"New Recipe"),s.qZA(),s.qZA(),s.qZA(),s._UZ(4,"hr"),s.TgZ(5,"div",0),s.TgZ(6,"div",1),s.YNc(7,w,1,2,"app-recipe-item",3),s.qZA(),s.qZA()),2&e&&(s.xp6(7),s.Q6J("ngForOf",t.recipes))},directives:[u.sg,b],styles:[""]}),e})();const U=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._UZ(2,"app-recipe-list"),s.qZA(),s.TgZ(3,"div",2),s._UZ(4,"router-outlet"),s.qZA(),s.qZA())},directives:[S,n.lC],styles:[""]}),e})(),canActivate:[a],children:[{path:"",component:q},{path:"new",component:f},{path:":id",component:g,resolve:[T]},{path:":id/edit",component:f,resolve:[T]}]}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.Bz.forChild(U)],n.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.Bz,r.m,m.UX,x]]}),e})()}}]);