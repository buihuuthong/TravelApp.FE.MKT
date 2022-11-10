import AxiosClient from './AxiosClient';



const tour = {
    getTour: () => {
        return AxiosClient.get('api/tours');
    },

}

export default tour