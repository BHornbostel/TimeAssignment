function TellTime(hour, min, period){
    if (min>30){
    print("it's almost "+(hour+1));
}
else if(min<30){
    print("it's just after "+(hour));
}
else{
    print("it's half past "+(hour));
}
if(period.equals("AM")){
    print(" in the morning");
}
else{
    print(" in the evening")
}
}