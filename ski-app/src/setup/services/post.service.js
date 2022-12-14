import instance from './api.service';

const END_POINT = '/posts';

const getAllPosts = async () => {
    const response = await instance.get(END_POINT);
    return response.data
}

const postsService = {
    getAllPosts
}

export default postsService;