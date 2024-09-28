import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth(){
    let navigate = useNavigate()
    let authUser = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        if (!authUser){
            alert('Вы должны быть зареганы для того что бы просмотреть эту страницу')
            navigate('/login')
        }
    }, [])
}