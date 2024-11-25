sap.ui.define([
    "sap/ui/core/UIComponent",
    "rwt/etp/ratelist/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("rwt.etp.ratelist.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            this.getModel("ProductListModel").setSizeLimit(1000);

            // enable routing
            this.getRouter().initialize();
        }
    });
});