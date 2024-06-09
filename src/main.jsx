import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'

//setup redux
import { store } from './redux/store'
import {Provider} from 'react-redux'
//Cấu hình biến để chuyển hướng trang
import {createBrowserHistory} from 'history'
//Cài đặt react query
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
//Cài đặt react query devtool
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import HomeTemplate from './templates/HomeTemplate'
import AdminTemplate from './templates/AdminTemplate'
import AdminTemplateTanStack from './templates/AdminTemplateTanStack'
import StoreList from './pages/ReduxToolkit/StoreList'
import CreateStore from './pages/ReduxToolkit/CreateStore'
import ModalRedux from './pages/ModalRedux'
import QueryStoreList from './pages/TanstackQuery/QueryStoreList'
import QueryCreateStore from './pages/TanstackQuery/QueryCreateStore'

const queryClient = new QueryClient()
// history tương tự navigate dùng để chuyển hướng trang ở một trang không phải component
export const historyRouter = createBrowserHistory();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HistoryRouter history={historyRouter}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path='/' element={<AdminTemplate />} />
          <Route path='/admin' element={<AdminTemplate />}>
            <Route path='/admin/store-list' element={<StoreList />} />
            <Route path='/admin/create-store' element={<CreateStore />} />
          </Route>

          <Route path='/admin-tanstack' element={<AdminTemplateTanStack />}>
          <Route path='/admin-tanstack/query-store-list' element={<QueryStoreList />} />
          <Route path='/admin-tanstack/query-create-store' element={<QueryCreateStore />} />
          </Route>
        </Route>
        </Routes>
        <ModalRedux />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </Provider>
   </HistoryRouter>
  </React.StrictMode>,
)
