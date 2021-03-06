import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "View/Main/Component";
import { SocketComponent } from "View/Socket/Component";
import { CourseListComponent } from "View/CourseList/Component";
import { CourseDashboardComponent } from "View/CourseDashboard/Component";
import { StepComponent } from "View/Step/Component";
import { WelcomeComponent } from "View/Main/WelcomeComponent";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "index.html", component: WelcomeComponent },
  { path: "socket", component: SocketComponent },
  { path: "courseList", component: CourseListComponent },
  { path: "courseDashboard", component: CourseDashboardComponent },
  { path: "step", component: StepComponent, runGuardsAndResolvers: "always" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class RoutingModule {}
