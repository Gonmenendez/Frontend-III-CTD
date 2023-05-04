import Item from './Item.jsx'
import myPoke from './myPoke.json'
import '../styles/Shop.css'

const Shop = ({total, setTotal}) => {

    return (
        <div className='shop'>
            {myPoke.map(item => 
                <Item total={total} setTotal={setTotal} item={item}/>
            )}
        </div>
    )
}

export default Shop