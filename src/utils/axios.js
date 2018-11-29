import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

// 测试服务器地址（内部访问）：https://200.200.200.50/
// 测试服务器地址（外部访问）：https://dp.clife.net/
// 预发布服务器地址：https://test.api.clife.cn/
// 生产服务器地址：https://api.clife.cn/
// 开发：http://10.8.4.156:8080/clife-machine-api-web-superbeerglass/

// 创建axios默认请求
axios.defaults.baseURL = "/clife-machine-api-web-superbeerglass";
// 配置超时时间
axios.defaults.timeout = 100000;

// 拦截请求
// axios.interceptors.request.use(function (config) {
// 	message.loading('加载中', 0);
// 	return config
// });

// // 拦截响应
// axios.interceptors.response.use(function (config) {
// 	message.hide();
// 	return config
// });

export default class Axios {
	static get(url, params) {
		return new Promise((resolve, reject) => {
			axios.get(url, {
				params: params
			}).then(res => {
				console.log('res', res)
				if (res.data && res.data.code === 0) {
					resolve(res.data)
				} else {
					message.warning(res.data.msg)
				}
			}).catch(err => {
				reject(err)
			})
		})
	}

	static post(url, params) {
		return new Promise((resolve, reject) => {
			axios.post(url, qs.stringify(params), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			}).then(res => {
				if (res.data && res.data.code === 0) {
					resolve(res.data)
				} else {
					message.warning(res.data.msg)
				}
			}).catch(err => {
				reject(err)
			})
		})
	}
}
