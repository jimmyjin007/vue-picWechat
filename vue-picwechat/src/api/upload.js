import service from '@/utils/request'

//上传图片接口
export function uploadPic() {
    service.request({
        method: 'post',
        url: '/image/upload',
        data: {
        }
    })
}
export function login(data) {
    // service.request({
    //     method: 'post',
    //     url: '/admin/login.do',
    //     data: {
    //         username: "admin",
    //         password: "lqh666***",
    //     }
    // })
    return service.post('/admin/login.do',data)
}