// pages/role/role.js


function role(pg, db) {

    pg.bindPickerChangeduibi = function(e) {
        let i = e.detail.value[1];
        let ename = pg.data.nls1[e.detail.value[0]].ename;
        let vvt = pg.data.nls[1][i];
        let zdata = db[ename][vvt];

        // console.log(e);

        if (e.currentTarget.id == "duibiroleid1") {
            this.setData({
                duibirole1: [e.detail.value[0], e.detail.value[1]],
            });
        }

        if (e.currentTarget.id == "duibiroleid2") {
            this.setData({
                duibirole2: [e.detail.value[0], e.detail.value[1]],
            });
        }





    };



    pg.setData({
        duibirole1: [0, 0],
        duibirole2: [1, 0],
    });




}




//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
    role: role
};