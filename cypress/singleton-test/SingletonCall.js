import BaseClass from "../wrappers/BaseClass";
import SuperBaseClass from "../wrappers/SuperBaseClass";

class SingletonCall extends BaseClass{

    initializationObject(){
        SuperBaseClass.pageOneMethod()
        SuperBaseClass.pageTwoMethod()
        SuperBaseClass.homePageObjectIntilize()
    }


    pageOneMethodCall(){
        SuperBaseClass.pageOneMethod().verifyLogoOnHomePage()
    }

    pageTwoMethodCall(){
        SuperBaseClass.pageTwoMethod().methodFromPageTwo()
    }

    homePageMethodCall(){
        SuperBaseClass.homePageObjectIntilize().verifyLogoOnHomePage()
    }

    homePageIntilize(){
        const object = SuperBaseClass.homePageObjectIntilize()
        return object
    }

}
export default SingletonCall