import { IPermission } from "./interface";
const TRAINEEE: string = "traineee";
const HEAD_TRAINER: string = "head-trainer";
const TRAINEE: string = "trainee";
const TRAINER: string = "trainer";
const permissions: IPermission = {
  traineee: {
    read: [TRAINEE, TRAINER, HEAD_TRAINER],
    write: [TRAINER, HEAD_TRAINER],
    delete: [HEAD_TRAINER],
    update: [TRAINER, HEAD_TRAINER]
  }
};
export { TRAINEEE, HEAD_TRAINER, TRAINEE, TRAINER, permissions };
