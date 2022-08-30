# 菜单信息接口

[/myapp/menu](https://github.com/tencentmusic/cube-studio/blob/master/myapp/views/home.py)

```
[
    {
        "name": '$name',
        "title": '导航中文名',
        "icon": '$svg',
        "children": [
            {
                "name": '$name',
                "title": '导航中文名',
                "isMenu": true,          # 是否是父菜单
                "isExpand": True,        # 是否自动展开此层菜单
                "disable": True,         # 是否禁用此菜单    
                "children": [
                    {
                        "name": '$name',
                        "title": '导航中文名',
                        "icon": '$svg',           # svg图标源码
                        "menu_type": "api",       # 菜单类型    支持api(下方的标准api协议)/innerRoute(前端自定处理)/out_link(跳转到其他平台的链接)/iframe(嵌入其他页面)
                        "url": "/xx_modelview/api"
                    },
                    {
                        "name": '$name',
                        "title": '导航中文名',
                        "icon": '$svg',
                        "menu_type": "api",
                        "url": "/xx_modelview/api"
                    },
                ]
            },
        ]
    },
    {
        "name": '$name',
        "title": '导航中文名',
        "icon": '$svg',
        "children": [
            {
                "name": '$name',
                "title": '导航中文名',
                "icon": '$svg',
                "menu_type": "link",
                "url": "http://xx.xx/xx/"
            },
        ]
    }
]
```

# 基本路由

json api操作基础路由：http://x.x.x.x/$view/api/  

# web url和api url

add操作：
```
 - api：(POST)：http://x.x.x.x/$view/api/
```
edit操作：
```
 - api：(PUT)：http://x.x.x.x/$view/api/<id>
```
show操作：
```
 - api：(GET)：http://x.x.x.x/$view/api/<id>
```
delete操作：
```
 - api：(DELETE)：http://x.x.x.x/$view/api/<id>
```
list操作：
```
 - api：(GET)：http://x.x.x.x/$view/api/
```
action操作：
```
	单数据操作
 - api：(GET)：http://x.x.x.x/$view/api/action/$action_name/<id>
	批数据操作
 - api：(POST)：http://x.x.x.x/$view/api/multi_action/$action_name/
	json参数为{"ids":[xx,xx,xx]}
```
	
可以参考模板化前端界面url来获取具体模块$view

# $view：

| 说明 | view  | 表名 |
| :--- | :--- | :--- |
| 项目管理| project_modelview| project|
| 项目成员管理| project_user_modelview| project_user |
| hive库表管理| metadata_table_modelview |  metadata_table |
| 指标管理| metadata_metric_modelview |  metadata_metric |
| 维表管理| dimension_table_modelview |  dimension |
| 数据集管理| dataset_modelview |  dataset |
| 仓库管理| repository_modelview|  repository |
| docker构建管理| docker_modelview|   docker |
| 镜像管理| images_modelview	|  images  |
| notebook管理| notebook_modelview|   notebook |
| 数据开发任务流管理| etl_pipeline_modelview|   etl_pipeline |
| 数据开发任务管理| etl_task_modelview|   etl_task |
| job模板管理| job_template_modelview|  job_template  |
| 训练pipeline管理| pipeline_modelview|  pipeline  |
| 训练task管理| task_modelview|  task  |
| 定时调度实例管理| runhistory_modelview|  runhistory  |
| workflow管理| workflow_modelview|  workflow  |
| tfjob管理| tfjob_modelview|  tfjob  |
| xgbjob管理| xgbjob_modelview| xgbjob   |
| pytorchjob管理| pytorchjob_modelview|  pytorchjob  |
| 内部服务管理| service_modelview|  service  |
| 训练模型管理| training_model_modelview|  model  |
| 推理服务管理| inferenceservice_modelview|   inferenceservice |

	
# curd 请求参数和显示控制
通过http://xx.xx.xx.xx/$view/api/_info 可以获取当前view 增删改查搜索接口中需要发送的参数，已经参数的描述
	
# curd 响应结果
```
add(POST)/edit(PUT)/show(GET)/delete(DELETE)
{
    "message": "success",
    "result": $model_dict,
    "status": 0
}
	
list(GET)
{
  "message": "success", 
  "result": {
    "count": 1, 
    "data": [
      {
        {$model_dict},{$model_dict}
      }
    ]
  }, 
  "status": 0
}
```

# header
所有api操作header
```
    headers = {
      'Content-Type': 'application/json',
      'Authorization': '$rtx'
    }
```
	
# list get接口参数传递
```
http:/xxx/api/?form_data=$value
其中$value为json序列化后的字符串
```
# filter操作
```
过滤函数：
Starts with：sw
Not Starts with：nsw
Ends with：ew
Not Ends with：new
Contains：ct
Not Contains：nct
Equal to：eq
Not Equal to：neq
Greater than：gt
Smaller than：lt
Relation：rel_o_m
No Relation：nrel_o_m
elation as Many：rel_m_m
Filter view with a function：eqf
Filter view where field is in a list returned by a function：inf

filter示例：
查询name列包含aa的记录
"filters":[
	{
	  "col": "name",
	  "opr": "ct",   
	  "value": "aa"
	}
]
filter示例：
a表通过外键b_id绑定b表，查询指定b_id为1的所有a
"filters":[
    {
        "col": "b",
        "opr": "rel_o_m",
        "value": 1
    }
]
```
# 分页
```
"page":0,
"page_size":10,
```
# 排序
```
order_column: $column1
order_direction: 'desc'
```
# 特殊传参
columns：可以设定list/show界面时查询的部分列
filters：list时过滤使用
order：排序

# 交互数据结构示例
post 请求示例：
```
{
    'key1': 'value1',
    'key2': 'value2',
    # 注意 对于外键列，例如a对象通过b_id绑定b对象，添加或者修改绑定时post参数为{"b":"$b_id"} 而不是{"b_id":"$b_id"}
}
```
返回值示例
```
{
  "status": 0     #  注意判断字段有无
  "message": "success",
  "result": {    
    "a_name":$a.name , 
    "a_id": $a.id ,
    "b": {         # 包含外键对象相关的内容
        "b_name":$a.b.name,
        "b_id": $a.b.id
     }
  }
}
```
# 推理服务接口
url:`/inferenceservice_modelview/deploy/update/`
post json 更新
get 查询
```
{
    "service_id":xx,     # 确定哪个服务，三选一
    "service_name":xx,   # 确定哪个服务，三选一
    "model_name":xx,     # 确定哪个服务，三选一

    "min_replicas":4   # 修改最小副本
}

返回结构
{
    "result": {
        "service":{},   # 服务的源数据信息
        "deploy":{}     # 部署情况
    },
    "status": 0,
    "message": 'success'
}
	
当前运行服务的副本数为result.deploy.spec.replicas
```
	
# python客户端示例
task/pipeline的add、edit、list、delete操作
```
import requests
import uuid
import json
import requests
import time
import datetime
import pysnooper
host = 'http://127.0.0.1'  # 在办公网测试
# host = 'http://kubeflow.music.woa.com/'  # 在办公网测试
# host = 'http://kubeflow.infra/'    # 在k8s容器内使用的域名

pipeline_base_route = 'pipeline_modelview'
task_base_route = 'task_modelview'
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'admin'
}
model=None

def add(base_route,payload):
    url = "%s/%s/api/"%(host,base_route)
    response = requests.request("POST",url, headers=headers, json=payload)
    if response.status_code == 200:
        back_data = response.json()
        # print(json.dumps(back_data, ensure_ascii=False, indent=4))
        if 'status' in back_data and back_data['status'] == 0 and 'result' in back_data:
            model = back_data['result']
            # print(json.dumps(model, ensure_ascii=False, indent=4))
            print('========success add %s'%base_route)
            print(json.dumps(model,indent=4,ensure_ascii=False))
            return model
    else:
        # print(response.text)
        return None

def edit(base_route,id,payload):
    url = "%s/%s/api/%s"%(host,base_route,str(id))
    # print(url,id)
    response = requests.request("PUT",url, headers=headers, json=payload)
    # print(response.text)
    if response.status_code == 200:
        back_data = response.json()
        # print(json.dumps(back_data, ensure_ascii=False, indent=4))
        if 'status' in back_data and back_data['status'] == 0 and 'result' in back_data:
            model = back_data['result']
            # print(json.dumps(model, ensure_ascii=False, indent=4))
            print('========success edit %s'%base_route)
            print(json.dumps(model,indent=4,ensure_ascii=False))
            return model
    else:
        # print(response.text)
        return None

# @pysnooper.snoop()
def get(base_route,id):
    url = "%s/%s/api/%s"%(host,base_route,str(id))
    response = requests.request("GET",url, headers=headers)
    # print(response.text)
    if response.status_code == 200:
        back_data = response.json()
        # print(json.dumps(back_data, ensure_ascii=False, indent=4))
        if 'status' in back_data and back_data['status'] == 0 and 'result' in back_data:
            model = back_data['result']
            # print(json.dumps(model, ensure_ascii=False, indent=4))
            print('========success show %s'%base_route)
            print(json.dumps(model,indent=4,ensure_ascii=False))
            return model
    else:
        # print(response.text)
        return None

# @pysnooper.snoop()
def list(base_route,payload):
    url = "%s/%s/api/"%(host,base_route)
    print(url)
    response = requests.request("GET",url, headers=headers,json=payload)
    # print(response.text)
    if response.status_code == 200:
        back_data = response.json()
        # print(json.dumps(back_data, ensure_ascii=False, indent=4))
        if 'status' in back_data and back_data['status'] == 0 and 'result' in back_data:
            model = back_data['result']
            # print(json.dumps(model, ensure_ascii=False, indent=4))
            print('========success list %s'%base_route)
            print(json.dumps(model,indent=4,ensure_ascii=False))
            return model
    else:
        # print(response.text)
        return None

def delete(base_route,id):
    url = "%s/%s/api/%s" % (host,base_route,str(id))
    response = requests.request("DELETE", url, headers=headers)
    # print(response.text)
    if response.status_code == 200:
        back_data = response.json()
        print('========success delete %s'%base_route)
        print(back_data)
        return back_data
    else:
        # print(response.text)
        return None

payload = {
    'project': '1',  # 外键，项目组，需要先获取项目组id
    'name': 'pipeline-'+uuid.uuid4().hex[:4],
    'describe': '测试pipeline',
    'namespace': 'pipeline',  # 目前固定填这个值
    'schedule_type': 'once',
    'global_args':'',
    'cron_time':'1 1 * * *',
    'node_selector':"cpu=true",
    'image_pull_policy':'Always',
    'parallelism':3
}
pipeline = add(pipeline_base_route,payload)
if not pipeline:
    raise Exception('error')


payload = {
    # 下面是公共参数
    'pipeline': pipeline['id'],    # 外键,需要先获取id
    'job_template': 1,         # 外键,需要先获取id
    'name': 'task-'+uuid.uuid4().hex[:4],
    'label': '测试task',
    'working_dir': '',  # 目前固定填这个值
    'command': 'sleep 10',
    'overwrite_entrypoint':0,
    'volume_mount':"",
    'node_selector':'cpu=true',
    'resource_memory':'300M',
    'resource_cpu':'0.3',
    'resource_gpu':'0',
    'timeout':30000,
    'retry':2,
    'outputs':'',

    # 下面是模板要填写的参数，选择不同的模板要填的内容不同
    'args':json.dumps({
        "aa":"aa1"
    })
}

task1 = add(task_base_route,payload)
if not task1:
    print('error')
payload['name']='task-'+uuid.uuid4().hex[:4]
task2 = add(task_base_route,payload)
if not task2:
    print('error')


task1['resource_memory']='1G'
task1 = edit(task_base_route,task1['id'],task1)
if not task1:
    print('error')

pipeline['dag_json']=json.dumps({
    task1['name']: {
        "upstream": [
            task2['name']
        ]
    }
})

pipeline = edit(pipeline_base_route,pipeline['id'],pipeline)
if not pipeline:
    print('error')


pipeline = get(pipeline_base_route,pipeline['id'])

payload = {
    "page":0,
    "page_size":10,
    "filters":[
        {
            "col": 'pipeline',
            "opr": 'rel_o_m',
            "value": 'xxx'
        },
        {
            "col": 'run_id',
            "opr": 'eq',
            "value": 'xxx'
        }
    ]
}
tasks = list(task_base_route,payload=payload)
pipeline_id=pipeline['id']
run_pipeline_res = requests.get('%s/%s/run_pipeline/%s'%(host,pipeline_base_route,pipeline_id),headers=headers,allow_redirects=False)
if run_pipeline_res.status_code==302:
  print(run_pipeline_res.headers['Location'])

# =================  delete 删除
delete(pipeline_base_route,pipeline['id'])

```