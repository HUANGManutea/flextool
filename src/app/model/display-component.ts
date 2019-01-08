export class DisplayComponent {
  private _name: string;
  constructor(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}