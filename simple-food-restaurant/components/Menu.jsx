import React from "react";

export default function Menu() {
  return (
    <>
      <main>
        <h1 className="logo-container">Our Menu</h1>
        <p className="info-container">
          "The Classic Diner" - Perfect for a menu that offers timeless and
          traditional dishes. "Gourmet Bites" - Ideal for a menu with a focus on
          quality and culinary craftsmanship. "Flavor Junction" - A great choice
          for a menu that promises a journey through different tastes and
          cuisines. "Savor the Simplicity" - A title that highlights the beauty
          of simple, well-made food. "Home Kitchen Favorites" - Suggests a menu
          full of comforting and familiar dishes.
        </p>

        <div className="image-container">
          <div className="image-wrapper">
            <img src="images/pizza.png" alt="" />
            <p>Dish: Classic Margherita Pizza</p>
            <p>
              Ingredients: Fresh tomato sauce, mozzarella cheese, basil leaves,
              olive oil, salt.
            </p>
            <p>Price: $12.00</p>
          </div>
          <div className="image-wrapper">
            <img src="images/salad.png" alt="" />
            <p>Dish: Caesar Salad</p>
            <p>
              Ingredients: Romaine lettuce, Caesar dressing, croutons, parmesan
              cheese, lemon wedge.
            </p>
            <p>Price: $8.50</p>
          </div>
          <div className="image-wrapper">
            <img src="images/carbonara.png" alt="" />
            <p>Dish: Spaghetti Carbonara</p>
            <p>
              Ingredients: Spaghetti, pancetta, eggs, parmesan cheese, black
              pepper, garlic.
            </p>
            <p>Price: $14.00</p>
          </div>
          <div className="image-wrapper">
            <img src="images/chickenSandwich.png" alt="" />
            <p>Dish: Grilled Chicken Sandwich</p>
            <p>
              Ingredients: Grilled chicken breast, lettuce, tomato, mayonnaise,
              whole grain bun.
            </p>
            <p>Price: $10.00</p>
          </div>
          <div className="image-wrapper">
            <img src="images/burger.png" alt="" />
            <p>Dish: Beef Burger</p>
            <p>
              Ingredients: Ground beef patty, cheddar cheese, lettuce, tomato,
              onion, pickles, ketchup, mustard, sesame bun.
            </p>
            <p>Price: $11.00</p>
          </div>
        </div>
      </main>
    </>
  );
}
