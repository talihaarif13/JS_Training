//... spread operator to just update data in function scope = Shallow copy of data(pure functions)
const updateUser = (user) => {
    const updatedUser = {...user };
    updatedUser.age = 20;
    updatedUser.color = 'green';
    return updatedUser;
}
const initializeUser = {};
const updatedUser = updateUser(initializeUser);
console.log(updatedUser, initializeUser); //{ age: 20, color: 'green' } {}
