goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10373 = evt;
if(and__3822__auto____10373)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10373;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3824__auto____10374 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3824__auto____10374)
{return or__3824__auto____10374;
} else
{var or__3824__auto____10375 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10375)
{return or__3824__auto____10375;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10379 = evt;
if(and__3822__auto____10379)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10379;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3824__auto____10380 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3824__auto____10380)
{return or__3824__auto____10380;
} else
{var or__3824__auto____10381 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10381)
{return or__3824__auto____10381;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10385 = evt;
if(and__3822__auto____10385)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10385;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10386 = (domina.events.target[goog.typeOf(evt)]);
if(or__3824__auto____10386)
{return or__3824__auto____10386;
} else
{var or__3824__auto____10387 = (domina.events.target["_"]);
if(or__3824__auto____10387)
{return or__3824__auto____10387;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10391 = evt;
if(and__3822__auto____10391)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10391;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10392 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3824__auto____10392)
{return or__3824__auto____10392;
} else
{var or__3824__auto____10393 = (domina.events.current_target["_"]);
if(or__3824__auto____10393)
{return or__3824__auto____10393;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10397 = evt;
if(and__3822__auto____10397)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10397;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3824__auto____10398 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3824__auto____10398)
{return or__3824__auto____10398;
} else
{var or__3824__auto____10399 = (domina.events.event_type["_"]);
if(or__3824__auto____10399)
{return or__3824__auto____10399;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10403 = evt;
if(and__3822__auto____10403)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10403;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3824__auto____10404 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3824__auto____10404)
{return or__3824__auto____10404;
} else
{var or__3824__auto____10405 = (domina.events.raw_event["_"]);
if(or__3824__auto____10405)
{return or__3824__auto____10405;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
void 0;domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t10422))
{
/**
* @constructor
*/
domina.events.t10422 = (function (evt,f,create_listener_function,meta10423){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10423 = meta10423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10422.cljs$lang$type = true;
domina.events.t10422.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina.events/t10422");
});
domina.events.t10422.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10425 = this;
var temp__3971__auto____10426 = (this__10425.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10426))
{var val__10427 = temp__3971__auto____10426;
return val__10427;
} else
{return (this__10425.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10422.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10428 = this;
var or__3824__auto____10429 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10429))
{return or__3824__auto____10429;
} else
{return not_found;
}
});
domina.events.t10422.prototype.domina$events$Event$ = true;
domina.events.t10422.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10430 = this;
return this__10430.evt.preventDefault();
});
domina.events.t10422.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10431 = this;
return this__10431.evt.stopPropagation();
});
domina.events.t10422.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10432 = this;
return this__10432.evt.target;
});
domina.events.t10422.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10433 = this;
return this__10433.evt.currentTarget;
});
domina.events.t10422.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10434 = this;
return this__10434.evt.type;
});
domina.events.t10422.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10435 = this;
return this__10435.evt;
});
domina.events.t10422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10424){
var this__10436 = this;
return this__10436.meta10423;
});
domina.events.t10422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10424,meta10423){
var this__10437 = this;
return (new domina.events.t10422(this__10437.evt,this__10437.f,this__10437.create_listener_function,meta10423));
});
domina.events.t10422;
} else
{}
return (new domina.events.t10422(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10447 = domina.events.create_listener_function.call(null,listener);
var t__10448 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2427__auto____10455 = (function iter__10449(s__10450){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10450__10453 = s__10450;
while(true){
if(cljs.core.seq.call(null,s__10450__10453))
{var node__10454 = cljs.core.first.call(null,s__10450__10453);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__10454,t__10448,f__10447,capture):goog.events.listen(node__10454,t__10448,f__10447,capture)),iter__10449.call(null,cljs.core.rest.call(null,s__10450__10453)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10455.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_BANG_.cljs$lang$arity$2 = listen_BANG___2;
listen_BANG_.cljs$lang$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_BANG_.cljs$lang$arity$2 = capture_BANG___2;
capture_BANG_.cljs$lang$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_once_BANG_.cljs$lang$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$lang$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_once_BANG_.cljs$lang$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$lang$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__10463__10464 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10463__10464)
{var node__10465 = cljs.core.first.call(null,G__10463__10464);
var G__10463__10466 = G__10463__10464;
while(true){
goog.events.removeAll(node__10465);
var temp__3974__auto____10467 = cljs.core.next.call(null,G__10463__10466);
if(temp__3974__auto____10467)
{var G__10463__10468 = temp__3974__auto____10467;
{
var G__10470 = cljs.core.first.call(null,G__10463__10468);
var G__10471 = G__10463__10468;
node__10465 = G__10470;
G__10463__10466 = G__10471;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__10469 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__10469);
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw('Invalid arity: ' + arguments.length);
};
unlisten_BANG_.cljs$lang$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$lang$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$lang$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__3971__auto____10474 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10474))
{var parent__10475 = temp__3971__auto____10474;
{
var G__10476 = parent__10475;
var G__10477 = cljs.core.cons.call(null,parent__10475,so_far);
n = G__10476;
so_far = G__10477;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw('Invalid arity: ' + arguments.length);
};
ancestor_nodes.cljs$lang$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$lang$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors__10491 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__10492__10493 = cljs.core.seq.call(null,ancestors__10491);
if(G__10492__10493)
{var n__10494 = cljs.core.first.call(null,G__10492__10493);
var G__10492__10495 = G__10492__10493;
while(true){
if(cljs.core.truth_(n__10494.propagationStopped))
{} else
{evt.currentTarget = n__10494;
goog.events.fireListeners(n__10494,evt.type,true,evt);
}
var temp__3974__auto____10496 = cljs.core.next.call(null,G__10492__10495);
if(temp__3974__auto____10496)
{var G__10492__10497 = temp__3974__auto____10496;
{
var G__10504 = cljs.core.first.call(null,G__10492__10497);
var G__10505 = G__10492__10497;
n__10494 = G__10504;
G__10492__10495 = G__10505;
continue;
}
} else
{}
break;
}
} else
{}
var G__10498__10499 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__10491));
if(G__10498__10499)
{var n__10500 = cljs.core.first.call(null,G__10498__10499);
var G__10498__10501 = G__10498__10499;
while(true){
if(cljs.core.truth_(n__10500.propagationStopped))
{} else
{evt.currentTarget = n__10500;
goog.events.fireListeners(n__10500,evt.type,false,evt);
}
var temp__3974__auto____10502 = cljs.core.next.call(null,G__10498__10501);
if(temp__3974__auto____10502)
{var G__10498__10503 = temp__3974__auto____10502;
{
var G__10506 = cljs.core.first.call(null,G__10498__10503);
var G__10507 = G__10498__10503;
n__10500 = G__10506;
G__10498__10501 = G__10507;
continue;
}
} else
{}
break;
}
} else
{}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3822__auto____10509 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10509))
{return o.dispatchEvent;
} else
{return and__3822__auto____10509;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt__10530 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__10531__10532 = cljs.core.seq.call(null,evt_map);
if(G__10531__10532)
{var G__10534__10536 = cljs.core.first.call(null,G__10531__10532);
var vec__10535__10537 = G__10534__10536;
var k__10538 = cljs.core.nth.call(null,vec__10535__10537,0,null);
var v__10539 = cljs.core.nth.call(null,vec__10535__10537,1,null);
var G__10531__10540 = G__10531__10532;
var G__10534__10541 = G__10534__10536;
var G__10531__10542 = G__10531__10540;
while(true){
var vec__10543__10544 = G__10534__10541;
var k__10545 = cljs.core.nth.call(null,vec__10543__10544,0,null);
var v__10546 = cljs.core.nth.call(null,vec__10543__10544,1,null);
var G__10531__10547 = G__10531__10542;
(evt__10530[k__10545] = v__10546);
var temp__3974__auto____10548 = cljs.core.next.call(null,G__10531__10547);
if(temp__3974__auto____10548)
{var G__10531__10549 = temp__3974__auto____10548;
{
var G__10550 = cljs.core.first.call(null,G__10531__10549);
var G__10551 = G__10531__10549;
G__10534__10541 = G__10550;
G__10531__10542 = G__10551;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__10530);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__10530);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw('Invalid arity: ' + arguments.length);
};
dispatch_BANG_.cljs$lang$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$lang$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__10554 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__10552_SHARP_){
return goog.events.getListeners(p1__10552_SHARP_,type__10554,false);
}),domina.nodes.call(null,content));
});
