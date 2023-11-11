import {Condition} from "./Condition";

export interface Weather {
    time: string,
    temperature: number;
    condition: Condition;
    rain_chance: number;
}
