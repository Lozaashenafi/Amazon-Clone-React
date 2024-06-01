import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";
const CategoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.catagoryName}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
