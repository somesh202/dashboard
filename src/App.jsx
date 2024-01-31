import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import Graph from './components/Graph/Graph';
import CustomerCard from './components/CustomerCard/CustomerCard';
import './App.css'
import MiniCard from './components/MiniCard/MiniCard';
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="div">
        <Sidebar />
        <div className='dashboard'>
          <div className='cards-top-sec'>
            <Card title="Revenues" metric="15" content="Increase compared to last week" link="Revenues Report" />
            <Card title="Lost Deals" metric="4" content="You closed 96 out of 100 deals" link="All Deals" />
            
            <div className="goal-card">
            <h2 className='title'>Quarter Goal</h2>
            <img src="./goal.svg" alt='slider' />

            <span className="link">All goals</span>
            </div>

            {/* <div className="customer-card">
              <div className="headers">
            <h2 className='title'>Customers</h2>
            <span className="sort">Sort by <select></select></span>
            </div>
            <div className="cust-list">
              <div className="left-sec">
                <img src="./Avatar1.svg" alt='' /><span className="name">Chris Friedkly</span>
                <img src="./Avatar2.svg" alt='' /><span className="name">Maggie Johnson</span>
                <img src="./Avatar3.svg" alt='' /><span className="name">Gael Harry</span>
                <img src="./4.png" alt='' /><span className="name">Jenna Sullivan</span>

              </div>
            </div>

            <span className="link">All Customers</span> */}
            <CustomerCard />
            <MiniCard title="Top year" date="November 2019" content="2019" />
            <MiniCard title="Top month" date="2023" content="96K sold so far" />
            <MiniCard title="Top buyer" url="./Avatar2.svg" date="" content="Maggie Johnson"/>
            {/* </div> */}
            <Graph />
            <section className="foot-sec">
            <div className='bottom-card'>
            <h2 className='title'>Chats</h2>
            <span className='notif'>2 unread messages</span>
            <div className='imgRow'>
            <img src="./Avatar1.svg" alt='' />
                <img src="./Avatar2.svg" alt='' />
                <img src="./Avatar3.svg" alt='' />
                <img src="./4.png" alt='' />
            </div>
        </div>
        


        <div className='bottom-card'>
            <h2 className='title'>Top states</h2>
            <div className="div-3">
    <div className="div-4">NY</div>
    <div className="div-5">120k</div>
  </div>
  <div className="div-6">
    <div className="div-7">MA</div>
    <div className="div-8">80k</div>
  </div>
  <div className="div-9">
    <div className="div-10">NH</div>
    <div className="div-11">70k</div>
  </div>
  <div className="div-12">
    <div className="div-13">OR</div>
    <div className="div-14">50k</div>
  </div>
        </div>
        <div className='bottom-card-1'>
            <h2 className='title'>New deals</h2>
            <div className="deals">
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Fruit2Go</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Marshall&#39;s MKT</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">CCNT</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Joana Mini-market</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Little Brazil Vegan</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Target</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Organic Place</div>
        </div>
        <div className="div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <div className="text-wrapper-2">Morello&#39;s</div>
        </div>
      </div>
    </div>
    </section>
          </div>
          
          
        </div>
      </div>
  )
}

export default App
