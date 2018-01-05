/*
 * @Desc:  错误码
 * @Author: lwp 
 * @Date: 2017-10-26 10:49:15 
 * @Last Modified by:   lwp 
 * @Last Modified time: 2017-10-26 10:49:15 
 */

const errorCode = {
    /****************************通用错误码****************************/
    COMMON_SUCCESS        : 0,// 成功
    ERR_INVALID_PARAMETERS: 1,// 参数错误
    ERR_INTERNAL_SERVER   : 2,// 服务器内部出错
    ERR_NOT_FOUND         : 8,// 资源不存在
    ERR_PERMISSION_DENIED : 9,// 没有权限
        
};

exports.ErrorCodes = errorCode;
    