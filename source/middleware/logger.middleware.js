// const loggerMiddleware = () => {

//     const dispatchAndLog = (store, next, action) => {

//         console.log('dispatching', action);
//         let result = next(action);
//         console.log('next state', store.getState());

//         return result;
//     };

//     return store => next => action => {
//         return dispatchAndLog(store, next, action);
//     };
// };

// export default loggerMiddleware;

export default function loggerMiddleware({getState}) {
    return next => action => {
        console.log('will dispatch', action);

        // Call the next dispatch method in the middleware chain.
        let result = next(action);

        console.log('state after dispatch', getState());
        return result;
    };
}