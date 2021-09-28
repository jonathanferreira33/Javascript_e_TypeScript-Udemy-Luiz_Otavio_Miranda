function recursiva(max) {
    if(max <= 0) return;
    max--;
    console.log(max);
    recursiva(max);
}


recursiva(10)