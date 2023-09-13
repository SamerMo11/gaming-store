
let mob = document.getElementById('mob-only');
let pc1 = document.getElementById('pc1');
let pc2 = document.getElementById('pc2');
let pc3 = document.getElementById('pc3');
let pc4 = document.getElementById('pc4');
let pc5 = document.getElementById('pc5');
let pc6 = document.getElementById('pc6');
let pc7 = document.getElementById('pc7');
let pc8 = document.getElementById('pc8');
let pc9 = document.getElementById('pc9');
let pc10 = document.getElementById('pc10');

let pc = document.getElementById('pc-only');
let mob1 = document.getElementById('mob1');
let mob2 = document.getElementById('mob2');
let mob3 = document.getElementById('mob3');
let mob4 = document.getElementById('mob4');
let mob5 = document.getElementById('mob5');
let mob6 = document.getElementById('mob6');
let mob7 = document.getElementById('mob7');
let mob8 = document.getElementById('mob8');
let mob9 = document.getElementById('mob9');
let mob10 = document.getElementById('mob10');

let all = document.getElementById('all-games');
// let ps = document.getElementById('ps-only');




// -------------------Functions in order--------------------------

mob.addEventListener('click',function(){  
pc1.style.display='none';
pc2.style.display='none';
pc3.style.display='none';
pc4.style.display='none';
pc5.style.display='none';
pc6.style.display='none';
pc7.style.display='none';
pc8.style.display='none';
pc9.style.display='none';
pc10.style.display='none'; 

mob1.style.display='flex';
mob2.style.display='flex';
mob3.style.display='flex';
mob4.style.display='flex';
mob5.style.display='flex';
mob6.style.display='flex';
mob7.style.display='flex';
mob8.style.display='flex';
mob9.style.display='flex';
mob10.style.display='flex';

mob.style.boxShadow='0 0 30px var(--third-color)';
all.style.boxShadow='0 0 25px var(--primary-color) ';
pc.style.boxShadow='0 0 25px var(--primary-color) ';



})
// ----------------------PC-Games----------------------------


pc.onclick = function(){    
pc1.style.display='flex';
pc2.style.display='flex';
pc3.style.display='flex';
pc4.style.display='flex';
pc5.style.display='flex';
pc6.style.display='flex';
pc7.style.display='flex';
pc8.style.display='flex';
pc9.style.display='flex';
pc10.style.display='flex';

mob1.style.display='none';
mob2.style.display='none';
mob3.style.display='none';
mob4.style.display='none';
mob5.style.display='none';
mob6.style.display='none';
mob7.style.display='none';
mob8.style.display='none';
mob9.style.display='none';
mob10.style.display='none';

pc.style.boxShadow='0 0 30px var(--third-color)';
all.style.boxShadow='0 0 25px var(--primary-color) ';
mob.style.boxShadow='0 0 25px var(--primary-color) ';
// ps.style.boxShadow='0 0 25px var(--primary-color) ';
}
// ------------------------PLAYSTATION--------------------------------------
// ps.onclick = function(){    

// pc1.style.display='none';
// pc2.style.display='none';
// pc3.style.display='none';
// pc4.style.display='none';
// pc5.style.display='none';
// pc6.style.display='none';
// pc7.style.display='none';
// pc8.style.display='none';
// pc9.style.display='none';
// pc10.style.display='none';

// mob1.style.display='none';
// mob2.style.display='none';
// mob3.style.display='none';
// mob4.style.display='none';
// mob5.style.display='none';
// mob6.style.display='none';
// mob7.style.display='none';
// mob8.style.display='none';
// mob9.style.display='none';
// mob10.style.display='none';

// ps1.style.display='flex';
// ps2.style.display='flex';
// ps3.style.display='flex';
// ps4.style.display='flex';
// ps5.style.display='flex';
// ps6.style.display='flex';
// ps7.style.display='flex';
// ps8.style.display='flex';
// ps9.style.display='flex';
// ps10.style.display='flex';

// ps.style.boxShadow='0 0 30px var(--third-color)';
// all.style.boxShadow='0 0 25px var(--primary-color) ';
// mob.style.boxShadow='0 0 25px var(--primary-color) ';
// pc.style.boxShadow='0 0 25px var(--primary-color)';
// }


// ------------------------ALL-Games----------------------
all.onclick = function(){    
pc1.style.display='flex';
pc2.style.display='flex';
pc3.style.display='flex';
pc4.style.display='flex';
pc5.style.display='flex';
pc6.style.display='flex';
pc7.style.display='flex';
pc8.style.display='flex';
pc9.style.display='flex';
pc10.style.display='flex';

mob1.style.display='flex';
mob2.style.display='flex';
mob3.style.display='flex';
mob4.style.display='flex';
mob5.style.display='flex';
mob6.style.display='flex';
mob7.style.display='flex';
mob8.style.display='flex';
mob9.style.display='flex';
mob10.style.display='flex';

// ps1.style.display='flex';
// ps2.style.display='flex';
// ps3.style.display='flex';
// ps4.style.display='flex';
// ps5.style.display='flex';
// ps6.style.display='flex';
// ps7.style.display='flex';
// ps8.style.display='flex';
// ps9.style.display='flex';
// ps10.style.display='flex';

mob.style.boxShadow='0 0 25px var(--primary-color) ';
pc.style.boxShadow='0 0 25px var(--primary-color) ';
// ps.style.boxShadow='0 0 25px var(--primary-color)';
all.style.boxShadow='0 0 30px var(--third-color) ';
}


// ------------------------------------------------------------
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

function togglemenu(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}