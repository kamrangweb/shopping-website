// window.sr = ScrollReveal();
// sr.reveal('.anime-left',{
//     origin:'left',
//     duration:1000,
//     distance:'25rem',
//     delay:300
// });

// sr.reveal('.anime-right',{
//     origin:'right',
//     duration:1000,
//     distance:'25rem',
//     delay:600
// });

// sr.reveal('.anime-top',{
//     origin:'top',
//     duration:1000,
//     distance:'25rem',
//     delay:600
// });

// sr.reveal('.anime-bottom',{
//     origin:'bottom',
//     duration:1000,
//     distance:'25rem',
//     delay:600
// });

// ScrollReveal().reveal('.spotlight', {
//     distance: '0px',
//     opacity: 0.8
// })

// ScrollReveal().reveal('.ani1',{delay:250});
// ScrollReveal().reveal('.ani2',{delay:250});
// ScrollReveal().reveal('.ani3',{delay:500});
// ScrollReveal().reveal('.ani4',{delay:750});
// ScrollReveal().reveal('.ani5',{delay:1000});
// ScrollReveal().reveal('.ani6',{delay:1250});
// ScrollReveal().reveal('.ani7',{delay:1500});
// ScrollReveal().reveal('.ani8',{delay:1750});


// var menuitems = document.getElementById("menuitems");
// menuitems.style.maxHeight = '0px';
// function menuToggle() {
//     if(menuitems.style.maxHeight == '0px'){
//         menuitems.style.maxHeight = '200px';
//     }else{
//         menuitems.style.maxHeight = '0px';
//     }
// }

// const readingProgress = document.querySelector('#reading-progress-fill');
// document.addEventListener('scroll', function(e) {
// let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
// readingProgress.style.setProperty('width', w + '%');
// });


// function myFunction(x) {
//     x.classList.toggle("change");
// }


// /*Gallery*/

// for(i=0; i<document.getElementsByClassName('overlay').length; i++){
//     document.getElementsByClassName('overlay')[i].insertAdjacentHTML('beforeend', '<hr style="width: 20%;"/>')
// }

// /*Gallery*/
// /*discount*/

// function openCity(evt, cityName) {

//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";

//     var imgid = cityName +'1';
//     magnify(imgid, 3);
//     document.getElementsByClassName('img-magnifier-glass')[0].style.display='none'

// }
  
// document.getElementById("defaultOpen").click();

// function discountContent()
// {

// for(j=0; j<3; j++){

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const rndInt = Math.floor(Math.random() * 6) + 1

//     const bikes=["CANYON", "BMC", "SPECIALIZED"];
//     const percentage=["20%", "30%", "25%"];

//     var idValue='';
//     if(j==0){
//         idValue='card1'
//     }else if(j==1){
//         idValue='card2'
//     }else{
//         idValue='card3'
//     }



//     document.getElementsByClassName('discount-card')[0].innerHTML+=

//     `<div id="${idValue}" class="tabcontent">
//         <div class="coupon ">
//             <div class="discount-item ">
//                 <h3>${bikes[j]}</h3>
//             </div>
//             <div id='magnifier-container' class="img-magnifier-container">
//                 <img  onMouseOver='showGlass()' id=${idValue}1 class="card-image" src="assets/image/g${j+1}.jpg" alt="Bike" style="width:100%;">
//             </div>
//             `+
//             `<div class="discount-content">
//                 <h2><b><span>${percentage[j]}</span> OFF YOUR PURCHASE</b></h2>`+
//                 '<p>We offer bikes at budget-friendly prices</p>'+
//                 '<p>Promo Code: <span class="promo">BOH232</span></p>'+
//                 `<p class="expire">Expires: ${months[rndInt]}, ${rndInt*2}, ${currentDate.getFullYear()}</p> 
//             </div>
//         </div>
//     </div>`;

// }
// }

// window.onload=function(){
//     discountContent();
//     openCity(event,'card1');

// }


// function hideGlass(){
//     document.getElementsByClassName('img-magnifier-glass')[0].style.display='none'
// }

// function showGlass(){
//     document.getElementsByClassName('img-magnifier-glass')[0].style.display='block'
// }



// function magnify(imgID, zoom) {
//     var img, glass=null, w, h, bw;
//     img = document.getElementById(imgID);
//     glass = document.createElement("DIV");
//     glass.setAttribute("class", "img-magnifier-glass");

//     img.parentElement.classList.remove('img-magnifier-glass');
//     img.parentElement.insertBefore(glass, img);

//     if(document.getElementsByClassName('img-magnifier-glass').length==3){
//         document.getElementsByClassName('img-magnifier-glass')[1].remove();
//     }
//     for(i=0; i<document.getElementsByClassName('img-magnifier-glass').length;i++){
//         document.getElementsByClassName('img-magnifier-glass')[i].remove()
//     }


//     img.parentElement.insertBefore(glass, img);

//     let  numb =  document.getElementById("magnifier-container").childElementCount;


//     glass.style.backgroundImage = "url('" + img.src + "')";
//     glass.style.backgroundRepeat = "no-repeat";
//     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
//     bw = 3;
//     w = glass.offsetWidth / 2;
//     h = glass.offsetHeight / 2;

//     glass.addEventListener("mousemove", moveMagnifier);
//     img.addEventListener("mousemove", moveMagnifier);
//     glass.addEventListener("mouseout", hideGlass);


//     glass.addEventListener("touchmove", moveMagnifier);
//     img.addEventListener("touchmove", moveMagnifier);

//     const cardImg = document.getElementsByClassName('card-image')[0];



//     function moveMagnifier(e) {
//       var pos, x, y;

//       e.preventDefault();

//       pos = getCursorPos(e);
//       x = pos.x;
//       y = pos.y;


//       if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
//       if (x < w / zoom) {x = w / zoom;}
//       if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
//       if (y < h / zoom) {y = h / zoom;}
//       /*set the position of the magnifier glass:*/
//       glass.style.left = (x - w) + "px";
//       glass.style.top = (y - h) + "px";
//       /*display what the magnifier glass "sees":*/
//       glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
//     }
//     function getCursorPos(e) {
//       var a, x = 0, y = 0;
//       e = e || window.event;
//       /*get the x and y positions of the image:*/
//       a = img.getBoundingClientRect();
//       /*calculate the cursor's x and y coordinates, relative to the image:*/
//       x = e.pageX - a.left;
//       y = e.pageY - a.top;
//       /*consider any page scrolling:*/
//       x = x - window.pageXOffset;
//       y = y - window.pageYOffset;
//       return {x : x, y : y};
//     }
//   }


// /*blog*/




// for(k=0; k<3; k++){

//     const currentDate = new Date();
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const rndInt = Math.floor(Math.random() * 12) + 0
//     const randYear = Math.floor(Math.random() * 3) + 0

//     const blogHeading = ["New Design", "Modern Techniques", "High Comfort"];



//     document.getElementsByClassName('blog-item')[k].firstElementChild.innerHTML+=

//     `${months[rndInt]} ${rndInt+1}, ${currentDate.getFullYear()-randYear}`;

//     let m = (k+1).toString()
//     const second = document.querySelector('.blog-item:nth-child('+m+') h3');
//     second.innerHTML+=`${blogHeading[k]}`

//     second.style.marginLeft='0px'


// }

// let child = 1;
// const marginHead = () =>{ 

   
//     if(document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft=='0px'){

//         document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft='10px';      
//         document.querySelector('.blog-item:nth-child('+child+') h3').style.color='#5538ab'; 
//         document.querySelector('.blog-item:nth-child('+child+')').style.boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'; 

    
//     }else{
         
//         document.querySelector('.blog-item:nth-child('+child+') h3').style.marginLeft='0px';      
//         document.querySelector('.blog-item:nth-child('+child+') h3').style.color='rgb(232, 226, 226)'; 
//         document.querySelector('.blog-item:nth-child('+child+')').style.boxShadow='none'; 

//         child=child+1;   

//         if(child>3){
//             child=1;
//         }

//     }
    
// }



// setInterval(marginHead, 2000)

// /*blog*/


// =============================================
// 1. SCROLL ANIMATIONS (ScrollReveal)
// =============================================
const sr = ScrollReveal();

sr.reveal('.anime-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.anime-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.anime-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.anime-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// Spotlight (minimal opacity change)
sr.reveal('.spotlight', {
    distance: '0px',
    opacity: 0.8
});

// Staggered gallery items
const galleryDelays = [250, 250, 500, 750, 1000, 1250, 1500, 1750];
document.querySelectorAll('.ani1, .ani2, .ani3, .ani4, .ani5, .ani6, .ani7, .ani8')
    .forEach((el, index) => {
        sr.reveal(el, { delay: galleryDelays[index] || 300 });
    });

// =============================================
// 2. MOBILE MENU TOGGLE
// =============================================
const menuItems = document.querySelector('#menuitems');
const menuIcon  = document.querySelector('#menu-icon');

if (menuItems) {
    menuItems.style.maxHeight = '0px';

    function toggleMenu() {
        if (menuItems.style.maxHeight === '0px' || !menuItems.style.maxHeight) {
            menuItems.style.maxHeight = '200px'; // adjust based on your content
        } else {
            menuItems.style.maxHeight = '0px';
        }
    }

    // Attach to both functions if needed
    window.menuToggle = toggleMenu; // if still called from HTML onclick
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('change');
            toggleMenu();
        });
    }
}

// =============================================
// 3. READING PROGRESS BAR (optimized with passive listener)
// =============================================
const progressFill = document.querySelector('#reading-progress-fill');

if (progressFill) {
    const updateProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressFill.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
}

// =============================================
// 4. GALLERY – Add <hr> to overlays (once)
// =============================================
document.querySelectorAll('.overlay').forEach(overlay => {
    if (!overlay.querySelector('hr')) {
        overlay.insertAdjacentHTML('beforeend', '<hr style="width: 20%; opacity: 0.6;" />');
    }
});

// =============================================
// 5. DISCOUNT TABS + Magnifier
// =============================================
function openTab(evt, tabId) {
    document.querySelectorAll('.tabcontent').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tablinks').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) target.style.display = 'block';
    evt.currentTarget.classList.add('active');

    // Re-init magnifier for the active tab image
    const img = target.querySelector('.card-image');
    if (img) {
        magnify(img.id, 3);
        hideGlass(); // hide initially
    }
}

// Generate discount cards dynamically
function generateDiscountCards() {
    const container = document.querySelector('.discount-card-area') || document.querySelector('.discount-card');
    if (!container) return;

    const bikes       = ['CANYON', 'BMC', 'SPECIALIZED'];
    const percentages = ['20%', '30%', '25%'];
    const months      = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today       = new Date();

    container.innerHTML = ''; // clear previous content

    bikes.forEach((bike, i) => {
        const randMonth = Math.floor(Math.random() * 12);
        const expireDay = Math.floor(Math.random() * 28) + 1; // safe day

        const cardHTML = `
            <div id="card${i+1}" class="tabcontent" style="display: ${i === 0 ? 'block' : 'none'};">
                <div class="coupon">
                    <div class="discount-item">
                        <h3>${bike}</h3>
                    </div>
                    <div class="img-magnifier-container">
                        <img id="card${i+1}1" class="card-image" 
                             src="assets/image/g${i+1}.jpg" 
                             alt="${bike} bike discount" 
                             style="width:100%; display:block;">
                    </div>
                    <div class="discount-content">
                        <h2><b><span>${percentages[i]}</span> OFF YOUR PURCHASE</b></h2>
                        <p>We offer bikes at budget-friendly prices</p>
                        <p>Promo Code: <span class="promo">BOH232</span></p>
                        <p class="expire">Expires: ${months[randMonth]} ${expireDay}, ${today.getFullYear()}</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Activate first tab
    const defaultBtn = document.querySelector('#defaultOpen');
    if (defaultBtn) defaultBtn.click();
}

// Magnifier functions
function magnify(imgID, zoom = 3) {
    const img = document.getElementById(imgID);
    if (!img) return;

    // Clean up previous glasses
    document.querySelectorAll('.img-magnifier-glass').forEach(el => el.remove());

    const glass = document.createElement('div');
    glass.className = 'img-magnifier-glass';
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    const bw = 3;
    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    function moveMagnifier(e) {
        e.preventDefault();
        const pos = getCursorPos(e, img);
        let x = pos.x;
        let y = pos.y;

        // Prevent glass from going out of bounds
        if (x > img.width - (w / zoom))  x = img.width - (w / zoom);
        if (x < w / zoom)                 x = w / zoom;
        if (y > img.height - (h / zoom))  y = img.height - (h / zoom);
        if (y < h / zoom)                 y = h / zoom;

        glass.style.left = `${x - w}px`;
        glass.style.top  = `${y - h}px`;
        glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
    }

    function getCursorPos(e, img) {
        const rect = img.getBoundingClientRect();
        let x = (e.pageX || e.touches?.[0]?.pageX) - rect.left;
        let y = (e.pageY || e.touches?.[0]?.pageY) - rect.top;
        x -= window.pageXOffset;
        y -= window.pageYOffset;
        return { x, y };
    }

    ['mousemove', 'touchmove'].forEach(evt => {
        glass.addEventListener(evt, moveMagnifier);
        img.addEventListener(evt, moveMagnifier);
    });

    ['mouseout', 'touchend'].forEach(evt => {
        glass.addEventListener(evt, hideGlass);
    });
}

function showGlass() {
    const glass = document.querySelector('.img-magnifier-glass');
    if (glass) glass.style.display = 'block';
}

function hideGlass() {
    const glass = document.querySelector('.img-magnifier-glass');
    if (glass) glass.style.display = 'none';
}

// =============================================
// 6. BLOG CARDS – Dynamic dates & headings + animation
// =============================================
function initBlogCards() {
    const blogItems = document.querySelectorAll('.blog-item');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const headings = ["New Design", "Modern Techniques", "High Comfort"];
    const today = new Date();

    blogItems.forEach((item, i) => {
        // Date
        const randMonth = Math.floor(Math.random() * 12);
        const randYearOffset = Math.floor(Math.random() * 3);
        const dateStr = `${months[randMonth]} ${Math.floor(Math.random() * 28) + 1}, ${today.getFullYear() - randYearOffset}`;
        item.querySelector('span')?.insertAdjacentHTML('beforeend', dateStr);

        // Heading
        const h3 = item.querySelector('h3');
        if (h3) {
            h3.textContent = headings[i] || 'Blog Post';
            h3.style.marginLeft = '0px';
        }
    });
}

// Simple hover/animation cycle for blog items
let currentBlog = 1;
function animateBlogHeadings() {
    const items = document.querySelectorAll('.blog-item');
    if (items.length === 0) return;

    const prev = items[currentBlog - 1];
    if (prev) {
        const h3 = prev.querySelector('h3');
        h3.style.marginLeft = '0px';
        h3.style.color = '#e8e2e2';
        prev.style.boxShadow = 'none';
    }

    currentBlog = (currentBlog % items.length) + 1;
    const active = items[currentBlog - 1];
    if (active) {
        const h3 = active.querySelector('h3');
        h3.style.marginLeft = '10px';
        h3.style.color = '#5538ab';
        active.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px, rgba(10,37,64,0.35) 0px -2px 6px 0px inset';
    }
}

// =============================================
// INITIALIZATION
// =============================================
window.addEventListener('load', () => {
    generateDiscountCards();
    initBlogCards();

    // Start blog animation loop
    setInterval(animateBlogHeadings, 2000);

    // Default tab
    const defaultOpen = document.querySelector('#defaultOpen');
    if (defaultOpen) defaultOpen.click();
});
