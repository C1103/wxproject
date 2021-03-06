Page({
    data: {
        address: null,
    },
    bindAddressInput: function(e) {
        this.setData({
            address: e.detail.value,
        })
    },
    bindSaveAddress: function() {
        // address? mvvm 不找dom元素
        // setStorage 存起来 10mb 存
        // 比如 最近看的十遍文章 离线的功能 用户信息，配置
        wx.setStorage({
            key: 'address',
            data: this.data.address,
            success: function() {
                wx.showToast({
                    title: '地址保存成功',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
    },
    bindClearAddress: function() {
        wx.clearStorage();
        this.setData({
            address: ''
        })
    },
    onLoad: function() {
        var that = this;
        wx.getStorage({
            key: 'address',
            success: function(res) {
                that.setData({
                    address: res.data,
                })
            }
        })
    }
})