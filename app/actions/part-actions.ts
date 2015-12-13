import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux";

export const ADD_PART:string = 'ADD_PART';

@Injectable()
export class PartActions extends Actions {
    private id:number = 3;

    addPart(name) {
        return {type: ADD_PART, id: ++this.id, name};
    }
}
