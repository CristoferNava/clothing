import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categoriesKeys = Object.keys(categoriesMap);

  return (
    <>
      {categoriesKeys.map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
