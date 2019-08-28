//export const 命名导出  export default 默认导出
//config存放公共参数
//export const HOST = 'http://localhost:8080'
//export const ERR_OK = 200
//
////配置通用参数
//export const singerParams = {
//	page: '0',
//	pageSize: '100',
//}
//pagenum 为当前页，pagesize 为每页数量，format 为数据格式，jsonpCallback 为 jsonp 回调函数，
//如不需要 jsonp 调用，可将 format 参数值修改为 json 并且去掉 jsonpCallback 参数
export  const sigerPrams = {
	channel: 'singer',
    page: 'list',
    key: '579621905',
    pagesize: 60,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    g_tk: 5381,
    loginUin: '0',
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    needNewCode: 0
}
