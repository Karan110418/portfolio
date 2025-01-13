import React,{useContext} from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Items/Item'

export const ShopCategory = (props) => {

const {all_product}=useContext(ShopContext)

  return (
    <div className='shop-category'>
        <img src={props.banner} className='shopcategory-banner' />

        <div className='shopcategory-indexsort'>
          <p>
            <span>Showing 1-12</span>Out of 36 Products
          </p>

          <div className='shopcategory-sort'>
            sort By <img src={dropdown} alt='' />
          </div>
        </div>

        <div className='shopcategory-products'>
          {all_product.map((item,i)=>
          {
            if(props.category===item.category)
            {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else
            {return null;}
          })}
        </div>
    </div>
  )
}
