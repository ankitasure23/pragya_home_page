import React,{useState} from 'react'

function Button({ icon, text, dropDownMenu = [], onClick }) {
    
    const [isOpen, setIsopen] = useState(false);
    const toggleMenu = () => {
        if (dropDownMenu.length > 0) {
            setIsopen(!isOpen);
        } else {
            onClick && onClick();
        }
    }
    return (
        <>
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button className='bg-purple-600 text-white flex flex-col items-center justify-center w-20 h-20 rounded- px-4 py-2 hover:bg-purple-700 ' style={{borderRadius:'500%'}} onClick={toggleMenu}>
                {icon && <img src={icon} />}
                {text && <span className='font-bold text-4xl'>{text}</span>}
            </button>

            {dropDownMenu.length > 0 && isOpen && (
                <ul className='bg-purple-400 p-4 mt-2 rounded shadow-lg absolute' style={{ listStyle: 'none' }}>
                    {dropDownMenu.map((item, index) => (
                        <button key={index} className='text-xl font-bold text-purple-950' onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}>{item.label}</button>
                    ))}
                </ul>
            )}
        </div >
        </>
    )

}

export default Button