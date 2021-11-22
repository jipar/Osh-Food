import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { API_SEARCH } from '../../config'
import Item from '../Item'

const Search = () => {

    const [data, setData] = useState([])
    const{text} = useParams()

    useEffect(() => {
        axios.get(API_SEARCH + text)
        .then((res) => {
            setData(res.data.meals)
            console.log(res.data.meals)
        })
    }, [text])

    return (
        <div className={'row'}>
            {
                data === null ?
                <h1 style={{textAlign: 'center'}}> Sorry! <br/> We don't have such kind of meal!</h1> 
                :
                <>
                {data.map((v) => {
                return(
                    <Item v={ v } />
                )
                })}
                </>
                
            }
        </div>
    )
}

export default Search
