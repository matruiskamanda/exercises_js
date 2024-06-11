// ejercicio1
function doTask(task, callback) {
    console.log(`Starting ${task}...`);
    setTimeout(function() {
      console.log(`${task} completed!`);
      // Tu código aquí
    }, 2000);
  }
  
  doTask('Task 1', function() {
    console.log('Callback called after Task 1');
  });

// ejercicio 2
function downloadData(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(function() {
      const data = 'Downloaded data';
      console.log(`Download from ${url} completed`);
      // Tu código aquí
    }, 3000);
  }
  
  downloadData('https://example.com', function(data) {
    console.log('Data received:', data);
  });

// ejercicio 3
function processList(list, callback) {
    list.forEach(function(item, index) {
      // Tu código aquí
    });
  }
  
  const numbers = [1, 2, 3, 4, 5];
  processList(numbers, function(item, index) {
    console.log(`Item at index ${index} is ${item}`);
  });


// ejercicio 4
function task1(callback) {
    setTimeout(function() {
      console.log('Task 1 completed');
      // Tu código aquí
    }, 1000);
  }
  
  function task2(callback) {
    setTimeout(function() {
      console.log('Task 2 completed');
      // Tu código aquí
    }, 2000);
  }
  
  function task3(callback) {
    setTimeout(function() {
      console.log('Task 3 completed');
      // Tu código aquí
    }, 1500);
  }
  
  task1(function() {
    task2(function() {
      task3(function() {
        console.log('All tasks completed');
      });
    });
  });