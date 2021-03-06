class Vue {
  constructor(options) {
    this.$options = options
    // TODO:data可能是函数
    this._data = options.data
    this.initData()
  }
  initData() {
    let data = this._data
    let keys = Object.keys(data)
    for (let i = 0; i <keys.length; i++) {
      Object.defineProperty(this,keys[i],{
        enumerable:true,
        configurable:true,
        get:function proxyGetter() {
          console.log(1)
          return data[keys[i]]
        },
        set:function proxySetter(value) {
          console.log(2)
          data[keys[i]] = value
        }
      })
    }
  }
}