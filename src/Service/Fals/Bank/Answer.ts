/* Auto-generated file */

import { Period, Type } from "Service/Fals/TypeMap";
// var dictProto: any = <any>{};
// dictProto.__proto__.putIfAbsent = function(child, node) {
//   this[child] = this[child] || node;
// };
import { Serialize } from "../Serialization/Serialize";
import { Entity } from "./Entity";
export class Answer extends Entity {
  static __static_initialized: boolean = false;
  static __static_initialize() {
    if (!Answer.__static_initialized) {
      Answer.__static_initialized = true;
      Answer.__static_initializer_0();
    }
  }

  public value: string;

  static __static_initializer_0() {
    Serialize.declare(
      /* getName */ (c => (c["__class"] ? c["__class"] : c["name"]))(Answer),
      Answer
    );
  }

  public constructor() {
    super();
    this.value = null;
  }
}
Answer["__class"] = "Bank.Answer";

Answer.__static_initialize();
