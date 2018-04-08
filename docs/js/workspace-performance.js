
var performanceData = testData;


var performance = new Vue({
    el: "#performance",
    data: {
        performanceData: performanceData,
        totalItems: performanceData.length,
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
        bigTotalItems: performanceData.length,
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