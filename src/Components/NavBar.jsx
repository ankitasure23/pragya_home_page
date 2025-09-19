import React,{useState} from 'react'
import Button from './Button.jsx'
import Home from '../assets/home.png'
import Lesson from '../assets/lesson.png'
import Quiz from '../assets/quiz.png'
import Dashboard from '../assets/dashboard.png'
import Settings from '../assets/settings.png'
import Login from '../assets/login.png'
import Signup from '../assets/signup.png'
import Language from '../assets/language.png'

function NavBar() {
    const lang = [{ label: 'English', onClick: () => alert('Profile clicked') },
    { label: 'Bengali', onClick: () => alert('Settings clicked') },
{ label: 'Hindi', onClick: () => alert('Logout clicked') }];
    return (
        <>
            <nav className='p-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='font-bold text-5xl' style={{ color: '#2C1F4A' }}>Gurukul</h2>
                    </div>
                    <div className='flex gap-6'>
                        <Button icon={Home}></Button>
                        <Button icon={Lesson}></Button>
                        <Button icon={Quiz}></Button>
                        <Button icon={Dashboard}></Button>
                        <Button icon={Settings}></Button>
                        <Button dropDownMenu={lang} icon={Language}></Button>
                        <Button icon={Login}></Button>
                        <Button icon={Signup}></Button>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default NavBar