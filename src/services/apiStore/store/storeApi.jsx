// import axios from "axios";
import { httpStore } from "../../../util/config";

export class StoreApi {
    // lấy toàn bộ store
    async getAll() {
        const res = await httpStore.get('/api/Store/getAll');
        // console.log(res.data.content)
        return res.data.content;
    };
    // lấy theo id
    async getById(id) {
        const res = await httpStore.get(`/api/Store/getbyid?id=${id}`);
        return res.data.content;
    };
    // Thêm
    async addStore(storeRegisterForm) {
        const res = await httpStore.post('/api/Store', storeRegisterForm);
        return res.data.content;
    };
    // Sửa 
    async updateStore(storeUpdateForm) {
        const res = await httpStore.put(`/api/Store?id=${storeUpdateForm.id}`, storeUpdateForm);
        return res.data.content;
    };
    // Xóa
    async deleteStore(id) {
        const res = await httpStore.delete('/api/Store', id);
        return res.data.content;
    }


    // {
    //     "id": 1,
    //     "name": "Khải Sneaker",
    //     "alias": "khai-sneaker",
    //     "latitude": "10.771663",
    //     "longtitude": "106.669631",
    //     "description": "379 sư vạn hạnh quận 10",
    //     "image": "https://apistore.cybersoft.edu.vn/images/https://localhost:44366/images/store1.jpg",
    //     "deleted": false
    //   },
    
    // async addUser(newUser) {
    //     const res = await httpStore.post('/api/users/signup', newUser);
    //     return res.data.content;

    // }

    // async getAllPaging(params) {

    //     let [queryKey,pageIndex] = params.queryKey;
    //     let pageSize = 10;
    //     const res = await httpStore.get(`/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    //     // console.log(res.data.content)
    //     return res.data.content;
    // }

    // // Phần nầy xài mockapi
    // // Lấy products
    // async getAllMockApi() {
    //     try {
    //         const response = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
    //         // const response = await axios({
    //         //     url: "https://65fc26b814650eb2100ba7a8.mockapi.io/Products",
    //         //     method: 'GET',
    //         // });
    //         // console.log(response.data.content)
    //         return response.data.content;
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Handle the error appropriately (e.g., throw an error, display a message to the user)
    //       }
    // }
    
}

export const storeApi = new StoreApi();