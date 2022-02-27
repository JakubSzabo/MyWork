var source, newData, stopData;

arr = [
    {
        x: '0',
        y1: '0',
        name: 'sinus'
    },
    {
        x: '0',
        y2: '1',
        name: 'sinus'
    }
]
Plotly.newPlot('graf', arr);

function start() {

    if (typeof (EventSource) !== "undefined") {
        source = new EventSource("https://iolab.sk/evaluation/sse/sse.php");

        source.addEventListener("message", function (e) {
            var data = JSON.parse(e.data);
            document.getElementById("result").innerHTML = e.data;

            let index = document.getElementById('tNum').value

            if (index <= 10 && index >= 1) {
                data.y1 = data.y1 * index;
                data.y2 = data.y2 * index;
            }
            //console.log(data.y1)
            //console.log(data.y2)

            if (data.x == 0) {
                arr = [
                    {
                        x: [data.x],
                        y: [data.y1],
                        name: 'sinus'
                    },
                    {
                        x: [data.x],
                        y: [data.y2],
                        name: 'cosinus'
                    }];

                console.log(arr)

                Plotly.newPlot('graf', arr);
            }

            newData = {
                xaxis: { range: [(data.x < 10) ? "0" : data.x - 10, data.x] }
            }

            Plotly.relayout('graf', newData);

            traces =
            {
                x: [[data.x], [data.x]],
                y: [[data.y1], [data.y2]]
            };

            console.log(traces)

            Plotly.extendTraces('graf', traces, [0, 1]);

            stopData = data.x
        })
    }
}

function stop() {
    source.close()

    var endData = 
    {
        'xaxis.range': [0, stopData],   
    };

    Plotly.relayout(graf, endData)
}