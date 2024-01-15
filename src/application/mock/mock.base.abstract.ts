import { MockBaseProtocol } from "../../../../contract/protocol/application/mock/mock.base.protocol";
import { ObjectLiteral } from "typeorm";

export abstract class MockBaseAbstract<Entity>
  implements MockBaseProtocol<Entity>
{
  config: ObjectLiteral;
  configureEntity: Partial<Entity>;
  protected entity: Entity;
  constructor() {
    this.entity = {} as Entity;
  }

  abstract _construct(): void;

  get(): Partial<Entity> {
    this._construct();
    return Object.assign({}, this.entity, this.configureEntity);
  }
}
