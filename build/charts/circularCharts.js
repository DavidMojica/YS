"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const echarts = __importStar(require("echarts"));
// Función para inicializar y renderizar el gráfico
function initChart() {
    // Obtener el contenedor del gráfico
    const chartContainer = document.getElementById('chart');
    // Crear una instancia de gráfico
    const myChart = echarts.init(chartContainer);
    // Configurar opciones del gráfico
    const options = {
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
