import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gift App</h1>

      <AddCategory onNewCategory={(value) => addCategory(value)}/>

      {categories.map(category => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}

    </>
  )
}
