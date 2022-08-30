<img width="1437" alt="image" src="https://user-images.githubusercontent.com/20157705/182564530-2c965f5f-407d-4baa-8772-73cb2645901b.png">

# 1 、项目简介

* [1.1 、平台简介](https://github.com/tencentmusic/cube-studio/wiki/%E9%A1%B9%E7%9B%AE%E7%AE%80%E4%BB%8B)

* [1.2 、基础组件介绍](https://github.com/tencentmusic/cube-studio/wiki/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D)

* 1.3 、平台架构

  * [1.3.1 、平台架构：云原生基础](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E6%9E%B6%E6%9E%84-%E4%BA%91%E5%8E%9F%E7%94%9F%E4%BE%9D%E8%B5%96)

  * [1.3.2 、平台架构：算力与分布式存储](https://github.com/tencentmusic/cube-studio/wiki/%E7%AE%97%E5%8A%9B%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F%E5%AD%98%E5%82%A8)

  * [1.3.3 、平台架构：prometheus/grafana监控体系](https://github.com/tencentmusic/cube-studio/wiki/prometheus-grafana%E7%9B%91%E6%8E%A7%E4%BD%93%E7%B3%BB)

  * [1.3.4 、平台架构：分布式训练能力+加速](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E6%9E%B6%E6%9E%84%EF%BC%9A%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%AD%E7%BB%83%E8%83%BD%E5%8A%9B-%E5%8A%A0%E9%80%9F)

  * [1.3.5 、平台架构：在线开发和镜像构建](https://github.com/tencentmusic/cube-studio/wiki/%E5%9C%A8%E7%BA%BF%E5%BC%80%E5%8F%91)

  * [1.3.6 、平台架构：ML任务流](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E6%9E%B6%E6%9E%84-ML%E4%BB%BB%E5%8A%A1%E6%B5%81)
 
  * [1.3.7 、平台架构：超参搜索](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E6%9E%B6%E6%9E%84-%E8%B6%85%E5%8F%82%E6%90%9C%E7%B4%A2)

  * [1.3.8 、平台架构：推理服务](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E6%9E%B6%E6%9E%84-%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1)


* [1.2 、使用rancher自建k8s集群](https://github.com/tencentmusic/cube-studio/wiki/%E4%BD%BF%E7%94%A8rancher%E8%87%AA%E5%BB%BAk8s%E9%9B%86%E7%BE%A4)(可以使用自己的k8s集群)

* [1.3 、平台单机部署](https://github.com/tencentmusic/cube-studio/wiki/%E5%B9%B3%E5%8F%B0%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2)

* [1.4 、平台多机、多集群、多项目组 部署调度](https://github.com/tencentmusic/cube-studio/wiki/%E5%A4%9A%E6%9C%BA%E3%80%81%E5%A4%9A%E9%9B%86%E7%BE%A4%E3%80%81%E5%A4%9A%E9%A1%B9%E7%9B%AE%E7%BB%84-%E9%83%A8%E7%BD%B2%E8%B0%83%E5%BA%A6)

* [1.5 、边缘集群方式部署平台](https://github.com/tencentmusic/cube-studio/wiki/%E8%BE%B9%E7%BC%98%E9%9B%86%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%83%A8%E7%BD%B2%E5%B9%B3%E5%8F%B0)

* [1.6 、gpu机器加入集群](https://github.com/tencentmusic/cube-studio/wiki/gpu%E6%9C%BA%E5%99%A8%E5%8A%A0%E5%85%A5%E9%9B%86%E7%BE%A4)

# 2、平台使用简介

* [2.1 、平台用户使用指南](https://github.com/tencentmusic/cube-studio/wiki/%E6%96%B0%E4%BA%BA%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)

* [2.2 、构建镜像](https://github.com/tencentmusic/cube-studio/wiki/%E6%9E%84%E5%BB%BA%E9%95%9C%E5%83%8F)

* 2.3 、模板使用

  * [2.3.1 、模板-数据导入导出-datax(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/datax)
  * [2.3.2 、模板-数据处理-volcanojob(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/volcano)
  * [2.3.3 、模板-数据处理-spark(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/spark)
  * [2.3.3 、模板-数据处理-ray(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/ray)
  * [2.3.1 、模板-机器学习-ray-sklearn(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/ray_sklearn)
  * [2.3.1 、模板-机器学习-xgb(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/xgb_train_and_predict)
  * [2.3.1 、模板-tf深度学习-tfjob(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_distributed_train_k8s)
  * [2.3.1 、模板-tf深度学习-tfjob-runner(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_keras_train)
  * [2.3.1 、模板-tf深度学习-tfjob-plain(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_plain_train)
  * [2.3.1 、模板-tf深度学习-tfjob-train(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_distributed_train)
  * [2.3.1 、模板-tf深度学习-tf-model-evaluation(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_model_evaluation)
  * [2.3.1 、模板-tf深度学习-tf-distribute-model-evaluation(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_distributed_evaluation)
  * [2.3.1 、模板-tf深度学习-tf-model-offline-predict
(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/tf_model_offline_predict)
  * [2.3.1 、模板-pytorch深度学习-pytorchjob-train(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/pytorch_distributed_train_k8s)
  * [2.3.1 、模板-tf/pytorch深度学习-horovod(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/horovod)
  * [2.3.1 、模板-模型服务化-deploy-service(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/deploy-service)
  * [2.3.1 、模板-多媒体类-media-download(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/video-audio)
  * [2.3.1 、模板-多媒体类-video-img(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/video-audio)
  * [2.3.1 、模板-多媒体类-video-audio(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/video-audio)
  * [2.3.1 、模板-多媒体类-model-offline-predict(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/model_offline_predict)
  * [2.3.1 、模板-多媒体类-kaldi-distributed-on-volcanojob(分布式)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/kaldi_distributed_on_volcanojob)
  * [2.3.1 、模板-多媒体类-object-detection-on-darknet(单机)](https://github.com/tencentmusic/cube-studio/tree/master/job-template/job/object_detection_on_darknet)

* [2.4 、内部服务部署](https://github.com/tencentmusic/cube-studio/wiki/%E5%86%85%E9%83%A8%E6%9C%8D%E5%8A%A1)

* [2.5 、推理服务部署](https://github.com/tencentmusic/cube-studio/wiki/%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86)
  * [2.5.1 、tfserving 推理服务](https://github.com/tencentmusic/cube-studio/wiki/tfserving-%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1)
  * [2.5.2 、torch-server 推理服务](https://github.com/tencentmusic/cube-studio/wiki/torch-server-%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1)
  * 2.5.3 、onnxruntime
  * [2.5.4 、triton 推理服务](https://github.com/tencentmusic/cube-studio/wiki/triton-%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1)

# 3 、管理员操作说明

* [3.1 、管理员操作指南](https://github.com/tencentmusic/cube-studio/wiki/%E7%AE%A1%E7%90%86%E5%91%98%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97)

* [3.2 、自定义配置文件](https://github.com/tencentmusic/cube-studio/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

* [3.3 、自定义notebook镜像](https://github.com/tencentmusic/cube-studio/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89notebook%E9%95%9C%E5%83%8F)

* [3.4、运维指南](https://github.com/tencentmusic/cube-studio/wiki/%E8%BF%90%E7%BB%B4%E6%8C%87%E5%8D%97)

# 4. 、开源改造

* [4.1 、平台开发：fab python开发框架](https://github.com/tencentmusic/cube-studio/wiki/fab-python-%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6)

* [4.2 、平台开发：代码结构简介](https://github.com/tencentmusic/cube-studio/wiki/%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84%E7%AE%80%E4%BB%8B)

* [4.3 、平台开发：前后端本地启动调试](https://github.com/tencentmusic/cube-studio/wiki/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%9C%AC%E5%9C%B0%E5%90%AF%E5%8A%A8%E8%B0%83%E8%AF%95)

* [4.4 、平台开发：登录 推送功能添加](https://github.com/tencentmusic/cube-studio/wiki/%E7%99%BB%E5%BD%95-%E6%8E%A8%E9%80%81%E5%8A%9F%E8%83%BD%E6%B7%BB%E5%8A%A0)

* [4.5、平台开发：新增/嵌入页面](https://github.com/tencentmusic/cube-studio/wiki/%E6%B7%BB%E5%8A%A0-%E5%B5%8C%E5%85%A5%E9%A1%B5%E9%9D%A2)

* [4.6 、平台开发：api接口](https://github.com/tencentmusic/cube-studio/wiki/API-%E6%8E%A5%E5%8F%A3)

* [4.7 、算法开发：开发算法模板](https://github.com/tencentmusic/cube-studio/wiki/%E5%BC%80%E5%8F%91%E7%AE%97%E6%B3%95%E6%A8%A1%E6%9D%BF)

# [5. 、共建指南](https://github.com/tencentmusic/cube-studio/wiki/open_source)