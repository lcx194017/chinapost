/**
 * Created by Administrator on 2018/3/30.
 */

var reportTest = testData;

var reportData = new Vue({
    el: '#report',
    data: {
        reportData: reportTest,
        totalItems: reportTest.length,
        pagination1Report: {
            currentPage: 1
        },
        setPage: function(pageNo) {
            this.pagination1Report.currentPage = pageNo;
        },
        pageChanged: function() {
            console.log('Page changed to: ' + this.pagination1Report.currentPage);
        },
        pageLabelHtml: function (pageNo) {
            return "<b>" + pageNo + "</b>";
        },
        maxSize: 5,
        bigTotalItems: reportTest.length,
        startNumSet: function () {
            startNum = (this.pagination1Report.currentPage-1) * 10;
            return startNum;
        },
        endNumSet: function () {
            endNum = this.pagination1Report.currentPage * 10;
            return endNum;
        }
    },
    methods: {
        //save data to excel
        saveToExcel: function (JSONData, ShowLabel) {
            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
            var CSV = '';
            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {
                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }
                row = row.slice(0, -1);
                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row = "";
                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index in arrData[i]) {
                    row += '"' + arrData[i][index] + '",';
                }
                row.slice(0, row.length - 1);
                //add a line break after each row
                CSV += row + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }

            //this trick will generate a temp "a" tag
            var link = document.createElement("a");
            link.id="lnkDwnldLnk";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);

            var csv = CSV;
            blob = new Blob([csv], { type: 'text/csv' });
            var csvUrl = window.webkitURL.createObjectURL(blob);
            var filename = 'outputExport.csv';
            $("#lnkDwnldLnk")
                .attr({
                    'download': filename,
                    'href': csvUrl
                });

            $('#lnkDwnldLnk')[0].click();
            document.body.removeChild(link);
        }
        //    ---------save data to excel------------
    }
});


//echart
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('test'));

// 指定图表的配置项和数据
var option = {
    title:{
        text: '分拣量统计图'
    },
    legend: {},
    tooltip: {},
    dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: ['time', 'workload'],
        source: workloadTest
    },
    xAxis: {type: 'category'},
    yAxis: {
        // axisLabel : {
        //     formatter: '{value} 件'
        // }
    },
    series: [
        {type: 'line'}
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

