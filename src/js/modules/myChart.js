const ctx = document.getElementById('myChart');
export const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['aaa', 'bbb', 'ccc', 'other'],
    datasets: [{
      backgroundColor: [
        'red',
        'blue',
        'orange',
        'green'
      ],
      borderWidth: [0,0,0,0],
      data: [33, 22, 44, 1]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'gruf'
    }
  },
});

console.log(myChart);
console.log(myChart.width);
console.log(myChart.config.data.labels[0]);

{
  const btn = document.getElementById('btn');
  const target = document.getElementById('kore');
  const detail = myChart.config.data.datasets[0].backgroundColor[0];
  target.append(detail);

  btn.addEventListener('click', function(){
    const array = myChart.config.data.datasets[0];
    array.push('asdfasf')
  })
  
}