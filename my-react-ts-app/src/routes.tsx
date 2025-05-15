import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
};

export default AppRoutes;