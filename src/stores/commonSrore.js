import { observable, action } from 'mobx'

class HomeStore {
	@observable isLogin = 0;
	@observable number = 0
	@observable pageHeight = window.innerHeight

	@action setIsLogin = (params) => {
		this.isLogin = params
	}

	@action increase = () => {
		this.number += 1
	}

	@action decrease = () => {
		this.number -= 1
	}
}

export default new HomeStore()
