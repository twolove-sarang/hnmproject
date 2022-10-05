import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <img width="200px" src={item?.img}/>
      <div>{item?.choice==true?"concious choise":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item.new==true?"new":""}</div>
    </div>
  )
}

export default ProductCard