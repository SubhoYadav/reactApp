// Redux is a state management system for cross-component and app-wide state
// state: Data, which when changed, triggers a re-render of the UI, can be categorised into 3 groups: local, cross-component & app-wide state
// Diadvantages of redux:
// - complex setup and management: leads to deeply nested ContextProvider components
// - Performance, not suitable for high frequency updates and is clearly not a replacement for flux-like state management libs like redux

// Reducer functions in general take some input and transforms them into a completely different output

// Redux core concepts:
// - There is only one single central data store
// - The components gain access to the data in the store by subscribing to the store, it is when they get a slice of the redux store
// - The data in the redux store is never updated directly, it is done via the reducer functions
// - Components dispatch actions that is a js obj, forwarded to the reducer functions that tells the reducer function, what to do 
