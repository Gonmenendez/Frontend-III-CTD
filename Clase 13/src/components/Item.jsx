import React from 'react'

const Item = ({item, total, setTotal}) => {

    const buy = () => {
        if(item.stock > 0) {
            item.stock = item.stock - 1
            setTotal({
                stock: total.stock + 1,
                precio: total.precio + item.price
            })
        }
    }

  return (
    <section  className='item-card'>
        <h3>{item.item}</h3>
        <img src={item.img} alt='' className='item-img'/>
        <h3>${item.price}</h3>
        <p>En stock: {item.stock}</p> 
        <button 
            onClick={buy}
            className={item.stock > 0 ? 'item-button' : 'item-disabled'}
            disabled={item.stock > 0 && false}
        >
            {item.stock > 0  ? 'BUY' : 'SIN STOCK'}
        </button>
    </section>
  )
}

export default Item