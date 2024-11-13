import MealItem from "./MealItem";
import styles from "./Meals.module.css";

export default function Meals() {
  const meals = [
    {
      "id": 1,
      "name": "Beef Tacos",
      "price": 8.99,
      "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      "image": "images/beef-tacos.jpg",
      "spacy": 2
    },
    {
      "id": 2,
      "name": "Beef Tacos",
      "price": 8.99,
      "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      "image": "images/beef-tacos.jpg",
      "spacy": 2
    },
    {
      "id": 3,
      "name": "Beef Tacos x",
      "price": 8.99,
      "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      "image": "images/beef-tacos.jpg",
      "spacy": 2
    },
    {
      "id": 4,
      "name": "Beef Tacos xx",
      "price": 4.99,
      "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      "image": "images/beef-tacos.jpg",
      "spacy": 2
    },
    {
      "id": 5,
      "name": "Beef Tacos xxxx",
      "price": 3.99,
      "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      "image": "images/beef-tacos.jpg",
      "spacy": 2
    }
  ]

  return (
    <>
      { 
        meals.length > 0 ? (
          <div className={styles.meals}>
            <ul>
              {
                meals.map(item => (
                  <MealItem key={item.id} item={item} />
                ))
              }
            </ul>
          </div>
        ) : (
          <div>No meals</div>
        )
      }
    </>
  );
}