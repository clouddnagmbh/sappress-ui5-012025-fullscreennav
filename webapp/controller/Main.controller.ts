import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace at.clouddna.fullscreennav.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    private onNavToDetail(oEvent: Event) :  void {
        let oRouter = (this.getOwnerComponent() as UIComponent).getRouter(),
          oBindingContext = (oEvent as any).getSource().getBindingContext(),
          oObject = oBindingContext?.getObject(),
          sPath = oBindingContext?.getPath();
        oRouter.navTo("Detail", {
          path: encodeURIComponent(sPath)
        });
      }      
      
}