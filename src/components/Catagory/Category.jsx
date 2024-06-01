import React from "react";
import { categoryInfos } from "./catagoryFullInfo.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.catagory_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
