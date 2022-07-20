import axios from 'axios';
import Button from "react-bootstrap/Button";
import React, { useContext, useEffect, useReducer } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { Store } from '../Store';
import { getError } from '../util';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' }
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, orders: action.payload, error: '' }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function OrderHistoryScreen() {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();
    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: false,
        error: '',
        orders: []
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get(
                    `/api/orders/mine`,

                    { headers: { Authorization: `Bearer ${userInfo.token}` } }
                );
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(error),
                });
            }
        };
        fetchData();
    }, [userInfo]);

    return (
        <div>
            <Helmet>
                <title>Order History</title>
            </Helmet>
            <h1 className='my-3'>Order History</h1>
            {
                loading ? (<div><LoadingBox></LoadingBox></div>
                ) : error ? (<div><MessageBox variant="danger">{error}</MessageBox></div>)
                    : (
                        <table className='table'>
                            <thead>
                                <th>ID</th>
                                <th>Date</th>
                                <th>total</th>
                                <th>Paid</th>
                                <th>Delivered</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>{order.totalPrice.toFixed(2)}</td>
                                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                                            <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : "No"}</td>
                                            <td>
                                                <Button
                                                    type='button'
                                                    variant='light'
                                                    onClick={() => navigate(`/order/${order._id}`)}
                                                >Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    )
            }
        </div>
    )
}
