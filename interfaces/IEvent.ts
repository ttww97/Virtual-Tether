export interface IEvent {
    type: string;
    // Stand for the type
    constantValue?: number;

    action: any;

    generateJson();
}