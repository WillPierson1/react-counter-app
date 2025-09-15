import '../styles/ActionButtons.css'
import CreateCounterForm from './CreateCounterForm';

export default function ActionButtons(){

    function renderCounter(){
        <>
            <CreateCounterForm />
        </>
    }

    let count = 0;

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
                onClick={renderCounter}
            > 
                + Add New Counter
            </button>

            {/* Return Clear All Counters */}

            <button 
                style={{backgroundColor: '#ff1a1a'}}
            >

                Clear All Counters
            </button>

        </div>

    )
}