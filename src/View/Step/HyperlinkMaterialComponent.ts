import { Component, OnInit, Input } from "@angular/core";
import { Step } from "Service/Fals/Entities/Step";
import { StepStatistics } from "Service/Fals/Statistics/StepStatistics";
import { CourseService } from "Service/CourseLogic/CourseService";
import { Course } from "Service/Fals/Entities/Course";
import { StepAnswer } from "Service/Fals/Statistics/StepAnswer";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { StudyStep } from "Service/Fals/index";
import { SectionStructure } from "Service/Office/SectionStructure";
import { HyperlinkMaterial } from "Service/Fals/Bank/HyperlinkMaterial";

@Component({
  selector: "HyperlinkMaterial",
  templateUrl: "View/Step/HyperlinkMaterial.html",
  providers: [SectionStructure],
})
export class HyperlinkMaterialComponent implements OnInit {
  @Input("Material")
  set setMaterial(material: HyperlinkMaterial) {
    this.Material.next(material);
    this.IsLoading.next(false);
  }

  gotoMaterials() {
    window.open(this.Material.getValue().link);
  }

  public Material: BehaviorSubject<HyperlinkMaterial> = new BehaviorSubject<
    HyperlinkMaterial
  >(null);

  public IsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor(
    private CourseService: CourseService,
    private SectionStructure: SectionStructure
  ) {}

  ngOnInit() {}
}