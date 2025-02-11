import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//     }]
// }
new ChartJS(Doughnut, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const doughnutData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Friends Added',
            backgroundColor: '#F09D51',
            borderColor: '#F06543',
            borderWidth: 1,
            hoverBackgroundColor: '#F06543',
            hoverBorderColor: '#F06543',
            data: [7, 2, 12, 5, 17, 8, 4]
        },
    ], options: [ {
        scales: {
            y: {
              beginAtZero: true
            }
          }
    }]
};

const Dashboard = () => {
    return (
        <div style={{width: '500px'}}>
            <Doughnut data={doughnutData} options={doughnutData.options}/>
        </div>
    )
};

export default Dashboard;