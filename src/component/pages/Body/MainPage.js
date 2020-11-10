import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { HOME_PAGE, READ_NEWS, VID_NEWS, SIGN_UP, AUD_NEWS, IMG_NEWS, CATE_NEWS } from 'component/routes';
import { BodyHome, BodyReading, BodyVideo, Signup, BodyAudio, BodyImg, CateNews } from 'component/pages';

export default function MainPages() {
    return (
        <div>
            
            <Switch>
                <Route exact path={HOME_PAGE} component={BodyHome} />
                <Route exact path={READ_NEWS} component={BodyReading}/>
                <Route exact path={VID_NEWS} component={BodyVideo}/>
                <Route exact path={IMG_NEWS} component={BodyImg}/>
                <Route exact path={SIGN_UP} component={Signup}/>
                <Route exact path={AUD_NEWS} component={BodyAudio}/>
                <Route exact path={CATE_NEWS} component={CateNews}/>
            </Switch>
        </div>
    )
}