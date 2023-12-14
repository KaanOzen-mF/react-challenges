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

        <div className="menu-container">
          <div className="menu-wrapper">
            <img src="images/pizza.png" alt="" />
            <p>Classic Margherita Pizza</p>
            <p>
              <i>
                Fresh tomato sauce, mozzarella cheese, basil leaves, olive oil,
                salt.
              </i>
            </p>
            <p>Price: $12.00</p>
          </div>
          <div className="menu-wrapper">
            <img src="images/salad.png" alt="" />
            <p>Caesar Salad</p>
            <p>
              <i>
                Romaine lettuce, Caesar dressing, croutons, parmesan cheese,
                lemon wedge.
              </i>
            </p>
            <p>Price: $8.50</p>
          </div>
          <div className="menu-wrapper">
            <img src="images/carbonara.png" alt="" />
            <p>Spaghetti Carbonara</p>
            <p>
              <i>
                Spaghetti, pancetta, eggs, parmesan cheese, black pepper,
                garlic.
              </i>
            </p>
            <p>Price: $14.00</p>
          </div>
          <div className="menu-wrapper">
            <img src="images/chickenSandwich.png" alt="" />
            <p>Grilled Chicken Sandwich</p>
            <p>
              <i>
                Grilled chicken breast, lettuce, tomato, mayonnaise, whole grain
                bun.
              </i>
            </p>
            <p>Price: $10.00</p>
          </div>
          <div className="menu-wrapper">
            <img src="images/burger.png" alt="" />
            <p>Beef Burger</p>
            <p>
              <i>
                Ground beef patty, cheddar cheese, lettuce, tomato, onion,
                pickles, ketchup, mustard, sesame bun.
              </i>
            </p>
            <p>Price: $11.00</p>
          </div>
        </div>
      </main>
    </>
  );
}
