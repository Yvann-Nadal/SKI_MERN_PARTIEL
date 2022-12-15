import instance from './api.service';

const END_POINT = '/shops';

const getAllShops = async () => {
    const response = await instance.get(END_POINT);
    return response.data
}

const shopsService = {
    getAllShops
}

export default shopsService;