import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Container from "sap/ushell/Container";
import CrossApplicationNavigation from "sap/ushell/services/CrossApplicationNavigation";

/**
 * @namespace at.clouddna.fullscreennav.controller
 */
export default class Detail extends Controller {

  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    let oRouter = (this.getOwnerComponent() as UIComponent).getRouter(),
      oRoute = oRouter.getRoute("Detail");
    oRoute?.attachPatternMatched(this.onPatternMatched, this);
  }
  private onPatternMatched(oEvent: Event) {
    let oArguments = (oEvent as any).getParameters().arguments,
      sPath = decodeURIComponent(oArguments.path);
    this.getView()?.bindElement({
      path: sPath,
      events: {
        dataReceived: (oResult: any) => {
          if (!oResult.getParameters().data) {
            (this.getOwnerComponent() as UIComponent).getRouter().navTo("NotFound", undefined, undefined, true);
          }
        }
      }
    });
  }

  private onNavToCarrierFlights(){
    let oTarget = {semanticObject: "CarrierFlights", action: "display"},
        oObject = this.getView()?.getElementBinding()?.getBoundContext()?.getObject() as any,
        oParams = {Carrier: oObject.carrid};
    this.crossAppNavigation(oTarget, oParams);
  }

  protected getCrossApplicationNavigationService(): Promise<CrossApplicationNavigation> {
    return ((sap.ushell as any).Container as any).getServiceAsync("CrossApplicationNavigation");
  }

  private crossAppNavigation(target: any, params?: any): void {
    this.getCrossApplicationNavigationService().then((service: CrossApplicationNavigation) => {
      service.toExternal({
        target: target,
        params: params
      });
      
    });
  }

}