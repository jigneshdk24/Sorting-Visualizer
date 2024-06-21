async function selectionSort(){
    let i, j, newMin, prevMin;
    let n  = array.length;
    let allBars = document.querySelectorAll(".bar");
    for(i=0; i<n-1; i++){
        prevMin = i;
        newMin = i;
        for(j=i+1; j<n; j++){
            if(newMin != prevMin){
            allBars[prevMin].style.background = "#F9F9F9";
            allBars[newMin].style.background = "#e61980";
            }else{
                allBars[newMin].style.background = "#e61980";
            }
            allBars[j].style.background = "#A084CA";
            await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
            if(array[j] < array[newMin]){
                prevMin = newMin;
                newMin = j;
            }
            allBars[j].style.background = "#F9F9F9";
        }
        if( newMin != i){
            allBars[i].style.background = 'blue';
            allBars[newMin].style.background = "#F9F9F9";
            [array[i], array[newMin]] = [array[newMin], array[i]];
            [allBars[newMin].style.height, allBars[i].style.height] = [allBars[i].style.height, allBars[newMin].style.height];
        }else{
            allBars[i].style.background = 'blue';
        }
    }
    allBars.forEach(x => {
        x.style.background = "#F9F9F9";
    })
    disableButton(2, false);
}

const selection = document.getElementById("selection");
selection.addEventListener("click", () => {
    disableButton(2, true);
    selectionSort();
});