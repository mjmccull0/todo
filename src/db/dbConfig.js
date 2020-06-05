export const dbConfig = {
  name: 'ToDo',
  version: 1,
  objectStoresMeta: [
    {
      store: 'lists',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'complete', keypath: 'complete', options: { unique: false } }
      ]
    },
    {
      store: 'items',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'notes', keypath: 'notes', options: { unique: false } },
        { name: 'dueDate', keypath: 'dueDate', options: { unique: false } },
        { name: 'priority', keypath: 'priority', options: { unique: false } },
        { name: 'complete', keypath: 'complete', options: { unique: false } },
        { name: 'position', keypath: 'position', options: { unique: false } },
        { name: 'listId', keypath: 'listId', options: { unique: false } }
      ]
    }
  ]
};
