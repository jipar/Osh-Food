import React, {useState, useEffect} from 'react'
import Item from '../Item'
import { API_CATEGORIES } from '../../config'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Category() {

    const[data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(API_CATEGORIES + id)
        .then((res) => {
            setData(res.data.meals)
        })
    }, [])

    return (
        <div className={'row'}>
                { data.map((v) => {
                    return <Item v={ v } />
                })}
        </div>
    )
}
