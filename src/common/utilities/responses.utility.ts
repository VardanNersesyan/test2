export class ItemsListResponseUtility<T> {
  success: boolean;
  items: T[];

  constructor(partial: Partial<ItemsListResponseUtility<T>>) {
    this.success = partial.success;
    this.items = partial.items;
  }
}

export class DefaultResponseUtility {
  success: boolean;

  constructor(partial: Partial<DefaultResponseUtility>) {
    this.success = partial.success;
  }
}
