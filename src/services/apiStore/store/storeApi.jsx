import { httpStore } from "../../../util/config";

export class StoreApi {
    // lấy toàn bộ store
    async getAll() {
        const res = await httpStore.get('/api/Store/getAll');
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
        alert('Thêm Store thành công')
        return res.data.content;
    };
    // Sửa 
    async updateStore(storeUpdateForm) {
        const res = await httpStore.put(`/api/Store?id=${storeUpdateForm.id}`, storeUpdateForm);
        alert('Sửa Store thành công')
        return res.data.content;
    };
    // Xóa
    async deleteStore(id) {
        const res = await httpStore.delete('/api/Store', {data: id});
        alert('Xóa Store thành công')
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

    
}

export const storeApi = new StoreApi();