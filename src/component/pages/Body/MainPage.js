import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HOME_PAGE, READ_NEWS, VID_NEWS } from 'component/routes';
import { BodyHome, BodyReading, BodyVideo } from 'component/pages';

export default function MainPages() {
    return (
        <div>
            
            <Switch>
                <Route exact path={HOME_PAGE} component={BodyHome}/>
                <Route exact path={READ_NEWS} component={BodyReading}/>
                <Route exact path={VID_NEWS} component={BodyVideo}/>
            </Switch>
        </div>
    )
}