import PageOne from "../pages/PageOne"
import PageTwo from "../pages/PageTwo"
import HomePage from "../pages/HomePage"
import SuperBaseClass from "./SuperBaseClass"

const pageOne = null
const pageTwo = null
const homePage = null

class BaseClass {
    constructor() {

    }

    static pageOneBaseMethod(){
        return SuperBaseClass.pageOneMethod()
    }

    static pageTwoBaseMethod(){
        return SuperBaseClass.pageTwoMethod()
    }

    static homePageBaseMethod(){
        return SuperBaseClass.homePageObjectIntilize()
    }

}
export default BaseClass
