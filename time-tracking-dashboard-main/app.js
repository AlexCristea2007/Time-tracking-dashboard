    const daily = document.getElementById("daily_btn");
    const weekly = document.getElementById("weekly_btn");
    const monthly = document.getElementById("monthly_btn");

    const workTotalTime = document.getElementById("work_total_time");
    const playTotalTime = document.getElementById("play_total_time");
    const studyTotalTime = document.getElementById("study_total_time");
    const exerciseTotalTime = document.getElementById("exercise_total_time");
    const socialTotalTime = document.getElementById("social_total_time");
    const selfCareTotalTime = document.getElementById("self_care_total_time");

    const dateMeasurements = document.querySelectorAll(".date_measurement");

    const workPrevious = document.getElementById("work_previous_time");
    const playPrevious = document.getElementById("play_previous_time");
    const studyPrevious = document.getElementById("study_previous_time");
    const exercisePrevious = document.getElementById("exercise_previous_time");
    const socialPrevious = document.getElementById("social_previous_time");
    const selfCarePrevious = document.getElementById("self_care_previous_time");

function showDaily() {
    daily.style.color = "white";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";

    workTotalTime.innerText = "5hrs";
    playTotalTime.innerText = "1hrs";
    studyTotalTime.innerText = "0hrs";
    exerciseTotalTime.innerText = "1hrs";
    socialTotalTime.innerText = "1hrs";
    selfCareTotalTime.innerText = "0hrs";

    dateMeasurements.forEach(element => {
       element.textContent = "day"; 
    });   


    workPrevious.innerText = "7hrs";
    playPrevious.innerText = "2hrs";
    studyPrevious.innerText = "1hrs";
    exercisePrevious.innerText = "1hrs";
    socialPrevious.innerText = "3hrs";
    selfCarePrevious.innerText = "1hrs";

}

function showWeekly() {
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "white";
    monthly.style.color = "hsl(235, 45%, 61%)";

    workTotalTime.innerText = "32hrs";
    playTotalTime.innerText = "10hrs";
    studyTotalTime.innerText = "4hrs";
    exerciseTotalTime.innerText = "4hrs";
    socialTotalTime.innerText = "5hrs";
    selfCareTotalTime.innerText = "2hrs";

    dateMeasurements.forEach(element => {
       element.textContent = "week"; 
    });   

    workPrevious.innerText = "36hrs";
    playPrevious.innerText = "8hrs";
    studyPrevious.innerText = "7hrs";
    exercisePrevious.innerText = "5hrs";
    socialPrevious.innerText = "10hrs";
    selfCarePrevious.innerText = "2hrs";

}

function showMonthly() {
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "white";

    workTotalTime.innerText = "103hrs";
    playTotalTime.innerText = "23hrs";
    studyTotalTime.innerText = "13hrs";
    exerciseTotalTime.innerText = "11hrs";
    socialTotalTime.innerText = "21hrs";
    selfCareTotalTime.innerText = "7hrs";

    dateMeasurements.forEach(element => {
       element.textContent = "month"; 
    });   

    workPrevious.innerText = "128hrs";
    playPrevious.innerText = "29hrs";
    studyPrevious.innerText = "19hrs";
    exercisePrevious.innerText = "18hrs";
    socialPrevious.innerText = "23hrs";
    selfCarePrevious.innerText = "11hrs";

}