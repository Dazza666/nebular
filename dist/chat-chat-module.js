(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "/EDb":
/*!********************************************************!*\
  !*** ./src/playground/with-layout/chat/chat.module.ts ***!
  \********************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-routing.module */ "8qsi");
/* harmony import */ var _chat_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-colors.component */ "aUGV");
/* harmony import */ var _chat_conversation_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-conversation-showcase.component */ "PuME");
/* harmony import */ var _chat_drop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-drop.component */ "WfRW");
/* harmony import */ var _chat_message_types_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-message-types-showcase.component */ "o8Sw");
/* harmony import */ var _chat_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-showcase.component */ "3Two");
/* harmony import */ var _chat_sizes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-sizes.component */ "3obY");
/* harmony import */ var _chat_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-test.component */ "KgWh");
/* harmony import */ var _framework_theme_components_chat_chat_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.module */ "9D1E");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbChatModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"]
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_colors_component__WEBPACK_IMPORTED_MODULE_4__["ChatColorsComponent"],
        _chat_conversation_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ChatConversationShowcaseComponent"],
        _chat_drop_component__WEBPACK_IMPORTED_MODULE_6__["ChatDropComponent"],
        _chat_message_types_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageTypesShowcaseComponent"],
        _chat_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ChatShowcaseComponent"],
        _chat_sizes_component__WEBPACK_IMPORTED_MODULE_9__["ChatSizesComponent"],
        _chat_test_component__WEBPACK_IMPORTED_MODULE_10__["ChatTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _framework_theme_components_chat_chat_module__WEBPACK_IMPORTED_MODULE_11__["NbChatModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _chat_colors_component__WEBPACK_IMPORTED_MODULE_4__["ChatColorsComponent"],
                    _chat_conversation_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ChatConversationShowcaseComponent"],
                    _chat_drop_component__WEBPACK_IMPORTED_MODULE_6__["ChatDropComponent"],
                    _chat_message_types_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageTypesShowcaseComponent"],
                    _chat_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ChatShowcaseComponent"],
                    _chat_sizes_component__WEBPACK_IMPORTED_MODULE_9__["ChatSizesComponent"],
                    _chat_test_component__WEBPACK_IMPORTED_MODULE_10__["ChatTestComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbChatModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "3Two":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-showcase.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatShowcaseComponent", function() { return ChatShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-showcase.service */ "H2eJ");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








function ChatShowcaseComponent_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 3);
} if (rf & 2) {
    var msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", msg_r1.type)("message", msg_r1.text)("reply", msg_r1.reply)("sender", msg_r1.user.name)("date", msg_r1.date)("files", msg_r1.files)("quote", msg_r1.quote)("latitude", msg_r1.latitude)("longitude", msg_r1.longitude)("avatar", msg_r1.user.avatar);
} }
var ChatShowcaseComponent = /** @class */ (function () {
    function ChatShowcaseComponent(chatShowcaseService) {
        this.chatShowcaseService = chatShowcaseService;
        this.messages = this.chatShowcaseService.loadMessages();
    }
    ChatShowcaseComponent.prototype.sendMessage = function (event) {
        var _this = this;
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'file-text-outline',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
        var botReply = this.chatShowcaseService.reply(event.message);
        if (botReply) {
            setTimeout(function () { _this.messages.push(botReply); }, 500);
        }
    };
    ChatShowcaseComponent.ɵfac = function ChatShowcaseComponent_Factory(t) { return new (t || ChatShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ChatShowcaseService"])); };
    ChatShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatShowcaseComponent, selectors: [["nb-chat-showcase"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_chat_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ChatShowcaseService"]])], decls: 3, vars: 2, consts: [["title", "Nebular Conversational UI", "size", "large"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar", 4, "ngFor", "ngForOf"], [3, "dropFiles", "send"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar"]], template: function ChatShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatShowcaseComponent_nb_chat_message_1_Template, 1, 10, "nb-chat-message", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatShowcaseComponent_Template_nb_chat_form_send_2_listener($event) { return ctx.sendMessage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropFiles", true);
        } }, directives: [_framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["NbChatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_4__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["NbChatMessageComponent"]], styles: ["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n    }"] });
    return ChatShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-showcase',
                templateUrl: './chat-showcase.component.html',
                providers: [_chat_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ChatShowcaseService"]],
                styles: ["\n    ::ng-deep nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat {\n      width: 500px;\n    }\n  "],
            }]
    }], function () { return [{ type: _chat_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ChatShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "3obY":
/*!*****************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-sizes.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSizesComponent", function() { return ChatSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");






function ChatSizesComponent_nb_chat_0_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 4);
} if (rf & 2) {
    var msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", msg_r3.type)("message", msg_r3.text)("reply", msg_r3.reply)("sender", msg_r3.user.name)("date", msg_r3.date)("files", msg_r3.files)("avatar", msg_r3.user.avatar);
} }
function ChatSizesComponent_nb_chat_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatSizesComponent_nb_chat_0_nb_chat_message_1_Template, 1, 7, "nb-chat-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatSizesComponent_nb_chat_0_Template_nb_chat_form_send_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var chat_r1 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendMessage(chat_r1.messages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", chat_r1.title)("size", chat_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r1.messages);
} }
var ChatSizesComponent = /** @class */ (function () {
    function ChatSizesComponent() {
        this.chats = [
            {
                title: 'Nebular Conversational UI Small',
                messages: [
                    {
                        text: 'Small!',
                        date: new Date(),
                        reply: true,
                        user: {
                            name: 'Bot',
                            avatar: 'https://i.gifer.com/no.gif',
                        },
                    },
                ],
                size: 'small',
            },
            {
                title: 'Nebular Conversational UI Medium',
                messages: [
                    {
                        text: 'Medium!',
                        date: new Date(),
                        reply: true,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
                size: 'large',
            },
        ];
    }
    ChatSizesComponent.prototype.sendMessage = function (messages, event) {
        messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
            },
        });
    };
    ChatSizesComponent.ɵfac = function ChatSizesComponent_Factory(t) { return new (t || ChatSizesComponent)(); };
    ChatSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatSizesComponent, selectors: [["nb-chat-sizes"]], decls: 1, vars: 1, consts: [["status", "info", 3, "title", "size", 4, "ngFor", "ngForOf"], ["status", "info", 3, "title", "size"], [3, "type", "message", "reply", "sender", "date", "files", "avatar", 4, "ngFor", "ngForOf"], [3, "send"], [3, "type", "message", "reply", "sender", "date", "files", "avatar"]], template: function ChatSizesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatSizesComponent_nb_chat_0_Template, 3, 3, "nb-chat", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["NbChatComponent"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["NbChatMessageComponent"]], styles: ["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }"] });
    return ChatSizesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-sizes',
                styles: ["\n    ::ng-deep nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }"],
                templateUrl: './chat-size.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "8qsi":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-colors.component */ "aUGV");
/* harmony import */ var _chat_conversation_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-conversation-showcase.component */ "PuME");
/* harmony import */ var _chat_drop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-drop.component */ "WfRW");
/* harmony import */ var _chat_message_types_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-message-types-showcase.component */ "o8Sw");
/* harmony import */ var _chat_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-showcase.component */ "3Two");
/* harmony import */ var _chat_sizes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-sizes.component */ "3obY");
/* harmony import */ var _chat_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-test.component */ "KgWh");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var routes = [
    {
        path: 'chat-colors.component',
        component: _chat_colors_component__WEBPACK_IMPORTED_MODULE_2__["ChatColorsComponent"],
    },
    {
        path: 'chat-conversation-showcase.component',
        component: _chat_conversation_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ChatConversationShowcaseComponent"],
    },
    {
        path: 'chat-drop.component',
        component: _chat_drop_component__WEBPACK_IMPORTED_MODULE_4__["ChatDropComponent"],
    },
    {
        path: 'chat-message-types-showcase.component',
        component: _chat_message_types_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageTypesShowcaseComponent"],
    },
    {
        path: 'chat-showcase.component',
        component: _chat_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ChatShowcaseComponent"],
    },
    {
        path: 'chat-sizes.component',
        component: _chat_sizes_component__WEBPACK_IMPORTED_MODULE_7__["ChatSizesComponent"],
    },
    {
        path: 'chat-test.component',
        component: _chat_test_component__WEBPACK_IMPORTED_MODULE_8__["ChatTestComponent"],
    },
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
    ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ChatRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "D3wv":
/*!********************************************************!*\
  !*** ./src/playground/with-layout/chat/bot-replies.ts ***!
  \********************************************************/
/*! exports provided: gifsLinks, imageLinks, botReplies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gifsLinks", function() { return gifsLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLinks", function() { return imageLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "botReplies", function() { return botReplies; });
var botAvatar = 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png';
var gifsLinks = [
    'https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif',
    'https://i.gifer.com/no.gif',
    'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
    'http://www.reactiongifs.com/r/wnd1.gif',
];
var imageLinks = [
    'https://picsum.photos/320/240/?image=357',
    'https://picsum.photos/320/240/?image=556',
    'https://picsum.photos/320/240/?image=339',
    'https://picsum.photos/320/240/?image=387',
    'https://picsum.photos/320/240/?image=30',
    'https://picsum.photos/320/240/?image=271',
];
var fileLink = 'http://google.com';
var botReplies = [
    {
        regExp: /([H,h]ey)|([H,h]i)/g,
        answerArray: ['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([H,h]elp)/g,
        answerArray: ["No problem! Try sending a message containing word \"hey\", \"image\",\n    \"gif\", \"file\", \"map\", \"quote\", \"file group\" to see different message components"],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([I,i]mage)|(IMAGE)|([P,p]ic)|(Picture)/g,
        answerArray: ['Hey look at this!', 'Ready to work', 'Yes, master.'],
        type: 'pic',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: '',
                    type: 'image/jpeg',
                },
            ],
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([G,g]if)|(GIF)/g,
        type: 'gif',
        answerArray: ['No problem', 'Well done', 'You got it man'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: '',
                    type: 'image/gif',
                },
            ],
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([F,f]ile group)|(FILE)/g,
        type: 'group',
        answerArray: ['Take it!', 'Job Done.', 'As you wish'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: fileLink,
                    icon: 'file-text-outline',
                },
                {
                    url: '',
                    type: 'image/gif',
                },
                {
                    url: '',
                    type: 'image/jpeg',
                },
            ],
            icon: 'file-text-outline',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([F,f]ile)|(FILE)/g,
        type: 'file',
        answerArray: ['Take it!', 'Job Done.', 'As you wish'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: fileLink,
                    icon: 'file-text-outline',
                },
            ],
            icon: 'file-text-outline',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([M,m]ap)|(MAP)/g,
        type: 'map',
        answerArray: ['Done.', 'My sight is yours.', 'I shall be your eyes.'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'map',
            latitude: 53.914321,
            longitude: 27.5998355,
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([Q,q]uote)|(QUOTE)/g,
        type: 'quote',
        answerArray: ['Quoted!', 'Say no more.', 'I gladly obey.'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'quote',
            quote: '',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /(.*)/g,
        answerArray: ['Hello there! Try typing "help"'],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
];


/***/ }),

/***/ "H2eJ":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-showcase.service.ts ***!
  \******************************************************************/
/*! exports provided: ChatShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatShowcaseService", function() { return ChatShowcaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "T+/3");
/* harmony import */ var _bot_replies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot-replies */ "D3wv");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var ChatShowcaseService = /** @class */ (function () {
    function ChatShowcaseService() {
    }
    ChatShowcaseService.prototype.loadMessages = function () {
        return _messages__WEBPACK_IMPORTED_MODULE_1__["messages"];
    };
    ChatShowcaseService.prototype.loadBotReplies = function () {
        return _bot_replies__WEBPACK_IMPORTED_MODULE_2__["botReplies"];
    };
    ChatShowcaseService.prototype.reply = function (message) {
        var botReply = this.loadBotReplies()
            .find(function (reply) { return message.search(reply.regExp) !== -1; });
        if (botReply.reply.type === 'quote') {
            botReply.reply.quote = message;
        }
        if (botReply.type === 'gif') {
            botReply.reply.files[0].url = _bot_replies__WEBPACK_IMPORTED_MODULE_2__["gifsLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_2__["gifsLinks"].length)];
        }
        if (botReply.type === 'pic') {
            botReply.reply.files[0].url = _bot_replies__WEBPACK_IMPORTED_MODULE_2__["imageLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_2__["imageLinks"].length)];
        }
        if (botReply.type === 'group') {
            botReply.reply.files[1].url = _bot_replies__WEBPACK_IMPORTED_MODULE_2__["gifsLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_2__["gifsLinks"].length)];
            botReply.reply.files[2].url = _bot_replies__WEBPACK_IMPORTED_MODULE_2__["imageLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_2__["imageLinks"].length)];
        }
        botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
        return __assign({}, botReply.reply);
    };
    ChatShowcaseService.ɵfac = function ChatShowcaseService_Factory(t) { return new (t || ChatShowcaseService)(); };
    ChatShowcaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatShowcaseService, factory: ChatShowcaseService.ɵfac });
    return ChatShowcaseService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatShowcaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "KgWh":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-test.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatTestComponent", function() { return ChatTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






function ChatTestComponent_nb_chat_0_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 4);
} if (rf & 2) {
    var msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", msg_r3.type)("message", msg_r3.text)("reply", msg_r3.reply)("sender", msg_r3.user.name)("date", msg_r3.date)("files", msg_r3.files)("quote", msg_r3.quote)("latitude", msg_r3.latitude)("longitude", msg_r3.longitude)("avatar", msg_r3.user.avatar);
} }
function ChatTestComponent_nb_chat_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatTestComponent_nb_chat_0_nb_chat_message_1_Template, 1, 10, "nb-chat-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatTestComponent_nb_chat_0_Template_nb_chat_form_send_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", chat_r1.size)("status", chat_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
} }
var ChatTestComponent = /** @class */ (function () {
    function ChatTestComponent() {
        this.messages = [];
        this.sizes = ['tiny', 'small', 'medium', 'large', 'giant'];
        this.statuses = ['primary', 'success', 'info', 'warning', 'danger'];
        this.chats = this.prepareChats();
    }
    ChatTestComponent.prototype.prepareChats = function () {
        var _this = this;
        var result = [];
        this.statuses.forEach(function (status) {
            _this.sizes.forEach(function (size) {
                result.push({
                    size: size,
                    status: status,
                });
            });
        });
        return result;
    };
    ChatTestComponent.prototype.sendMessage = function (event) {
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
            },
        });
    };
    ChatTestComponent.ɵfac = function ChatTestComponent_Factory(t) { return new (t || ChatTestComponent)(); };
    ChatTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatTestComponent, selectors: [["nb-chat-test"]], decls: 1, vars: 1, consts: [[3, "size", "status", 4, "ngFor", "ngForOf"], [3, "size", "status"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar", 4, "ngFor", "ngForOf"], [3, "send"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar"]], template: function ChatTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatTestComponent_nb_chat_0_Template, 3, 3, "nb-chat", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["NbChatComponent"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["NbChatMessageComponent"]], encapsulation: 2 });
    return ChatTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-test',
                template: "\n    <nb-chat\n      *ngFor=\"let chat of chats\"\n      [size]=\"chat.size\"\n      [status]=\"chat.status\">\n\n      <nb-chat-message *ngFor=\"let msg of messages\"\n                       [type]=\"msg.type\"\n                       [message]=\"msg.text\"\n                       [reply]=\"msg.reply\"\n                       [sender]=\"msg.user.name\"\n                       [date]=\"msg.date\"\n                       [files]=\"msg.files\"\n                       [quote]=\"msg.quote\"\n                       [latitude]=\"msg.latitude\"\n                       [longitude]=\"msg.longitude\"\n                       [avatar]=\"msg.user.avatar\">\n      </nb-chat-message>\n      <nb-chat-form (send)=\"sendMessage($event)\">\n      </nb-chat-form>\n    </nb-chat>\n  ",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PuME":
/*!*********************************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-conversation-showcase.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChatConversationShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConversationShowcaseComponent", function() { return ChatConversationShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");






function ChatConversationShowcaseComponent_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 4);
} if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", message_r2.type)("message", message_r2.text)("reply", message_r2.reply)("sender", message_r2.user.name)("date", message_r2.date)("files", message_r2.files)("quote", message_r2.quote)("latitude", message_r2.latitude)("longitude", message_r2.longitude)("avatar", message_r2.user.avatar);
} }
function ChatConversationShowcaseComponent_nb_chat_message_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 4);
} if (rf & 2) {
    var message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", message_r3.type)("message", message_r3.text)("reply", !message_r3.reply)("sender", message_r3.user.name)("date", message_r3.date)("files", message_r3.files)("quote", message_r3.quote)("latitude", message_r3.latitude)("longitude", message_r3.longitude)("avatar", message_r3.user.avatar);
} }
var ChatConversationShowcaseComponent = /** @class */ (function () {
    function ChatConversationShowcaseComponent() {
        this.messages = [];
    }
    ChatConversationShowcaseComponent.prototype.sendMessage = function (event, userName, avatar, reply) {
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'file-text-outline',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: reply,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: userName,
                avatar: avatar,
            },
        });
    };
    ChatConversationShowcaseComponent.ɵfac = function ChatConversationShowcaseComponent_Factory(t) { return new (t || ChatConversationShowcaseComponent)(); };
    ChatConversationShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatConversationShowcaseComponent, selectors: [["nb-chat-conversation-showcase"]], decls: 6, vars: 6, consts: [["title", "Jake", "size", "medium", "status", "warning"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar", 4, "ngFor", "ngForOf"], [3, "showButton", "dropFiles", "send"], ["title", "John", "size", "medium", "status", "success"], [3, "type", "message", "reply", "sender", "date", "files", "quote", "latitude", "longitude", "avatar"]], template: function ChatConversationShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatConversationShowcaseComponent_nb_chat_message_1_Template, 1, 10, "nb-chat-message", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatConversationShowcaseComponent_Template_nb_chat_form_send_2_listener($event) { return ctx.sendMessage($event, "Jake", "http://www.reactiongifs.com/r/wnd1.gif", true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-chat", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatConversationShowcaseComponent_nb_chat_message_4_Template, 1, 10, "nb-chat-message", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-chat-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatConversationShowcaseComponent_Template_nb_chat_form_send_5_listener($event) { return ctx.sendMessage($event, "John", "https://i.gifer.com/no.gif", false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButton", false)("dropFiles", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButton", false)("dropFiles", true);
        } }, directives: [_framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["NbChatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["NbChatMessageComponent"]], styles: ["nb-layout-column {\n      display: flex;\n      justify-content: center;\n    }\n    [_nghost-%COMP%] {\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 300px;\n      margin: 1rem;\n    }"] });
    return ChatConversationShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatConversationShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-conversation-showcase',
                styles: ["\n    ::ng-deep nb-layout-column {\n      display: flex;\n      justify-content: center;\n    }\n    :host {\n      display: flex;\n    }\n    nb-chat {\n      width: 300px;\n      margin: 1rem;\n    }\n  "],
                templateUrl: './chat-conversation-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "T+/3":
/*!*****************************************************!*\
  !*** ./src/playground/with-layout/chat/messages.ts ***!
  \*****************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
var messages = [
    {
        text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        reply: false,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: 'https://i.gifer.com/no.gif',
        },
    },
    {
        text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        reply: true,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: 'https://i.gifer.com/no.gif',
        },
    },
    {
        text: 'Hello, how are you?',
        reply: false,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'Hey looks at that pic I just found!',
        reply: false,
        date: new Date(),
        type: 'file',
        files: [
            {
                url: 'https://i.gifer.com/no.gif',
                type: 'image/jpeg',
                icon: false,
            },
        ],
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'What do you mean by that?',
        reply: false,
        date: new Date(),
        type: 'quote',
        quote: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'Attached is an archive I mentioned',
        reply: true,
        date: new Date(),
        type: 'file',
        files: [
            {
                url: 'https://i.gifer.com/no.gif',
                icon: 'file-text-outline',
            },
        ],
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'Meet me there',
        reply: false,
        date: new Date(),
        type: 'map',
        latitude: 40.714728,
        longitude: -73.998672,
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
];


/***/ }),

/***/ "WfRW":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-drop.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDropComponent", function() { return ChatDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");






function ChatDropComponent_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 3);
} if (rf & 2) {
    var msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", msg_r1.type)("message", msg_r1.text)("reply", msg_r1.reply)("sender", msg_r1.user.name)("date", msg_r1.date)("files", msg_r1.files)("avatar", msg_r1.user.avatar);
} }
var ChatDropComponent = /** @class */ (function () {
    function ChatDropComponent() {
        this.messages = [
            {
                text: 'Drag & drop a file or a group of files.',
                date: new Date(),
                reply: true,
                user: {
                    name: 'Bot',
                    avatar: 'https://i.gifer.com/no.gif',
                },
            },
        ];
    }
    ChatDropComponent.prototype.sendMessage = function (event) {
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'file-text-outline',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            files: files,
            type: files.length ? 'file' : 'text',
            reply: true,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
    };
    ChatDropComponent.ɵfac = function ChatDropComponent_Factory(t) { return new (t || ChatDropComponent)(); };
    ChatDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatDropComponent, selectors: [["nb-chat-drop"]], decls: 3, vars: 2, consts: [["title", "Drag & Drop chat", "size", "medium"], [3, "type", "message", "reply", "sender", "date", "files", "avatar", 4, "ngFor", "ngForOf"], [3, "dropFiles", "send"], [3, "type", "message", "reply", "sender", "date", "files", "avatar"]], template: function ChatDropComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatDropComponent_nb_chat_message_1_Template, 1, 7, "nb-chat-message", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatDropComponent_Template_nb_chat_form_send_2_listener($event) { return ctx.sendMessage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropFiles", true);
        } }, directives: [_framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["NbChatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["NbChatMessageComponent"]], styles: ["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      height: 80vw;\n    }"] });
    return ChatDropComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-drop',
                styles: ["\n    ::ng-deep nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat {\n      width: 500px;\n      height: 80vw;\n    }\n  "],
                templateUrl: './chat-drop.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "aUGV":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-colors.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatColorsComponent", function() { return ChatColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-form.component */ "JBNF");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");






function ChatColorsComponent_nb_chat_0_nb_chat_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 4);
} if (rf & 2) {
    var msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", msg_r3.type)("message", msg_r3.text)("reply", msg_r3.reply)("sender", msg_r3.user.name)("date", msg_r3.date)("files", msg_r3.files)("avatar", msg_r3.user.avatar);
} }
function ChatColorsComponent_nb_chat_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatColorsComponent_nb_chat_0_nb_chat_message_1_Template, 1, 7, "nb-chat-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-chat-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatColorsComponent_nb_chat_0_Template_nb_chat_form_send_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var chat_r1 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendMessage(chat_r1.messages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", chat_r1.title)("status", chat_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r1.messages);
} }
var ChatColorsComponent = /** @class */ (function () {
    function ChatColorsComponent() {
        this.chats = [
            {
                status: 'success',
                title: 'Nebular Conversational UI Success',
                messages: [
                    {
                        text: 'Success!',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
            },
            {
                status: 'danger',
                title: 'Nebular Conversational UI Danger',
                messages: [
                    {
                        text: 'Danger!',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
            },
            {
                status: 'primary',
                title: 'Nebular Conversational UI Primary',
                messages: [
                    {
                        text: 'Primary!',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
            },
            {
                status: 'info',
                title: 'Nebular Conversational UI Info',
                messages: [
                    {
                        text: 'Info!',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
            },
            {
                status: 'warning',
                title: 'Nebular Conversational UI Warning',
                messages: [
                    {
                        text: 'Warning!',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Bot',
                            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
                        },
                    },
                ],
            },
        ];
    }
    ChatColorsComponent.prototype.sendMessage = function (messages, event) {
        messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
            },
        });
    };
    ChatColorsComponent.ɵfac = function ChatColorsComponent_Factory(t) { return new (t || ChatColorsComponent)(); };
    ChatColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatColorsComponent, selectors: [["nb-chat-colors"]], decls: 1, vars: 1, consts: [["size", "small", 3, "title", "status", 4, "ngFor", "ngForOf"], ["size", "small", 3, "title", "status"], [3, "type", "message", "reply", "sender", "date", "files", "avatar", 4, "ngFor", "ngForOf"], [3, "send"], [3, "type", "message", "reply", "sender", "date", "files", "avatar"]], template: function ChatColorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatColorsComponent_nb_chat_0_Template, 3, 3, "nb-chat", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["NbChatComponent"], _framework_theme_components_chat_chat_form_component__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["NbChatMessageComponent"]], styles: ["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }"] });
    return ChatColorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-colors',
                templateUrl: './chat-colors.component.html',
                styles: ["\n    ::ng-deep nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "o8Sw":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/chat/chat-message-types-showcase.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChatMessageTypesShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageTypesShowcaseComponent", function() { return ChatMessageTypesShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat.component */ "UaAL");
/* harmony import */ var _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/chat/chat-message.component */ "1lGL");




var _c0 = function () { return { url: "http://www.reactiongifs.com/r/wnd1.gif", type: "image/gif" }; };
var _c1 = function (a0) { return [a0]; };
var _c2 = function () { return { url: "https://picsum.photos/320/240/?image=387", type: "image/jpeg" }; };
var _c3 = function () { return { url: "http://google.com", icon: "file-text-outline" }; };
var _c4 = function (a0, a1, a2) { return [a0, a1, a2]; };
var ChatMessageTypesShowcaseComponent = /** @class */ (function () {
    function ChatMessageTypesShowcaseComponent() {
        this.date = new Date();
    }
    ChatMessageTypesShowcaseComponent.ɵfac = function ChatMessageTypesShowcaseComponent_Factory(t) { return new (t || ChatMessageTypesShowcaseComponent)(); };
    ChatMessageTypesShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageTypesShowcaseComponent, selectors: [["nb-chat-message-type-showcase"]], decls: 7, vars: 35, consts: [["title", "Message Types", "size", "large"], ["message", "Gif message", "type", "file", "sender", "John Doe", "avatar", "https://i.gifer.com/no.gif", 3, "reply", "date", "files"], ["message", "Image message", "type", "file", "sender", "John Doe", "avatar", "https://i.gifer.com/no.gif", 3, "reply", "date", "files"], ["message", "Map message", "type", "map", "sender", "John Doe", "avatar", "https://i.gifer.com/no.gif", 3, "reply", "date", "latitude", "longitude"], ["message", "File message", "type", "file", "sender", "John Doe", 3, "reply", "date", "files", "avatar"], ["message", "Quote message", "type", "quote", "sender", "John Doe", "quote", "Quooted message here", "avatar", "https://i.gifer.com/no.gif", 3, "reply", "date"], ["message", "Group of files message", "type", "file", "sender", "John Doe", "avatar", "https://i.gifer.com/no.gif", 3, "reply", "date", "files"]], template: function ChatMessageTypesShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-chat", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-chat-message", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-chat-message", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-chat-message", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-chat-message", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-chat-message", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-chat-message", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date)("files", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date)("files", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date)("latitude", 53.914321)("longitude", 27.5998355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date)("files", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3)))("avatar", "https://i.gifer.com/no.gif");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reply", true)("date", ctx.date)("files", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](31, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0)));
        } }, directives: [_framework_theme_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["NbChatComponent"], _framework_theme_components_chat_chat_message_component__WEBPACK_IMPORTED_MODULE_2__["NbChatMessageComponent"]], styles: ["nb-chat[_ngcontent-%COMP%] {\n      margin: 0 auto;\n      width: 500px;\n    }"] });
    return ChatMessageTypesShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageTypesShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-chat-message-type-showcase',
                template: "\n    <nb-chat title=\"Message Types\" size=\"large\">\n      <nb-chat-message\n        message=\"Gif message\"\n        type=\"file\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        [date]=\"date\"\n        [files]=\"[ { url: 'http://www.reactiongifs.com/r/wnd1.gif', type: 'image/gif' } ]\"\n        avatar=\"https://i.gifer.com/no.gif\">\n      </nb-chat-message>\n      <nb-chat-message\n        message=\"Image message\"\n        type=\"file\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        [date]=\"date\"\n        [files]=\"[ { url: 'https://picsum.photos/320/240/?image=387', type: 'image/jpeg' } ]\"\n        avatar=\"https://i.gifer.com/no.gif\">\n      </nb-chat-message>\n      <nb-chat-message\n        message=\"Map message\"\n        type=\"map\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        [date]=\"date\"\n        [latitude]=\"53.914321\"\n        [longitude]=\"27.5998355\"\n        avatar=\"https://i.gifer.com/no.gif\">\n      </nb-chat-message>\n      <nb-chat-message\n        message=\"File message\"\n        type=\"file\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        [date]=\"date\"\n        [files]=\"[ { url: 'http://google.com', icon: 'file-text-outline' } ]\"\n        [avatar]=\"'https://i.gifer.com/no.gif'\">\n      </nb-chat-message>\n      <nb-chat-message\n        message=\"Quote message\"\n        type=\"quote\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        quote=\"Quooted message here\"\n        [date]=\"date\"\n        avatar=\"https://i.gifer.com/no.gif\">\n      </nb-chat-message>\n      <nb-chat-message\n        message=\"Group of files message\"\n        type=\"file\"\n        sender=\"John Doe\"\n        [reply]=\"true\"\n        [date]=\"date\"\n        [files]=\"[\n          { url: 'http://google.com', icon: 'file-text-outline' },\n          { url: 'https://picsum.photos/320/240/?image=387', type: 'image/jpeg' },\n          { url: 'http://www.reactiongifs.com/r/wnd1.gif', type: 'image/gif' }\n         ]\"\n        avatar=\"https://i.gifer.com/no.gif\">\n      </nb-chat-message>\n    </nb-chat>\n  ",
                styles: ["\n    nb-chat {\n      margin: 0 auto;\n      width: 500px;\n    }\n  "],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map