let allProfileImages = [
    '../dist/assets/landing-page/elderly-nurse/avatars/profile-1.jpg',
    '../dist/assets/landing-page/elderly-nurse/avatars/profile-2.jpg',
    '../dist/assets/landing-page/elderly-nurse/avatars/profile-4.jpg',
    '../dist/assets/landing-page/elderly-nurse/avatars/profile-5.jpg',
];

let sliderWrapper = document.querySelector('#elderly-landing-slider-comment-wrapper');

let allComments = [
    {
        id:1,
        name:'علیرضا سعیدی',
        des:'تقریبا 3 سالی هست که بنده برای پدرم که مبتلا به آلزایمر است از خدمات پرستاری سالمندشان استفاده میکنم و در تمام این مدت بدی و کم و کسری در ارائه خدمات پرستاریشان ندیده ام. بنده کم کم ۲ الی ۴ پرستار برای پدرم قبل از پاکیزه کاران استخدام کرده بودند که به دلیل متعهد نبودن و سروقت نبودن تصمیم گرفتم قطع همکاری کنم .',
    },
    {
        id:2,
        name:'علی سمیعی',
        des:'مادربزرگ من نزدیک به ۲ سال بود که نمیتونست کارهای روزمره خودشو رو درست انجام بده و مدتی بعد دچار ضعف جسمانی شدید تر شد . میتونم بگم تقریبا بیشتر از ۲ سالی هست که دارم از خدمات پاکیزه کاران پارسیان استفاده میکنم و واقعا کادر دلسوز و مهربانی دارند و تمام انرژی و وقتشون را با جان و دل برای مادربزرگ بنده گذاشتند.'
    },
    {
        id:3,
        name:'علی نعمتی',
        des:'بنده مشتری ۵ ساله پارسیان کلین هستم و در این مدت که از خدمات این شرکت استفاده میکردم واقعا راضی بودم و واقعا کادر بسیار دلسوز و مهربان و بسیاری کار بلد حرفه ای برای نگهداری اعزام میکنند ، از کیفیت خدمات اولین پرستاری که برای بنده ارسال کردند بسیار راضی بودم و تصمیم گرفتم تا به صورت دائم از خدمات همین شرکت استفاده کنم'
    },
    {
        id:4,
        name:'قاسم رضایی',
        des:'سلام روزتون بخیر. مادر من مدت طولانی در خانه تنها بود و بنده به دلیل مشغله های کاری نمیتونستم به طور دائم ازش مراقبت کنم . تصمیم گرفتم برای نگهداری از مادرم پرستاری استخدام کنم تا در نبود من بتونه ازش نگهداری کنه . نزدیک به بیشتر از ۲ سالی هست که از خدمات پرستاری پاکیزه کاران استفاده میکنم و واقعا راضیم.'
    },
    {
        id:5,
        name:'آریا درویشیان',
        des:'خانمی که به عنوان پرستار در منزل برام اعزام کردند بسیار خوش رفتار و مهربان بود. بنده به دلیل کار و مشغله های کاری زیاد توانایی نگهداری و مراقبت ۲۴ ساعته از پدر سالمند مریضم را نداشتم بنابراین با پاکیزه کاران پارسیان تماس گرفتم و شرایطم را برایشان توضیح و در اسرع وقت برای نگهداری از پدرم یک پرستار اعزام کردند که بسیار هم با تجربه بودند.'
    },
    {
        id:6,
        name:'زهرا نوربخش',
        des:'با سلام و عرض خسته نباشید بنده میخواستم از خدمات بسیار خوب پاکیزه کاران تشکر ویژه کنم . در این مدتی که بنده به دلیل شغلی که دارم و مدام برای ماموریت در حال رفت و آمد و سفر بودم ، پرستاری که از پاکیزه کاران برای مراقبت از مادرم استخدام کردم بسیار صبور و دلسوزانه از مادر بنده ب تمام وجود مواظبت کردند. ممونم ازتون.'
    },
];

let randomNumber = Math.floor(Math.random() * allProfileImages.length);

// importing all comments into slider wrapper element

allComments.forEach((comment) => {
    sliderWrapper.innerHTML += `
            <div class="swiper-slide">
                    <div class="slider-comment-container">
                        <!-- header -->
                        <div class="slider-comment-header">
                          <img
                            class="slider-comment-profile"
                            src="${allProfileImages[randomNumber]}"
                            alt=""
                          />
                        </div>
                        <div class="slider-comment-title">${comment.name}</div>
                        <span class="slider-comment-icon"
                          ><i class="bi bi-quote"></i
                        ></span>
                        <!-- user comment -->
                        <p class="text-des">
                            ${comment.des}
                        </p>
                      </div>
                </div>
    
    `

})


