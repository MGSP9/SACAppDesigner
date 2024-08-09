function showResults() {
    const text = document.getElementById('inputText').value;
    const getDataSourceMatches = text.match(/\w+\.getDataSource/g) || [];
    const getPlanningMatches = text.match(/\w+\.getPlanning/g) || [];
    const getMemberMatches = text.match(/\w+\.getMember/g) || [];
    const getMembersMatches = text.match(/\w+\.getMembers/g) || []; // New line for .getMembers
    const getInputControlDataSourceMatches = text.match(/\w+\.getInputControlDataSource/g) || []; // New line for .getInputControlDataSource
    const setDimensionFilterMatches = text.match(/\w+\.setDimensionFilter(?!.*[{|}])/g) || []; // New line for .setDimensionFilter

    const getDataSourceCount = getDataSourceMatches.length;
    const getPlanningCount = getPlanningMatches.length;
    const getMemberCount = getMemberMatches.length;
    const getMembersCount = getMembersMatches.length; // New line for .getMembers
    const getInputControlDataSourceCount = getInputControlDataSourceMatches.length; // New line for .getInputControlDataSource
    const setDimensionFilterCount = setDimensionFilterMatches.length; // New line for .setDimensionFilter

    const uniquegetDataSource = new Set(getDataSourceMatches);
    const uniquegetPlanning = new Set(getPlanningMatches);
    const uniquegetMember = new Set(getMemberMatches);
    const uniquegetMembers = new Set(getMembersMatches); // New line for .getMembers
    const uniqueGetInputControlDataSource = new Set(getInputControlDataSourceMatches); // New line for .getInputControlDataSource
    const uniqueSetDimensionFilter = new Set(setDimensionFilterMatches); // New line for .setDimensionFilter

    const uniquegetDataSourceCount = uniquegetDataSource.size;
    const uniquegetPlanningCount = uniquegetPlanning.size;
    const uniquegetMemberCount = uniquegetMember.size;
    const uniquegetMembersCount = uniquegetMembers.size; // New line for .getMembers
    const uniqueGetInputControlDataSourceCount = uniqueGetInputControlDataSource.size; // New line for .getInputControlDataSource
    const uniqueSetDimensionFilterCount = uniqueSetDimensionFilter.size; // New line for .setDimensionFilter

    const getDataSourceTime = getDataSourceCount * 0.8;
    const getPlanningTime = getPlanningCount * 0.8;
    const getMemberTime = getMemberCount * 0.8;
    const getMembersTime = getMembersCount * 0.8; // New line for .getMembers
    const getInputControlDataSourceTime = getInputControlDataSourceCount * 0.8; // New line for .getInputControlDataSource
    const setDimensionFilterTime = setDimensionFilterCount * 0.5; // New line for .setDimensionFilter

    const uniquegetDataSourceTime = uniquegetDataSourceCount * 0.8;
    const uniquegetPlanningTime = uniquegetPlanningCount * 0.8;
    const uniquegetMemberTime = uniquegetMemberCount * 0.8;
    const uniquegetMembersTime = uniquegetMembersCount * 0.8; // New line for .getMembers
    const uniqueGetInputControlDataSourceTime = uniqueGetInputControlDataSourceCount * 0.8; // New line for .getInputControlDataSource
    const uniqueSetDimensionFilterTime = uniqueSetDimensionFilterCount * 0.5; // New line for .setDimensionFilter

    const totalSeconds = (getDataSourceTime + getPlanningTime + getMemberTime + getMembersTime + getInputControlDataSourceTime) - 
                         (uniquegetDataSourceTime + uniquegetPlanningTime + uniquegetMemberTime + uniquegetMembersTime + uniqueGetInputControlDataSourceTime) + 
                         setDimensionFilterTime; // Updated line

    const uniqueSeconds = uniquegetDataSourceTime + uniquegetPlanningTime + uniquegetMemberTime + uniquegetMembersTime + uniqueGetInputControlDataSourceTime + uniqueSetDimensionFilterTime; // Updated line

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
                <td>.getDataSource</td>
                <td>${getDataSourceCount}</td>
                <td>${getDataSourceTime.toFixed(2)}</td>
                <td>${uniquegetDataSourceCount}</td>
                <td>${uniquegetDataSourceTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="planning">
                <td>.getPlanning</td>
                <td>${getPlanningCount}</td>
                <td>${getPlanningTime.toFixed(2)}</td>
                <td>${uniquegetPlanningCount}</td>
                <td>${uniquegetPlanningTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.getMember</td>
                <td>${getMemberCount}</td>
                <td>${getMemberTime.toFixed(2)}</td>
                <td>${uniquegetMemberCount}</td>
                <td>${uniquegetMemberTime.toFixed(2)}</td>
                <td>Data retrieval approximatly Cost 0.8 seconds</td>
                <td>Store in variables if used multiple times</td>
            </tr>
            <tr class="member">
                <td>.getMembers</td>
                <td>${getMembersCount}</td>
                <td>${getMembersTime.toFixed(2)}</td>
                <td>${uniquegetMembersCount}</td>
                <td>${uniquegetMembersTime.toFixed(2)}</td>
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
                <td>${uniquegetDataSourceCount + uniquegetPlanningCount + uniquegetMemberCount + uniquegetMembersCount + uniqueGetInputControlDataSourceCount + uniqueSetDimensionFilterCount}</td>
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
