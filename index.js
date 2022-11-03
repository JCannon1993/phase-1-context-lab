function createEmployeeRecord (employee){

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
        
    }
}

function createEmployeeRecords(employee){
    return employee.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent (event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(eventObj)
    return this
}

function hoursWorkedOnDate(date){
    const startD = this.timeInEvents.find(event => event.date === date)
    const endD = this.timeOutEvents.find(event => event.date === date)
    const workedT = (endD.hour-startD.hour) / 100
   return workedT
}

// calculates the amount earned on a given date
function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour

//     const startD = this.timeInEvents.find(event => event.date === date)
//     const endD = this.timeOutEvents.find(event => event.date === date)
//     const workedT = (endD.hour-startD.hour) / 100
//    return workedT * this.payPerHour
}






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function findEmployeeByFirstName(srcArray , firstName){
    let first = srcArray.find(element => element.firstName === firstName)
    return first
}
function calculatePayroll(employees){
    return employees.map(employee => allWagesFor.call(employee)).reduce((previousValue, currentValue)=> previousValue + currentValue, 0)
}

