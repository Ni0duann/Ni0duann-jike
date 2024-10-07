import { request } from "@/utils";

//获取频道列表
export function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET'
    })
}

//提交文章表单
export function createArticlelAPI(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}


//删除文章 
export function deleteArticlelAPI(id){
    return request({
        url: `/mp/articles/${id}`,
        method:'DELETE'
    })
}


