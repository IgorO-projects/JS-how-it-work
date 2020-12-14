const findBestEmployee = function(employees) {

    // const listEmployees = Object.keys(employees);

    // let bestEmployee = listEmployees[0];

    // for(const key of listEmployees) {
    //     if(employees[key] > employees[bestEmployee])
    //     bestEmployee = key;
    // }
    
    // return bestEmployee;

    // Вариант Ромы.
    let employeeName;
    let completeTask = 0;

    for(const key in employees) {
      if (employees[key] > completeTask) {
        employeeName = key;
        completeTask = employees[key];
      }
    }
    return employeeName;
};