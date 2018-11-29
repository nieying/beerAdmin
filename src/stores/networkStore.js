import { observable, action } from 'mobx'
import axios from 'utils/axios'

class networkStore {
	@observable networkObj = { data: [] };

	// C.2、添加账号
	@action addNetwork = async (params) => {
		return await axios.post('/network/add', params)
	}
	// C.3、查询签到状态
	@action getSignStatus = async (params) => {
		return await axios.post('sign/getSignStatus', params)
	}
	// C.4、变更签到状态
	@action updateSignStatus = async (params) => {
		return await axios.post('/sign/updateSignStatus', params)
	}

	// C.46 获取账号列表数据
	@action getNetworkObj = async (params) => {
		this.networkObj = await axios.get('/network/list', params);
	}

	// 单个删除账号
	@action delNetwork = async (params) => {
		return await axios.get('/network/delete', params)
	}
}

export default new networkStore();
