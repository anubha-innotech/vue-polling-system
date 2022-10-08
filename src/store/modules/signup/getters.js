export default{
    // getters : only for getting the data and not for changing the state 
    // Argument in getters 
    // todoById: state => id => {
    //     return state.todos.find(todo => todo.id === id)
    // },

    // doneTodos(state){
    //     return state.todos.filter((todo) => todo.done)
    // },

    // getters in getter 
    // doneTodosCount(state,getters){
        // return state.todos.filter((todo) => todo.done).length
    //     return getters.doneTodos.length
    // }

    stateData(state){
        return state
    }
}