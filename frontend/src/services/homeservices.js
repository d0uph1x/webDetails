import axios from 'axios';

export { getContactDetails, saveWebdetails }

const getContactDetails = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/webdetails`, {});
        return data;
    }
    catch (error) {
        console.log(error)
    }
}


const saveWebdetails = async (body) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/api/webdetails`, body);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}