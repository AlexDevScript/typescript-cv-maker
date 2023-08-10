import { NewList } from "../types";

export default function createNewList(input: string): NewList {
  const ID = crypto.randomUUID();

  const newItem = {
    id: ID,
    date: input,
  };
  return newItem;
}
