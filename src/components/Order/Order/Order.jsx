import { Button } from '../../importComponents';
import classes from './Order.module.css'

const Order = (props) => {
    const cleanedPrice = props.price.replace(/[^\d.-]/g, '');
    const parsedPrice = parseFloat(cleanedPrice).toFixed(2);
    // console.log('Parsed price after cleaning:', parsedPrice);
    // console.log('type of', typeof(parsedPrice));        
    const ingredients = []
    for (const ingredientName in props.ingredients) {
        // show the name 
        // console.log(ingredientName) 
        // show the quantity
        // console.log(props.ingredients[ingredientName]) 
        // add each ingredient to an array
        ingredients.push({
            name : ingredientName ,
            amount : props.ingredients[ingredientName] ,
        })
        }
        // console.log(ingredients)
        ingredients.map((ingredient) => {
            (<p className={classes.Ingredient}>{ingredient.name} : {ingredient.amount}</p>)
        })
    return (
    <div className={classes.Order}>
        {
        ingredients.map((ingredient) => 
        <p className={classes.Ingredient}>{ingredient.name} : {ingredient.amount}</p>)
        }
      <p>price : <strong>USD {(parsedPrice)}</strong></p>
      <Button btnType="Danger" clicked={(key) => props.delete(key)}>Delete</Button>
    </div>
  )
}

export default Order
