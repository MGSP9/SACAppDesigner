        function showResults() {
            const text = document.getElementById('inputText').value;
            const getDataSourceMatches = text.match(/\w+\.getDataSource/g) || [];
            const getPlanningMatches = text.match(/\w+\.getPlanning/g) || [];
            const getMemberMatches = text.match(/\w+\.getMember/g) || [];
            const getMembersMatches = text.match(/\w+\.getMembers/g) || [];
            const getInputControlDataSourceMatches = text.match(/\w+\.getInputControlDataSource/g) || [];
            const setDimensionFilterMatches = text.match(/\w+\.setDimensionFilter(?!.*[{|}])/g) || [];

            const getDataSourceCount = getDataSourceMatches.length;
            const getPlanningCount = getPlanningMatches.length;
            const getMemberCount = getMemberMatches.length;
            const getMembersCount = getMembersMatches.length;
            const getInputControlDataSourceCount = getInputControlDataSourceMatches.length;
            const setDimensionFilterCount = setDimensionFilterMatches.length;

            const uniquegetDataSource = new Set(getDataSourceMatches);
            const uniquegetPlanning = new Set(getPlanningMatches);
            const uniquegetMember = new Set(getMemberMatches);
            const uniquegetMembers = new Set(getMembersMatches);
            const uniqueGetInputControlDataSource = new Set(getInputControlDataSourceMatches);
            const uniqueSetDimensionFilter = new Set(setDimensionFilterMatches);

            const uniquegetDataSourceCount = uniquegetDataSource.size;
            const uniquegetPlanningCount = uniquegetPlanning.size;
            const uniquegetMemberCount = uniquegetMember.size;
            const uniquegetMembersCount = uniquegetMembers.size;
            const uniqueGetInputControlDataSourceCount = uniqueGetInputControlDataSource.size;
            const uniqueSetDimensionFilterCount = uniqueSetDimensionFilter.size;

            const getDataSourceTime = getDataSourceCount * 0.8;
            const getPlanningTime = getPlanningCount * 0.8;
            const getMemberTime = getMemberCount * 0.8;
            const getMembersTime = getMembersCount * 0.8;
            const getInputControlDataSourceTime = getInputControlDataSourceCount * 0.8;
            const setDimensionFilterTime = setDimensionFilterCount * 0.5;

            const uniquegetDataSourceTime = uniquegetDataSourceCount * 0.8;
            const uniquegetPlanningTime = uniquegetPlanningCount * 0.8;
            const uniquegetMemberTime = uniquegetMemberCount * 0.8;
            const uniquegetMembersTime = uniquegetMembersCount * 0.8;
            const uniqueGetInputControlDataSourceTime = uniqueGetInputControlDataSourceCount * 0.8;
            const uniqueSetDimensionFilterTime = uniqueSetDimensionFilterCount * 0.5;

            const totalSeconds = (getDataSourceTime + getPlanningTime + getMemberTime + getMembersTime + getInputControlDataSourceTime) - 
                                 (uniquegetDataSourceTime + uniquegetPlanningTime + uniquegetMemberTime + uniquegetMembersTime + uniqueGetInputControlDataSourceTime) + 
                                 setDimensionFilterTime;

            const uniqueSeconds = uniquegetDataSourceTime + uniquegetPlanningTime + uniquegetMemberTime + uniquegetMembersTime + uniqueGetInputControlDataSourceTime + uniqueSetDimensionFilterTime;

            const rows = [
                { name: '.getDataSource', count: getDataSourceCount, time: getDataSourceTime, uniqueCount: uniquegetDataSourceCount, uniqueTime: uniquegetDataSourceTime },
                { name: '.getPlanning', count: getPlanningCount, time: getPlanningTime, uniqueCount: uniquegetPlanningCount, uniqueTime: uniquegetPlanningTime },
                { name: '.getMember', count: getMemberCount, time: getMemberTime, uniqueCount: uniquegetMemberCount, uniqueTime: uniquegetMemberTime },
                { name: '.getMembers', count: getMembersCount, time: getMembersTime, uniqueCount: uniquegetMembersCount, uniqueTime: uniquegetMembersTime },
                { name: '.getInputControlDataSource', count: getInputControlDataSourceCount, time: getInputControlDataSourceTime, uniqueCount: uniqueGetInputControlDataSourceCount, uniqueTime: uniqueGetInputControlDataSourceTime },
                { name: '.setDimensionFilter', count: setDimensionFilterCount, time: setDimensionFilterTime, uniqueCount: uniqueSetDimensionFilterCount, uniqueTime: uniqueSetDimensionFilterTime }
            ];

            let tableRows = rows.map(row => {
                const optimalisationReason = row.count === 0 ? '' : 'Data retrieval approximatly Cost 0.8 seconds';
                const improvements = row.count === 0 ? '' : 'Store in variables if used multiple times';
                return `
                    <tr class="member">
                        <td>${row.name}</td>
                        <td>${row.count}</td>
                        <td>${row.time.toFixed(2)}</td>
                        <td>${row.uniqueCount}</td>
                        <td>${row.uniqueTime.toFixed(2)}</td>
                        <td>${optimalisationReason}</td>
                        <td>${improvements}</td>
                    </tr>
                `;
            }).join('');

            tableRows += `
                <tr class="total">
                    <td>Total</td>
                    <td>${getDataSourceCount + getPlanningCount + getMemberCount + getMembersCount + getInputControlDataSourceCount + setDimensionFilterCount}</td>
                    <td>${totalSeconds.toFixed(2)}</td>
                    <td>${uniquegetDataSourceCount + uniquegetPlanningCount + uniquegetMemberCount + uniquegetMembersCount + uniqueGetInputControlDataSourceCount + uniqueSetDimensionFilterCount}</td>
                    <td>${uniqueSeconds.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            `;

            document.getElementById('results').innerHTML = `
                <h2 style="color: white;"><i class="fas fa-table"></i> Optimization Report</h2>
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
                    ${tableRows}
                </table>
            `;

            document.getElementById('optimization').innerHTML = `
               <p class="optimized-text" style="color: white;"><i class="fas fa-trophy"></i> Your code can be more optimized with ${totalSeconds.toFixed(2)} seconds.</p>
               <button class="button emphasized" onclick="getInTouch()">
                 <i class="fas fa-envelope"></i> Get in touch for a more detailed analysis
               </button>
               <button class="button de-emphasized" onclick="showNewTextField()">
                 <i class="fas fa-eye"></i> Show Text Field
               </button>
            `;

            // Scroll to the results section
            document.getElementById('optimization').scrollIntoView({ behavior: 'smooth' });
        }

        function getInTouch() {
            window.open("https://datachance.nl/contact", "_blank");
        }

function showNewTextField() {
    let text = document.getElementById('inputText').value;

    // Logic to replace duplicate method calls with variables
    const methods = ['getDataSource', 'getPlanning', 'getMember', 'getMembers', 'getInputControlDataSource'];
    methods.forEach(method => {
        const regex = new RegExp(`(\\w+)\\.${method}`, 'g');
        const matches = text.match(regex) || [];
        if (matches.length > 1) {
            const uniqueMatches = [...new Set(matches)];
            uniqueMatches.forEach(match => {
                const varName = `ds_${match.split('.')[0]}`;
                text = text.replace(new RegExp(`\\b${match}\\b`, 'g'), (m, offset) => {
                    if (offset === text.indexOf(m)) {
                        return `var ${varName} = ${m};\n${varName}`;
                    }
                    return varName;
                });
            });
        }
    });

    // Return the adapted text
    let newtext = text;
    document.getElementById('inputText').value = newtext;
    return newtext;
}

                
//     document.getElementById('inputText').value = newText;
//    document.getElementById('newInputText').value = text;
   // document.getElementById('newTextField').classList.remove('hidden');
  //  document.getElementById('inputText').classList.remove('hidden');
}
