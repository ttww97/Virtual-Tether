import {IEvent} from "../interfaces/IEvent"

export class EmergencyEvent implements IEvent {
    constructor() {
        this.type = "";
        this.constantValue = 0;
        this.action = "";
    }

    type: string = "EmergencyEvent";
    constantValue: number = 1;

    action: string = "Emergency";
}