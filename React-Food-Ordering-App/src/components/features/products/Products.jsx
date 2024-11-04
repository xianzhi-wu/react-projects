import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const productsList = [
  //   {
  //     "id": 1,
  //     "name": "Beef Tacos",
  //     "price": 8.99,
  //     "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
  //     "image": "images/beef-tacos.jpg",
  //     "spacy": 2
  //   },
  //   {
  //     "id": 2,
  //     "name": "Beef Tacos",
  //     "price": 8.99,
  //     "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
  //     "image": "images/beef-tacos.jpg",
  //     "spacy": 2
  //   }
  // ]
  // setProducts(productsList) ?? Can't use it like this. Why?
  useEffect(() => {
    const productsList = [
      {
        "id": 1,
        "name": "Beef Tacos I",
        "price": 18.99,
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/beef-tacos.jpg",
        "spacy": 2
      },
      {
        "id": 2,
        "name": "Beef Tacos II",
        "price": 8.99,
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/beef-tacos.jpg",
        "spacy": 2
      },
      {
        "id": 3,
        "name": "Beef Tacos III",
        "price": 6.99,
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/beef-tacos.jpg",
        "spacy": 2
      },
      {
        "id": 4,
        "name": "Beef Tacos IIII",
        "price": 8.90,
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/beef-tacos.jpg",
        "spacy": 2
      }
    ]

    setProducts(productsList);
  }, []);

  return (
    <>
      { 
        products.length > 0 &&
        <div className={styles.products}>
          <ul>
            {
              products.map(product => (
                <ProductItem key={product.id} styles={styles} product={product} />
              ))
            }
          </ul>
        </div>
      }
    </>
  );
}