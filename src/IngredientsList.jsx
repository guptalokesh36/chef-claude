import PropTypes from "prop-types";
export default function IngredientsList(props) {
  const ingredientsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      {props.ingredients.length >= 4 && (
        <div ref={props.ref} className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.generateRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
IngredientsList.propTypes = {
  ref:PropTypes.object,
  ingredients: PropTypes.array,
  generateRecipe: PropTypes.func,
};
