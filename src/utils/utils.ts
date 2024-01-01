/**
 * 根据字符串生成颜色
 * @param name 字符串
 * @returns 返回处理后的色值
 */
export const getColor = (name: any) => {
  let tmp = '';
  // 将获取到的字符串先转成unicode码再转成16位数字
  for(var i = 0; i < name.length; i++){
    tmp += name[i].charCodeAt().toString(16)
  }
  // 判断转化为16位后字符串长度
  if(tmp.length > 6){
    // 长度大于6时取后6位作为颜色值
    tmp = tmp.substr(-6)
  }else if(tmp.length > 3){
    // 长度小于6大于3时取后3位作为颜色值
    tmp = tmp.substr(-3)
  }else{
    // 若长度小于三则设置默认色
    tmp = 'aquamarine'
  }
  return '#'+tmp;
}