// from data.js
var tableData = data;

// YOUR CODE HERE!
//Loop through the array of objects
tableData.forEach((tableData) => {
        console.log(tableData);

//get the entries for each object in the array
        Object.entries(tableData).forEach(([key, value]) => {
        console.log(`Key: ${key} and Value ${value}`);
    });
});

// Draw table from 'jsData' array of objects
d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });
