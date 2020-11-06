$(document).ready(function() {
    $.post('.\app\models\embedded.model.js',function(data){
        let tem = [];
        let humi = [];

        for(let i in data){
            tem.push(data[i].temperature);
            humi.push(data[i].humidity);
        }
        let chartdata = {
            labels:name,
            datasets:[{
                label:'Temperature and Humidity',
                backgroundColor:'#49e2ff',
                borderColor:'#46d5f1',
                hoverBackgroundColor:'#cccccc',
                hoverBorderColor:'#666666',
                data:tem
            }]
        };
        let graphTarget = $('.chart');
        let bar = new Chart(graphTarget,{
            type:'bar',
            data:chartdata
        })
    })
})