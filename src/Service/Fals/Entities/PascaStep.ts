/* Auto-generated file */

import { Period, Type } from "Service/Fals/TypeMap";
// var dictProto: any = <any>{};
// dictProto.__proto__.putIfAbsent = function(child, node) {
//   this[child] = this[child] || node;
// };
import { Serialize } from "../Serialization/Serialize";
import { PascaStepResult } from "../Pasca/PascaStepResult";
import { PascaSessionSettings } from "../Pasca/PascaSessionSettings";
import { PascaOnenoteSettings } from "../Pasca/PascaOnenoteSettings";
import { Step } from "./Step";
import { PascaFalsSettings } from "./PascaFalsSettings";
export class PascaStep extends Step {
  static __static_initialized: boolean = false;
  static __static_initialize() {
    if (!PascaStep.__static_initialized) {
      PascaStep.__static_initialized = true;
      PascaStep.__static_initializer_0();
    }
  }

  public pascaFalsSettings: PascaFalsSettings;

  public pascaSessionSettings: PascaSessionSettings;

  public pascaOnenoteSettings: PascaOnenoteSettings;

  static __static_initializer_0() {
    Serialize.declare(
      /* getName */ (c => (c["__class"] ? c["__class"] : c["name"]))(PascaStep),
      PascaStep
    );
  }

  public constructor() {
    super();
    this.pascaFalsSettings = null;
    this.pascaSessionSettings = null;
    this.pascaOnenoteSettings = null;
    this.resultType = PascaStepResult.toString();
  }
}
PascaStep["__class"] = "Entities.PascaStep";

PascaStep.__static_initialize();
