import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Pereloader from '../common/preloader/Preloader';

export const withSuspence = (Component)=>(props) => {
    <Suspense fallback={<Pereloader />}>
        <Component {...props} />
    </Suspense>;
}