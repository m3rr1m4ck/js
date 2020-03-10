let money = prompt("Ваш бюджет на месяц?"),
    data = prompt ("Введите дату в формате YYYY-MM-DD");

const appData = {
    budget: money,
    time: data,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let reqExp = prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch = prompt("Во сколько обойдется?");
    reqExp2 = prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch2 = prompt("Во сколько обойдется?");

appData.expenses.reqExp = howMuch;
appData.expenses.reqExp2 = howMuch2;

alert (appData.budget / 30);