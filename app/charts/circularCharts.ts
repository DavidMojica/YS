import * as echarts from 'echarts';

// Función para inicializar y renderizar el gráfico
function initChart() {
  // Obtener el contenedor del gráfico
  const chartContainer = document.getElementById('chart')!;

  // Crear una instancia de gráfico
  const myChart = echarts.init(chartContainer);

  // Configurar opciones del gráfico
  const options: echarts.EChartsOption = {
    title: {
      text: 'Ejemplo de Gráfico ECharts con TypeScript',
    },
    tooltip: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10],
    }],
  };

  // Aplicar opciones al gráfico
  myChart.setOption(options);
} 

// Llamar a la función para inicializar y renderizar el gráfico
initChart();
