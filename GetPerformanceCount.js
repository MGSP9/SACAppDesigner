function showResults() {
    const text = document.getElementById('inputText').value;
    const getDataSourceMatches = text.match(/\w+\.getdatasource/g) || [];
    const getPlanningMatches = text.match(/\w+\.getplanning/g) || [];
    const getMemberMatches = text.match(/\w+\.getmember/g) || [];
    const getMembersMatches = text.match(/\w+\.getmembers/g) || []; // New line for .getmembers
    const getInputControlDataSourceMatches = text.match(/\w+\.getInputControlDataSource/g) || []; // New line for .getInputControlDataSource
    const setDimensionFilterMatches = text.match(/\w+\.setDimensionFilter(?!.*[{|}])/g) || []; // New line for .setDimensionFilter

    const getDataSourceCount = getDataSourceMatches.length;
    const getPlanningCount = getPlanningMatches.length;
    const getMemberCount = getMemberMatches.length;
    const getMembersCount = getMembersMatches.length; // New line for .getmembers
    const getInputControlDataSourceCount = getInputControlDataSourceMatches.length; // New line for .getInputControlDataSource
    const setDimensionFilterCount = setDimensionFilterMatches.length; // New line for .setDimensionFilter

    const uniqueGetDataSource = new Set(getDataSourceMatches);
    const uniqueGetPlanning = new Set(getPlanningMatches);
    const uniqueGetMember = new Set(getMemberMatches);
    const uniqueGetMembers = new Set(getMembersMatches); // New line for .getmembers
    const uniqueGetInputControlDataSource = new Set(getInputControlDataSourceMatches); // New line for .getInputControlDataSource
    const uniqueSetDimensionFilter = new Set(setDimensionFilterMatches); // New line for .setDimensionFilter

    const uniqueGetDataSourceCount = uniqueGetDataSource.size;
    const uniqueGetPlanningCount = uniqueGetPlanning.size;
    const uniqueGetMemberCount = uniqueGetMember.size;
    const uniqueGetMembersCount = uniqueGetMembers.size; // New line for .getmembers
    const uniqueGetInputControlDataSourceCount = uniqueGetInputControlDataSource.size; // New line for .getInputControlDataSource
    const uniqueSetDimensionFilterCount = uniqueSetDimensionFilter.size; // New line for .setDimensionFilter

    const getDataSourceTime = getDataSourceCount * 0.8;
    const getPlanningTime = getPlanningCount * 0.8;
    const getMemberTime = getMemberCount * 0.8;
    const getMembersTime = getMembersCount * 0.8; // New line for .getmembers
    const getInputControlDataSourceTime = getInputControlDataSourceCount * 0.8; // New line for .getInputControlDataSource
    const setDimensionFilterTime = setDimensionFilterCount * 0.5; // New line for .setDimensionFilter

    const uniqueGetDataSourceTime = uniqueGetDataSourceCount * 0.8;
    const uniqueGetPlanningTime = uniqueGetPlanningCount * 0.8;
    const uniqueGetMemberTime = uniqueGetMemberCount * 0.8;
    const uniqueGetMembersTime = uniqueGetMembersCount * 0.8; // New line for .getmembers
    const uniqueGetInputControlDataSourceTime = uniqueGetInputControlDataSourceCount * 0.8; // New line for .getInputControlDataSource
    const uniqueSetDimensionFilterTime = uniqueSetDimensionFilterCount * 0.5; // New line for .setDimensionFilter

    const totalSeconds = getDataSourceTime + getPlanningTime + getMemberTime + getMembersTime + getInputControlDataSourceTime + setDimensionFilterTime; // Updated line
    const uniqueSeconds = uniqueGetDataSourceTime + uniqueGetPlanningTime + uniqueGetMemberTime + uniqueGetMembersTime + uniqueGetInputControlDataSourceTime + uniqueSetDimensionFilterTime; // Updated line

document.getElementById('results').innerHTML = `
    <table class="table">
        <tr>
            <th><i class="fas fa-list"></i> Data Request Functions</th>
            <th><i class="fas fa-sort-numeric-up"></i> Times Used</th>
            <th><i class="fas fa-clock"></i> Total Time (seconds)</th>
            <th><i class="fas fa-sort-numeric-up-alt"></i> Unique Times Used</th>
            <th><i class="fas fa-stopwatch"></i> Unique Time (seconds)</th>
            <th><i class="fas fa-exclamation-circle"></i> Optimalisation Reason</th>
            <th><i class="fas fa-lightbulb"></i> Improvements</th>
        </tr>
            <tr class="datasource">
                <td>.getdatasource</td>
                <td>${getDataSourceCount}</td>
                <td>${getDataSourceTime.toFixed(2)}</td>
                <td>${uniqueGetDataSourceCount}</td>
                <td>${uniqueGetDataSourceTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="planning">
                <td>.getplanning</td>
                <td>${getPlanningCount}</td>
                <td>${getPlanningTime.toFixed(2)}</td>
                <td>${uniqueGetPlanningCount}</td>
                <td>${uniqueGetPlanningTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.getmember</td>
                <td>${getMemberCount}</td>
                <td>${getMemberTime.toFixed(2)}</td>
                <td>${uniqueGetMemberCount}</td>
                <td>${uniqueGetMemberTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.getmembers</td>
                <td>${getMembersCount}</td>
                <td>${getMembersTime.toFixed(2)}</td>
                <td>${uniqueGetMembersCount}</td>
                <td>${uniqueGetMembersTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.getInputControlDataSource</td>
                <td>${getInputControlDataSourceCount}</td>
                <td>${getInputControlDataSourceTime.toFixed(2)}</td>
                <td>${uniqueGetInputControlDataSourceCount}</td>
                <td>${uniqueGetInputControlDataSourceTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.setDimensionFilter</td>
                <td>${setDimensionFilterCount}</td>
                <td>${setDimensionFilterTime.toFixed(2)}</td>
                <td>${uniqueSetDimensionFilterCount}</td>
                <td>${uniqueSetDimensionFilterTime.toFixed(2)}</td>
                <td>1</td>
                <td>Use {id: “”, description: “”} instead</td>
            </tr>
            <tr class="total">
                <td>Total</td>
                <td>${getDataSourceCount + getPlanningCount + getMemberCount + getMembersCount + getInputControlDataSourceCount + setDimensionFilterCount}</td>
                <td>${totalSeconds.toFixed(2)}</td>
                <td>${uniqueGetDataSourceCount + uniqueGetPlanningCount + uniqueGetMemberCount + uniqueGetMembersCount + uniqueGetInputControlDataSourceCount + uniqueSetDimensionFilterCount}</td>
                <td>${uniqueSeconds.toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    `;

    document.getElementById('optimization').innerHTML = `
       <p class="optimized-text"><i class="fas fa-trophy"></i> Your code can be more optimized with ${totalSeconds.toFixed(2)} seconds.</p>
    `;
}
