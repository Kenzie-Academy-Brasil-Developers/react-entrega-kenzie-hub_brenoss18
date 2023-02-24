import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContexts/userContexts";

function ProtectedRoutes (){

    const {user} = useContext(userContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!user){
            navigate('/')
        }
    },[])

    return (
        <>
            {user ?<Outlet/>:null}
        </>
    )
}
export default ProtectedRoutes