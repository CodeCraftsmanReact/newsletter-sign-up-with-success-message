import './App.css';
import rcimg from './assets/images/illustration-sign-up-desktop.svg'
import rcimgm from './assets/images/illustration-sign-up-mobile.svg'
import chkmrk from './assets/images/icon-list.svg'
function App() {
  return (
    <div className="background">
      <div className='page'>
        <div className='left-column'>
         <div className='mobile-padding'>
          <h1 className='heading'>Stay Updated!</h1>
            <p className='subheading'>
              Join 60,000+ product managers recieving monthly updates on:
            </p>
            <div className='checkmark-section'>
              <CheckmarkItem text='Product discovery and building what matters'/>
              <CheckmarkItem text='Measuring to ensure updates are a successs'/>
              <CheckmarkItem text='And much more!'/>
            </div>
            <small>Email address</small>
            <form className='form'>
              <input required type='email' placeholder='email@company.com'/>
              <button type='submit'>Subscribe to monthly newsletter</button>
            </form>
         </div>
        </div>
        <div className='right-column'>
          <picture>
            <source media='(max-width: 600px)' srcSet={rcimgm} className='r-column-image-mobile'/>
            <img src={rcimg} className='r-column-image'/>
          </picture>
        </div>
      </div>
    </div>
  );
}

function CheckmarkItem({ text }){
  return(
    <div className='checkmark-item-container'>
      <div className='checkmark-container'>
        <img src={chkmrk} className='checkmark'/>
      </div>
      <div className='checkmark-text'>{text}</div>
    </div>
  )
}

export default App;
