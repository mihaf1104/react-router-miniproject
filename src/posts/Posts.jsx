import React from 'react';
import style from '../style.module.css'
import ClickCount from './ClickCount';
import HoverCount from './HoverCount';
import Counter1 from './Counter1';
import CounterReducer from './CounterReducer';
import CallBackExample from '../todos/CallBackExample';
import UseMemoExample from '../todos/UseMemoExample';
import useTitle from '../Hooks/useTitle';
import UseHookCounter from './UseHookCounter';

const Posts = () => {
    useTitle("پست ها")
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>

            <ClickCount name="fahimeh" />
            <br />
            <HoverCount />
            <br />
            <Counter1 />
            <br />
            <CounterReducer />
            <br/>
            <CallBackExample/>
            <br/>
            <UseMemoExample/>
            <br/>
            <UseHookCounter/>
        </div>
    )

}

export default Posts;