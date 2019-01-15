//index.js
//获取应用实例





const nls1 = [{
    ename: 'ryu',
    cname: '隆'
}, {
    ename: 'chun-li',
    cname: '春丽'
}, {
    ename: 'nash',
    cname: '纳什'
}, {
    ename: 'vega',
    cname: '维嘉'
}, {
    ename: 'cammy',
    cname: '嘉米'
}, {
    ename: 'birdie',
    cname: '巴迪'
}, {
    ename: 'ken',
    cname: '肯'
}, {
    ename: 'necalli',
    cname: '内卡利'
}, {
    ename: 'balrog',
    cname: '巴洛克'
}, {
    ename: 'rmika',
    cname: '美华'
}, {
    ename: 'rashid',
    cname: '拉希德'
}, {
    ename: 'karin',
    cname: '卡琳'
}, {
    ename: 'zangief',
    cname: '桑吉尔夫'
}, {
    ename: 'laura',
    cname: '劳拉'
}, {
    ename: 'dhalsim',
    cname: '达尔西姆'
}, {
    ename: 'fang',
    cname: '方'
}, {
    ename: 'alex',
    cname: '阿里克斯'
}, {
    ename: 'guile',
    cname: '古烈'
}, {
    ename: 'ibuki',
    cname: '伊吹'
}, {
    ename: 'mbison',
    cname: '拜森'
}, {
    ename: 'juri',
    cname: '朱莉'
}, {
    ename: 'urien',
    cname: '尤里安'
}, {
    ename: 'akuma',
    cname: '豪鬼'
}, {
    ename: 'kolin',
    cname: '科林'
}, {
    ename: 'ed',
    cname: '爱德'
}, {
    ename: 'abigail',
    cname: '阿比盖尔'
}, {
    ename: 'menat',
    cname: '麦奈特'
}, {
    ename: 'zeku',
    cname: '是空'
}, {
    ename: 'sakura',
    cname: '樱'
}, {
    ename: 'blanka',
    cname: '布兰卡'
}, {
    ename: 'falke',
    cname: '法尔凯'
}, {
    ename: 'cody',
    cname: '科迪'
}, {
    ename: 'g',
    cname: '极'
}, {
    ename: 'sagat',
    cname: '沙加特'
}, {
    ename: 'kage',
    cname: '影'
}];

const nls = [
    ['隆', '春丽', '纳什', '维嘉', '嘉米', '巴迪', '肯', '内卡利', '巴洛克', '美华', '拉希德', '卡琳', '桑吉尔夫', '劳拉', '达尔西姆', '方', '阿里克斯', '古烈', '伊吹', '拜森', '朱莉', '尤里安', '豪鬼', '科林', '爱德', '阿比盖尔', '麦奈特', '是空', '樱', '布兰卡', '法尔凯', '科迪', '极', '沙加特', '影'],
    ['vt1', 'vt2']
];


const tbl = '{"th":{ "0": "招式", "1": "发动", "2": "生效", "3": "恢复", "4": "命中", "5": "被防", "6": "v命中", "7": "v被防", "8": "可取消", "9": "伤害", "10": "眩晕", "11": "投空/命中", "12": "属性", "13": "飞行道具无敌", "14": "浮空受创", "15": "备注", "16": "类型"},';
const tbl1 = [
    ["招式", "发动", "生效", "恢复", "命中", "被防", "v命中", "v被防", "可取消", "伤害", "眩晕", "投空/命中", "属性", "飞行道具无敌", "浮空受创", "备注", "类型"]
];
var db = {}

for (let i in nls1) {
    let filename = nls1[i]['ename'] + '.js';
    db[nls1[i]['ename']] = require('../../utils/dbjs/' + filename).db;
}
// console.log(db);

var dbdata = db['ryu'];
var vtdata = jsonToStr(dbdata['vt1']);
// console.log(transJson(dbdata['vt1']));

const tt = require('../tt/tt.js');



Page({

    data: {
        motto: 'SFV',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        open: false,
        mark: 0,
        newmark: 0,
        startmark: 0,
        endmark: 0,
        windowWidth: wx.getSystemInfoSync().windowWidth,
        staus: 1,
        translate: '',
        activeIndex: 0,
        nls: nls,
        nls1: nls1,
        roleindex: [0, 0],
        nowrole: '',
        pw: 0.52,
        dbdata: dbdata,
        vtdata: vtdata,
        vt: 'vt1',
        tbl: tbl,
        ttscrollLeft: 0,
        ttscrollTop: 0

    },

    onLoad: function(e) {
        // console.log(tbl)
        tt.tt(this, db, tbl1);
    },



    tap_ch: function(e) {
        // console.log('tap_ch');
        if (this.data.open) {
            this.setData({
                translate: 'transform: translateX(0px)'
            })
            this.data.open = false;
        } else {
            this.setData({
                translate: 'transform: translateX(' + this.data.windowWidth * this.data.pw + 'px)'
            })
            this.data.open = true;
        }
    },
    tap_start: function(e) {
        // console.log('tap_start');
        this.data.mark = this.data.newmark = e.touches[0].pageX;
        if (this.data.staus == 1) {
            // staus = 1指默认状态
            this.data.startmark = e.touches[0].pageX;
        } else {
            // staus = 2指屏幕滑动到右边的状态
            this.data.startmark = e.touches[0].pageX;
        }

    },
    tap_drag: function(e) {
        /*
         * 手指从左向右移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        console.log('tap_drag');
        this.data.newmark = e.touches[0].pageX;
        if (this.data.mark < this.data.newmark) {
            if (this.data.staus == 1) {
                if (this.data.windowWidth * this.data.pw > Math.abs(this.data.newmark - this.data.startmark)) {
                    this.setData({
                        translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
                    })
                }
            }

        }
        /*
         * 手指从右向左移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        if (this.data.mark > this.data.newmark) {
            if (this.data.staus == 1 && (this.data.newmark - this.data.startmark) > 0) {
                this.setData({
                    translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
                })
            } else if (this.data.staus == 2 && this.data.startmark - this.data.newmark < this.data.windowWidth * this.data.pw) {
                this.setData({
                    translate: 'transform: translateX(' + (this.data.newmark + this.data.windowWidth * this.data.pw - this.data.startmark) + 'px)'
                })
            }

        }

        this.data.mark = this.data.newmark;

    },
    tap_end: function(e) {
        if (this.data.staus == 1 && this.data.startmark < this.data.newmark) {
            if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
                this.setData({
                    translate: 'transform: translateX(0px)'
                })
                this.data.staus = 1;
            } else {
                this.setData({
                    translate: 'transform: translateX(' + this.data.windowWidth * this.data.pw + 'px)'
                })
                this.data.staus = 2;
            }
        } else {
            if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
                this.setData({
                    translate: 'transform: translateX(' + this.data.windowWidth * this.data.pw + 'px)'
                })
                this.data.staus = 2;
            } else {
                this.setData({
                    translate: 'transform: translateX(0px)'
                })
                this.data.staus = 1;
            }
        }

        this.data.mark = 0;
        this.data.newmark = 0;
    },


    lsbt: function(e) {

        var idx = /\d+/.exec(e.currentTarget.id);
        // console.log(idx.toString());
        this.setData({
            activeIndex: idx.toString(),
        });
    },

    nofuc: function() {
        return null;
    }



});







//在对象头部插入表头
function transJson(e) {

    //组合json字符串，去掉tbl的第一个字符，在头部插入表头行的数据
    let x = "";
    x = JSON.stringify(e);
    x = tbl + x.slice(1);
    //组合json字符串，去掉tbl的第一个字符，在头部插入表头行的数据
    return JSON.parse(x);

}

//json转数组2层
function jsonToStr(j) {
    // console.log(j);
    let arr = [];
    let s = 0;
    for (let i in j) {
        if (!Array.isArray(j[i])) {
            arr[s] = [];
        }
        for (let k in j[i]) {
            arr[s].push(j[i][k]);
        }
        s++;
    }
    return arr;
}


//翻转对象行列
function overarr(arr) {
    let x = [];
    let l = 0;

    for (let i in arr) {
        let k = 0;
        if (!Array.isArray(x[k])) {
            x[k] = [];
        }
        if (!Array.isArray(x[k][l])) {
            x[k][l] = [];
        }

        for (let j in arr[i]) {
            if (!Array.isArray(x[k])) {
                x[k] = [];
            }
            try {
                x[k][l] = arr[i][j];

            } catch (e) {
                console.log(e);
            }
            k++;
        }
        l++;

    }

    return x;
}