import axios from 'axios'
import { TOKEN_AUTHOR, getDataTextStorage, setDataTextStorage } from './utilFunction'
import { historyRouter } from '../main';
// Cài đặt thư viện jwt-decode (npm install jwt-decode --save)
import * as jwtDecode from 'jwt-decode';

// Hàm kiểm tra token hết hạn
function isTokenExpired(token) {
    try {
      const decodedToken = jwtDecode.jwtDecode(token);
    //   console.log(decodedToken)
      const expirationTime = new Date(decodedToken.exp * 1000); // Convert to milliseconds
      const currentTime = new Date();
      return expirationTime < currentTime;
    } catch (error) {
      // Xử lý lỗi nếu token không hợp lệ
      console.error('Invalid token:', error);
      return true; // Giả sử token hết hạn nếu không giải mã được
    }
  }
  
  // Sử dụng hàm kiểm tra
  const accessToken = localStorage.getItem('accessToken'); // Lấy token từ local storage
  if (accessToken && !isTokenExpired(accessToken)) {
    // Token hợp lệ
    console.log('Token is valid.');
  } else {
    // Token đã hết hạn hoặc không hợp lệ
    console.log('Token has expired or is invalid.');
  }

// Khai báo interceptor
const httpStore = axios.create({
    baseURL:'https://apistore.cybersoft.edu.vn',
    timeout: 30 * 1000 // mili giây. Sau 30 giây hủy request nếu không có kết quả trả về
})

// Cấu hình interceptor Gửi đi (mở netwwork để xem)
httpStore.interceptors.request.use((req)=>{
    const token = getDataTextStorage(TOKEN_AUTHOR)
    req.headers = {
        ...req.headers,
        'Authorization': token
    }
    return req;
}, err =>{
    return Promise.reject(err);
});

// Cấu hình interceptor response (kết quả nhận về)

httpStore.interceptors.response.use((res)=>{
    return res;
}, err =>{
    // Handle xử lý lỗi
    if (err?.response?.status === 400 || err?.response?.status === 404) {
        alert('Đường dẫn không hợp lệ !');
        // window.location.href = '/';
        historyRouter.push('/');
    }else if(err?.response?.status === 401){
        
        // xử lý refesh token
        if(isTokenExpired(localStorage.getItem(TOKEN_AUTHOR))){
            //Gọi api refesh token
            const pro = httpStore.post('/api/Users/RefeshToken');
            pro.then(res=>{
                setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
            })
            pro.catch( err =>{
                historyRouter.push('/login');
            })
            
        }
        // 401 có 2 trường hợp (không có token || token hết hạn)
        // alert('Không đủ quyền truy cập vào trang nầy ! Yêu cầu đăng nhập');
        // window.location.href = '/login'
        historyRouter.push('/login');
    }
    return Promise.reject(err)
})

// Các status code thường gặp
/* 
    200: req thành công và nhận kết quả thành công
    201: req thành công dữ liệu đã được khởi tạo
    400: bad request (tham số không hợp lệ) (tham số gửi đi đúng nhưng không có dữ liệu)
    404: not found (không tìm thấy đường dẫn) (tham số gửi đi đúng nhưng không có dữ liệu)
    401: Unauthorize - không có quyền truy cập vào api nầy (token không hợp lệ hoặc thiếu token hoặc sai token)
    403: Forbidden - Chưa đủ quyền truy cập (token chưa đủ quyền truy cập vào api nầy)
    500: Error inserver (lỗi nầy có thể do frontend truyền giá trị không đúng format dẫn đến code server xử lý lỗi hoặc do frontend truyền đúng dữ liệu tuy nhiên backend trong quá trình xử lý logic code bị lỗi tại server)
*/

export {httpStore}