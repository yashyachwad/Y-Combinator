import { useState } from 'react'
import bg from './assets/bg.png'
import './App.css'

function App() {

  return (

   <body className='bg-black text-white'>
     <nav className='w-full h-20  flex justify-between px-4 items-center'>
      <div  className='logo font-bold text-5xl ml-10 text-orange-600'> yC</div>
          <ul className='flex gap-5 justify-start '>
            <li className='hover:cursor-pointer'>ABOUT</li>
            <li className='hover:cursor-pointer'>COMPANIES</li>
            <li className='hover:cursor-pointer'>STARTUP</li>
            <li className='hover:cursor-pointer'>Find a Co-Founder</li>
            <li className='hover:cursor-pointer'>LIBRARY</li>
            <li className='hover:cursor-pointer'>SAFE</li>
            <li className='hover:cursor-pointer'>RESOURCES</li>
          </ul>

            <div className='flex gap-2'>
              <p className='text-gray-500'>Apply for latest Batch</p>
            <div className='h-7 w-16 px-2 text-black mr-10 border-l border-r border-t border-b bg-yellow-300 border-yellow-500 rounded font-semibold hover:cursor-pointer'>APPLY</div>
      </div>
    </nav>

    {/* nav end here  */}

    <img className='h-full ' src={bg} alt="" />

    <div className='pb-10 ml-36' >
      <h1 className='text-6xl h-40 w-full flex justify-center items-center '>Top <span className='text-orange-400'> yC </span>companies</h1>
      <div className='flex gap-4 ml-7'>
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/stripe-d1d72c19fe7fbfd9514ffbc26f1c5922a1b77fd7445c78a34fe319c03b986713.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/airbnb-423deceb57ea913e2f3a39a1c2b6ecb690f019933b4d767ac91121777aa59107.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/instacart-81d147c59ca98d84b72f606de3af981da477423738120d3b2baec64c3162ba14.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/doordash-f41c839bb0522ead71e8d99ed3ae0495c04271f6f3f3edc6b0effbbff172bc1d.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/cruise-38dda623d4f317a49a65099cd460bd1c6b3e4b91ffeccb6df0ec02284345b338.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/coinbase-5c8bfb41c875bb6163cebf467fe6afa1cbaf092c16ea7711034e32218965ff93.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/pagerduty-dc361aab31ef341eaed4d0a5a420c42f4d557745c67ffc5999c7b556c408d150.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/twitch-1b4772b83a73b6fa827ef467ecc17023a2bfbbf936633bffb5e93674690e74d6.png" alt="" />
      </div>


      <div className='flex w-64 gap-6 ml-7 mt-4'>
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/faire-3113845be6506be7761eaef7257e882b6e0c94081653c0f7459f8ed0c0596338.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/brex-a76f83603a430f266cddacaceaf525080d91c3febf04ea8000ae1b4c67e8786f.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/deel-2eb5105300f66ebfa07b0ea805b6680d71c0b6de0272c3f75eebf6d2ae3077cf.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/rippling-100bc0c1cdabd9e38c671420ba16ba8f6d1af656dc3bc32eeeaa029f1bec257a.png" alt="" />
        <img className='size-10 bg-white p-2 w-auto rounded   ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/reddit-d5ed3340e70326e6a372be76e2ec1b761a4d757954ae69311671f82f59afbedb.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/gusto-b3f56f64a500a85cb44a2621db217778c9c698f83da59921e41c732dacdb3f35.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/flexport-ace3180f9926a45ed72eea63ed4c5a1a0aeb4e14ec7eb3ffff7c513aba07d0a9.png" alt="" />
        <img className='size-10 bg-white p-3 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/dropbox-83b803aca663267bc2c480efca454ea8f9d31c39dd2ccba3856104a987e2692d.png" alt="" />
      </div>


      <div className='flex gap-4 ml-10 mt-4'>
        <img className='size-10 bg-white p-1 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/razorpay-7b4097215fa2d028e821d34bd3d1558309acd87ac5599e8164545e3a7fda5b95.png" alt="" />
        <img className='size-10 bg-white p-1 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/gitlab-9998d8cb37a75de7004d679606bb8c5517d8c82848fb3e6ff13f8587143545b3.png" alt="" />
        <img className='size-10 bg-white p-2 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/benchling-cabc6ab6f92c92af620210d56c5cb872d5a2b77d3244924a4b35c0fba03aa411.png" alt="" />
        <img className='size-10 bg-white p-2 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/fivetran-80f044801357e31b679f1c6adb33cd674b80a6fba2eef509dcb930f57118d324.png" alt="" />
        <img className='size-10 bg-white p-1 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/rappi-58eceb42cb4e6ba589842600cba0a0448e2ebe42a8ad4d0b9e26f1e6ccd9f36d.png" alt="" />
        <img className='size-10 bg-white p-2 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/checkr-dfe048bab6c8869e0faa186c947e1f8ba70fe25468952d432d6730bc7c64b557.png" alt="" />
        <img className='size-10 bg-white p-1 w-auto rounded ' src="https://bookface-static.ycombinator.com/assets/ycdc/startups/zapier-a571989e13599601b2555b75551ee1cee4161f77df939d8f9d99ef750d6c9851.png" alt="" />
      </div>
    </div>

{/* footer */}

    <div className='bg-zinc-800'>
          <p className='text-4xl w-full h-40 flex justify-center items-center p-10'>
            We help foundersmake something  <br />
            people want and the results <br />
            speak for themselves.</p>

          <div className='flex w-full h-36 p-5'>
            <div>
              <p className=' border-l-2 border-orange-400 rounded-sm p-5'>We help founders at their earliest stages regardless of their age.</p>
            </div>
            <div>
              <p className=' border-l-2 border-orange-400 rounded-sm p-5'>We help founders at their earliest stages regardless of their age.</p>
            </div>
            <div>
            <p className=' border-l-2 border-orange-400 rounded-sm p-5'>We help founders at their earliest stages regardless of their age.</p>
            </div>
            <div>
            <p className=' border-l-2 border-orange-400 rounded-sm p-5'>We help founders at their earliest stages regardless of their age.</p>
            </div>
          </div>

    </div>




    <div>
      <p className='h-40 w-full flex justify-center items-center p-32 text-2xl'> YC is run by startup founders who have  built exactly <br />
        what they wanted when starting and growing a startup.</p>

      <div className="grid grid-cols-2 grid-rows-3 gap-6 ml-24">

          <div className='h-[h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://media.istockphoto.com/id/502609596/photo/moving-the-company-forward.jpg?s=1024x1024&w=is&k=20&c=d0t4d-gvfz3bVXNXaUDPaNHIivmPTnL2aifJU03LdC8=" alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>Investor network</h1>
              <p className='text-stone-300'>YC companies have raised $85 billion dollars from the best investors in the world. Our founders have access to the YC Investor Database which has profiles and reviews for more than 50,000 startup investors.</p>
            </p>
          </div>

          <div className='h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://images.pexels.com/photos/8761559/pexels-photo-8761559.jpeg?_gl=1*13o747j*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTQwNDckbzgkZzEkdDE3NTkxNTQyNjYkajU5JGwwJGgw" alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>The most experienced partners</h1>
              <p className='text-stone-300'>Each founder is assigned a dedicated YC partner who has mentored hundreds of YC companies. They have more data on what it takes to build a successful startup than any other early stage startup advisor. These partners read applications, interview companies, and mentor startups throughout the batch. You can access them in person, over email, and on Slack.</p>
            </p>
          </div>

          <div className='h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?_gl=1*1wcjmtb*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTQwNDckbzgkZzEkdDE3NTkxNTQzMTkkajYkbDAkaDA." alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>Private social network</h1>
              <p className='text-stone-300'>YC founders get to benefit from the collective wisdom of over 9000 YC alumni. They can access these alums through Bookface, our private social network. We have a forum for asking questions to the community, a founder directory for finding specific people who can provide advice and intros, and a company directory for finding potential customers.</p>
            </p>
          </div>
          <div className='h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://media.istockphoto.com/id/490847385/photo/social-media-cubes.jpg?b=1&s=612x612&w=0&k=20&c=5Yt3z8AAedG3j3hnwFVBjZNSZ1ekfU5g8eYuet5t8Tw=" alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>Exclusive deals</h1>
              <p className='text-stone-300'>YC founders have access to over 1000 deals from leading software companies. Every YC company gets free credits or significant discounts on hosting, banking, cap table management, back office, and much more. Companies report these deals to be worth in excess of $500,000.</p>
            </p>
          </div>
          <div className='h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?_gl=1*ewe03w*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTQwNDckbzgkZzEkdDE3NTkxNTQ0ODMkajQ5JGwwJGgw" alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>The best written advice</h1>
              <p className='text-stone-300'>YC founders get to benefit from our collective experience funding 5000 companies across almost 20 years. We have extensive documentation for common questions about fundraising, go to market, sales, product market fit, mental health, hiring, and much more.</p>
            </p>
          </div>
          <div className='h-[550px] w-[450px] p-10 border-l border-r border-t border-b border-white rounded bg-zinc-800'>
            <img src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?_gl=1*1bssvn*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTQwNDckbzgkZzEkdDE3NTkxNTQ1MTckajE1JGwwJGgw" alt="" />
            <p>
              <h1 className='mt-4 mb-4 font-semibold  border-l-2 border-orange-400 rounded-sm pl-3'>Networks to build your team</h1>
              <p className='text-stone-300'>Through Work at a Startup and HN, we help our founders hire the small number of early engineers and other team members critical to finding product market fit. At any given time there are 150,000+ candidates searching for jobs at early stage YC companies.</p>
            </p>
          </div>

      </div>
    </div>


    <div className='bg-zinc-800 mt-10 p-10'>
      <h1 className='flex justify-center items-center text-3xl h-30 w-full my-10 '>We put founders' interests first.</h1>
      <div className='grid grid-cols-2 grid-rows-3 gap-10 m-20'>
          <div >

            <p>  <span className ='text-orange-500 mr-3'>♦</span> We don’t take a board seat.</p>
          </div>
          <div>

            <p><span className ='text-orange-500 mr-3'>♦</span> We don’t demand 20% of your company.</p>
          </div>
          <div>

            <p><span className ='text-orange-500 mr-3'>♦</span> We don’t take weeks/months to decide to invest.</p>
          </div>
          <div>

            <p><span className ='text-orange-500 mr-3'>♦</span> We don’t require decks, business plans, or MBAs</p>
          </div>
          <div>

            <p><span className ='text-orange-500 mr-3'>♦</span> We don’t charge fees.</p>
          </div>
          <div>

            <p><span className ='text-orange-500 mr-3'>♦</span> We don't tell you what to do. We only offer advice.</p>
          </div>
      </div>

      <div className='grid grid-cols-3 grid-rows-1 gap-5 '>
          <div>
            <img className='rounded border-l-2 border-r-2 border-t-2 border-b-2 border-white p-2' src="https://images.pexels.com/photos/7414283/pexels-photo-7414283.jpeg?_gl=1*i43ee4*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTcwMjgkbzkkZzEkdDE3NTkxNTcwNDQkajQ0JGwwJGgw" alt="" />
          </div>
          <div>
            <img className='rounded border-l-2 border-r-2 border-t-2 border-b-2 border-white p-2' src="https://images.pexels.com/photos/7414268/pexels-photo-7414268.jpeg?_gl=1*i43ee4*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTcwMjgkbzkkZzEkdDE3NTkxNTcwNDQkajQ0JGwwJGgw" alt="" />
          </div>
          <div>
            <img className='rounded border-l-2 border-r-2 border-t-2 border-b-2 border-white p-2' src="https://images.pexels.com/photos/7857551/pexels-photo-7857551.jpeg?_gl=1*1wph975*_ga*MjEzNTc4MTE1MC4xNzMyOTg3Njk0*_ga_8JE65Q40S6*czE3NTkxNTcwMjgkbzkkZzEkdDE3NTkxNTcwNDQkajQ0JGwwJGgw" alt="" />
          </div>
      </div>
    </div>


    <div className=' flex flex-col items-center gap-4 pb-10'>
      <h1 className='flex justify-center items-center h-32 w-full text-3xl'>Hear more from the community.</h1>
      <div className='flex items-center justify-center px-16'>
        <img  className='size-16  p-1 mr-3'  src="https://www.ycombinator.com/vite/assets/marc-andreessen-B6IB5XEE.jpg" alt="" />
        <p  className='text-stone-300' >"Y Combinator is the  best program for lorem written by manually thats it this is so on just because  creating top-end entrepreneurs that has ever existed."
           <br /> <span className='font-bold text-white'>Marc Andreessen,</span>
            General Partner, Andreessen Horowitz</p>
      </div>
      <div className='flex items-center justify-center px-16'>
        <img  className='size-16 rounded p-1 mr-3'  src="https://www.ycombinator.com/vite/assets/ron-conway-DahY8Lgh.jpg" alt="" />
         <p className='text-stone-300' >"Y Combinator is the best startup accelerator in the world. YC helps their companies a lot, and the YC community is a huge asset for the companies that go through the program."
          <br /><span className='font-bold text-white'>  Ron Conway,</span>
            Founder, SV Angel</p>
      </div>
      <div className='flex items-center justify-center px-16 '>
        <img className='size-16 rounded p-1 mr-3'   src="https://www.ycombinator.com/vite/assets/brian-chesky-Dok3kT1b.jpg" alt="" />
         <p className='text-stone-300' >"At YC, we were challenged to do things that don't scale – to start with the perfect experience for one person, then work backwards and scale it to 100 people who love us. This was the best piece of advice we've ever received."
         <br /><span className='font-bold text-white'> Brian Chesky,</span>
          Founder, Airbnb (YC W09)</p>
      </div>
      <div className='flex items-center justify-center px-16'>
        <img className='size-16 rounded p-1 mr-3'   src="https://www.ycombinator.com/vite/assets/patrick-collinson-MjupD62W.jpg" alt="" />
        <p className='text-stone-300' >
           "I doubt that Stripe would have worked without YC. It's that simple. Acquiring early customers, figuring out who to hire, closing deals with banks, raising money – YC's partners were closely involved and crucially helpful."
          <br /> <span className='font-bold text-white'> Patrick Collison,</span>
            Founder, Stripe (YC S09)
        </p>
      </div>
    </div>

    {/* end */}



      <footer className='flex justify-around  p-12 bg-zinc-800' >
        <div> <h1 className='size-12 flex justify-center items-center font-bold text-2xl bg-orange-500'>yC</h1></div>
        <div><h1 className='font-bold border-b-2 border-white pb-2'>Program</h1>
            <p className='text-stone-300 cursor-pointer'>YC Program</p>
            <p className='text-stone-300 cursor-pointer'>Startup School</p>
            <p className='text-stone-300 cursor-pointer'>Work at a Startup</p>
            <p className='text-stone-300 cursor-pointer'>Co-Founder Matching</p>
        </div>

        <div><h1 className='font-bold border-b-2 border-white pb-2'>Company</h1>
            <p className='text-stone-300 cursor-pointer'>YC Blog</p>
            <p className='text-stone-300 cursor-pointer'>Contact</p>
            <p className='text-stone-300 cursor-pointer'>Press</p>
            <p className='text-stone-300 cursor-pointer'>People</p>
            <p className='text-stone-300 cursor-pointer'>Careers</p>
        </div>

        <div><h1 className='font-bold border-b-2 border-white pb-2'>Resources</h1>
            <p className='text-stone-300 cursor-pointer'>YC Deals</p>
            <p className='text-stone-300 cursor-pointer'>Hacker News</p>
            <p className='text-stone-300 cursor-pointer'>Launch YC</p>
        </div>
        <div><p className='text-stone-300'>Make Something People Want</p> 
            <div className='h-7 w-16 cursor-pointer bg-yellow-400 font-bold py-1 flex justify-center items-center rounded text-black' >Apply</div>
        </div>    

      </footer>
<hr />
      <div className='flex bg-zinc-800 justify-evenly p-5'>
        <div>
          <p className=' text-white'>&copy; 2025 Y Combinator </p>
        </div>
        <div className='flex gap-5 '>
          <img className=' hover:bg-red-500 hover:transform transition-transform duration-300 hover:scale-125 size-8 cursor-pointer rounded-md ' src="https://www.svgrepo.com/show/445823/instagram.svg" alt="" />
          <img className=' hover:bg-red-500 transform transition-transform duration-300 hover:scale-125 size-8 cursor-pointer rounded-md ' src="https://www.svgrepo.com/show/501035/twitter.svg" alt="" />
          <img className=' hover:bg-red-500 transform transition-transform duration-300 hover:scale-125 size-8 cursor-pointer rounded-md ' src="https://www.svgrepo.com/show/448496/linkedin.svg" alt="" />
          <img className=' hover:bg-red-500 transform transition-transform duration-300 hover:scale-125 size-8 cursor-pointer rounded-md ' src="https://www.svgrepo.com/show/487112/brand-fb-sq.svg" alt="" />
        </div>
      </div>

   </body>

  )
}

export default App
