import { MockBaseProtocol } from "../../../../contract/protocol/application/mock/mock.base.protocol";

export abstract class MockBaseAbstract<Entity>
  implements MockBaseProtocol<Entity>
{
  configureEntity: Partial<Entity>;
  protected entity: Entity;

  abstract _construct(): void;

  get(): Partial<Entity> {
    this._construct();
    return Object.assign({}, this.entity, this.configureEntity);
  }
}
