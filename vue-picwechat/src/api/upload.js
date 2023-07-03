import service from '@/utils/request'

//上传图片接口
// export function uploadPic() {
//     service.request({
//         method: 'post',
//         url: '/image/upload',
//         data: {
//         }
//     })
// }

// export function login(data) {
//     service.request({
//         method: 'post',
//         url: '/admin/login.do',
//         data: data
//     })
//     // return service.post('/admin/login.do',data)
// }

export default {
    login(data) {
        return service({
            method: 'post',
            url: '/admin/login.do',
            data
        })
    }
}
// export function login(data) {
//     return service({
//         method: 'post',
//         url: '/admin/login.do',
//         data
//     })
// }
