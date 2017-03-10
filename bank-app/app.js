new function () {
    var _self = this;
    _self.width = 750; // 设置PSD的宽度
    _self.bili = function () {
        return (document.body.clientWidth || document.documentElement.offsetWidth) / _self.width;
    };
    _self.changePage = function () {
        document.documentElement.setAttribute('style','font-size:' +  _self.bili() * 100 + "px !important");
    }
    _self.changePage();
    window.addEventListener('resize', _self.changePage, false);
};
