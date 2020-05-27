import React, { useState } from 'react';

const initialLists = [
  {
    id: 0,
    name: "Personal",
    complete: false,
    items: [
      {
        id: 0,
        name: "ABC",
        notes: "About ABC",
        dueDate: new Date(),
        priority: "None",
        complete: true,
        listId: 0
      },
      {
        id: 1,
        name: "DEF",
        notes: "",
        dueDate: new Date(),
        priority: "",
        complete: false,
        listId: 0
      },
    ]
  },
  {
    id: 1,
    name: "Honey Do",
    complete: false,
    items: [
      {
        id: 2,
        name: "XYZ",
        notes: "About XYZ",
        dueDate: "",
        priority: "",
        complete: false,
        listId: 1
      }
    ]
  },
]

const list_map = new Map();
for (let list of initialLists) {
  list_map.set(list.id, list);
}

export const useLists = () => {
  const [lists, setLists] = useState(list_map);

  const getLists = () => {
    return [...lists.values()]
  }

  const getList = (listId) => {
    return lists.get(listId);
  }

  const getItems = (listId) => {
    return lists.get(listId).items;
  }

  return [getLists(), getItems, getList];
}
