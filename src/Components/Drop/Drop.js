import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {API_DROPDOWN } from '../../config'
import Item from '../Item'

const Drop = () => {

    const[data, setData] = useState([])
    const{town} = useParams()

    useEffect(() => {
        axios.get(API_DROPDOWN + town)
        .then((res) => {
            setData(res.data.meals)
            console.log(res)
           
        })
    }, [])
    
    return (
        <div className={'row'}>
            {data.map((v) => {
                return(
                    <Item v={ v } />
                )
            })}
        </div>
    )
}

export default Drop
