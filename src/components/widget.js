import React, { useContext, useEffect } from 'react';
import { DispatcherContext } from '../dispatcher';
import { loadData } from '../actions/actions';
import dayjs from 'dayjs';

const DialogWidget = () => {
    const { state, dispatch } = useContext(DispatcherContext);

    useEffect(() => {
        loadData(dispatch);
    }, [dispatch]);

    if (state.error) {
        return <div>Error loading data: {state.error.message}</div>;
    }
    
    const summary = Object.values(state.data.summary);
    
    return (
        <div className="container">
            <div className="scrollable-widget">
                <div className="dialog-widget">
                {summary.map((dialog, index) => (
                    <div key={index} className={`dialog-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <span className="timestamp">{dayjs(dialog.start).format('hh:mm:ss')}</span>
                        <p className="message">{dialog.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default DialogWidget;
