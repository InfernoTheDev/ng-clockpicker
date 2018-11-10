/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
var DynamicComponentsService = /** @class */ (function () {
    function DynamicComponentsService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @return {?}
     */
    DynamicComponentsService.prototype.load = /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @return {?}
     */
    function (component, vcr) {
        var _this = this;
        return new Observable(function (subscriber) { return _this.loadDynamicComponent(component, vcr, subscriber); });
    };
    /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @return {?}
     */
    DynamicComponentsService.prototype.loadDynamicComponent = /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @return {?}
     */
    function (component, vcr, subscriber) {
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = vcr.createComponent(factory);
        ((/** @type {?} */ (componentRef.instance))).close = function (data) {
            componentRef.destroy();
            subscriber.next(data);
        };
    };
    DynamicComponentsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DynamicComponentsService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return DynamicComponentsService;
}());
export { DynamicComponentsService };
if (false) {
    /** @type {?} */
    DynamicComponentsService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWxDO0lBR0Usa0NBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUksQ0FBQzs7Ozs7OztJQUNwRSx1Q0FBSTs7Ozs7O0lBQVgsVUFBdUMsU0FBa0IsRUFBRSxHQUFxQjtRQUFoRixpQkFFQztRQURDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBQyxVQUFVLElBQUssT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7Ozs7O0lBQ08sdURBQW9COzs7Ozs7O0lBQTVCLFVBQXdELFNBQWtCLEVBQUUsR0FBcUIsRUFBRSxVQUFVOztZQUNyRyxPQUFPLEdBQVEsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzs7WUFDL0UsWUFBWSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1FBRWpELENBQUMsbUJBQUcsWUFBWSxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQUMsSUFBUztZQUMzQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7SUFDSixDQUFDOztnQkFmRixVQUFVOzs7O2dCQUxVLHdCQUF3Qjs7SUFxQjdDLCtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSx3QkFBd0I7OztJQUV2Qiw0REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG4gIHB1YmxpYyBsb2FkPFQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQ+KGNvbXBvbmVudDogVHlwZTxUPiwgdmNyOiBWaWV3Q29udGFpbmVyUmVmKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXIpID0+IHRoaXMubG9hZER5bmFtaWNDb21wb25lbnQoY29tcG9uZW50LCB2Y3IsIHN1YnNjcmliZXIpKTtcbiAgfVxuICBwcml2YXRlIGxvYWREeW5hbWljQ29tcG9uZW50PFQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQ+KGNvbXBvbmVudDogVHlwZTxUPiwgdmNyOiBWaWV3Q29udGFpbmVyUmVmLCBzdWJzY3JpYmVyKSB7XG4gICAgY29uc3QgZmFjdG9yeTogYW55ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXG4gICAgKDxUPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xvc2UgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==