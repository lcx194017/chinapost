/**
 * Created by Administrator on 2018/3/30.
 */

var employeeData = [];

function getEmployeeDataByID(employeeID) {
    var j = 0;
    for (i = 0; i < supplyData.length; i++){
        if (supplyData[i].id == employeeID){
            employeeData[j] = supplyData[i];
            j+=1;
        }
    }
}



// var employeeData = testSingleData;

//single worker(many days)
// var singleData = new Vue({
//     el: '#single-data',
//     data: {
//         employeeData: testSingleData
//     }
// });
//some day

var singlePage = new Vue({
    el: "#single",
    data: {
        employeeData: supplyData,
        totalItems: supplyData.length,
        pagination1: {
            currentPage: 1
        },
        setPage: function(pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageChanged: function() {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        pageLabelHtml: function (pageNo) {
            return "<b>" + pageNo + "</b>";
        },
        maxSize: 5,
        bigTotalItems: supplyData.length,
        startNumSet: function () {
            startNum = (this.pagination1.currentPage-1) * 10;
            return startNum;
        },
        endNumSet: function () {
            endNum = this.pagination1.currentPage * 10;
            return endNum;
        }

    }
});

var singleDatePage = new Vue({
    el: "#single-date",
    data: {
        dateData: testSingleData,
        totalItems: testSingleData.length,
        pagination1: {
            currentPage: 1
        },
        setPage: function(pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageChanged: function() {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        pageLabelHtml: function (pageNo) {
            return "<b>" + pageNo + "</b>";
        },
        maxSize: 5,
        bigTotalItems: testSingleData.length,
        startNumSet: function () {
            startNum = (this.pagination1.currentPage-1) * 10;
            return startNum;
        },
        endNumSet: function () {
            endNum = this.pagination1.currentPage * 10;
            return endNum;
        }

    }
});