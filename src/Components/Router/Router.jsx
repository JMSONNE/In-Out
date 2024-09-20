import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import { Pricing } from '../Pricing'


const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </>

    )
}

export default Router