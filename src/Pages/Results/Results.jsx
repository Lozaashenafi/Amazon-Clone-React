import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "./Results.module.css";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";
function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${catagoryName}`) // Fix the concatenation issue here
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{catagoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
