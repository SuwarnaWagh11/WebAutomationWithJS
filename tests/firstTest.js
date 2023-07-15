const{Builder, By, Key} = require("selenium-webdriver");
//const assert = require("assert");
const should = require("chai").should();

describe("add todo test", function () {
    it("succesfully adds a todo to application", async function () {
        //launch browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to application https://lambdatest.github.io/sample-todo-app/
        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        // add todo
        let todotest = await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JS", Key.RETURN).then(function(value){
            return value
        });

        //assert using chai should
       // todotest.should.equal("Learn JS");

        //close the browser
        await driver.quit();

    });
});