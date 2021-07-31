import React from 'react';
import { useDispatch } from 'react-redux'
import { editProduct, deleteProduct } from '../../actions/productActions'


const Product = ({ product, index }) => {
    const dispatch = useDispatch()
    const priceSum = product.qty * product.price
    const stock = 'stock is low'

    return (

        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.qty}</td>
            <td>{product.um}</td>
            <td>{'₹'}{product.price}</td>
            <td>{'₹'}{priceSum.toFixed(2)}</td>
            <td>{product.description}</td>
            <td>
                <button type='button' className='btn btn-outline-primary btn-sm mr-2' onClick={() => dispatch(editProduct(product))}>Edit</button>
                <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => dispatch(deleteProduct(product._id))}>Delete</button>
            </td>
            <td>{product.qty <= 40 && stock}</td>
        </tr>
    )
}

export default Product;