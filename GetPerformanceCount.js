function showResults() {
    const text = document.getElementById('inputText').value;
    const getDataSourceCount = (text.match(/\.getdatasource/g) || []).length;
    const getPlanningCount = (text.match(/getplanning/g) || []).length;

    document.getElementById('results').innerText = 
        `.getdatasource: ${getDataSourceCount}\ngetplanning: ${getPlanningCount}`;
}
