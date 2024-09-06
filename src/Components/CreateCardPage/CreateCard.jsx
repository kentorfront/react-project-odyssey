import './CreatePage.css'

export default function CreateCard(){

    let jsonData = require('../../DataBase/db')
    console.log(localStorage.getItem('id'));


    return(
        <>
            <div className='cardMainSend'>
                <div className='barcode'>
        
                </div>
                <div className='cardMain-right'>
                    <div className='card-main-right-top'>
                        <div className='logoOdyssey'></div>
                        <div className='logoOdysseyTitle'>Odyssey Mission 2030</div>
                        <div className='individualCode'>M2G9W2030WJKnewIT</div>
                    </div>
                    <div className='divFirstName'>{}</div>
                </div>
            </div>
        </>
    )
}