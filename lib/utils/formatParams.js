/**
 * 格式化commit信息
 */
const supportKey = ["scope", "body", "breaking", "issues", "lerna"]
const getKey = str => str.substring(0, str.length - 1)
const NOTYPE = "__0__"

// 对象转字符串 

const params2String = obj => (
  Object.keys(obj||{}).reduce((pre, cur)=> {
    return `${pre} --${cur}="${obj[cur].replace('"', '\"')}"`
  }, ' ')
)

// 格式化入参
const formatParams = (str, isString = false) => {
  if(!str) return ''
  str = str.trim()
  if(!str || !/^\w+:\s+.*$/.test(str)) {
    str = `${NOTYPE}: ${str}`
  }

  const res = {}
  const keys = str.match(/(\w+):/g).filter((key, index)=>{
    return index == 0 || supportKey.indexOf(getKey(key))>-1
  })

  const infoArray = str.split(new RegExp(`(${keys.join('|')})`)).slice(1)
  for(let i=0; i<infoArray.length; i+=2){
    const key = getKey(infoArray[i])
    const val = infoArray[i+1].trim()
    if(i==0){
      res.type = key
      res.subject = val
    }else{
      res[key] = res[key] ? `${res[key]} + ${val}`: val
    }
  }
  if(!isString){
    return res
  }
  return params2String(res)
}

module.exports ={
  formatParams,
  params2String,
  NOTYPE
}