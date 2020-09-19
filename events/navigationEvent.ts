import {IEvent} from "../interfaces/IEvent"

export class NavigationEvent implements IEvent {
    constructor() {
        this.type = "";
        this.constantValue = 0;
        this.action = "";
    }

    type: string = "NavigationEvent";
    constantValue: number = 0;

    action: string = "Navigation";

    generateJson() {
        return JSON.parse('{"type": ' + this.type + ', "constantValue": ' + this.constantValue + '}')
    }
}