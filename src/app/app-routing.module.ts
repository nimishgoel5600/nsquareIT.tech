import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JobSupportComponent } from "./job-support/job-support.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jobSupports", component: JobSupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
