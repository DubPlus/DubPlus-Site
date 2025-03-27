import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { DownloadService } from "../download/download.service";
const duration = 350;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("collapse", [
      state(
        "collapsed, true, void",
        style({
          height: "0",
          opacity: "0",
          overflow: "hidden",
        })
      ),
      state(
        "expanded, false",
        style({
          height: "*",
          opacity: "1",
          overflow: "hidden",
        })
      ),
      transition("true => false, collapsed => expanded", [
        animate(
          duration + "ms ease",
          keyframes([style({ opacity: "1" }), style({ height: "*" })])
        ),
      ]),
      transition("false => true, expanded => collapsed", [
        animate(duration + "ms ease", style({ height: "0" })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean = false;

  constructor(public downloadService: DownloadService) {}

  ngOnInit() {}
}
