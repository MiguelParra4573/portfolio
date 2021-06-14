import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutScreen from '../AboutScreen';
import PortfolioScreen from '../PortfolioScreen';
import ResumeScreen from '../ResumeScreen';
import SkillsScreen from '../SkillsScreen';
import PerfilScreen from '../PerfilScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/perfil" component={PerfilScreen} />
                <Route path="/about" component={AboutScreen} />
                <Route path="/porfolio" component={PortfolioScreen} />
                <Route path="/resume" component={ResumeScreen} />
                <Route path="/skills" component={SkillsScreen} />
                <Redirect to='/perfil' />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter