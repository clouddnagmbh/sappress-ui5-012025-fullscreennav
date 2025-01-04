import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace at.clouddna.fullscreennav.controller
 */
export default class NotFound extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    private onNavToMain(){
        (this.getOwnerComponent() as UIComponent).getRouter().navTo("RouteMain", undefined, undefined, true);
    }
      
}