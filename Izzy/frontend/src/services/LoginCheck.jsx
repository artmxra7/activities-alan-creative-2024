import api from "../api";
import { debounce } from "lodash";

export const LoginCheck = debounce(async (navigate) => {
        try{
            const token = localStorage.getItem('token')
            
            if(token && token.length > 0){
                const response = await api.get('/profile/'+token);
                const data = response.data;

                if(data.length > 0){

                }else if(response.data === 0 || response.data === 401 || response.status === 500){
                    navigate('/Login')
                }
            }else{
                navigate('/Login')
            }
        }catch(e){
            if (e.response.status === 401 || e.response.status === 500) {
                navigate('/Login')
            }
        }
}, 300);