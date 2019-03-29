
/**
 * 获取用户登陆后跳转路由
 *
 * @export
 * @param {当前登录用户类型, 头像} { type, avatar }
 * @returns
 */
export function getRedirectPath({ type, avatar }) {
	// 根据用户信息 返回跳转地址
	// user.type /boss /genius
	// user.avatar /bossinfo /geniusinfo 
	let url = (type === 'boss') ? '/boss' : '/genius'
	if (!avatar) {
		url += 'info'
	}
	return url
}


export function getChatId(userId, targetId) {
	return [userId, targetId].sort().join('_')
}