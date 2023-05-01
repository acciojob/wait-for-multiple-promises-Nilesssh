//your JS code here. If required.
function createPromise() {
  return new Promise((resolve, reject) => {
    const timeout = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(timeout);
    }, timeout * 1000);
  });
}

const promises = [createPromise(), createPromise(), createPromise()];

const table = document.getElementById("myTable");
const loadingRow = table.insertRow();

Promise.all(promises)
  .then((results) => {
    table.deleteRow(0);

    results.forEach((result, index) => {
      const row = table.insertRow();
      const promiseCell = row.insertCell();
      promiseCell.innerHTML = 'Loading...';
      promiseCell.innerHTML = `Promise ${index + 1}`;
      const timeCell = row.insertCell();
      timeCell.innerHTML = `${result} s`;
    });

    const totalRow = table.insertRow();
    const totalCell = totalRow.insertCell();
    totalCell.innerHTML = "Total";
    const totalTimeCell = totalRow.insertCell();
    const totalTime = results.reduce((acc, curr) => acc + curr, 0);
    totalTimeCell.innerHTML = `${totalTime.toFixed(3)} s`;
  })
  .catch((error) => {
    console.log(error);
  });