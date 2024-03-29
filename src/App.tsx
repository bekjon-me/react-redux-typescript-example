import React, { useEffect } from "react";
import { Cat } from "./app/@types.cats";
import { addCat, minusOne, selectCats } from "./app/CatsSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { AppDispatch } from "./app/store";

export default function App() {
  const store = useAppSelector(selectCats);
  const dispatch = useAppDispatch();

  return <div>Hi there!</div>;
}
