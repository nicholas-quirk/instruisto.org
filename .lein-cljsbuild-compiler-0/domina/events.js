goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10325 = evt;
if(and__3822__auto____10325)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10325;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3824__auto____10326 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{var or__3824__auto____10327 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10327)
{return or__3824__auto____10327;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10331 = evt;
if(and__3822__auto____10331)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10331;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3824__auto____10332 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3824__auto____10332)
{return or__3824__auto____10332;
} else
{var or__3824__auto____10333 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10333)
{return or__3824__auto____10333;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10337 = evt;
if(and__3822__auto____10337)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10337;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10338 = (domina.events.target[goog.typeOf(evt)]);
if(or__3824__auto____10338)
{return or__3824__auto____10338;
} else
{var or__3824__auto____10339 = (domina.events.target["_"]);
if(or__3824__auto____10339)
{return or__3824__auto____10339;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10343 = evt;
if(and__3822__auto____10343)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10343;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10344 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3824__auto____10344)
{return or__3824__auto____10344;
} else
{var or__3824__auto____10345 = (domina.events.current_target["_"]);
if(or__3824__auto____10345)
{return or__3824__auto____10345;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10349 = evt;
if(and__3822__auto____10349)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10349;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3824__auto____10350 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3824__auto____10350)
{return or__3824__auto____10350;
} else
{var or__3824__auto____10351 = (domina.events.event_type["_"]);
if(or__3824__auto____10351)
{return or__3824__auto____10351;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10355 = evt;
if(and__3822__auto____10355)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10355;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3824__auto____10356 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3824__auto____10356)
{return or__3824__auto____10356;
} else
{var or__3824__auto____10357 = (domina.events.raw_event["_"]);
if(or__3824__auto____10357)
{return or__3824__auto____10357;
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
f.call(null,(function (){if((void 0 === domina.events.t10374))
{
/**
* @constructor
*/
domina.events.t10374 = (function (evt,f,create_listener_function,meta10375){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10375 = meta10375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10374.cljs$lang$type = true;
domina.events.t10374.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina.events/t10374");
});
domina.events.t10374.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10377 = this;
var temp__3971__auto____10378 = (this__10377.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10378))
{var val__10379 = temp__3971__auto____10378;
return val__10379;
} else
{return (this__10377.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10374.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10380 = this;
var or__3824__auto____10381 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10381))
{return or__3824__auto____10381;
} else
{return not_found;
}
});
domina.events.t10374.prototype.domina$events$Event$ = true;
domina.events.t10374.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10382 = this;
return this__10382.evt.preventDefault();
});
domina.events.t10374.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10383 = this;
return this__10383.evt.stopPropagation();
});
domina.events.t10374.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10384 = this;
return this__10384.evt.target;
});
domina.events.t10374.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10385 = this;
return this__10385.evt.currentTarget;
});
domina.events.t10374.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10386 = this;
return this__10386.evt.type;
});
domina.events.t10374.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10387 = this;
return this__10387.evt;
});
domina.events.t10374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10376){
var this__10388 = this;
return this__10388.meta10375;
});
domina.events.t10374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10376,meta10375){
var this__10389 = this;
return (new domina.events.t10374(this__10389.evt,this__10389.f,this__10389.create_listener_function,meta10375));
});
domina.events.t10374;
} else
{}
return (new domina.events.t10374(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10399 = domina.events.create_listener_function.call(null,listener);
var t__10400 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2427__auto____10407 = (function iter__10401(s__10402){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10402__10405 = s__10402;
while(true){
if(cljs.core.seq.call(null,s__10402__10405))
{var node__10406 = cljs.core.first.call(null,s__10402__10405);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__10406,t__10400,f__10399,capture):goog.events.listen(node__10406,t__10400,f__10399,capture)),iter__10401.call(null,cljs.core.rest.call(null,s__10402__10405)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10407.call(null,domina.nodes.call(null,content));
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
var G__10415__10416 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10415__10416)
{var node__10417 = cljs.core.first.call(null,G__10415__10416);
var G__10415__10418 = G__10415__10416;
while(true){
goog.events.removeAll(node__10417);
var temp__3974__auto____10419 = cljs.core.next.call(null,G__10415__10418);
if(temp__3974__auto____10419)
{var G__10415__10420 = temp__3974__auto____10419;
{
var G__10422 = cljs.core.first.call(null,G__10415__10420);
var G__10423 = G__10415__10420;
node__10417 = G__10422;
G__10415__10418 = G__10423;
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
var type__10421 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__10421);
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
var temp__3971__auto____10426 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10426))
{var parent__10427 = temp__3971__auto____10426;
{
var G__10428 = parent__10427;
var G__10429 = cljs.core.cons.call(null,parent__10427,so_far);
n = G__10428;
so_far = G__10429;
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
var ancestors__10443 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__10444__10445 = cljs.core.seq.call(null,ancestors__10443);
if(G__10444__10445)
{var n__10446 = cljs.core.first.call(null,G__10444__10445);
var G__10444__10447 = G__10444__10445;
while(true){
if(cljs.core.truth_(n__10446.propagationStopped))
{} else
{evt.currentTarget = n__10446;
goog.events.fireListeners(n__10446,evt.type,true,evt);
}
var temp__3974__auto____10448 = cljs.core.next.call(null,G__10444__10447);
if(temp__3974__auto____10448)
{var G__10444__10449 = temp__3974__auto____10448;
{
var G__10456 = cljs.core.first.call(null,G__10444__10449);
var G__10457 = G__10444__10449;
n__10446 = G__10456;
G__10444__10447 = G__10457;
continue;
}
} else
{}
break;
}
} else
{}
var G__10450__10451 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__10443));
if(G__10450__10451)
{var n__10452 = cljs.core.first.call(null,G__10450__10451);
var G__10450__10453 = G__10450__10451;
while(true){
if(cljs.core.truth_(n__10452.propagationStopped))
{} else
{evt.currentTarget = n__10452;
goog.events.fireListeners(n__10452,evt.type,false,evt);
}
var temp__3974__auto____10454 = cljs.core.next.call(null,G__10450__10453);
if(temp__3974__auto____10454)
{var G__10450__10455 = temp__3974__auto____10454;
{
var G__10458 = cljs.core.first.call(null,G__10450__10455);
var G__10459 = G__10450__10455;
n__10452 = G__10458;
G__10450__10453 = G__10459;
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
var and__3822__auto____10461 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10461))
{return o.dispatchEvent;
} else
{return and__3822__auto____10461;
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
var evt__10482 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__10483__10484 = cljs.core.seq.call(null,evt_map);
if(G__10483__10484)
{var G__10486__10488 = cljs.core.first.call(null,G__10483__10484);
var vec__10487__10489 = G__10486__10488;
var k__10490 = cljs.core.nth.call(null,vec__10487__10489,0,null);
var v__10491 = cljs.core.nth.call(null,vec__10487__10489,1,null);
var G__10483__10492 = G__10483__10484;
var G__10486__10493 = G__10486__10488;
var G__10483__10494 = G__10483__10492;
while(true){
var vec__10495__10496 = G__10486__10493;
var k__10497 = cljs.core.nth.call(null,vec__10495__10496,0,null);
var v__10498 = cljs.core.nth.call(null,vec__10495__10496,1,null);
var G__10483__10499 = G__10483__10494;
(evt__10482[k__10497] = v__10498);
var temp__3974__auto____10500 = cljs.core.next.call(null,G__10483__10499);
if(temp__3974__auto____10500)
{var G__10483__10501 = temp__3974__auto____10500;
{
var G__10502 = cljs.core.first.call(null,G__10483__10501);
var G__10503 = G__10483__10501;
G__10486__10493 = G__10502;
G__10483__10494 = G__10503;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__10482);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__10482);
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
var type__10506 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__10504_SHARP_){
return goog.events.getListeners(p1__10504_SHARP_,type__10506,false);
}),domina.nodes.call(null,content));
});
