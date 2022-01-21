




const fiver_order = document.getElementById('fiver_order');
const counter = document.querySelector('.counter');





fiver_order.addEventListener('submit' , function(e){

e.preventDefault();



let date =this.querySelector('input[type="date"]').value;
let time =this.querySelector('input[type="time"]').value;




 
setInterval(() =>{


    let start_time = new Date();
    let end_time = new Date(date +' ' + time);



    let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));


    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hours = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hours / 24);

    let hours = total_hours - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60 ) - (min * 60);



counter.innerHTML = `  ${total_day > 9 ? total_day : '0'+total_day} : ${hours > 9 ? hours : '0'+hours} : ${min > 9 ? min : '0'+min } : ${sec > 9 ? sec : '0'+sec}`




}, 1000 );





})


const add_product = document.getElementById('add_product');
const nai = document.getElementById('nai');

const add_box = document.querySelector('.product-add-box');









add_product.addEventListener('click', function(){


add_box.style.display = 'block';




})


nai.addEventListener('click' , function(){

    add_box.style.display='none';
});












const age_counter = document.getElementById('age_counter');
const counterr = document.querySelector('.counterr');





age_counter.addEventListener('submit' , function(e){

e.preventDefault();



let datee =this.querySelector('input[type="date"]').value;
let timee =this.querySelector('input[type="time"]').value;




 
setInterval(() =>{


    let start_timee = new Date();
    let end_timee = new Date(datee +' ' + timee);



    let timee_diff = Math.floor(Math.abs( start_timee.getTime() - end_timee.getTime()));


    let totall_sec = Math.floor(timee_diff / 1000);
    let totall_min = Math.floor(totall_sec / 60);
    let totall_hours = Math.floor(totall_min / 60);
    let totall_day = Math.floor(totall_hours / 24);
    let totall_month = Math.floor(totall_day / 30);
    let totall_years = Math.floor(totall_month / 12);


let monthA = totall_month - (totall_years * 12);
let dayA = totall_day - (totall_years * 12 * 30) - (monthA * 30);
let hoursA = totall_hours - (totall_years * 12 * 30 * 24 ) - ( monthA * 30 * 24) - (dayA * 24);
let minA = totall_min - (totall_years * 12 * 30 * 24 * 60 ) - ( monthA * 30 * 24 * 60) - (dayA * 24 * 60) - (hoursA * 60);
let secA = totall_sec - (totall_years * 12 * 30 * 24 * 60 * 60 ) - ( monthA * 30 * 24 * 60 * 60 ) - (dayA * 24 * 60 * 60) - (hoursA * 60 * 60) - (minA * 60); 












counterr.innerHTML = `Yeaes: ${totall_years} Month : ${monthA} Day :${dayA > 9 ? dayA : '0'+dayA} Hours : ${hoursA > 9 ? hoursA : '0'+hoursA} Min : ${minA > 9 ? minA : '0'+minA } Sec : ${secA > 9 ? secA : '0'+secA}`




}, 1000 );





})
