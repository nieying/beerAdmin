import { observable, action } from 'mobx'

class lightingStore {
	// 新增的灯光效果
	@observable lightObj = {
		flashColors: [
			{ id: 0, checked: true, val1: "#FF0909", val2: "#FF4848" },
			{ id: 1, checked: false, val1: "#FF2000", val2: "#FF9639" },
			{ id: 2, checked: false, val1: "#A02000", val2: "#FFF55C" },
			{ id: 3, checked: false, val1: "#A0A000", val2: "#BDEC4B" },
			{ id: 4, checked: false, val1: "#00FF00", val2: "#66ED42" },
			{ id: 5, checked: false, val1: "#00FF20", val2: "#2DE8A0" },
			{ id: 6, checked: false, val1: "#00FF60", val2: "#35F0EE" },
			{ id: 7, checked: false, val1: "#10A0FF", val2: "#2ED0FF" },
			{ id: 8, checked: false, val1: "#0020FF", val2: "#2E9FFF" },
			{ id: 9, checked: false, val1: "#0000FF", val2: "#3955FF" },
			{ id: 10, checked: false, val1: "#5000FF", val2: "#5A39FF" },
			{ id: 11, checked: false, val1: "#A000FF", val2: "#8439FF" },
			{ id: 12, checked: false, val1: "#C000FF", val2: "#AD39FF" },
			{ id: 13, checked: false, val1: "#FF0040", val2: "#EF39FF" },
			{ id: 14, checked: false, val1: "#FF0020", val2: "#FF39C0" }
		],
		designModeOptions: [
			{ id: 1, label: "全部设置", value: "all" },
			{ id: 2, label: "单独设置", value: "only" }
		],
		flashModeOptions: [
			{ id: 1, label: "短亮", value: "1" },
			{ id: 2, label: "常亮", value: "2" },
			{ id: 3, label: "慢闪", value: "3" },
			{ id: 4, label: "快速", value: "4" },
			{ id: 5, label: "关闭", value: "5" }
		]
	};
	@observable curSelectColor = "#FF4848";
	// 录入酒桌size
	@observable xAxis = 10
	@observable yAxis = 10
	@observable tableData = []
	@observable maskObj = {data:[]}
	@observable LightObj = {data:[]}
	@observable LightDetail = {data:[]}

	// 选择灯光效果
	@action selectColor = (params) => {
		this.lightObj.flashColors = this.lightObj.flashColors.filter((color) => {
			color.checked = false
			if (color.id === params.id) {
				color.checked = true
				this.curSelectColor = color.val2
			}
			return color
		})
	}

	// 酒桌数据
	@action getWineTableData = () => {
		this.tableData = [];
		const data = [{ num: '3-4' }];
		for (var i = 0; i <= this.xAxis; i++) {
			this.tableData.push({ index: i, tds: [] });
			for (var j = 0; j <= this.yAxis; j++) {
				this.tableData[i].tds.push({ index: j, visible: false, isChecked: false, mac: '' });
			}
		}
		// data.map((d) => {
		// 	this.tableData[3].tds[4].isChecked = true;
		// })
	}
	// add mac 地址
	@action updateMacAddress = (tr, td, value) => {
		this.tableData[tr.index].tds[td.index].mac = value
		this.tableData[tr.index].tds[td.index].visible = false
	}

	// 修改td的visable
	@action updateVisible = (tr, td, value) => {
		// this.tableData.filter(data => {
		// 	data.tds.filter(d => {
		// 		d[key] = false;
		// 	})
		// })
		this.tableData[tr.index].tds[td.index].visible = !value
	}
	// 选择座位图图案
	@action selectPattern = (tr, td, value) => {
		this.tableData[tr.index].tds[td.index].isChecked = !value
	}

	// A.1、酒桌录入(掩码)--新增/修改
	@action saveMask = async (params) => {
		await axios.post('/mask/save', params);
	}
	// A.2、获取录入酒桌列表
	@action getMaskList = async (params) => {
		this.maskObj = await axios.get('/mask/list', params);
	}
	// A.3、灯光效果列表查询
	@action getLightObj = async (params) => {
		this.LightObj =  await axios.get('/lightshow/list', params);
	}
	// A.4、灯光效果详情查询
	@action getLightDetail = async (params) => {
		this.LightDetail =  await axios.get('/lightshow/detail', params);
	}
	// A.5、全网灯光效果管理--新增/修改
	@action updateWholeLight = async (params) => {
		await axios.post('/lightshow/whole/save', params);
	}
	// A.6、酒桌灯光效果管理--新增/修改
	@action updateMaskLight = async (params) => {
		await axios.post('/lightshow/mask/save', params);
	}
	// A.7、酒桌灯光效果启动、结束
	@action toggleLight = async (params) => {
		await axios.post('/lightshow/toggle', params);
	}

}

export default new lightingStore();
