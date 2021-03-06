import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
} from "@angular/core";
import { OneNoteAuth } from "Service/Office/Auth/OneNoteAuth";
import { Router } from "@angular/router";
import { InitializationPublisher } from "Service/Office/InitializationPublisher";
import { BehaviorSubject } from "rxjs";
import { Cast } from "Service/Common/Cast";
import { ServerProvider } from "Service/Providers/ServerProvider";

declare var fabric: any;

@Component({
  selector: "command-bar",
  templateUrl: "View/Main/CommandBar.html",
})
export class CommandBarComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.initFabric();
  }

  constructor(
    private onenote: OneNoteAuth,
    private serverProvider: ServerProvider,
    private initializationPublisher: InitializationPublisher,
    private router: Router
  ) {
    this.enabled.subscribe(en => {
      const dict = {};
      if (!en) {
        dict["display"] = "none";
      }
      this.commandBarStyle.next(dict);
    });
  }

  dropdownClass: BehaviorSubject<any> = new BehaviorSubject({
    ".is-open": true,
  });
  commandBarStyle: BehaviorSubject<any> = new BehaviorSubject({});

  logout() {
    this.dropdownClick();

    this.onenote.logout().subscribe(() => {
      this.onenote.tryLogin();
    });
  }

  openCourseList() {
    this.dropdownClick();

    this.router.navigateByUrl("/courseList");
  }

  resetCourses() {
    this.serverProvider
      .post("/resetProgress", { userId: this.onenote.email.getValue() })
      .subscribe(q => this.dropdownClick());
  }

  dropdownClick() {
    //this.toggleMenu = !this.toggleMenu;
    var hosts = document.querySelectorAll(".ms-ContextualHost");
    for (var i = 0; i < 1 /* hosts.length*/; i++) {
      Cast<any>(hosts[i]).style.display = "none";
    }
  }

  public enabled = this.onenote.isAuth;
  toggleMenu: boolean;

  ngOnInit(): void {}

  initFabric() {
    var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
    for (var i = 0; i < CommandBarElements.length; i++) {
      new fabric["CommandBar"](CommandBarElements[i]);
    }
    var CommandButtonElements = document.querySelectorAll(".ms-CommandButton");
    for (var i = 0; i < CommandButtonElements.length; i++) {
      new fabric["CommandButton"](CommandButtonElements[i]);
    }
  }
}
