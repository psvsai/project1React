import Ecommerce from './Ecommerce.jsx'
import './Ecom.css';
import FullSleev from '../assets/images/FullSleev.jpg'
import Polos from '../assets/images/Polo2.jpg'
import Hoodies from '../assets/images/Hoodies.jpg'
import Sweatshirt from '../assets/images/Sweatshirt2.jpg'
import Tshirt from '../assets/images/Tshirt.jpg'




const EcomList = () => {

    const Products = [{id:1 , TopWear : "Full - Sleev" , StartingPrice : 1599  , image : FullSleev},
        {id:2 , TopWear : "Polos" , StartingPrice : 1099 , image : Polos},
        {id:3 , TopWear : "Hoodies" , StartingPrice : 1599 , image : Hoodies},
        {id:4 , TopWear : "SweatShirts" , StartingPrice : 999 , image : Sweatshirt},
        {id:5 , TopWear : "T-Shirts" , StartingPrice : 699, image : Tshirt},
    ]

    return(
        <>
        <div className="ecomList">
        <h2>E-Commerce.com</h2>
        <h3>Top Wear</h3>
        {Products.length>0 && <Ecommerce Lists = {Products} Category = "Mens Wear"/>}
        </div>
        </>
    )
}

export default EcomList