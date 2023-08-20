import { Line } from 'react-chartjs-2';
import '../App';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var TempMax = [26, 34, 36, 32, 36, 30, 32, 38, 36, 32, 34, 38, 32, 32, 32, 34, 38, 40, 34, 36, 36, 38, 30, 36, 34, 36, 36, 32, 32, 36, 34, 34, 40, 33, 34, 36, 36, 33.9, 30, 34, 32, 34, 40, 34, 36, 36, 38, 34, 36, 30, 36, 36];
var TempMin = [20, 16.6, 20, 24, 26, 18, 22, 20, 22, 24, 16, 22, 24, 20, 22.6, 23.2, 26, 22, 18.6, 20, 18.8, 16, 20, 22, 20, 22, 18, 24, 16, 20, 18, 22, 26, 23.8, 23, 18, 18.4, 16.4, 18, 16, 24, 22, 24, 15.8, 22, 14, 24, 24, 18, 20, 16, 20];
var Provincias = ["A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Jaén", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"];


var mydata = {
    labels: Provincias,
    datasets: [
        {
            label: 'Maximas', // Nombre de las tarjetas
            data: TempMax, // Procedencia de datos
            tension: 0.5, // Curvatura de las lineas
            fill: true, // Relleno de la linea hacia abajo
            backgroundColor: 'rgba(255, 140, 0, 0.5)',
            pointRadius: 2, // Grosor del puntero
            pointBorderColor: 'rgba(255, 140, 0)',
            pointBackgroundColor: 'rgba(255, 140, 0)',
        },
        {
            label: 'Mínimas',
            data: TempMin,
            tension: 0.5,
            fill: true,
            backgroundColor: 'rgba(83, 171, 171, 0.3)',
            pointRadius: 2,
            pointBorderColor: 'rgba(0, 139, 139)',
            pointBackgroundColor: 'rgba(0, 139, 139)',
        },
    ],
};

var myoptions = {
    scales : {
        x: {
            ticks: { 
                autoSkip: false, // Habilitar el salto automático de etiquetas si hay muchas
                maxRotation: 60, // Rotación de las etiquetas en grados
                font: {
                    size: 10,
                },
            },
            grid: {
                display: false, //Quitar cuadricula de fondo
              }
        },
        y : {
            min : 10, // Numero por el cual empieza el eje
            max : 50 // Numero por el cual acaba el eje
        }
    }
};

export default function LinesChart() {
    return (
        <Line data={mydata} options={myoptions}/>
      );
    };