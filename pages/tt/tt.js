// pages/tt/tt.js


function tt(tpob,db,tbl) {
    tt.tbl1 = tbl;

    tpob.bindPickerChange = function(e) {
        let i = e.detail.value[1];
        let ename = tpob.data.nls1[e.detail.value[0]].ename;        
        let vvt = tpob.data.nls[1][i];
        let zdata = db[ename][vvt];
        
        // console.log(tt.tbl1);

        this.setData({
            roleindex: [e.detail.value[0], e.detail.value[1]],  
            // vtdata: overarr(transJson(rdb)),
            roledata: zlist(tt.tbl1.concat(jsonToStr(zdata)))
        });

    };    

    tpob.ttscroll = function (e) {

        let ttscrollTop = e.detail.scrollTop;
        let ttscrollLeft = e.detail.scrollLeft;

        this.setData({
            ttscrollTop: ttscrollTop,
            ttscrollLeft: ttscrollLeft,
        })
    };

    tpob.setData({
        roledata: zlist(tt.tbl1.concat(tpob.data.vtdata))
    });


}





function zlist(arr){
    let c = [];
    let b = [];
    let z = {};
    let a = arr[0].toString().split(',');    
    let jishu = -1;
    for(let i in arr){

        if (i>0) {  
            b.push(arr[i][0]);
            c.push(arr[i]);
            c[jishu].shift();
        }
        jishu++;
    }
    jishu = -1;
    z.c = c;
    z.b = b;
    a.shift();
    z.a = a;
    return z;
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





module.exports = {
    tt: tt
};


