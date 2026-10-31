/* =========================================================
   CORE 8 MEDIA PORTFOLIO — all content lives here.
   To add work: add media to a client's `media` list.
   r = width ÷ height of the file (reel 0.5625, 4:5 poster 0.8).
   Reels need three files: NAME-loop.mp4, NAME-cover.jpg, NAME-full.mp4
   ========================================================= */
var R = 0.5625, P = 0.8;

var CATEGORIES = [
  { id:'food-beverage', name:'Food & Beverage', hero:'stories', frame:'#B8321A', theme:{font:"'Fraunces'",label:'Fraunces Black Italic',style:'italic',weight:'800',dark:'#3A1410',light:'#FFF1E2',palette:['#3A1410','#B8321A','#FF6A4D','#F2A541','#0A47C9','#FFF1E2']},
    desc:'Food reels, event-night content and ads that fill tables.',
    clients:[
      { id:'stories', name:'Stories Bar & Kitchen', desc:'Live-music nights, happy hours, signature cocktails and food creatives for a bar & kitchen in RR Nagar.', media:[
        {v:'st-ambience',r:R,t:'Ambience'},{v:'st-cocktail-pour',r:R,t:'Cocktail pours'},{v:'st-swarg-sagar',r:R,t:'Swarg Sagar'},
        {v:'st-ladies-night',r:R,t:'Ladies’ Night offer'},{v:'st-food',r:R,t:'Food · Let the flavours'},{v:'st-cocktail',r:R,t:'Cocktail'},
        {v:'st-birthday',r:R,t:'Birthday offer'},{v:'st-friendship-day',r:R,t:'Friendship Day'},{v:'st-live-music',r:R,t:'Live music'},
        {v:'st-book-table',r:R,t:'Book the table'},
        {i:'st-poster-adhd-band.webp',r:P,t:'ADHD Band live'},{i:'st-poster-kaapi-noir.webp',r:P,t:'Kaapi Noir'},{i:'st-poster-live-suhas.webp',r:P,t:'Live music · Suhas'},
        {i:'st-poster-dragon-rouge.webp',r:P,t:'Dragon Rouge'},{i:'st-poster-happy-hours.webp',r:0.7048,t:'Happy Hours'},{i:'st-poster-tender-chicken.webp',r:P,t:'Tender Chicken'},
        {i:'st-poster-live-anagha.webp',r:P,t:'Live · Anagha'},{i:'st-poster-strawberry-thyme.webp',r:P,t:'Strawberry & Thyme'},{i:'st-poster-bite-into-delish.webp',r:P,t:'Bite into the Delish'},
        {i:'st-poster-hoppy-n-stormy.webp',r:P,t:'Hoppy N Stormy'},{i:'st-poster-pesto-pasta.webp',r:P,t:'Savour Every Swirl'},{i:'st-poster-independence-day.webp',r:P,t:'Independence Day'}]},
      { id:'beankind', name:'Beankind Coffee & Bakehouse', desc:'Barista and customer reels, menu-ordering stories and product posters for a coffee & bakehouse.', media:[
        {v:'bk-regular-customer',r:R,t:'POV: the regular customer'},{v:'bk-summer-heat',r:R,t:'Beat the heat'},{v:'bk-menu-order',r:R,t:'Ordering from the menu'},
        {v:'bk-latte-art',r:R,t:'Latte art'},{v:'bk-espresso-pull',r:R,t:'Espresso pull'},{v:'bk-iced-latte',r:R,t:'Iced latte'},{v:'bk-cooler-and-bite',r:R,t:'Cooler & a bite'},
        {i:'bk-poster-everyday-cup.webp',r:P,t:'Discover Your Everyday Cup'},{i:'bk-poster-table-spread.webp',r:P,t:'Café table spread'},{i:'bk-poster-croissant-caramel.webp',r:P,t:'Butter Croissant & Caramel Crème Brûlée'},
        {i:'bk-poster-pistachio-roll.webp',r:P,t:'Pistachio Cinnamon Roll'},{i:'bk-poster-sour-cream-pretzel.webp',r:P,t:'Sour Cream Pretzel'},{i:'bk-poster-tex-mex-fries.webp',r:P,t:'Cheesy Tex Mex Fries'},
        {i:'bk-poster-peach-iced-tea.webp',r:P,t:'Peach Iced Tea'},{i:'bk-poster-fathers-day.webp',r:0.7065,t:'Father’s Day offer'}]}
    ]},
  { id:'education', name:'Education', hero:'arena-animation', frame:'#2F5BFF', theme:{font:"'Space Grotesk'",label:'Space Grotesk Bold',style:'normal',weight:'700',dark:'#0B1E5B',light:'#EEF2FF',palette:['#0B1E5B','#2F5BFF','#8FA8FF','#13C2C2','#FFD23F','#EEF2FF']},
    desc:'Admission and enrolment campaigns for institutes and online courses.',
    clients:[
      { id:'arena-animation', name:'Arena Animation', desc:'Student-led reels, career posters and a Free Fire gaming event to drive admissions at Arena Animation Banashankari.', media:[
        {v:'ar-favorite-anime',r:R,t:'Favorite anime'},{v:'ar-career-in-animation',r:R,t:'Career in animation & VFX'},{v:'ar-ready-to-level-up',r:R,t:'Ready to level up'},
        {v:'ar-animation',r:R,t:'Animation, game design & more'},{v:'ar-admissions-open',r:R,t:'Admissions open'},{v:'ar-interior-designer',r:R,t:'Interior designer'},
        {i:'ar-poster-six-futures.webp',r:P,t:'One Institute. Six Futures.'},{i:'ar-poster-every-month.webp',r:P,t:'Every Month You Wait'},{i:'ar-poster-free-fire.webp',r:P,t:'Free Fire competition'},
        {i:'ar-poster-ai-wont-replace.webp',r:P,t:'AI Won’t Replace Creators'},{i:'ar-poster-create-next.webp',r:P,t:'What Will You Create Next?'},{i:'ar-poster-design-games.webp',r:P,t:'Don’t Just Play Games'},
        {i:'ar-poster-creativity-career.webp',r:P,t:'Turn Creativity into a Career'},{i:'ar-poster-reality.webp',r:P,t:'Reality'},{i:'ar-poster-game-designer.webp',r:P,t:'Game Designer'},
        {i:'ar-poster-animator.webp',r:P,t:'Animator'}]},
      { id:'svadhyaya', name:'Svadhyaya Institute of Learning', desc:'Course-launch posters and an accounting-terms story series for online Class 11 Accountancy coaching led by a Chartered Accountant.', media:[
        {i:'sv-online-classes.webp',r:P,t:'Online Accountancy Classes'},{i:'sv-recap-series.webp',r:R,t:'Quick Recap Series'},{i:'sv-reading-isnt-studying.webp',r:P,t:'Reading Isn’t Studying'},
        {i:'sv-five-mistakes.webp',r:P,t:'The 5 Mistakes'},{i:'sv-business-structures.webp',r:R,t:'Types of Business Structures'},
        {i:'sv-think-again.webp',r:P,t:'Think Again'},{i:'sv-confusion-confidence.webp',r:P,t:'From Confusion to Confidence'},{i:'sv-depreciation.webp',r:R,t:'Depreciation & Book Value'},
        {i:'sv-launching-course.webp',r:P,t:'Launching the course'},{i:'sv-what-is-account.webp',r:R,t:'What is an Account?'},{i:'sv-online-coaching.webp',r:P,t:'Online Accountancy Coaching'},
        {i:'sv-solvent-insolvent.webp',r:R,t:'Solvent, Insolvent & Bad Debt'},{i:'sv-prepare-exams.webp',r:P,t:'Prepare Smartly for Exams'},
        {i:'sv-regular-tests.webp',r:P,t:'Regular Tests'},{i:'sv-accounting-process.webp',r:R,t:'Accounting Process'},{i:'sv-academic-excellence.webp',r:P,t:'Academic Excellence'},
        {i:'sv-discounts-rebates.webp',r:R,t:'Discounts & Rebates'},{i:'sv-we-are-launching.webp',r:P,t:'We Are Launching'},{i:'sv-purchases-sales.webp',r:R,t:'Purchases & Sales'}]}
    ]},
  { id:'product-shoots', name:'Product Shoots', hero:'tango', frame:'#E8B931', theme:{font:"'Bebas Neue'",label:'Bebas Neue',ink:'#111111',style:'normal',weight:'400',dark:'#111111',light:'#FFF6DB',palette:['#111111','#E8B931','#E2572B','#E85A9B','#1F7A4D','#FFF6DB']},
    desc:'Studio and on-location product shoots: food, packaging, jewellery and lifestyle, shot and edited in-house.',
    clients:[
      { id:'tango', name:'Tango', desc:'Drinks, food and ambience reels for a bar & restaurant.', media:[
        {v:'tg-ambience',r:R,t:'Ambience'},{v:'tg-mocktail',r:R,t:'Mocktail pour'},{v:'tg-murgh-afghani',r:R,t:'Murgh Afghani'},
        {v:'tg-beer-chilly-sheek',r:R,t:'Beer & cheese chilly sheek'},{v:'tg-beer-teaser',r:R,t:'Beer teaser'}]},
      { id:'modern-kitchens', name:'Modern Kitchens', desc:'Snack product reels: boondi masala, banana chips and butter muruku.', media:[
        {v:'mk-boondi-masala',r:R,t:'Boondi masala'},{v:'mk-banana-chips',r:R,t:'Banana chips'},{v:'mk-butter-muruku',r:R,t:'Butter muruku'}]},
      { id:'hangyo', name:'Hangyo', desc:'Ice-cream product reels: cones, kulfi, tubs and festive specials.', media:[
        {v:'hg-berry-cream',r:R,t:'Berry & Cream'},{v:'hg-blueberry-cone',r:R,t:'Blueberry cone'},{v:'hg-kulfi',r:R,t:'Kulfi'},
        {v:'hg-sithaphal',r:R,t:'Sithaphal'},{v:'hg-choco',r:R,t:'Chocolate'},{v:'hg-sankranthi',r:R,t:'Sankranthi special'}]},
      { id:'agrileaf', name:'Agrileaf', desc:'Styled food photography for compostable areca-leaf bowls and takeaway packaging.', media:[
        {i:'al-grilled-salad.webp',r:1.5,t:'Grilled veg salad bowl'},{i:'al-takeaway-box.webp',r:1.5,t:'Takeaway box with lid'},{i:'al-round-bowl.webp',r:1.5,t:'Round salad bowl'},
        {i:'al-square-bowl.webp',r:1.5,t:'Square salad bowl'},{i:'al-fruit-tray.webp',r:1.5,t:'Fruit & salad tray'}]},
      { id:'pallavi-foley', name:'Pallavi Foley', desc:'Cinematic jewellery films for a fine-jewellery designer label.', media:[
        {v:'pf-wilde',r:R,t:'Wilde'},{v:'pf-celeb',r:R,t:'Celebration'},{v:'pf-wear',r:R,t:'Wear it your way'},{v:'pf-malli',r:R,t:'Malli'},
        {v:'pf-three',r:R,t:'Three ways'},{v:'pf-ind',r:R,t:'Indo'},{v:'pf-mal',r:R,t:'Mal'}]}
    ]},
  { id:'real-estate', name:'Real Estate & Properties', hero:'lucky-chiru', frame:'#E86F14', theme:{font:"'Cormorant Garamond'",label:'Cormorant Garamond Italic',style:'italic',weight:'600',dark:'#0E1A30',light:'#F4EDE3',palette:['#0E1A30','#2E4A6B','#A8612A','#E86F14','#C9A27A','#F4EDE3']},
    desc:'Walkthrough reels, launch posters and testimonials for homes, PGs and commercial spaces.',
    clients:[
      { id:'lucky-chiru', name:'Lucky Chiru Properties', desc:'Host-led walkthrough reels and launch posters for homes, buildings and commercial spaces.', media:[
        {v:'re-lc-complex',r:R,t:'LC Complex'},{v:'re-rr-nagar',r:R,t:'RR Nagar'},{v:'re-lc-commercial',r:R,t:'Commercial Complex'},{v:'re-kathriguppa',r:R,t:'Kathriguppa'},
        {i:'re-poster-magnifier.webp',r:P,t:'Luxury Living'},{i:'re-poster-commercial-sunset.webp',r:P,t:'Commercial Building'},{i:'re-poster-location-map.webp',r:P,t:'Life Made Easy'},
        {i:'re-poster-billboard.webp',r:P,t:'Luxury Living · Billboard'},{i:'re-poster-hourglass.webp',r:P,t:'The Right Time'},{i:'re-poster-we-build.webp',r:P,t:'We Build Them'},
        {i:'re-poster-modern-house.webp',r:P,t:'Modern House'},{i:'re-poster-commercial-blueprint.webp',r:P,t:'Brand New Commercial'},{i:'re-poster-commercial-scroll.webp',r:P,t:'Brand New Commercial'},
        {i:'re-poster-temple-bells.webp',r:P,t:'Ashish Temple Bells'}]},
      { id:'brindavan', name:'Brindavan Coliving', desc:'Host-led reels and room-tour creatives for a BTM Layout co-living space.', media:[
        {v:'bd-welcome',r:R,t:'Welcome to Brindavan'},{v:'bd-hey-siri',r:R,t:'Hey Siri'},{v:'bd-rooms',r:R,t:'Rooms tour'},{v:'bd-building',r:R,t:'The building'},
        {v:'bd-quick-game',r:R,t:'Quick game'},{v:'bd-location',r:R,t:'Location'},
        {i:'bd-poster-come-for-location.webp',r:P,t:'Come for the Location'},{i:'bd-poster-curtain-reveal.webp',r:P,t:'Fully Furnished Rooms'},{i:'bd-poster-room-to-live.webp',r:P,t:'Room to Live'},
        {i:'bd-poster-perfect-home.webp',r:P,t:'Your Perfect Home'},{i:'bd-poster-perfect-pg.webp',r:P,t:'Looking for the Perfect PG?'},{i:'bd-poster-phone-feed.webp',r:P,t:'Perfect PG · Feed'}]},
      { id:'shri', name:'Shri Ladies Premium PG', desc:'Resident testimonials and trust-first posters for a ladies-only PG.', media:[
        {v:'sh-testimonial-1',r:R,t:'Resident testimonial'},{v:'sh-testimonial-2',r:R,t:'Resident testimonial'},
        {i:'sh-poster-stop-scrolling.webp',r:P,t:'Stop Scrolling'},{i:'sh-poster-safe-living.webp',r:P,t:'Open the Door to Safe Living'},
        {i:'sh-poster-premium-facilities.webp',r:0.707,t:'Premium Facilities'},{i:'sh-poster-second-home.webp',r:P,t:'Your Second Home'},
        {i:'sh-poster-moving-to-bangalore.webp',r:P,t:'Moving to Bangalore?'},{i:'sh-poster-peace-of-mind.webp',r:P,t:'Peace of Mind'}]}
    ]},
  { id:'fashion-lifestyle', name:'Fashion & Lifestyle', hero:'lakira', frame:'#A3195B', theme:{font:"'Playfair Display'",label:'Playfair Display Italic',style:'italic',weight:'700',dark:'#4A0E2E',light:'#FBEFF4',palette:['#4A0E2E','#A3195B','#E85A9B','#C3A6FF','#C9A227','#FBEFF4']},
    desc:'Collection drops, lookbooks and creator content for labels and boutiques.',
    clients:[
      { id:'lakira', name:'Lakira Couture', desc:'Saree collection reels, a customer testimonial and the store’s grand-opening launch for a handpicked-saree boutique in RR Nagar.', media:[
        {v:'lk-testimonial',r:R,t:'Customer testimonial'},{v:'lk-pink-kanjeevaram',r:R,t:'Pink Kanjeevaram'},{v:'lk-kantha-work',r:R,t:'Kantha work'},
        {v:'lk-vintage',r:R,t:'Lakira Vintage collection'},{v:'lk-mysore-silk',r:R,t:'Mysore silk'},{v:'lk-coming-soon',r:R,t:'Coming soon'},
        {i:'lk-poster-grand-opening.webp',r:P,t:'Grand Opening invite'},{i:'lk-poster-ganesh-chaturthi.webp',r:P,t:'Ganesh Chaturthi'},{i:'lk-poster-hiring.webp',r:P,t:'We’re Hiring'}]},
      { id:'hoa', name:'House of Aarna', desc:'Saree reels, styling videos and festive-sale campaigns for a handpicked-saree store in Kalyan Nagar.', media:[
        {v:'hoa-mustard-silk',r:R,t:'Mustard silk styling'},{v:'hoa-embroidered',r:R,t:'Embroidered sarees'},{v:'hoa-linen',r:R,t:'Linen sarees'},
        {v:'hoa-red-saree',r:R,t:'Red saree'},{v:'hoa-ashada-sale',r:R,t:'Biggest Ashada Sale'},
        {i:'hoa-poster-festive-15-off.webp',r:P,t:'Festive Flat 15% Off'},{i:'hoa-poster-royal-blue-silk.webp',r:P,t:'Royal blue silk'},{i:'hoa-poster-kadiyal-silk.webp',r:P,t:'Kadiyal Silk'},
        {i:'hoa-poster-ashada-sale.webp',r:P,t:'Ashada Sale 25% Off'},{i:'hoa-poster-black-zari.webp',r:P,t:'Black zari saree'},{i:'hoa-poster-blue-kanjeevaram.webp',r:P,t:'Blue Kanjeevaram'},
        {i:'hoa-poster-red-striped-silk.webp',r:P,t:'Red striped silk'}]}
    ]},
  { id:'products-d2c', name:'Products & D2C', hero:'supermomz', frame:'#2E9A52', theme:{font:"'Fredoka'",label:'Fredoka Bold',style:'normal',weight:'700',dark:'#13432B',light:'#FFF7E0',palette:['#13432B','#2E9A52','#F7B500','#E2452B','#6B2FA0','#FFF7E0']},
    desc:'Product shoots, unboxing and creator content that sells online.',
    clients:[
      { id:'supermomz', name:'Supermomz', desc:'Product reels, retailer and customer testimonials and launch creatives for a ready-to-cook idly & dosa batter brand.', media:[
        {v:'sm-dosa-capital',r:R,t:'Bengaluru, the dosa capital'},{v:'sm-breakfast-stress',r:R,t:'Breakfast stress?'},{v:'sm-retailer-testimonial',r:R,t:'Retailer testimonials'},
        {v:'sm-store-testimonial',r:R,t:'Store testimonials'},{v:'sm-dosa-made-easy',r:R,t:'Dosa & idly made easy'},
        {i:'sm-poster-one-solution.webp',r:P,t:'One Solution for Breakfast'},{i:'sm-poster-should-i-order.webp',r:P,t:'Should I Order Out?'},{i:'sm-poster-soft-inside.webp',r:P,t:'Soft Inside, Crisp Outside'},
        {i:'sm-poster-why-i-love.webp',r:P,t:'Why I Love Supermomz'},{i:'sm-poster-morning-shortcut.webp',r:P,t:'Your Morning Shortcut'},{i:'sm-poster-healthy-breakfast.webp',r:P,t:'Healthy Breakfast'},
        {i:'sm-poster-one-pack.webp',r:P,t:'One Pack. Infinite Possibilities.'}]},
      { id:'flavor-bag', name:'The Flavor Bag', desc:'Food-styling reels and product creatives for a homemade pickles, podi and snacks brand.', media:[
        {v:'fb-ganesha-feast',r:R,t:'Festive feast'},{v:'fb-avakaaya',r:R,t:'Avakaaya pickle'},{v:'fb-curd-rice',r:R,t:'Curd rice & tomato pickle'},
        {v:'fb-three-signs',r:R,t:'Three signs you’re craving'},{v:'fb-chutney-podi',r:R,t:'Idli & chutney podi'},{v:'fb-chakli',r:R,t:'Grab a chakli'},{v:'fb-fries-dip',r:R,t:'Fries & dip'},
        {i:'fb-poster-over-pickle.webp',r:P,t:'Friendships over pickle'},{i:'fb-poster-tradition-in-every-jar.webp',r:P,t:'Tradition in Every Jar'},{i:'fb-poster-bisibelebath.webp',r:P,t:'Bisibelebath powder'},
        {i:'fb-poster-vangibath.webp',r:P,t:'Vangibath powder'},{i:'fb-poster-pickles.webp',r:P,t:'Pickles range'},{i:'fb-poster-red-chilly.webp',r:P,t:'Red Chilly Pickle'}]},
      { id:'vriddhi-games', name:'Vriddhi Games', desc:'Launch and festive campaigns for “Know Sanatana Dharma: Guess Who Am I”, a family card game on India’s epics.', media:[
        {i:'vg-poster-phone-can-wait.webp',r:P,t:'The Phone Can Wait'},{i:'vg-poster-can-you-guess.webp',r:P,t:'Can You Guess?'},{i:'vg-poster-wisdom-has-roots.webp',r:P,t:'Wisdom Has Roots'},
        {i:'vg-poster-family-group-chat.webp',r:P,t:'The Original Family Group Chat'},{i:'vg-poster-ancient-wisdom.webp',r:P,t:'Ancient Wisdom Meets Modern Play'},{i:'vg-poster-three-generations.webp',r:P,t:'One Card, Three Generations'},
        {i:'vg-poster-play-guess-discover.webp',r:P,t:'Play. Guess. Discover.'},{i:'vg-poster-every-character.webp',r:P,t:'Every Character Unforgettable'},{i:'vg-poster-every-card-story.webp',r:P,t:'Every Card Unlocks a Story'},
        {i:'vg-poster-epics-fun.webp',r:P,t:'Make Learning the Epics Fun'},{i:'vg-poster-learn-naturally.webp',r:P,t:'Learn the Epics Naturally'},{i:'vg-poster-exciting-challenge.webp',r:P,t:'An Exciting Challenge'},
        {i:'vg-poster-why-kids-love.webp',r:P,t:'Why Kids Love This Game'},{i:'vg-poster-ganesh-chaturthi.webp',r:P,t:'Ganesh Chaturthi'},{i:'vg-poster-janmashtami.webp',r:P,t:'Krishna Janmashtami'},
        {i:'vg-poster-raksha-bandhan.webp',r:P,t:'Raksha Bandhan'}]}
    ]},
  { id:'travel-fitness', name:'Travel & Fitness', hero:'sreenidhi', frame:'#1E78D2', theme:{font:"'Anton'",label:'Anton',style:'normal',weight:'400',dark:'#0A1A2F',light:'#EAF7FA',palette:['#0A1A2F','#1E78D2','#7FD8E0','#E53935','#F9A825','#EAF7FA']},
    desc:'Social content and lead campaigns for travel and fitness brands.',
    clients:[
      { id:'sreenidhi', name:'Sreenidhi Holidays', desc:'Host-led Kannada destination reels and tour-package posters for a Malleshwaram travel agency.', media:[
        {v:'sh2-kashi-bhairav',r:R,t:'Kashi · Kaal Bhairav'},{v:'sh2-assam-meghalaya',r:R,t:'Assam & Meghalaya trip'},{v:'sh2-puri-pipili',r:R,t:'Puri · Pipili applique art'},
        {v:'sh2-kashi-trip',r:R,t:'Kashi trip plan'},{v:'sh2-puri-trip',r:R,t:'Puri trip plan'},{v:'sh2-rajasthan',r:R,t:'Rajasthan trip'},
        {i:'sh2-poster-golden-triangle.webp',r:P,t:'Golden Triangle · 6D/5N'},{i:'sh2-poster-mantralayam-tour.webp',r:P,t:'One Day Mantralayam Tour'},{i:'sh2-poster-mantralayam-itinerary.webp',r:P,t:'Mantralayam itinerary'}]},
      { id:'silhouette', name:'Silhouette Fitness', desc:'Member transformation testimonials and fitness-tip creatives for a Banashankari gym.', media:[
        {v:'sf-nagesh',r:R,t:'Member story · 10 kg down'},{i:'sf-poster-hydration.webp',r:P,t:'Drink 500 ml before workout'},
        {v:'sf-vivek',r:R,t:'Member story · senior citizen'},{i:'sf-poster-did-you-know.webp',r:P,t:'Did You Know?'},{v:'sf-vikram',r:R,t:'Member story · regular visitor'}]}
    ]}
];

(function(){
  var mobile = window.matchMedia('(max-width:640px)');
  var playSvg = '<span class="play"><svg viewBox="0 0 24 24" fill="#121214"><path d="M7 4.5v15l13-7.5z"/></svg></span>';
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
  function counts(media){var v=0;media.forEach(function(m){if(m.v)v++});return {reels:v,posters:media.length-v};}
  function label(media){var c=counts(media),a=[],word=isWide(media)?'photo':'poster';if(c.reels)a.push(c.reels+(c.reels>1?' reels':' reel'));if(c.posters)a.push(c.posters+' '+word+(c.posters>1?'s':''));return a.join(' · ');}

  /* rows of near-equal size so no row stretches oversized */
  function balanced(list, per){
    var n=list.length; if(!n) return [];
    var rows=Math.ceil(n/per), base=Math.floor(n/rows), extra=n%rows, out=[], k=0;
    for(var r=0;r<rows;r++){var s=base+(r<extra?1:0);out.push(list.slice(k,k+s));k+=s;}
    return out;
  }
  /* category pages: every reel first, then every poster */
  function grouped(media){var v=[],p=[];media.forEach(function(m,i){(m.v?v:p).push(i)});return v.concat(p);}
  /* spread reels evenly between posters for a nicer rhythm */
  function mix(media){
    var v=[],p=[],out=[];media.forEach(function(m,i){(m.v?v:p).push(i)});
    var nv=v.length,np=p.length,iv=0,ip=0;
    while(iv<nv||ip<np){
      var needV = nv && (ip>=np || (iv+0.5)/nv <= (ip+0.5)/np);
      out.push(needV ? v[iv++] : p[ip++]);
    }
    return out;
  }
  function isWide(media){var w=0;media.forEach(function(m){if(m.r>1)w++});return media.length&&w>media.length/2;}
  function perRow(){return mobile.matches?3:(window.innerWidth<1000?4:5);}
  function tile(m, attrs, button){
    var s='flex-grow:'+m.r+';aspect-ratio:'+m.r, tag=button?'button':'span';
    var inner = m.v
      ? '<video src="'+m.v+'-loop.mp4" poster="'+m.v+'-cover.jpg" muted loop playsinline preload="none" aria-hidden="true"></video>'+playSvg
      : '<img src="'+m.i+'" alt="'+esc(m.t)+'" loading="lazy">';
    return '<'+tag+' class="tile" style="'+s+'" '+(attrs||'')+'>'+inner+'</'+tag+'>';
  }
  function rowsHtml(rows){return rows.map(function(r){return '<div class="row">'+r.join('')+'</div>'}).join('');}

  /* ---------- HOME: brand-board bento per category ---------- */
  function themeFont(t){return 'font-family:'+t.font+',var(--display);font-style:'+t.style+';font-weight:'+t.weight;}
  function paletteTile(t,cls){
    return '<div class="bt pal '+(cls||'')+'">'+t.palette.map(function(h,i){
      var lightSw=(i===t.palette.length-1)||/^#(F|E)/i.test(h);
      return '<span style="background:'+h+';color:'+(lightSw?t.dark:'#fff')+';z-index:'+(i+1)+'">'+h.toUpperCase()+'</span>';
    }).join('')+'</div>';
  }
  function boardMedia(m,cls){
    var s='aspect-ratio:'+m.r;
    if(m.v) return '<div class="bt med '+(cls||'')+'" style="'+s+'"><video src="'+m.v+'-loop.mp4" poster="'+m.v+'-cover.jpg" muted loop playsinline preload="none" aria-hidden="true"></video><span class="play"><svg viewBox="0 0 24 24" fill="#121214"><path d="M7 4.5v15l13-7.5z"/></svg></span></div>';
    return '<div class="bt med '+(cls||'')+'" style="'+s+'"><img src="'+m.i+'" alt="'+esc(m.t)+'" loading="lazy"></div>';
  }
  function renderHome(el){
    el.innerHTML = CATEGORIES.map(function(c){
      var t=c.theme, all=[], reels=[], posts=[];
      c.clients.forEach(function(x){x.media.forEach(function(m){all.push(m)});});
      var src=c.hero?c.clients.filter(function(x){return x.id===c.hero}):c.clients;
      /* round-robin across clients so every board shows more than one brand */
      var rr=function(test){var piles=src.map(function(x){return x.media.filter(test)}),out=[],k=0,more=true;
        while(more){more=false;piles.forEach(function(p){if(p[k]){out.push(p[k]);more=true;}});k++;}return out;};
      reels=rr(function(m){return m.v}); posts=rr(function(m){return !m.v});
      var pool=posts.concat(reels);
      var used=[];function take(list){for(var q=0;q<list.length;q++){if(used.indexOf(list[q])<0){used.push(list[q]);return list[q];}}return null;}
      var mB=take(reels)||take(posts), mA=take(posts), mC=take(posts)||take(reels);
      var mD=reels[1]||posts[2], mE=posts[2]||reels[2];
      var names=c.clients.map(function(x){return x.name});
      var name='<div class="bt nm" style="background:'+t.dark+';color:'+t.light+'"><b style="'+themeFont(t)+'">'+esc(c.name.replace(' & Properties',''))+'</b><small>'+c.clients.length+' clients · '+all.length+' pieces</small></div>';
      var type='<div class="bt ty" style="background:linear-gradient(160deg,'+t.palette[2]+','+c.frame+');color:'+t.light+'"><b style="'+themeFont(t)+'">Aa</b><small>'+esc(t.label)+'</small></div>';
      var cols = mobile.matches
        ? '<div class="bc">'+(mA?boardMedia(mA):'')+paletteTile(t)+'</div>'+
          '<div class="bc">'+(mB?boardMedia(mB):'')+name+'</div>'
        : '<div class="bc">'+(mA?boardMedia(mA):'')+paletteTile(t)+'</div>'+
          '<div class="bc">'+(mB?boardMedia(mB):'')+name+'</div>'+
          '<div class="bc">'+type+(mC?boardMedia(mC):'')+'</div>';
      return '<a class="card rv" href="'+c.id+'.html" aria-label="'+esc(c.name)+': see the work">'+
        '<div class="frame board'+(mobile.matches?' two':'')+'" style="background:'+c.frame+'">'+cols+'<span class="go" aria-hidden="true">→</span></div>'+
        '<div class="meta"><h3>'+esc(c.name)+'</h3><span>'+c.clients.length+' CLIENTS</span></div>'+
        '<p class="desc">'+esc(names.join(' · '))+'</p>'+
        '<p class="sub">'+(all.length?label(all).toUpperCase():'REELS · CREATIVES · ADS')+'</p></a>';
    }).join('');
    afterRender(el);
  }

  /* ---------- CATEGORY PAGE ---------- */
  function renderCategory(el, id){
    var idx=0; for(var k=0;k<CATEGORIES.length;k++) if(CATEGORIES[k].id===id) idx=k;
    var c=CATEGORIES[idx], next=CATEGORIES[(idx+1)%CATEGORIES.length];
    document.title = c.name+' — Core 8 Media';
    var html =
      '<div class="cat-top">'+
        '<a class="back" href="index.html#work">← All projects</a>'+
        '<p class="kicker">CATEGORY '+('0'+(idx+1)).slice(-2)+' / '+('0'+CATEGORIES.length).slice(-2)+'</p>'+
        '<h1 style="'+themeFont(c.theme)+';color:'+(c.theme.ink||c.frame)+'">'+esc(c.name)+'</h1><p>'+esc(c.desc)+'</p>'+
        '<div class="swatches" aria-label="Category palette">'+c.theme.palette.map(function(h){return '<span><i style="background:'+h+'"></i>'+h.toUpperCase()+'</span>'}).join('')+'<span class="tf"><b style="'+themeFont(c.theme)+'">Aa</b>'+esc(c.theme.label)+'</span></div>'+
        '<div class="jump">'+c.clients.map(function(x){return '<a href="#'+x.id+'">'+esc(x.name)+'</a>'}).join('')+'</div>'+
      '</div>';
    html += c.clients.map(function(x){
      /* reels first, then posters, each in their own rows */
      var mk=function(i){var m=x.media[i];return tile(m,'data-c="'+x.id+'" data-k="'+i+'" aria-label="'+(m.v?'Play reel: ':'View poster: ')+esc(m.t)+'"',true)};
      var g=grouped(x.media), vi=g.filter(function(i){return x.media[i].v}), pi=g.filter(function(i){return !x.media[i].v});
      var pPer=isWide(pi.map(function(i){return x.media[i]}))?(mobile.matches?1:3):perRow();
      var rows=balanced(vi.map(mk),perRow()).concat(balanced(pi.map(mk),pPer));
      var frame = g.length
        ? '<div class="frame" style="background:'+c.frame+'">'+rowsHtml(rows)+'</div>'
        : '<div class="frame soon" style="background:'+c.frame+'"><p>Work from '+esc(x.name)+' is being added.</p></div>';
      return '<section class="client rv" id="'+x.id+'">'+
        '<div class="meta"><h3>'+esc(x.name)+'</h3><span>'+(x.media.length?label(x.media).toUpperCase():c.name.toUpperCase())+'</span></div>'+
        '<p class="desc">'+esc(x.desc)+'</p>'+frame+'</section>';
    }).join('');
    html += '<a class="next rv" href="'+next.id+'.html"><span><small>NEXT CATEGORY</small><b>'+esc(next.name)+'</b></span><i aria-hidden="true">→</i></a>';
    el.innerHTML=html;
    el.querySelectorAll('button.tile').forEach(function(t){
      t.addEventListener('click',function(){openViewer(t.getAttribute('data-c'),+t.getAttribute('data-k'),c);});
    });
    afterRender(el);
    if(location.hash){var tgt=document.getElementById(location.hash.slice(1));if(tgt)setTimeout(function(){tgt.scrollIntoView()},50);}
  }

  /* ---------- VIEWER ---------- */
  var viewer=document.getElementById('viewer'), stage, count, list=[], pos=0, name='', last=null;
  function openViewer(clientId, k, cat){
    var cl; cat.clients.forEach(function(x){if(x.id===clientId)cl=x});
    var order=grouped(cl.media); list=order.map(function(i){return cl.media[i]}); pos=order.indexOf(k); name=cl.name;
    last=document.activeElement; viewer.classList.add('open'); document.body.classList.add('lock'); show(); document.getElementById('vClose').focus();
  }
  function show(){
    var m=list[pos]; stage.innerHTML='';
    if(m.v){var v=document.createElement('video');v.src=m.v+'-full.mp4';v.poster=m.v+'-cover.jpg';v.controls=true;v.playsInline=true;v.autoplay=true;v.setAttribute('aria-label',m.t);stage.appendChild(v);var pr=v.play();if(pr&&pr.catch)pr.catch(function(){});}
    else{var im=document.createElement('img');im.src=m.i;im.alt=m.t;stage.appendChild(im);}
    count.textContent=name+'  ·  '+(pos+1)+' / '+list.length;
  }
  function closeViewer(){viewer.classList.remove('open');document.body.classList.remove('lock');stage.innerHTML='';if(last)last.focus();}
  function step(d){pos=(pos+d+list.length)%list.length;show();}
  if(viewer){
    stage=document.getElementById('stage'); count=document.getElementById('vCount');
    document.getElementById('vClose').onclick=closeViewer;
    document.getElementById('vPrev').onclick=function(){step(-1)};
    document.getElementById('vNext').onclick=function(){step(1)};
    viewer.addEventListener('click',function(e){if(e.target===viewer)closeViewer();});
    document.addEventListener('keydown',function(e){if(!viewer.classList.contains('open'))return;if(e.key==='Escape')closeViewer();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);});
    var sx=null;viewer.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
    viewer.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)step(dx<0?1:-1);sx=null;});
  }

  /* ---------- shared behaviour ---------- */
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches, vo=null;
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08}):null;
  function afterRender(root){
    document.querySelectorAll('.rv:not(.in)').forEach(function(el){io?io.observe(el):el.classList.add('in')});
    if(reduce||!('IntersectionObserver' in window))return;
    if(vo)vo.disconnect();
    vo=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause();})},{threshold:.2});
    root.querySelectorAll('video').forEach(function(v){vo.observe(v)});
  }
  if(reduce){var hv=document.querySelector('.hero video');if(hv){hv.removeAttribute('autoplay');hv.pause();}}

  /* Rule of 7: accordion + progress rail */
  (function(){
    var items=[].slice.call(document.querySelectorAll('.r7')), dots=[].slice.call(document.querySelectorAll('.dot7')), fill=document.querySelector('.r7-fill');
    if(!items.length) return;
    function set(k,scroll){
      items.forEach(function(it,i){var o=i===k;it.classList.toggle('open',o);it.querySelector('button').setAttribute('aria-expanded',o);});
      dots.forEach(function(d,i){d.classList.toggle('on',i<=k);d.classList.toggle('cur',i===k);});
      if(fill&&dots.length>1){var a=dots[0].getBoundingClientRect(),b=dots[k].getBoundingClientRect();fill.style.width=Math.max(0,(b.left+b.width/2)-(a.left+a.width/2))+'px';}
      if(scroll){var r=items[k].getBoundingClientRect();if(r.top<80||r.top>window.innerHeight-160)window.scrollBy({top:r.top-110,behavior:'smooth'});}
    }
    items.forEach(function(it,i){it.querySelector('button').addEventListener('click',function(){set(it.classList.contains('open')?Math.max(0,i):i,false);});});
    dots.forEach(function(d,i){d.addEventListener('click',function(){set(i,true);});});
    set(0,false); window.addEventListener('resize',function(){var k=items.findIndex(function(x){return x.classList.contains('open')});set(k<0?0:k,false);});
  })();
  document.querySelectorAll('.svc button').forEach(function(b){b.addEventListener('click',function(){
    var s=b.parentNode,o=!s.classList.contains('open');
    document.querySelectorAll('.svc').forEach(function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false')});
    if(o){s.classList.add('open');b.setAttribute('aria-expanded','true')}
  })});
  document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});

  /* ---------- HERO RIBBON: live reels from featured clients + a piece from everyone else ---------- */
  var RIBBON_FEATURE={stories:3,lakira:3,sreenidhi:3,tango:2,hangyo:2,'pallavi-foley':2,'modern-kitchens':1};
  function renderRibbon(el){
    var piles=[];
    CATEGORIES.forEach(function(c){c.clients.forEach(function(x){
      var n=RIBBON_FEATURE[x.id], pile=[];
      if(n){ x.media.filter(function(m){return m.v}).slice(0,n).forEach(function(m){pile.push({m:m,c:c,x:x,live:true});}); }
      else { var p=x.media.filter(function(m){return !m.v})[0]||x.media[0]; if(p) pile.push({m:p,c:c,x:x}); }
      if(pile.length) piles.push(pile);
    });});
    var items=[], more=true;
    for(var k=0; more; k++){ more=false; piles.forEach(function(p){ if(p[k]){ items.push(p[k]); more=true; } }); }
    var html=items.map(function(it){
      var m=it.m, inner = it.live
        ? '<video src="'+m.v+'-loop.mp4" poster="'+m.v+'-cover.jpg" muted loop playsinline preload="none" aria-hidden="true"></video>'
        : '<img src="'+(m.v?m.v+'-cover.jpg':m.i)+'" alt="'+esc(it.x.name)+': '+esc(m.t)+'" loading="lazy">';
      return '<a class="rb'+(it.live?' live':'')+'" href="'+it.c.id+'.html#'+it.x.id+'" style="aspect-ratio:'+m.r+'" tabindex="-1">'+inner+'<span>'+esc(it.x.name)+'</span></a>';
    }).join('');
    el.innerHTML=html+html;
    el.querySelectorAll('a').forEach(function(a,i){ if(i>=items.length) a.setAttribute('aria-hidden','true'); });
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce||!('IntersectionObserver' in window)) return;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){});}else v.pause();});},{root:null,rootMargin:'0px 200px',threshold:0.01});
    el.querySelectorAll('video').forEach(function(v){io.observe(v);});
  }

  function boot(){
    var home=document.getElementById('grid'), cat=document.getElementById('category');
    var rib=document.getElementById('ribbon'); if(rib && !rib.children.length) renderRibbon(rib);
    if(home) renderHome(home);
    if(cat) renderCategory(cat, cat.getAttribute('data-cat'));
  }
  boot();
  [mobile, window.matchMedia('(max-width:999px)')].forEach(function(mq){
    if(mq.addEventListener) mq.addEventListener('change',boot); else mq.addListener(boot);
  });
})();
