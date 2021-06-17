import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutScreen from '../Screen/AboutScreen';
import PortfolioScreen from '../Screen/PortfolioScreen';
import ResumeScreen from '../Screen/ResumeScreen';
import SkillsScreen from '../Screen/SkillsScreen';
import PerfilScreen from '../Screen/PerfilScreen';
// import TestimonialsScreen from '../Screen/TestimonialsScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/perfil" component={PerfilScreen} />
                <Route path="/about" component={AboutScreen} />
                <Route path="/porfolio" component={PortfolioScreen} />
                <Route path="/resume" component={ResumeScreen} />
                <Route path="/skills" component={SkillsScreen} />
                {/* <Route path="/testimonials" component={TestimonialsScreen} /> */}
                <Redirect to='/perfil' />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter