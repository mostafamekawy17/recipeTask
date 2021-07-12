import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: "shopping-list", loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  // We use ** { preloadingStrategy: PreloadAllModules } ** To tell angular generally we're using lazy loading,
  // so it will not put all that code into the bundle, it will split it but it will preload the bundles as soon as possible
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
