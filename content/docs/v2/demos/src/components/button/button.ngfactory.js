/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './button';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
export var Wrapper_Button = (function () {
    function Wrapper_Button(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.Button(p0, p1, p2, p3);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
        this._expr_10 = import1.UNINITIALIZED;
        this._expr_11 = import1.UNINITIALIZED;
    }
    Wrapper_Button.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Button.prototype.ngOnDestroy = function () {
    };
    Wrapper_Button.prototype.check_large = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.large = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Button.prototype.check_small = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.small = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Button.prototype.check_default = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.default = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Button.prototype.check_outline = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.outline = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Button.prototype.check_clear = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.clear = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_Button.prototype.check_solid = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.solid = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_Button.prototype.check_round = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.round = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_Button.prototype.check_block = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.block = currValue;
            this._expr_7 = currValue;
        }
    };
    Wrapper_Button.prototype.check_full = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_8, currValue))) {
            this._changed = true;
            this.context.full = currValue;
            this._expr_8 = currValue;
        }
    };
    Wrapper_Button.prototype.check_strong = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_9, currValue))) {
            this._changed = true;
            this.context.strong = currValue;
            this._expr_9 = currValue;
        }
    };
    Wrapper_Button.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_10, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_10 = currValue;
        }
    };
    Wrapper_Button.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_11, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_11 = currValue;
        }
    };
    Wrapper_Button.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Button.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Button.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Button.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Button;
}());
var renderType_Button_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Button_Host0 = (function (_super) {
    __extends(View_Button_Host0, _super);
    function View_Button_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Button_Host0, renderType_Button_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Button_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'div', new import3.InlineArray2(2, 'ion-button', ''), rootSelector, null);
        this.compView_0 = new View_Button0(this.viewUtils, this, 0, this._el_0);
        this._Button_0_3 = new Wrapper_Button('', this.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this.compView_0.create(this._Button_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Button_0_3.context);
    };
    View_Button_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Button) && (0 === requestNodeIndex))) {
            return this._Button_0_3.context;
        }
        return notFoundResult;
    };
    View_Button_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Button_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Button_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Button_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Button_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_Button_Host0;
}(import2.AppView));
export var ButtonNgFactory = new import7.ComponentFactory('[ion-button]', View_Button_Host0, import0.Button);
var styles_Button = [];
var renderType_Button = import3.createRenderComponentType('', 1, import5.ViewEncapsulation.None, styles_Button, {});
export var View_Button0 = (function (_super) {
    __extends(View_Button0, _super);
    function View_Button0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Button0, renderType_Button, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckOnce);
    }
    View_Button0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', new import3.InlineArray2(2, 'class', 'button-inner'), null);
        this.projectNodes(this._el_0, 0);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'button-effect'), null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    return View_Button0;
}(import2.AppView));
//# sourceMappingURL=button.ngfactory.js.map