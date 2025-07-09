import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/BreadCrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

export default function Product() {
  const {all_product} =useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='py-8'>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProduct/>

    </div>
  )
}
