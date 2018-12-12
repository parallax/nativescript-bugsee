import { Observable } from 'tns-core-modules/data/observable';
import { Bugsee } from 'nativescript-bugsee';

export class HelloWorldModel extends Observable {
  public message: string;
  private bugsee: Bugsee;

  constructor() {
    super();

    this.bugsee = new Bugsee();
    this.message = this.bugsee.message;
  }
}
