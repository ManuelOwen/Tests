//used to mock to create fake implementation of our dependencies

//write a test to check if jest functi is called 3 times and it returns 1


const jestFn  =jst.fn(()=>{
    console.log("jest fn exec")
    return 1;

})
test ('jst.fn is executed ')