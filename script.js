// CONFIGURATION: Enter your confirmed WhatsApp Business number, including country code, digits only.
// Example format: 919876543210 (not an actual store number).
const WHATSAPP_NUMBER = '918148873436';
const products = [
 {name:'Sporty Ride-on Car',type:'cars',emoji:'🏎️',badge:'BATTERY RIDE-ON',description:'Sporty styling and big smiles for young drivers.'},
 {name:'Adventure 4×4 Jeep',type:'jeeps',emoji:'🚙',badge:'ADVENTURE SERIES',description:'Explore our exciting kids electric jeep collection.'},
 {name:'Kids Electric Bike',type:'bikes',emoji:'🏍️',badge:'LITTLE RIDERS',description:'Fun bike and scooter styles for little explorers.'},
 {name:'RC Racing Car',type:'rc',emoji:'🏎️',badge:'REMOTE CONTROL',description:'High-energy racing fun with remote-controlled cars.'},
 {name:'RC Monster Truck',type:'rc',emoji:'🚚',badge:'ACTION TOYS',description:'Big wheels and thrilling remote-control adventures.'},
 {name:'Creative Building Set',type:'learning',emoji:'🧩',badge:'LEARN THROUGH PLAY',description:'Creative toys for curious young minds.'}
];
const grid=document.getElementById('productGrid');
function renderProducts(type='all'){
 const shown=products.filter(p=>type==='all'||p.type===type);
 grid.innerHTML=shown.map(p=>`<article class="product-card"><div class="product-visual"><span class="product-badge">${p.badge}</span><span class="product-emoji" role="img" aria-label="Illustration of ${p.name}">${p.emoji}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><a href="#contact" data-interest="${p.name}">Enquire about this toy ↗</a></div></article>`).join('');
 grid.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{const select=document.getElementById('toyChoice');const name=a.dataset.interest;const type=name.includes('Jeep')?'Kids electric jeep':name.includes('Bike')?'Kids bike or scooter':name.includes('RC')?'Remote-control toy':name.includes('Building')?'Educational toy':'Battery ride-on car';select.value=type;document.getElementById('enquiryText').value=`I'm interested in the ${name}. Please share current models, colors, price and availability.`;}));
}
renderProducts();
document.querySelectorAll('.category').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProducts(btn.dataset.filter);document.getElementById('products').scrollIntoView({behavior:'smooth'});}));
const toggle=document.querySelector('.menu-toggle');const nav=document.getElementById('nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion && window.matchMedia('(hover: hover)').matches){document.addEventListener('pointermove',e=>{const card=e.target.closest('.product-card');if(!card)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(850px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-5px)`;});document.addEventListener('pointerout',e=>{const card=e.target.closest('.product-card');if(card&&!card.contains(e.relatedTarget))card.style.transform='';});}
function enquiry(){return `Hello DY TOY'S!\nI'm interested in: ${document.getElementById('toyChoice').value}\n${document.getElementById('enquiryText').value.trim()}\nPlease share availability and price.`;}
document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();if(/^\d{10,15}$/.test(WHATSAPP_NUMBER)){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry())}`,'_blank','noopener,noreferrer');}else{document.getElementById('formNote').textContent='WhatsApp is not configured yet. Use Copy Enquiry Text below and send it to the store.';document.getElementById('copyEnquiry').focus();}});
document.getElementById('copyEnquiry').addEventListener('click',async()=>{const t=enquiry();try{await navigator.clipboard.writeText(t);document.getElementById('copyEnquiry').textContent='Copied!';}catch{const area=document.getElementById('enquiryText');area.value=t;area.focus();area.select();document.getElementById('copyEnquiry').textContent='Select and copy the text above';}});
document.getElementById('year').textContent=new Date().getFullYear();
