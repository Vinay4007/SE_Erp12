import React from "react";

export const contextTempl = {
    name : 't',
    desc : '',
    value :''
};

var defaultValue = {
    name:'context',
    desc:'simple description',
    value:'simple test value'
};

const context =React.createContext(defaultValue);

var Provider = context.Provider;
var Consumer = context.Consumer;

export default {Provider,Consumer};