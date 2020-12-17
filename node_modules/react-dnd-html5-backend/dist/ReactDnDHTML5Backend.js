(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactDnDHTML5Backend"] = factory();
	else
		root["ReactDnDHTML5Backend"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BrowserDetector.ts":
/*!********************************!*\
  !*** ./src/BrowserDetector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar discount_lodash_1 = __webpack_require__(/*! ./utils/discount_lodash */ \"./src/utils/discount_lodash.ts\");\nexports.isFirefox = discount_lodash_1.memoize(function () {\n    return /firefox/i.test(navigator.userAgent);\n});\nexports.isSafari = discount_lodash_1.memoize(function () { return Boolean(window.safari); });\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/BrowserDetector.ts?");

/***/ }),

/***/ "./src/EnterLeaveCounter.ts":
/*!**********************************!*\
  !*** ./src/EnterLeaveCounter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar discount_lodash_1 = __webpack_require__(/*! ./utils/discount_lodash */ \"./src/utils/discount_lodash.ts\");\nvar EnterLeaveCounter = /** @class */ (function () {\n    function EnterLeaveCounter(isNodeInDocument) {\n        this.entered = [];\n        this.isNodeInDocument = isNodeInDocument;\n    }\n    EnterLeaveCounter.prototype.enter = function (enteringNode) {\n        var _this = this;\n        var previousLength = this.entered.length;\n        var isNodeEntered = function (node) {\n            return _this.isNodeInDocument(node) &&\n                (!node.contains || node.contains(enteringNode));\n        };\n        this.entered = discount_lodash_1.union(this.entered.filter(isNodeEntered), [enteringNode]);\n        return previousLength === 0 && this.entered.length > 0;\n    };\n    EnterLeaveCounter.prototype.leave = function (leavingNode) {\n        var previousLength = this.entered.length;\n        this.entered = discount_lodash_1.without(this.entered.filter(this.isNodeInDocument), leavingNode);\n        return previousLength > 0 && this.entered.length === 0;\n    };\n    EnterLeaveCounter.prototype.reset = function () {\n        this.entered = [];\n    };\n    return EnterLeaveCounter;\n}());\nexports.default = EnterLeaveCounter;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/EnterLeaveCounter.ts?");

/***/ }),

/***/ "./src/HTML5Backend.ts":
/*!*****************************!*\
  !*** ./src/HTML5Backend.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EnterLeaveCounter_1 = __webpack_require__(/*! ./EnterLeaveCounter */ \"./src/EnterLeaveCounter.ts\");\nvar BrowserDetector_1 = __webpack_require__(/*! ./BrowserDetector */ \"./src/BrowserDetector.ts\");\nvar OffsetUtils_1 = __webpack_require__(/*! ./OffsetUtils */ \"./src/OffsetUtils.ts\");\nvar NativeDragSources_1 = __webpack_require__(/*! ./NativeDragSources */ \"./src/NativeDragSources/index.ts\");\nvar NativeTypes = __webpack_require__(/*! ./NativeTypes */ \"./src/NativeTypes.ts\");\nvar HTML5Backend = /** @class */ (function () {\n    function HTML5Backend(manager) {\n        var _this = this;\n        this.sourcePreviewNodes = new Map();\n        this.sourcePreviewNodeOptions = new Map();\n        this.sourceNodes = new Map();\n        this.sourceNodeOptions = new Map();\n        this.dragStartSourceIds = null;\n        this.dropTargetIds = [];\n        this.dragEnterTargetIds = [];\n        this.currentNativeSource = null;\n        this.currentNativeHandle = null;\n        this.currentDragSourceNode = null;\n        this.altKeyPressed = false;\n        this.mouseMoveTimeoutTimer = null;\n        this.asyncEndDragFrameId = null;\n        this.dragOverTargetIds = null;\n        this.getSourceClientOffset = function (sourceId) {\n            return OffsetUtils_1.getNodeClientOffset(_this.sourceNodes.get(sourceId));\n        };\n        this.endDragNativeItem = function () {\n            if (!_this.isDraggingNativeItem()) {\n                return;\n            }\n            _this.actions.endDrag();\n            _this.registry.removeSource(_this.currentNativeHandle);\n            _this.currentNativeHandle = null;\n            _this.currentNativeSource = null;\n        };\n        this.isNodeInDocument = function (node) {\n            // Check the node either in the main document or in the current context\n            return ((!!document && document.body.contains(node)) ||\n                (!!_this.window && _this.window.document.body.contains(node)));\n        };\n        this.endDragIfSourceWasRemovedFromDOM = function () {\n            var node = _this.currentDragSourceNode;\n            if (_this.isNodeInDocument(node)) {\n                return;\n            }\n            if (_this.clearCurrentDragSourceNode()) {\n                _this.actions.endDrag();\n            }\n        };\n        this.handleTopDragStartCapture = function () {\n            _this.clearCurrentDragSourceNode();\n            _this.dragStartSourceIds = [];\n        };\n        this.handleTopDragStart = function (e) {\n            var dragStartSourceIds = _this.dragStartSourceIds;\n            _this.dragStartSourceIds = null;\n            var clientOffset = OffsetUtils_1.getEventClientOffset(e);\n            // Avoid crashing if we missed a drop event or our previous drag died\n            if (_this.monitor.isDragging()) {\n                _this.actions.endDrag();\n            }\n            // Don't publish the source just yet (see why below)\n            _this.actions.beginDrag(dragStartSourceIds || [], {\n                publishSource: false,\n                getSourceClientOffset: _this.getSourceClientOffset,\n                clientOffset: clientOffset,\n            });\n            var dataTransfer = e.dataTransfer;\n            var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);\n            if (_this.monitor.isDragging()) {\n                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {\n                    // Use custom drag image if user specifies it.\n                    // If child drag source refuses drag but parent agrees,\n                    // use parent's node as drag image. Neither works in IE though.\n                    var sourceId = _this.monitor.getSourceId();\n                    var sourceNode = _this.sourceNodes.get(sourceId);\n                    var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;\n                    if (dragPreview) {\n                        var _a = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _a.anchorX, anchorY = _a.anchorY, offsetX = _a.offsetX, offsetY = _a.offsetY;\n                        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };\n                        var offsetPoint = { offsetX: offsetX, offsetY: offsetY };\n                        var dragPreviewOffset = OffsetUtils_1.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);\n                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);\n                    }\n                }\n                try {\n                    // Firefox won't drag without setting data\n                    dataTransfer.setData('application/json', {});\n                }\n                catch (err) {\n                    // IE doesn't support MIME types in setData\n                }\n                // Store drag source node so we can check whether\n                // it is removed from DOM and trigger endDrag manually.\n                _this.setCurrentDragSourceNode(e.target);\n                // Now we are ready to publish the drag source.. or are we not?\n                var captureDraggingState = _this.getCurrentSourcePreviewNodeOptions().captureDraggingState;\n                if (!captureDraggingState) {\n                    // Usually we want to publish it in the next tick so that browser\n                    // is able to screenshot the current (not yet dragging) state.\n                    //\n                    // It also neatly avoids a situation where render() returns null\n                    // in the same tick for the source element, and browser freaks out.\n                    setTimeout(function () { return _this.actions.publishDragSource(); }, 0);\n                }\n                else {\n                    // In some cases the user may want to override this behavior, e.g.\n                    // to work around IE not supporting custom drag previews.\n                    //\n                    // When using a custom drag layer, the only way to prevent\n                    // the default drag preview from drawing in IE is to screenshot\n                    // the dragging state in which the node itself has zero opacity\n                    // and height. In this case, though, returning null from render()\n                    // will abruptly end the dragging, which is not obvious.\n                    //\n                    // This is the reason such behavior is strictly opt-in.\n                    _this.actions.publishDragSource();\n                }\n            }\n            else if (nativeType) {\n                // A native item (such as URL) dragged from inside the document\n                _this.beginDragNativeItem(nativeType);\n            }\n            else if (dataTransfer &&\n                !dataTransfer.types &&\n                ((e.target && !e.target.hasAttribute) ||\n                    !e.target.hasAttribute('draggable'))) {\n                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.\n                // Just let it drag. It's a native type (URL or text) and will be picked up in\n                // dragenter handler.\n                return;\n            }\n            else {\n                // If by this time no drag source reacted, tell browser not to drag.\n                e.preventDefault();\n            }\n        };\n        this.handleTopDragEndCapture = function () {\n            if (_this.clearCurrentDragSourceNode()) {\n                // Firefox can dispatch this event in an infinite loop\n                // if dragend handler does something like showing an alert.\n                // Only proceed if we have not handled it already.\n                _this.actions.endDrag();\n            }\n        };\n        this.handleTopDragEnterCapture = function (e) {\n            _this.dragEnterTargetIds = [];\n            var isFirstEnter = _this.enterLeaveCounter.enter(e.target);\n            if (!isFirstEnter || _this.monitor.isDragging()) {\n                return;\n            }\n            var dataTransfer = e.dataTransfer;\n            var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);\n            if (nativeType) {\n                // A native item (such as file or URL) dragged from outside the document\n                _this.beginDragNativeItem(nativeType);\n            }\n        };\n        this.handleTopDragEnter = function (e) {\n            var dragEnterTargetIds = _this.dragEnterTargetIds;\n            _this.dragEnterTargetIds = [];\n            if (!_this.monitor.isDragging()) {\n                // This is probably a native item type we don't understand.\n                return;\n            }\n            _this.altKeyPressed = e.altKey;\n            if (!BrowserDetector_1.isFirefox()) {\n                // Don't emit hover in `dragenter` on Firefox due to an edge case.\n                // If the target changes position as the result of `dragenter`, Firefox\n                // will still happily dispatch `dragover` despite target being no longer\n                // there. The easy solution is to only fire `hover` in `dragover` on FF.\n                _this.actions.hover(dragEnterTargetIds, {\n                    clientOffset: OffsetUtils_1.getEventClientOffset(e),\n                });\n            }\n            var canDrop = dragEnterTargetIds.some(function (targetId) {\n                return _this.monitor.canDropOnTarget(targetId);\n            });\n            if (canDrop) {\n                // IE requires this to fire dragover events\n                e.preventDefault();\n                if (e.dataTransfer) {\n                    e.dataTransfer.dropEffect = _this.getCurrentDropEffect();\n                }\n            }\n        };\n        this.handleTopDragOverCapture = function () {\n            _this.dragOverTargetIds = [];\n        };\n        this.handleTopDragOver = function (e) {\n            var dragOverTargetIds = _this.dragOverTargetIds;\n            _this.dragOverTargetIds = [];\n            if (!_this.monitor.isDragging()) {\n                // This is probably a native item type we don't understand.\n                // Prevent default \"drop and blow away the whole document\" action.\n                e.preventDefault();\n                if (e.dataTransfer) {\n                    e.dataTransfer.dropEffect = 'none';\n                }\n                return;\n            }\n            _this.altKeyPressed = e.altKey;\n            _this.actions.hover(dragOverTargetIds || [], {\n                clientOffset: OffsetUtils_1.getEventClientOffset(e),\n            });\n            var canDrop = (dragOverTargetIds || []).some(function (targetId) {\n                return _this.monitor.canDropOnTarget(targetId);\n            });\n            if (canDrop) {\n                // Show user-specified drop effect.\n                e.preventDefault();\n                if (e.dataTransfer) {\n                    e.dataTransfer.dropEffect = _this.getCurrentDropEffect();\n                }\n            }\n            else if (_this.isDraggingNativeItem()) {\n                // Don't show a nice cursor but still prevent default\n                // \"drop and blow away the whole document\" action.\n                e.preventDefault();\n            }\n            else {\n                e.preventDefault();\n                if (e.dataTransfer) {\n                    e.dataTransfer.dropEffect = 'none';\n                }\n            }\n        };\n        this.handleTopDragLeaveCapture = function (e) {\n            if (_this.isDraggingNativeItem()) {\n                e.preventDefault();\n            }\n            var isLastLeave = _this.enterLeaveCounter.leave(e.target);\n            if (!isLastLeave) {\n                return;\n            }\n            if (_this.isDraggingNativeItem()) {\n                _this.endDragNativeItem();\n            }\n        };\n        this.handleTopDropCapture = function (e) {\n            _this.dropTargetIds = [];\n            e.preventDefault();\n            if (_this.isDraggingNativeItem()) {\n                _this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);\n            }\n            _this.enterLeaveCounter.reset();\n        };\n        this.handleTopDrop = function (e) {\n            var dropTargetIds = _this.dropTargetIds;\n            _this.dropTargetIds = [];\n            _this.actions.hover(dropTargetIds, {\n                clientOffset: OffsetUtils_1.getEventClientOffset(e),\n            });\n            _this.actions.drop({ dropEffect: _this.getCurrentDropEffect() });\n            if (_this.isDraggingNativeItem()) {\n                _this.endDragNativeItem();\n            }\n            else {\n                _this.endDragIfSourceWasRemovedFromDOM();\n            }\n        };\n        this.handleSelectStart = function (e) {\n            var target = e.target;\n            // Only IE requires us to explicitly say\n            // we want drag drop operation to start\n            if (typeof target.dragDrop !== 'function') {\n                return;\n            }\n            // Inputs and textareas should be selectable\n            if (target.tagName === 'INPUT' ||\n                target.tagName === 'SELECT' ||\n                target.tagName === 'TEXTAREA' ||\n                target.isContentEditable) {\n                return;\n            }\n            // For other targets, ask IE\n            // to enable drag and drop\n            e.preventDefault();\n            target.dragDrop();\n        };\n        this.actions = manager.getActions();\n        this.monitor = manager.getMonitor();\n        this.registry = manager.getRegistry();\n        this.context = manager.getContext();\n        this.enterLeaveCounter = new EnterLeaveCounter_1.default(this.isNodeInDocument);\n    }\n    Object.defineProperty(HTML5Backend.prototype, \"window\", {\n        // public for test\n        get: function () {\n            if (this.context && this.context.window) {\n                return this.context.window;\n            }\n            else if (typeof window !== 'undefined') {\n                return window;\n            }\n            return undefined;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    HTML5Backend.prototype.setup = function () {\n        if (this.window === undefined) {\n            return;\n        }\n        if (this.window.__isReactDndBackendSetUp) {\n            throw new Error('Cannot have two HTML5 backends at the same time.');\n        }\n        this.window.__isReactDndBackendSetUp = true;\n        this.addEventListeners(this.window);\n    };\n    HTML5Backend.prototype.teardown = function () {\n        if (this.window === undefined) {\n            return;\n        }\n        this.window.__isReactDndBackendSetUp = false;\n        this.removeEventListeners(this.window);\n        this.clearCurrentDragSourceNode();\n        if (this.asyncEndDragFrameId) {\n            this.window.cancelAnimationFrame(this.asyncEndDragFrameId);\n        }\n    };\n    HTML5Backend.prototype.connectDragPreview = function (sourceId, node, options) {\n        var _this = this;\n        this.sourcePreviewNodeOptions.set(sourceId, options);\n        this.sourcePreviewNodes.set(sourceId, node);\n        return function () {\n            _this.sourcePreviewNodes.delete(sourceId);\n            _this.sourcePreviewNodeOptions.delete(sourceId);\n        };\n    };\n    HTML5Backend.prototype.connectDragSource = function (sourceId, node, options) {\n        var _this = this;\n        this.sourceNodes.set(sourceId, node);\n        this.sourceNodeOptions.set(sourceId, options);\n        var handleDragStart = function (e) { return _this.handleDragStart(e, sourceId); };\n        var handleSelectStart = function (e) { return _this.handleSelectStart(e); };\n        node.setAttribute('draggable', 'true');\n        node.addEventListener('dragstart', handleDragStart);\n        node.addEventListener('selectstart', handleSelectStart);\n        return function () {\n            _this.sourceNodes.delete(sourceId);\n            _this.sourceNodeOptions.delete(sourceId);\n            node.removeEventListener('dragstart', handleDragStart);\n            node.removeEventListener('selectstart', handleSelectStart);\n            node.setAttribute('draggable', 'false');\n        };\n    };\n    HTML5Backend.prototype.connectDropTarget = function (targetId, node) {\n        var _this = this;\n        var handleDragEnter = function (e) { return _this.handleDragEnter(e, targetId); };\n        var handleDragOver = function (e) { return _this.handleDragOver(e, targetId); };\n        var handleDrop = function (e) { return _this.handleDrop(e, targetId); };\n        node.addEventListener('dragenter', handleDragEnter);\n        node.addEventListener('dragover', handleDragOver);\n        node.addEventListener('drop', handleDrop);\n        return function () {\n            node.removeEventListener('dragenter', handleDragEnter);\n            node.removeEventListener('dragover', handleDragOver);\n            node.removeEventListener('drop', handleDrop);\n        };\n    };\n    HTML5Backend.prototype.addEventListeners = function (target) {\n        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813\n        if (!target.addEventListener) {\n            return;\n        }\n        target.addEventListener('dragstart', this\n            .handleTopDragStart);\n        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);\n        target.addEventListener('dragend', this.handleTopDragEndCapture, true);\n        target.addEventListener('dragenter', this\n            .handleTopDragEnter);\n        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);\n        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);\n        target.addEventListener('dragover', this.handleTopDragOver);\n        target.addEventListener('dragover', this.handleTopDragOverCapture, true);\n        target.addEventListener('drop', this.handleTopDrop);\n        target.addEventListener('drop', this.handleTopDropCapture, true);\n    };\n    HTML5Backend.prototype.removeEventListeners = function (target) {\n        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813\n        if (!target.removeEventListener) {\n            return;\n        }\n        target.removeEventListener('dragstart', this.handleTopDragStart);\n        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);\n        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);\n        target.removeEventListener('dragenter', this\n            .handleTopDragEnter);\n        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);\n        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);\n        target.removeEventListener('dragover', this\n            .handleTopDragOver);\n        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);\n        target.removeEventListener('drop', this.handleTopDrop);\n        target.removeEventListener('drop', this.handleTopDropCapture, true);\n    };\n    HTML5Backend.prototype.getCurrentSourceNodeOptions = function () {\n        var sourceId = this.monitor.getSourceId();\n        var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);\n        return __assign({ dropEffect: this.altKeyPressed ? 'copy' : 'move' }, (sourceNodeOptions || {}));\n    };\n    HTML5Backend.prototype.getCurrentDropEffect = function () {\n        if (this.isDraggingNativeItem()) {\n            // It makes more sense to default to 'copy' for native resources\n            return 'copy';\n        }\n        return this.getCurrentSourceNodeOptions().dropEffect;\n    };\n    HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function () {\n        var sourceId = this.monitor.getSourceId();\n        var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);\n        return __assign({ anchorX: 0.5, anchorY: 0.5, captureDraggingState: false }, (sourcePreviewNodeOptions || {}));\n    };\n    HTML5Backend.prototype.isDraggingNativeItem = function () {\n        var itemType = this.monitor.getItemType();\n        return Object.keys(NativeTypes).some(function (key) { return NativeTypes[key] === itemType; });\n    };\n    HTML5Backend.prototype.beginDragNativeItem = function (type) {\n        this.clearCurrentDragSourceNode();\n        this.currentNativeSource = NativeDragSources_1.createNativeDragSource(type);\n        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);\n        this.actions.beginDrag([this.currentNativeHandle]);\n    };\n    HTML5Backend.prototype.setCurrentDragSourceNode = function (node) {\n        var _this = this;\n        this.clearCurrentDragSourceNode();\n        this.currentDragSourceNode = node;\n        // A timeout of > 0 is necessary to resolve Firefox issue referenced\n        // See:\n        //   * https://github.com/react-dnd/react-dnd/pull/928\n        //   * https://github.com/react-dnd/react-dnd/issues/869\n        var MOUSE_MOVE_TIMEOUT = 1000;\n        // Receiving a mouse event in the middle of a dragging operation\n        // means it has ended and the drag source node disappeared from DOM,\n        // so the browser didn't dispatch the dragend event.\n        //\n        // We need to wait before we start listening for mousemove events.\n        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event\n        // immediately in some browsers.\n        //\n        // See:\n        //   * https://github.com/react-dnd/react-dnd/pull/928\n        //   * https://github.com/react-dnd/react-dnd/issues/869\n        //\n        this.mouseMoveTimeoutTimer = setTimeout(function () {\n            return (_this.window &&\n                _this.window.addEventListener('mousemove', _this.endDragIfSourceWasRemovedFromDOM, true));\n        }, MOUSE_MOVE_TIMEOUT);\n    };\n    HTML5Backend.prototype.clearCurrentDragSourceNode = function () {\n        if (this.currentDragSourceNode) {\n            this.currentDragSourceNode = null;\n            if (this.window) {\n                this.window.clearTimeout(this.mouseMoveTimeoutTimer || undefined);\n                this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);\n            }\n            this.mouseMoveTimeoutTimer = null;\n            return true;\n        }\n        return false;\n    };\n    HTML5Backend.prototype.handleDragStart = function (e, sourceId) {\n        if (!this.dragStartSourceIds) {\n            this.dragStartSourceIds = [];\n        }\n        this.dragStartSourceIds.unshift(sourceId);\n    };\n    HTML5Backend.prototype.handleDragEnter = function (e, targetId) {\n        this.dragEnterTargetIds.unshift(targetId);\n    };\n    HTML5Backend.prototype.handleDragOver = function (e, targetId) {\n        if (this.dragOverTargetIds === null) {\n            this.dragOverTargetIds = [];\n        }\n        this.dragOverTargetIds.unshift(targetId);\n    };\n    HTML5Backend.prototype.handleDrop = function (e, targetId) {\n        this.dropTargetIds.unshift(targetId);\n    };\n    return HTML5Backend;\n}());\nexports.default = HTML5Backend;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/HTML5Backend.ts?");

/***/ }),

/***/ "./src/MonotonicInterpolant.ts":
/*!*************************************!*\
  !*** ./src/MonotonicInterpolant.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar MonotonicInterpolant = /** @class */ (function () {\n    function MonotonicInterpolant(xs, ys) {\n        var length = xs.length;\n        // Rearrange xs and ys so that xs is sorted\n        var indexes = [];\n        for (var i = 0; i < length; i++) {\n            indexes.push(i);\n        }\n        indexes.sort(function (a, b) { return (xs[a] < xs[b] ? -1 : 1); });\n        // Get consecutive differences and slopes\n        var dys = [];\n        var dxs = [];\n        var ms = [];\n        var dx;\n        var dy;\n        for (var i = 0; i < length - 1; i++) {\n            dx = xs[i + 1] - xs[i];\n            dy = ys[i + 1] - ys[i];\n            dxs.push(dx);\n            dys.push(dy);\n            ms.push(dy / dx);\n        }\n        // Get degree-1 coefficients\n        var c1s = [ms[0]];\n        for (var i = 0; i < dxs.length - 1; i++) {\n            var m2 = ms[i];\n            var mNext = ms[i + 1];\n            if (m2 * mNext <= 0) {\n                c1s.push(0);\n            }\n            else {\n                dx = dxs[i];\n                var dxNext = dxs[i + 1];\n                var common = dx + dxNext;\n                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));\n            }\n        }\n        c1s.push(ms[ms.length - 1]);\n        // Get degree-2 and degree-3 coefficients\n        var c2s = [];\n        var c3s = [];\n        var m;\n        for (var i = 0; i < c1s.length - 1; i++) {\n            m = ms[i];\n            var c1 = c1s[i];\n            var invDx = 1 / dxs[i];\n            var common = c1 + c1s[i + 1] - m - m;\n            c2s.push((m - c1 - common) * invDx);\n            c3s.push(common * invDx * invDx);\n        }\n        this.xs = xs;\n        this.ys = ys;\n        this.c1s = c1s;\n        this.c2s = c2s;\n        this.c3s = c3s;\n    }\n    MonotonicInterpolant.prototype.interpolate = function (x) {\n        var _a = this, xs = _a.xs, ys = _a.ys, c1s = _a.c1s, c2s = _a.c2s, c3s = _a.c3s;\n        // The rightmost point in the dataset should give an exact result\n        var i = xs.length - 1;\n        if (x === xs[i]) {\n            return ys[i];\n        }\n        // Search for the interval x is in, returning the corresponding y if x is one of the original xs\n        var low = 0;\n        var high = c3s.length - 1;\n        var mid;\n        while (low <= high) {\n            mid = Math.floor(0.5 * (low + high));\n            var xHere = xs[mid];\n            if (xHere < x) {\n                low = mid + 1;\n            }\n            else if (xHere > x) {\n                high = mid - 1;\n            }\n            else {\n                return ys[mid];\n            }\n        }\n        i = Math.max(0, high);\n        // Interpolate\n        var diff = x - xs[i];\n        var diffSq = diff * diff;\n        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;\n    };\n    return MonotonicInterpolant;\n}());\nexports.default = MonotonicInterpolant;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/MonotonicInterpolant.ts?");

/***/ }),

/***/ "./src/NativeDragSources/NativeDragSource.ts":
/*!***************************************************!*\
  !*** ./src/NativeDragSources/NativeDragSource.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar NativeDragSource = /** @class */ (function () {\n    function NativeDragSource(config) {\n        var _this = this;\n        this.config = config;\n        this.item = {};\n        Object.keys(this.config.exposeProperties).forEach(function (property) {\n            Object.defineProperty(_this.item, property, {\n                configurable: true,\n                enumerable: true,\n                get: function () {\n                    // eslint-disable-next-line no-console\n                    console.warn(\"Browser doesn't allow reading \\\"\" + property + \"\\\" until the drop event.\");\n                    return null;\n                },\n            });\n        });\n    }\n    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function (dataTransfer) {\n        var _this = this;\n        var newProperties = {};\n        if (dataTransfer) {\n            Object.keys(this.config.exposeProperties).forEach(function (property) {\n                newProperties[property] = {\n                    value: _this.config.exposeProperties[property](dataTransfer, _this.config.matchesTypes),\n                };\n            });\n        }\n        Object.defineProperties(this.item, newProperties);\n    };\n    NativeDragSource.prototype.canDrag = function () {\n        return true;\n    };\n    NativeDragSource.prototype.beginDrag = function () {\n        return this.item;\n    };\n    NativeDragSource.prototype.isDragging = function (monitor, handle) {\n        return handle === monitor.getSourceId();\n    };\n    NativeDragSource.prototype.endDrag = function () {\n        // empty\n    };\n    return NativeDragSource;\n}());\nexports.NativeDragSource = NativeDragSource;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/NativeDragSources/NativeDragSource.ts?");

/***/ }),

/***/ "./src/NativeDragSources/getDataFromDataTransfer.ts":
/*!**********************************************************!*\
  !*** ./src/NativeDragSources/getDataFromDataTransfer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {\n    var result = typesToTry.reduce(function (resultSoFar, typeToTry) { return resultSoFar || dataTransfer.getData(typeToTry); }, '');\n    return result != null ? result : defaultValue;\n}\nexports.getDataFromDataTransfer = getDataFromDataTransfer;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/NativeDragSources/getDataFromDataTransfer.ts?");

/***/ }),

/***/ "./src/NativeDragSources/index.ts":
/*!****************************************!*\
  !*** ./src/NativeDragSources/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar nativeTypesConfig_1 = __webpack_require__(/*! ./nativeTypesConfig */ \"./src/NativeDragSources/nativeTypesConfig.ts\");\nvar NativeDragSource_1 = __webpack_require__(/*! ./NativeDragSource */ \"./src/NativeDragSources/NativeDragSource.ts\");\nfunction createNativeDragSource(type) {\n    return new NativeDragSource_1.NativeDragSource(nativeTypesConfig_1.nativeTypesConfig[type]);\n}\nexports.createNativeDragSource = createNativeDragSource;\nfunction matchNativeItemType(dataTransfer) {\n    if (!dataTransfer) {\n        return null;\n    }\n    var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);\n    return (Object.keys(nativeTypesConfig_1.nativeTypesConfig).filter(function (nativeItemType) {\n        var matchesTypes = nativeTypesConfig_1.nativeTypesConfig[nativeItemType].matchesTypes;\n        return matchesTypes.some(function (t) { return dataTransferTypes.indexOf(t) > -1; });\n    })[0] || null);\n}\nexports.matchNativeItemType = matchNativeItemType;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/NativeDragSources/index.ts?");

/***/ }),

/***/ "./src/NativeDragSources/nativeTypesConfig.ts":
/*!****************************************************!*\
  !*** ./src/NativeDragSources/nativeTypesConfig.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar NativeTypes = __webpack_require__(/*! ../NativeTypes */ \"./src/NativeTypes.ts\");\nvar getDataFromDataTransfer_1 = __webpack_require__(/*! ./getDataFromDataTransfer */ \"./src/NativeDragSources/getDataFromDataTransfer.ts\");\nexports.nativeTypesConfig = (_a = {},\n    _a[NativeTypes.FILE] = {\n        exposeProperties: {\n            files: function (dataTransfer) {\n                return Array.prototype.slice.call(dataTransfer.files);\n            },\n            items: function (dataTransfer) { return dataTransfer.items; },\n        },\n        matchesTypes: ['Files'],\n    },\n    _a[NativeTypes.URL] = {\n        exposeProperties: {\n            urls: function (dataTransfer, matchesTypes) {\n                return getDataFromDataTransfer_1.getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\\n');\n            },\n        },\n        matchesTypes: ['Url', 'text/uri-list'],\n    },\n    _a[NativeTypes.TEXT] = {\n        exposeProperties: {\n            text: function (dataTransfer, matchesTypes) {\n                return getDataFromDataTransfer_1.getDataFromDataTransfer(dataTransfer, matchesTypes, '');\n            },\n        },\n        matchesTypes: ['Text', 'text/plain'],\n    },\n    _a);\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/NativeDragSources/nativeTypesConfig.ts?");

/***/ }),

/***/ "./src/NativeTypes.ts":
/*!****************************!*\
  !*** ./src/NativeTypes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FILE = '__NATIVE_FILE__';\nexports.URL = '__NATIVE_URL__';\nexports.TEXT = '__NATIVE_TEXT__';\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/NativeTypes.ts?");

/***/ }),

/***/ "./src/OffsetUtils.ts":
/*!****************************!*\
  !*** ./src/OffsetUtils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BrowserDetector_1 = __webpack_require__(/*! ./BrowserDetector */ \"./src/BrowserDetector.ts\");\nvar MonotonicInterpolant_1 = __webpack_require__(/*! ./MonotonicInterpolant */ \"./src/MonotonicInterpolant.ts\");\nvar ELEMENT_NODE = 1;\nfunction getNodeClientOffset(node) {\n    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;\n    if (!el) {\n        return null;\n    }\n    var _a = el.getBoundingClientRect(), top = _a.top, left = _a.left;\n    return { x: left, y: top };\n}\nexports.getNodeClientOffset = getNodeClientOffset;\nfunction getEventClientOffset(e) {\n    return {\n        x: e.clientX,\n        y: e.clientY,\n    };\n}\nexports.getEventClientOffset = getEventClientOffset;\nfunction isImageNode(node) {\n    return (node.nodeName === 'IMG' &&\n        (BrowserDetector_1.isFirefox() || !document.documentElement.contains(node)));\n}\nfunction getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {\n    var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;\n    var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;\n    // Work around @2x coordinate discrepancies in browsers\n    if (BrowserDetector_1.isSafari() && isImage) {\n        dragPreviewHeight /= window.devicePixelRatio;\n        dragPreviewWidth /= window.devicePixelRatio;\n    }\n    return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };\n}\nfunction getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {\n    // The browsers will use the image intrinsic size under different conditions.\n    // Firefox only cares if it's an image, but WebKit also wants it to be detached.\n    var isImage = isImageNode(dragPreview);\n    var dragPreviewNode = isImage ? sourceNode : dragPreview;\n    var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);\n    var offsetFromDragPreview = {\n        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,\n        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y,\n    };\n    var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;\n    var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;\n    var _a = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _a.dragPreviewWidth, dragPreviewHeight = _a.dragPreviewHeight;\n    var calculateYOffset = function () {\n        var interpolantY = new MonotonicInterpolant_1.default([0, 0.5, 1], [\n            // Dock to the top\n            offsetFromDragPreview.y,\n            // Align at the center\n            (offsetFromDragPreview.y / sourceHeight) * dragPreviewHeight,\n            // Dock to the bottom\n            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight,\n        ]);\n        var y = interpolantY.interpolate(anchorY);\n        // Work around Safari 8 positioning bug\n        if (BrowserDetector_1.isSafari() && isImage) {\n            // We'll have to wait for @3x to see if this is entirely correct\n            y += (window.devicePixelRatio - 1) * dragPreviewHeight;\n        }\n        return y;\n    };\n    var calculateXOffset = function () {\n        // Interpolate coordinates depending on anchor point\n        // If you know a simpler way to do this, let me know\n        var interpolantX = new MonotonicInterpolant_1.default([0, 0.5, 1], [\n            // Dock to the left\n            offsetFromDragPreview.x,\n            // Align at the center\n            (offsetFromDragPreview.x / sourceWidth) * dragPreviewWidth,\n            // Dock to the right\n            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth,\n        ]);\n        return interpolantX.interpolate(anchorX);\n    };\n    // Force offsets if specified in the options.\n    var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;\n    var isManualOffsetX = offsetX === 0 || offsetX;\n    var isManualOffsetY = offsetY === 0 || offsetY;\n    return {\n        x: isManualOffsetX ? offsetX : calculateXOffset(),\n        y: isManualOffsetY ? offsetY : calculateYOffset(),\n    };\n}\nexports.getDragPreviewOffset = getDragPreviewOffset;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/OffsetUtils.ts?");

/***/ }),

/***/ "./src/getEmptyImage.ts":
/*!******************************!*\
  !*** ./src/getEmptyImage.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar emptyImage;\nfunction getEmptyImage() {\n    if (!emptyImage) {\n        emptyImage = new Image();\n        emptyImage.src =\n            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';\n    }\n    return emptyImage;\n}\nexports.default = getEmptyImage;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/getEmptyImage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./interfaces */ \"./src/interfaces.ts\"));\nvar HTML5Backend_1 = __webpack_require__(/*! ./HTML5Backend */ \"./src/HTML5Backend.ts\");\nvar getEmptyImage_1 = __webpack_require__(/*! ./getEmptyImage */ \"./src/getEmptyImage.ts\");\nexports.getEmptyImage = getEmptyImage_1.default;\nvar NativeTypes = __webpack_require__(/*! ./NativeTypes */ \"./src/NativeTypes.ts\");\nexports.NativeTypes = NativeTypes;\nfunction createHTML5Backend(manager) {\n    return new HTML5Backend_1.default(manager);\n}\nexports.default = createHTML5Backend;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/index.ts?");

/***/ }),

/***/ "./src/interfaces.ts":
/*!***************************!*\
  !*** ./src/interfaces.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/interfaces.ts?");

/***/ }),

/***/ "./src/utils/discount_lodash.ts":
/*!**************************************!*\
  !*** ./src/utils/discount_lodash.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction memoize(fn) {\n    var result = null;\n    var memoized = function () {\n        if (result == null) {\n            result = fn();\n        }\n        return result;\n    };\n    return memoized;\n}\nexports.memoize = memoize;\n/**\n * drop-in replacement for _.without\n */\nfunction without(items, item) {\n    return items.filter(function (i) { return i !== item; });\n}\nexports.without = without;\nfunction union(itemsA, itemsB) {\n    var set = new Set();\n    var insertItem = function (item) { return set.add(item); };\n    itemsA.forEach(insertItem);\n    itemsB.forEach(insertItem);\n    var result = [];\n    set.forEach(function (key) { return result.push(key); });\n    return result;\n}\nexports.union = union;\n\n\n//# sourceURL=webpack://ReactDnDHTML5Backend/./src/utils/discount_lodash.ts?");

/***/ })

/******/ });
});