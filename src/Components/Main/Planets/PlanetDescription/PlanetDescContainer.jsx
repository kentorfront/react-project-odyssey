import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetDescription from "./PlanetDescription";
import { useParams } from "react-router-dom";
import Preloader from "../../../Preloader/Preloder"; 

export default function PlanetDescContainer() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true); 
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const url = `https://66e9934387e41760944a031e.mockapi.io/planet/planets/${id}`;
                const response = await axios.get(url);
                setPlanets(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, [id]); 

    return (
        <div>
            {loading ? <Preloader /> : <PlanetDescription data={planets} />}
        </div>
    );
}
