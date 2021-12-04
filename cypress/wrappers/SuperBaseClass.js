import PageOne from "../pages/PageOne"
import PageTwo from "../pages/PageTwo"
import HomePage from "../pages/HomePage"

const pageOne = null
const pageTwo = null
const homePage = null

class SuperBaseClass {
    constructor() {

    }

    static pageOneMethod(){
        if(pageOne == null){
            pageOne == new PageOne()
        }
        return PageOne
    }

    static pageTwoMethod(){
        if(pageTwo == null){
            pageTwo == new PageOne()
        }
        return PageTwo
    }

    static homePageObjectIntilize(){
        if(homePage == null){
            homePage == new HomePage()
        }
        return homePage
    }



}
export default SuperBaseClass
