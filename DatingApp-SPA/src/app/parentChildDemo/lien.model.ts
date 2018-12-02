import { CoverrageModel } from "./coverage.model";

export class LienModel {
  idDto: number = null;
  lienId: number = null;
  name: string = null;
  type: string = null;
  status: string = null;
  phone: string = null;
  policy: string = null;
  coverage: Array<CoverrageModel>  = [];

  constructor() {

  }
 }


