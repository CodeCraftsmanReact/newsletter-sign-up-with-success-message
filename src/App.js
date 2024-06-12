import './App.css';
import {useState} from 'react'
import rcimg from './assets/images/illustration-sign-up-desktop.svg'
import rcimgm from './assets/images/illustration-sign-up-mobile.svg'
import chkmrk from './assets/images/icon-list.svg'
import icnSuccess from './assets/images/icon-success.svg'

function App() {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function submitForm(e){
    e.preventDefault();
    if(!validateEmail(email)){
      setError(true);

    } else{
      setError(false);
      setSuccess(true);
    }

  }
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)

  return (
    <div className="background">
      <div className='page'>
       {!success && <>
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
            <div className='email-label'>
              <small>Email address</small>
              {error && <small className='error-email-label'>Valid email required</small>}
            </div>
            <form className='form' >
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email@company.com' className={`${error && 'error-email-input'}`}/>
              <button onClick={(e)=> submitForm(e)}>Subscribe to monthly newsletter</button>
            </form>
         </div>
        </div>
        <div className='right-column'>
          <picture>
            <source media='(max-width: 600px)' srcSet={rcimgm} className='r-column-image-mobile'/>
            <img src={rcimg} className='r-column-image'/>
          </picture>
        </div>
        </>}
       {success && <div className='success-page'>
        <img src={icnSuccess} className='icnSuccess-img' />
        <div className='heading success-heading'>Thanks for subscribing!</div>
        <div className='success-subheading'>A confirmation email has been sent to <span style={{fontWeight: 700}}>{email}</span>. Please open it and click the button inside to confirm your subscription.</div>
        <button className='dismiss-button' onClick={() => setSuccess(false)}>Dismiss message</button>
       </div>}
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
