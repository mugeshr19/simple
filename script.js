document.addEventListener("DOMContentLoaded", () => {
  // Static Data (Replace with API calls or user inputs)
  const stats = {
      totalProblems: 150,
      languagesUsed: ["JavaScript", "Python", "C++"],
      successRate: 87,
      problemsOverTime: [10, 20, 40, 60, 80, 100, 120, 150],
      categories: {
          "Dynamic Programming": 30,
          Graphs: 25,
          Strings: 45,
          Arrays: 50,
      },
  };

  // Update Stats
  document.getElementById("total-problems").textContent = stats.totalProblems;
  document.getElementById("languages-used").textContent = stats.languagesUsed.length;
  document.getElementById("success-rate").textContent = `${stats.successRate}%`;

  // Chart.js Configuration
  const ctx1 = document.getElementById("problemsSolvedChart").getContext("2d");
  const ctx2 = document.getElementById("categoryPerformanceChart").getContext("2d");

  // Problems Solved Over Time Chart
  new Chart(ctx1, {
      type: "line",
      data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [
              {
                  label: "Problems Solved",
                  data: stats.problemsOverTime,
                  borderColor: "#4CAF50",
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  borderWidth: 2,
              },
          ],
      },
      options: {
          responsive: true,
          plugins: {
              legend: { display: true },
          },
      },
  });

  // Category Performance Chart
  new Chart(ctx2, {
      type: "pie",
      data: {
          labels: Object.keys(stats.categories),
          datasets: [
              {
                  label: "Problems by Category",
                  data: Object.values(stats.categories),
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
              },
          ],
      },
      options: {
          responsive: true,
      },
  });
});
