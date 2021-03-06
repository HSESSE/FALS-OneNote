import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

import { MainComponent } from "View/Main/Component";
import { RoutingModule } from "View/RoutingModule";
import { OfficeModule } from "Service/Office/Module";
import { SocketModule } from "View/Socket/Module";
import { CourseListModule } from "View/CourseList/Module";
import { HttpClientModule } from "@angular/common/http";
import { CourseDashboardModule } from "View/CourseDashboard/Module";
import { ConnectionService } from "Service/Socket/Connection";
import { CourseService } from "Service/CourseLogic/CourseService";
import { StepModule } from "View/Step/Module";
import { CommandBarComponent } from "View/Main/CommandBarComponent";
import { WelcomeComponent } from "View/Main/WelcomeComponent";
import { GotoModuleInteractionComponent } from "View/Interaction/GotoModuleInteractionComponent";
import { GotoStepInteractionComponent } from "View/Interaction/GotoStepInteractionComponent";
import { InteractionModule } from "View/Interaction/Module";
import { MatDialogModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material";
import { OneNoteAuth } from "Service/Office/Auth/OneNoteAuth";

@NgModule({
  imports: [
    // Framework
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ClarityModule,

    // View modules
    InteractionModule,
    SocketModule,
    CourseListModule,
    CourseDashboardModule,
    StepModule,
  ],
  exports: [],
  entryComponents: [
    GotoModuleInteractionComponent,
    GotoStepInteractionComponent,
  ],
  declarations: [MainComponent, CommandBarComponent, WelcomeComponent],
  bootstrap: [MainComponent],
  providers: [
    // all container controlled services to be registered here

    ConnectionService,
    CourseService,
    OneNoteAuth,
  ],
})
export class MainModule {}
