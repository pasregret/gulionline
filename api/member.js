import request from '@/utils/request'

export default {
    //根据token获取用户信息
    getUserInfoToken(token) {
        return request({
            url: '/ucenter/member/userInfo/'+token,
            method: 'get'
        })
    }
   
}