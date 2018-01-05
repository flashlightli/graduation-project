## 广告管理接口文档

### 1.新增广告位置

* Path - /addAdvertLocaltion
* 方法 - POST

请求内容范例：

    POST /addAdvertLocaltion
    
    {
    	"locationName": "轮播位",
    	"location": "0",
    	"style": "padding-left:10px",
    	"platform": "ios",
    	"maxAdvertNum": "4"
    }
调用成功，服务会返回信息：

     {
         "__v": 0,
         "locationName": "轮播位test",
         "location": "0",
         "style": "padding-left:10px",
         "platform": "ios",
         "maxAdvertNum": 4,
         "_id": "5a1e8a010cb2865df3f3d4d3",
         "updatedAt": "2017-11-29T10:20:49.913Z",
         "createdAt": "2017-11-29T10:20:49.913Z"
     }


### 2.广告位置信息修改

* Path - /updateAdvertLocaltion
* 方法 - POST

请求内容范例：

    POST /updateAdvertLocaltion
    
     {
        "_id":"5a1e8a010cb2865df3f3d4d3",
        "locationName": "轮播位test",
        "location": "0",
        "style": "padding-left:10px",
        "platform": "android",
        "maxAdvertNum": "4"
     }
     
调用成功，服务会返回信息：

      {
          "_id": "5a1e8a010cb2865df3f3d4d3",
          "locationName": "轮播位test",
          "location": "0",
          "style": "padding-left:10px",
          "platform": "android",
          "maxAdvertNum": 4,
          "__v": 0,
          "updatedAt": "2017-11-29T10:20:49.913Z",
          "createdAt": "2017-11-29T10:20:49.913Z"
      }

### 3.广告位置信息删除

* Path - /deleteAdvertLocaltion
* 方法 - POST

请求内容范例：

    POST /deleteAdvertLocaltion
    
     {
        "_id":"5a1e8a010cb2865df3f3d4d3"
     }
     
调用成功，服务会返回信息：

      {
          "ok": 1,
          "n": 1
      }

### 4.广告位置列表信息

* Path - /advertLocaltionList
* 方法 - GET

请求内容范例：

    GET /advertLocaltionList
       
调用成功，服务会返回信息：

    [
        {
            "_id": "5a1e54422ff3df53bb4f7a7c",
            "locationName": "轮播位",
            "location": "0",
            "style": "padding-left:10px",
            "platform": "ios",
            "maxAdvertNum": 4,
            "__v": 0,
            "updatedAt": "2017-11-29T06:31:30.663Z",
            "createdAt": "2017-11-29T06:31:30.663Z"
        },
        {
            "_id": "5a1e548b2ff3df53bb4f7a7d",
            "locationName": "推荐位",
            "location": "1",
            "style": "padding-left:10px",
            "platform": "Android",
            "maxAdvertNum": 1,
            "__v": 0,
            "updatedAt": "2017-11-29T06:32:43.711Z",
            "createdAt": "2017-11-29T06:32:43.711Z"
        },
        {
            "_id": "5a1e5ddda2eda654f17e6bfc",
            "locationName": "新闻位",
            "location": "2",
            "style": "padding-left:10px",
            "platform": "Android",
            "maxAdvertNum": 5,
            "__v": 0,
            "updatedAt": "2017-11-29T07:12:29.810Z",
            "createdAt": "2017-11-29T07:12:29.810Z"
        }
    ]
    
### 5.广告位置详情信息

* Path - /advertLocaltionDetail/:id
* 方法 - GET

请求内容范例：

    GET /advertLocaltionDetail/5a1e54422ff3df53bb4f7a7c
       
调用成功，服务会返回信息：

    {
        "_id": "5a1e54422ff3df53bb4f7a7c",
        "locationName": "轮播位",
        "location": "0",
        "style": "padding-left:10px",
        "platform": "ios",
        "maxAdvertNum": 4,
        "__v": 0,
        "updatedAt": "2017-11-29T06:31:30.663Z",
        "createdAt": "2017-11-29T06:31:30.663Z"
    }  
    
    
### 6.新增活动事件接口

* Path - /addAdvertEvent
* 方法 - POST

请求内容范例：

    POST /addAdvertEvent
    
        {
            "title": "双十一促销活动",
            "brief": "aaa",
            "to_feed": "xxxx",
            "to_act": "bbb",
            "is_valid": "cccc"
        }
       
调用成功，服务会返回信息：

       {
           "__v": 0,
           "title": "双十一促销活动",
           "brief": "aaa",
           "to_feed": "xxxx",
           "to_act": "bbb",
           "is_valid": "cccc",
           "_id": "5a1e8cc20e3d425e62eb8d66",
           "updatedAt": "2017-11-29T10:32:34.253Z",
           "createdAt": "2017-11-29T10:32:34.253Z"
       }
    
### 7.活动事件修改

* Path - /updateAdvertEvent
* 方法 - POST

请求内容范例：

 POST /updateAdvertEvent
     
     {
        "_id": "5a1e8cc20e3d425e62eb8d66",
        "title": "双十一促销活动test",
        "brief": "aaa",
        "to_feed": "xxxx",
        "to_act": "bbb",
        "is_valid": "cccc"
     }
  
调用成功，服务会返回信息：

    {
        "_id": "5a1e8cc20e3d425e62eb8d66",
        "title": "双十一促销活动test",
        "brief": "aaa",
        "to_feed": "xxxx",
        "to_act": "bbb",
        "is_valid": "cccc",
        "__v": 0,
        "updatedAt": "2017-11-29T10:32:34.253Z",
        "createdAt": "2017-11-29T10:32:34.253Z"
    }
     
 ### 8.活动事件删除
 
 * Path - /deleteAdvertEvent
 * 方法 - POST
 
 请求内容范例：
 
     POST /deleteAdvertEvent
     
      {
         "_id":"5a1e8cc20e3d425e62eb8d66"
      }
      
 调用成功，服务会返回信息：
 
       {
           "ok": 1,
           "n": 1
       }
 
 ### 9.广告位置列表信息
 
 * Path - /advertEventList
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertEventList
        
 调用成功，服务会返回信息：
 
     [
         {
             "_id": "5a1e63b74884805631decb91",
             "title": "双十一促销活动",
             "brief": "aaa",
             "to_feed": "xxxx",
             "to_act": "bbb",
             "is_valid": "cccc",
             "__v": 0,
             "updatedAt": "2017-11-29T07:37:27.505Z",
             "createdAt": "2017-11-29T07:37:27.505Z"
         },
         {
             "_id": "5a1e63f34884805631decb92",
             "title": "元旦促销活动",
             "brief": "bbb",
             "to_feed": "qqq",
             "to_act": "123",
             "is_valid": "cccc",
             "__v": 0,
             "updatedAt": "2017-11-29T07:38:27.221Z",
             "createdAt": "2017-11-29T07:38:27.221Z"
         },
         {
             "_id": "5a1e8cc20e3d425e62eb8d66",
             "title": "双十一促销活动test",
             "brief": "aaa",
             "to_feed": "xxxx",
             "to_act": "bbb",
             "is_valid": "cccc",
             "__v": 0,
             "updatedAt": "2017-11-29T10:32:34.253Z",
             "createdAt": "2017-11-29T10:32:34.253Z"
         }
     ]
     
 ### 10.广告位置详情信息
 
 * Path - /advertEventDetail/:id
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertEventDetail/5a1e63b74884805631decb91
        
 调用成功，服务会返回信息：
 
     {
         "_id": "5a1e63b74884805631decb91",
         "title": "双十一促销活动",
         "brief": "aaa",
         "to_feed": "xxxx",
         "to_act": "bbb",
         "is_valid": "cccc",
         "__v": 0,
         "updatedAt": "2017-11-29T07:37:27.505Z",
         "createdAt": "2017-11-29T07:37:27.505Z"
     }
     
    
### 11.新增物料接口

* Path - /addAdvertMateriels
* 方法 - POST

请求内容范例：

    POST /addAdvertMateriels
    
    {
    	"path": "/usr/local",
    	"type": "0",
    	"target": "_self",
    	"table1col": "0",
    	"adEventId": "5a1e63b74884805631decb91",
    	"adLocaltionId": "5a1e54422ff3df53bb4f7a7c"
    }
       
调用成功，服务会返回信息：
    
    {
        "__v": 0,
        "path": "/usr/local",
        "type": "0",
        "target": "_self",
        "table1col": "0",
        "adEventId": "5a1e63b74884805631decb91",
        "adLocaltionId": "5a1e54422ff3df53bb4f7a7c",
        "_id": "5a1e8f720e3d425e62eb8d67",
        "updatedAt": "2017-11-29T10:44:02.897Z",
        "createdAt": "2017-11-29T10:44:02.897Z"
    }
        
### 12.物料修改

* Path - /updateAdvertMateriels
* 方法 - POST

请求内容范例：

 POST /updateAdvertMateriels
     
      {
        "_id": "5a1e8f720e3d425e62eb8d67",
        "path": "/usr/local",
        "type": "0",
        "target": "_self",
        "table1col": "0",
        "adEventId": "5a1e63b74884805631decb91",
        "adLocaltionId": "5a1e54422ff3df53bb4f7a7c"
      }
  
调用成功，服务会返回信息：

     {
         "_id": "5a1e8f720e3d425e62eb8d67",
         "path": "/usr/localtest",
         "type": "0",
         "target": "_self",
         "table1col": "0",
         "adEventId": "5a1e63b74884805631decb91",
         "adLocaltionId": "5a1e54422ff3df53bb4f7a7c",
         "__v": 0,
         "updatedAt": "2017-11-29T10:44:02.897Z",
         "createdAt": "2017-11-29T10:44:02.897Z"
     }
     
 ### 13.活动事件删除
 
 * Path - /deleteAdvertMateriels
 * 方法 - POST
 
 请求内容范例：
 
     POST /deleteAdvertMateriels
     
      {
         "_id":"5a1e8f720e3d425e62eb8d67"
      }
      
 调用成功，服务会返回信息：
 
       {
           "ok": 1,
           "n": 1
       }
 
 ### 14.广告位置列表信息
 
 * Path - /advertMaterielsList
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertMaterielsList
        
 调用成功，服务会返回信息：
 
     [
         {
             "_id": "5a1e67b5ef2f7756f531d9fe",
             "path": "/usr/local",
             "type": "0",
             "target": "_self",
             "table1col": "0",
             "adEventId": "5a1e63b74884805631decb91",
             "adLocaltionId": "5a1e54422ff3df53bb4f7a7c",
             "__v": 0,
             "updatedAt": "2017-11-29T07:54:29.375Z",
             "createdAt": "2017-11-29T07:54:29.375Z"
         },
         {
             "_id": "5a1e6813ef2f7756f531d9ff",
             "path": "/usr/local/bin",
             "type": "2",
             "target": "_self",
             "table1col": "1",
             "adEventId": "5a1e63f34884805631decb92",
             "adLocaltionId": "5a1e548b2ff3df53bb4f7a7d",
             "__v": 0,
             "updatedAt": "2017-11-29T07:56:03.516Z",
             "createdAt": "2017-11-29T07:56:03.516Z"
         }
     ]
     
 ### 15.广告位置详情信息
 
 * Path - /advertMaterielsDetail/:id
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertMaterielsDetail/5a1e67b5ef2f7756f531d9fe
        
 调用成功，服务会返回信息：
 
     {
         "_id": "5a1e67b5ef2f7756f531d9fe",
         "path": "/usr/local",
         "type": "0",
         "target": "_self",
         "table1col": "0",
         "adEventId": "5a1e63b74884805631decb91",
         "adLocaltionId": "5a1e54422ff3df53bb4f7a7c",
         "__v": 0,
         "updatedAt": "2017-11-29T07:54:29.375Z",
         "createdAt": "2017-11-29T07:54:29.375Z"
     }
     
      
### 16.新增广告接口

* Path - /addAdvert
* 方法 - POST

请求内容范例：

    POST /addAdvert
    
      {
        "eventId": "5a1e63b74884805631decb91",
        "localtionId": "5a1e54422ff3df53bb4f7a7c",
        "materielsId":"5a1e67b5ef2f7756f531d9fe",
        "advertData": {
            "advert_name": "双十一促销广告test",
            "advert_remark": "2",
            "start_time": "1511944761",
            "end_time": "1514536761",
            "is_valid": "2",
            "author_id": "_self",
            "author_name": "1",
            "duration": "ss"
        }
      }
       
调用成功，服务会返回信息：
    
    {
        "advert_name": "双十一促销广告test",
        "advert_remark": "2",
        "start_time": "1511944761",
        "end_time": "1514536761",
        "is_valid": "2",
        "author_id": "_self",
        "author_name": "1",
        "duration": "ss",
        "_id": "5a1e90d60e3d425e62eb8d72",
        "updatedAt": "2017-11-29T10:49:58.114Z",
        "createdAt": "2017-11-29T10:49:58.114Z",
        "ad_location": {
            "locationName": "轮播位",
            "location": "0",
            "style": "padding-left:10px",
            "platform": "ios",
            "maxAdvertNum": 4,
            "_id": "5a1e90d60e3d425e62eb8d73"
        },
        "ad_materiel": {
            "path": "/usr/local",
            "type": "0",
            "target": "_self",
            "table1col": "0",
            "createdAt": "2017-11-29T07:54:29.375Z",
            "_id": "5a1e90d60e3d425e62eb8d74"
        },
        "ad_event": {
            "title": "双十一促销活动",
            "brief": "aaa",
            "to_feed": "xxxx",
            "to_act": "bbb",
            "is_valid": "cccc",
            "createdAt": "2017-11-29T07:37:27.505Z",
            "_id": "5a1e90d60e3d425e62eb8d75"
        }
    }
        
### 17.广告信息修改

* Path - /updateAdvert
* 方法 - POST

请求内容范例：

 POST /updateAdvert
     
    {
        "eventId": "5a1e63b74884805631decb91",
        "advertData": {
            "advert_name": "双十一t",
            "advert_remark": "2",
            "start_time": "1511944761",
            "end_time": "1514536761",
            "is_valid": "2",
            "author_id": "_self",
            "author_name": "1",
            "duration": "ss",
            "_id": "5a1e90d60e3d425e62eb8d72"
        }
    }
  
调用成功，服务会返回信息：

    {
        "_id": "5a1e90d60e3d425e62eb8d72",
        "advert_name": "双十一t",
        "advert_remark": "2",
        "start_time": "1511944761",
        "end_time": "1514536761",
        "is_valid": "2",
        "author_id": "_self",
        "author_name": "1",
        "duration": "ss",
        "__v": 0,
        "updatedAt": "2017-11-29T10:49:58.114Z",
        "createdAt": "2017-11-29T10:49:58.114Z",
        "ad_location": {
            "locationName": "轮播位",
            "location": "0",
            "style": "padding-left:10px",
            "platform": "ios",
            "maxAdvertNum": 4,
            "_id": "5a1e90d60e3d425e62eb8d73"
        },
        "ad_materiel": {
            "path": "/usr/local",
            "type": "0",
            "target": "_self",
            "table1col": "0",
            "createdAt": "2017-11-29T07:54:29.375Z",
            "_id": "5a1e90d60e3d425e62eb8d74"
        },
        "ad_event": {
            "title": "双十一促销活动",
            "brief": "aaa",
            "to_feed": "xxxx",
            "to_act": "bbb",
            "is_valid": "cccc",
            "createdAt": "2017-11-29T07:37:27.505Z",
            "_id": "5a1e917d0e3d425e62eb8d7c"
        }
    }
     
 ### 18.活动事件删除
 
 * Path - /deleteAdvert
 * 方法 - POST
 
 请求内容范例：
 
     POST /deleteAdvert
     
      {
         "_id":"5a1e90d60e3d425e62eb8d72"
      }
      
 调用成功，服务会返回信息：
 
       {
           "ok": 1,
           "n": 1
       }
 
 ### 19.广告列表信息
 
 * Path - /advertList
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertMaterielsList
        
 调用成功，服务会返回信息：
 
     [
       
         {
             "_id": "5a1e87d0741adf5db3b8ad36",
             "advert_name": "元旦促销广告",
             "advert_remark": "2",
             "start_time": "1511944761",
             "end_time": "1514536761",
             "is_valid": "2",
             "author_id": "0",
             "author_name": "1",
             "duration": "333",
             "__v": 0,
             "updatedAt": "2017-11-29T10:11:28.670Z",
             "createdAt": "2017-11-29T10:11:28.670Z",
             "ad_location": {
                 "locationName": "轮播位",
                 "location": "0",
                 "style": "padding-left:10px",
                 "platform": "ios",
                 "maxAdvertNum": 4,
                 "_id": "5a1e87d0741adf5db3b8ad37"
             },
             "ad_materiel": {
                 "path": "/usr/local",
                 "type": "0",
                 "target": "_self",
                 "table1col": "0",
                 "createdAt": "2017-11-29T07:54:29.375Z",
                 "_id": "5a1e87d0741adf5db3b8ad38"
             },
             "ad_event": {
                 "title": "元旦促销活动",
                 "brief": "bbb",
                 "to_feed": "qqq",
                 "to_act": "123",
                 "is_valid": "cccc",
                 "createdAt": "2017-11-29T07:38:27.221Z",
                 "_id": "5a1e87d0741adf5db3b8ad39"
             }
         },
         {
             "_id": "5a1e90d60e3d425e62eb8d72",
             "advert_name": "双十一t",
             "advert_remark": "2",
             "start_time": "1511944761",
             "end_time": "1514536761",
             "is_valid": "2",
             "author_id": "_self",
             "author_name": "1",
             "duration": "ss",
             "__v": 0,
             "updatedAt": "2017-11-29T10:49:58.114Z",
             "createdAt": "2017-11-29T10:49:58.114Z",
             "ad_location": {
                 "locationName": "轮播位",
                 "location": "0",
                 "style": "padding-left:10px",
                 "platform": "ios",
                 "maxAdvertNum": 4,
                 "_id": "5a1e90d60e3d425e62eb8d73"
             },
             "ad_materiel": {
                 "path": "/usr/local",
                 "type": "0",
                 "target": "_self",
                 "table1col": "0",
                 "createdAt": "2017-11-29T07:54:29.375Z",
                 "_id": "5a1e90d60e3d425e62eb8d74"
             },
             "ad_event": {
                 "createdAt": "2017-11-29T07:37:27.505Z",
                 "is_valid": "cccc",
                 "to_act": "bbb",
                 "to_feed": "xxxx",
                 "brief": "aaa",
                 "title": "双十一促销活动",
                 "_id": "5a1e917d0e3d425e62eb8d7c"
             }
         }
     ]
     
 ### 20.广告位置详情信息
 
 * Path - /advertDetail/:id
 * 方法 - GET
 
 请求内容范例：
 
     GET /advertDetail/5a1e7bbbda98895b0093ef65
        
 调用成功，服务会返回信息：
 
     {
         "_id": "5a1e7bbbda98895b0093ef65",
         "advert_name": "双十一促销广告",
         "advert_remark": "2",
         "start_time": "1511944761",
         "end_time": "1514536761",
         "is_valid": "4",
         "author_id": "0",
         "author_name": "1",
         "duration": "333",
         "__v": 0,
         "updatedAt": "2017-11-29T09:19:55.544Z",
         "createdAt": "2017-11-29T09:19:55.544Z",
         "ad_location": {
             "locationName": "轮播位",
             "location": "0",
             "style": "padding-left:10px",
             "platform": "ios",
             "maxAdvertNum": 4,
             "_id": "5a1e7bbbda98895b0093ef66"
         },
         "ad_materiel": {
             "createdAt": "2017-11-29T07:54:29.375Z",
             "table1col": "0",
             "target": "_self",
             "type": "0",
             "path": "/usr/local",
             "_id": "5a1e867ae8dc075d7cb2065a"
         },
         "ad_event": {
             "title": "双十一促销活动",
             "brief": "aaa",
             "to_feed": "xxxx",
             "to_act": "bbb",
             "is_valid": "cccc",
             "_id": "5a1e7bbbda98895b0093ef68"
         }
     }
     
       