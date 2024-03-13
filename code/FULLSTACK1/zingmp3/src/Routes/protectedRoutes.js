import { Route } from "react-router-dom";
import Profile from "../Pages/Profiles/Profile";
import AuthMiddlewares from "../Middlewares/AuthMiddlewares";
import Test from "../Pages/Test/Test";
import AdminMiddleware from "../Middlewares/AdminMiddleware";

export const protectedRoutes = (
    <>
        <Route path="ca-nhan" element={<AuthMiddlewares />}>
            <Route path="" element={<Profile />} />
            <Route path="ca-sy" element={<AdminMiddleware />} >
                <Route path="" element={<Test />} />
            </Route> 
        </Route>
    </>

)