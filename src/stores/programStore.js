import { observable, action } from 'mobx'
import axios from 'utils/axios'

class showStore {
	@observable programObj = { data: [] };

	// C.28、节目投票信息管理--增加
	@action addProgram = async (params) => {
		return await axios.post('/program/add', params);
	}
	// C.29、节目投票信息管理--查询一个
	@action searchProgramOne = async (params) => {
		await axios.get('/program/getOne', params);
	}
	// C.30、节目投票信息管理--查询列表
	@action getProgramObj = async (params) => {
		this.programObj = await axios.get('/program/list', params);
	}
	// C.31、节目投票信息管理--查询投票结果
	@action getProgramResult = async (params) => {
		this.programObj = await axios.get('/program/getResult', params);
	}
	// C.32、节目投票信息管理--修改
	@action updateProgram = async (params) => {
		return await axios.post('/program/update', params);
	}
	// C.33、节目投票信息管理--删除
	@action deleteProgram = async (params) => {
		return await axios.get('/program/delete', params);
	}
	// C.34、节目投票信息管理--启动
	@action startProgram = async (params) => {
		return await axios.get('/program/start', params);
	}
	// C.34、节目投票信息管理--活动结束
	@action stopProgram = async (params) => {
		return await axios.get('/program/stop', params);
	}

}

export default new showStore();
