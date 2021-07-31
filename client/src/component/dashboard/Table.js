import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import Product from './Product';


const Table = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    const sortBy = (e) => {
      products.sort(Product.qty)
    }

    useEffect(() => {
        dispatch(getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>

            <button className="btn btn-primary" value="sort stock" onClick={e => sortBy(e)}>Sort by low stock</button>
            <br/><br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">UM</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Operations</th>
                        <th scope="col">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (products.map((product, index) => {
                        return <Product key={product._id} product={product} index={index} />
                    })) : (<tr><th className="table-active">No Products</th></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table