import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageComponent } from "./page.component";

const routes = [
  {
    path: '',
    component: PageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
