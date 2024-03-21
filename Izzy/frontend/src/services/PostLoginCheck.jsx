import api from "../api";
import { debounce } from "lodash";

export const PostLoginCheck = debounce(async (navigate) => {
    try{
        const token = localStorage.getItem('token');
        if(token && token.length > 0){
            const response = await api.get('/profile/'+token);
            if(response.status === 200){
                navigate('/activities-alan-creative-2024/')
            }else if(response.data === 0 || response.data === 401 || response.status === 401 
                || response.data === 403 || response.status === 403 || response.status === 404
                || response.data === 404 || response.data === 500 || response.status === 500){

            }else{

            }
        }else{

        }
    }catch(e){
        console.log(e)
    }
}, 200);