import {expect, test} from "@playwright/test";


//only
/*test.only("test1", async ({page,browserName})=>{
    console.log('This is test 1')
    if (browserName==='chromium'){
        test.skip()
    }
})*/


/*
//skip
test.skip('test2', async ({page})=>{
    console.log('This is test 2')
})*/


//fixme
/*
test('test4', async ({page})=>{
    test.fixme()
    console.log('This is test 4')
})*/

//fail
/*
test.only('test5', async ({page})=>{
    test.fail();
    console.log('This is test 5')
    expect(1).toBe(1)
})*/

/*
test('test6', async ({page,browserName})=>{
    if (browserName==='chromium'){
        test.fail();
    }
    console.log('This is test 6')
    //expect(1).toBe(1)
})*/

test('test7', async ({page})=>{
    // test.slow()
    test.setTimeout(5000)
    await page.goto('https://demoblaze.com/')
    console.log('This is test 6')
})