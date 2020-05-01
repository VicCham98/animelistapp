import {useState, useEffect, useContext} from 'react';
import Axios from "axios";
import URL from "../config";
import { SearchContext } from '../contexts/SearchContext';

const GetAnime = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { state } = useContext(SearchContext)

    useEffect(() => {
        const getRecentlyAnimes = async () => {
            try {
                let res = await Axios.get(URL+url);
                let response = await res.data;
                state.status ? setData(response.data) : setData(data.concat(response.data))
                setLoading(false);
            } catch (e) {
                console.log(e)
            }
        };
        getRecentlyAnimes();
    }, [url]);

    return{ data, loading }
};

export default GetAnime;