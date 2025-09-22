import {test,expect} from "@playwright/test";

test("tag1@sanity", async ({page})=>{
    console.log('Execute test 1')
})

test("tag2@sanity", async ({page})=>{
    console.log('Execute test 2')
})

test("tag3@regression", async ({page})=>{
    console.log('Execute test 3')
})

test("tag4@regression", async ({page})=>{
    console.log('Execute test 4')
})

test("tag5@sanity@regression", async ({page})=>{
    console.log('Execute test 5')
})
