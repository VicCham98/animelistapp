import {useState, useEffect} from 'react';
import Axios from "axios";
import URL from "../config";

const GetAnime = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRecentlyAnimes = async () => {
            try {
                let res = await Axios.get(URL+url);
                let response = await res.data;
                setData(response.data);
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