import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//     }]
// }
// new ChartJS(Doughnut, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// const labels = Utils.months({count: 7});
const barData = {
  labels: ['Lunes', 'Martes', 'Miercules', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
    }], options: [ {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }]
};

const doughnutData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
        {
            label: 'Ganancias',
            backgroundColor: ['#16A34A', '#DC2626', '#16A34A', '#DC2626', '#16A34A', '#16A34A', '#DC2626', '#16A34A', '#16A34A', '#16A34A', '#16A34A', '#16A34A'],
            borderColor: '#3B4C55',
            borderWidth: 1,
            hoverBackgroundColor: '#C0C0C0',
            hoverBorderColor: '#3B4C55',
            data: [123, -22, 212, -45, 117, 78, -94, 88, 231, 154, 93, 65]
        },
    ], options: [ {
        scales: {
            y: {
              beginAtZero: true
            }
          }
    }]
};

const styles = {
    width: '500px',
    display: 'flex',
    alignItems: 'center', marginLeft: '100px', padding: '50px'}

const Dashboard = () => {
    return (
            <div style={styles}>
                <Doughnut data={doughnutData} options={doughnutData.options}/>
                <Bar data={barData} options={barData.options}/>
            </div>
    )
};

export default Dashboard;