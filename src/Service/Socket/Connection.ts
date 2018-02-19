import { Injectable } from "@angular/core";

import * as si from "socket.io-client";
import { Listener } from "Service/Socket/Scenario";

@Injectable()
export class ConnectionService {
  static url = "http://localhost:3003";
  connection: SocketIOClient.Socket;

  /*
    TODO: OFFICE CREDENTIALS
  */
  static userId = "studentA@gmail.com";

  constructor() {
    this.connection = si.connect(
      ConnectionService.url + "?userId=" + ConnectionService.userId,
      {
        upgrade: false,
        transports: ["polling"],
      }
    );
    this.connection.on("connection", () => {
      console.log("connected");
      console.log(this.connection);
    });
    this.connection.on("error", m => console.log(m));
  }

  AddListener(event: string, callback: Listener): void {
    this.connection.addEventListener(event, callback);
  }

  RemoveListener(event: string, callback: Listener): void {
    this.connection.removeEventListener(event, callback);
  }

  Send(event: string, data: any): void {
    console.log("Send " + event + ". " + data);
    this.connection.emit(event, data);
  }
}
