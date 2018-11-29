import { observable, action } from 'mobx'
import axios from 'utils/axios'

class lotteryStore {
	@observable lotteryObj = { data: [] };
	@observable appendObj = { data: [] };
	@observable winListObj = { data: [] };

	// C.12、查看中奖名单
	@action getWinnerList = async (params) => {
		this.winListObj =  await axios.post('/lottery/getWinnerList', params);
	}

	/********抽奖模块start********/
	// 抽奖信息管理--增加抽奖c5
	@action addLottery = async (params) => {
		return await axios.post('/lottery/add', params);
	}
	// 抽奖信息管理--查询一个抽奖c6
	@action searchLotteryOne = async (params) => {
		this.lotteryObj = await axios.get('/lottery/getOne', params);
	}
	// 抽奖信息管理--查询列表c7
	@action getLotteryObj = async (params) => {
		this.lotteryObj = await axios.get('/lottery/list', params);
	}
	// 抽奖信息管理--修改抽奖c8
	@action updateLottery = async (params) => {
		return await axios.post('/lottery/update', params);
	}
	// 抽奖信息管理--删除抽奖c9
	@action deleteLottery = async (params) => {
		return await axios.get('/lottery/delete', params);
	}
	// C.27、获取已签到人数和中奖人数
	@action getWinnnerNum = async () => {
		return await axios.get('/lottery/getSignNumAndWinnerNum');
	}
	/********抽奖模块end********/

	/********追加抽奖模块start********/
	// 抽奖信息管理--追加增加抽奖c13
	@action addAppend = async (params) => {
		return await axios.post('/append/add', params);
	}
	// 抽奖信息管理--查询一个追加抽奖c14
	@action searchAppendOne = async (params) => {
		await axios.get('/append/getOne', params);
	}
	// 抽奖信息管理--查询追加列表c15
	@action getAppendObj = async (params) => {
		this.lotteryObj = await axios.get('/append/list', params);
	}
	// 抽奖信息管理--修改追加抽奖c16
	@action updateAppend = async (params) => {
		return await axios.post('/append/update', params);
	}
	// 抽奖信息管理--删除追加抽奖c17
	@action deleteAppend = async (params) => {
		return await axios.get('/append/delete', params);
	}
	/********追加抽奖模块end********/

	/********积分抽奖模块start********/
	// 抽奖信息管理--积分增加抽奖c20
	@action addIntegral = async (params) => {
		return await axios.post('/integral/add', params);
	}
	// 抽奖信息管理--查询一个积分抽奖c21
	@action searchIntegralOne = async (params) => {
		await axios.get('/integral/getOne', params);
	}
	// 抽奖信息管理--查询积分列表c22
	@action getIntegralObj = async (params) => {
		this.lotteryObj = await axios.get('/integral/list', params);
	}
	// 抽奖信息管理--修改积分抽奖c23
	@action updateIntegral = async (params) => {
		return await axios.post('/integral/update', params);
	}
	// 抽奖信息管理--删除积分抽奖c24
	@action deleteIntegral = async (params) => {
		return await axios.get('/integral/delete', params);
	}
	/********积分抽奖模块end********/

	/********摇一摇抽奖模块start********/
	// C.37、摇一摇活动信息管理--增加
	@action addIntegral = async (params) => {
		return await axios.post('/shake/add', params);
	}
	// C.38、摇一摇活动信息管理--查询一个
	@action searchShakeOne = async (params) => {
		await axios.get('/shake/getOne', params);
	}
	// C.39、摇一摇活动信息管理--查询列表
	@action getShakeObj = async (params) => {
		this.lotteryObj = await axios.get('/shake/list', params);
	}
	// C.40、摇一摇活动信息管理--修改
	@action updateShake = async (params) => {
		return await axios.post('/shake/update', params);
	}
	// C.41、摇一摇活动信息管理--删除
	@action deleteShake = async (params) => {
		return await axios.get('/shake/delete', params);
	}
	// C.45、摇一摇活动信息管理--查看摇一摇中奖名单
	@action getShakeWinnerList = async (params) => {
		return await axios.get('/shake/getWinnerList', params);
	}
	/********摇一摇抽奖模块end********/


}

export default new lotteryStore();
