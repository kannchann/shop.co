import { useNavigate } from 'react-router-dom';


const useGoBack = () => {
    const navigate = useNavigate();
    const goBack = () => {
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate("/"); 
      }
    };
    return goBack;
}


export default useGoBack