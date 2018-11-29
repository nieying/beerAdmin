import { observable, action } from 'mobx'
import axios from 'utils/axios'

class signStore {
	@observable signObj = { data: [] };

	// C.3、查询签到状态
	@action getSignStatus = async () => {
		return await axios.get('/sign/getSignStatus' )
	}
	// C.4、变更签到状态
	@action updateSignStatus = async (params) => {
		return await axios.get('/sign/updateSignStatus', params)
	}
	// C.48、根据姓名或工号查询签到用户列表(模糊查询)
	@action getSignList = async (params) => {
		this.signObj = await axios.get('/sign/list', params)
	}
}

export default new signStore();
