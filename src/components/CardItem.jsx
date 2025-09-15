
import '../styles/CardItem.css';

export default function CardItem(){


    return(
        <div className='card-item'> {/* Wrapper Div */}
            {/* Title */}
            <h1>Water Glasses</h1>
            {/* x amount of times clicked */}
            <h2>0 Times</h2>
            {/* rate of click (+1 per click) */}
            <p>+1 per click</p>
            {/* Card Item Action Buttons */}
            <div className='card-buttons'>
                <button
                    style={
                        {backgroundColor: 'Orange'}
                    }
                >-1</button>
                <button
                    style={
                        {backgroundColor: '#00e600'}
                    }
                >+1</button>
                <button
                    style={
                        {backgroundColor: 'Grey'}
                    }
                >Reset</button>
                <button
                    style={
                        {backgroundColor: 'Red'}
                    }
                >Delete</button>
            </div>
        </div>
    )

}