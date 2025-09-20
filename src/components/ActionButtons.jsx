import { useState } from 'react';
import '../styles/ActionButtons.css'
import CreateCounterForm from './CreateCounterForm';

export default function ActionButtons({ addCounter }){

    const [formOpened, isFormOpened] = useState(false);

    function renderForm(){
        isFormOpened(!formOpened);
        console.log('Rendering. Form State: ', {formOpened})
    }

    const count = 0;


    return(

        // Wrapper Div

        <div id="actionButtons">

            {/* Return Total Count */}

            <div>
                <p>Total Count: {count}</p>
            </div>

            {/* Return Add New Counter */}

            <button 
                style={{backgroundColor: '#1aa3ff'}}
                onClick={renderForm}
            > 
                + Add New Counter
            </button>

            {/* Return Clear All Counters */}

            <button 
                style={{backgroundColor: '#ff1a1a'}}
            >

                Clear All Counters
            </button>

            {
                formOpened &&  <CreateCounterForm addCounter={addCounter} /> // Passing addCounter function through from app.jsx
            }

        </div>

    )
}