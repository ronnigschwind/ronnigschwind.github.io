import '../styles/accordion.css'

function toggleAccordionItem(id) {
    if (document.getElementById(id).style.display === 'none') {
        document.getElementById(id).style.display = 'block'
        document.getElementById(id + 'Btn').style.transform = 'rotate(45deg)'
    } else {
        document.getElementById(id).style.display = 'none'
        document.getElementById(id + 'Btn').style.transform = 'none'
    }
}

const Accordion = (props) => {
    return (
        <div className='Accordion' style={{padding: '0 20px', maxWidth: 1050, margin: 'auto'}}>
            {props.accordionList.map((accordionItem, index) => (
                <div className='accordionItem' key={index}>
                    <div className='accordionToggleDiv' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p className='accordionTitle'><strong>{accordionItem.title}</strong></p>
                        <p id={accordionItem.id + 'Btn'} className='accordionBtn customCursorPointer' onClick={() =>  toggleAccordionItem(accordionItem.id)}>+</p>
                    </div>
                    <div id={accordionItem.id} className='accordionContent' style={{display: 'none'}}>
                        <div>{accordionItem.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
    
export default Accordion