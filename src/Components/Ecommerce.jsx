
import PropTypes from 'prop-types'
import  './Style.css';


const Ecommerce = (props) =>{
    const category = props.category;
    const productList = props.Lists;

    const listItem = productList.map(list => <li keys = {list.id}>
                                                        <img src={list.image} alt ={list.topwear} classname ="product-image"/>
                                                       {list.TopWear}: &nbsp;
                                                       {list.StartingPrice}: &nbsp;
                                                       </li>)
    
    return (
        <>
        <div className="ecommerce">
            <h2>{category}</h2>
             <ol> {listItem }</ol>
        </div>
        </>
    )
}

Ecommerce.PropTypes = {
    category : PropTypes.string,
    listItem : PropTypes.string,
}
export default Ecommerce