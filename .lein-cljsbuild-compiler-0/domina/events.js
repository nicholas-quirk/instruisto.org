goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10345 = evt;
if(and__3822__auto____10345)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10345;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3824__auto____10346 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3824__auto____10346)
{return or__3824__auto____10346;
} else
{var or__3824__auto____10347 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10347)
{return or__3824__auto____10347;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10351 = evt;
if(and__3822__auto____10351)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10351;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3824__auto____10352 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3824__auto____10352)
{return or__3824__auto____10352;
} else
{var or__3824__auto____10353 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10353)
{return or__3824__auto____10353;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10357 = evt;
if(and__3822__auto____10357)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10357;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10358 = (domina.events.target[goog.typeOf(evt)]);
if(or__3824__auto____10358)
{return or__3824__auto____10358;
} else
{var or__3824__auto____10359 = (domina.events.target["_"]);
if(or__3824__auto____10359)
{return or__3824__auto____10359;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10363 = evt;
if(and__3822__auto____10363)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10363;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10364 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3824__auto____10364)
{return or__3824__auto____10364;
} else
{var or__3824__auto____10365 = (domina.events.current_target["_"]);
if(or__3824__auto____10365)
{return or__3824__auto____10365;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10369 = evt;
if(and__3822__auto____10369)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10369;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3824__auto____10370 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3824__auto____10370)
{return or__3824__auto____10370;
} else
{var or__3824__auto____10371 = (domina.events.event_type["_"]);
if(or__3824__auto____10371)
{return or__3824__auto____10371;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10375 = evt;
if(and__3822__auto____10375)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10375;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3824__auto____10376 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3824__auto____10376)
{return or__3824__auto____10376;
} else
{var or__3824__auto____10377 = (domina.events.raw_event["_"]);
if(or__3824__auto____10377)
{return or__3824__auto____10377;
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
f.call(null,(function (){if((void 0 === domina.events.t10394))
{
/**
* @constructor
*/
domina.events.t10394 = (function (evt,f,create_listener_function,meta10395){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10395 = meta10395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10394.cljs$lang$type = true;
domina.events.t10394.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina.events/t10394");
});
domina.events.t10394.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10397 = this;
var temp__3971__auto____10398 = (this__10397.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10398))
{var val__10399 = temp__3971__auto____10398;
return val__10399;
} else
{return (this__10397.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10394.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10400 = this;
var or__3824__auto____10401 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10401))
{return or__3824__auto____10401;
} else
{return not_found;
}
});
domina.events.t10394.prototype.domina$events$Event$ = true;
domina.events.t10394.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10402 = this;
return this__10402.evt.preventDefault();
});
domina.events.t10394.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10403 = this;
return this__10403.evt.stopPropagation();
});
domina.events.t10394.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10404 = this;
return this__10404.evt.target;
});
domina.events.t10394.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10405 = this;
return this__10405.evt.currentTarget;
});
domina.events.t10394.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10406 = this;
return this__10406.evt.type;
});
domina.events.t10394.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10407 = this;
return this__10407.evt;
});
domina.events.t10394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10396){
var this__10408 = this;
return this__10408.meta10395;
});
domina.events.t10394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10396,meta10395){
var this__10409 = this;
return (new domina.events.t10394(this__10409.evt,this__10409.f,this__10409.create_listener_function,meta10395));
});
domina.events.t10394;
} else
{}
return (new domina.events.t10394(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10419 = domina.events.create_listener_function.call(null,listener);
var t__10420 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2427__auto____10427 = (function iter__10421(s__10422){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10422__10425 = s__10422;
while(true){
if(cljs.core.seq.call(null,s__10422__10425))
{var node__10426 = cljs.core.first.call(null,s__10422__10425);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__10426,t__10420,f__10419,capture):goog.events.listen(node__10426,t__10420,f__10419,capture)),iter__10421.call(null,cljs.core.rest.call(null,s__10422__10425)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10427.call(null,domina.nodes.call(null,content));
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
var G__10435__10436 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10435__10436)
{var node__10437 = cljs.core.first.call(null,G__10435__10436);
var G__10435__10438 = G__10435__10436;
while(true){
goog.events.removeAll(node__10437);
var temp__3974__auto____10439 = cljs.core.next.call(null,G__10435__10438);
if(temp__3974__auto____10439)
{var G__10435__10440 = temp__3974__auto____10439;
{
var G__10442 = cljs.core.first.call(null,G__10435__10440);
var G__10443 = G__10435__10440;
node__10437 = G__10442;
G__10435__10438 = G__10443;
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
var type__10441 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__10441);
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
var temp__3971__auto____10446 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10446))
{var parent__10447 = temp__3971__auto____10446;
{
var G__10448 = parent__10447;
var G__10449 = cljs.core.cons.call(null,parent__10447,so_far);
n = G__10448;
so_far = G__10449;
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
var ancestors__10463 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__10464__10465 = cljs.core.seq.call(null,ancestors__10463);
if(G__10464__10465)
{var n__10466 = cljs.core.first.call(null,G__10464__10465);
var G__10464__10467 = G__10464__10465;
while(true){
if(cljs.core.truth_(n__10466.propagationStopped))
{} else
{evt.currentTarget = n__10466;
goog.events.fireListeners(n__10466,evt.type,true,evt);
}
var temp__3974__auto____10468 = cljs.core.next.call(null,G__10464__10467);
if(temp__3974__auto____10468)
{var G__10464__10469 = temp__3974__auto____10468;
{
var G__10476 = cljs.core.first.call(null,G__10464__10469);
var G__10477 = G__10464__10469;
n__10466 = G__10476;
G__10464__10467 = G__10477;
continue;
}
} else
{}
break;
}
} else
{}
var G__10470__10471 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__10463));
if(G__10470__10471)
{var n__10472 = cljs.core.first.call(null,G__10470__10471);
var G__10470__10473 = G__10470__10471;
while(true){
if(cljs.core.truth_(n__10472.propagationStopped))
{} else
{evt.currentTarget = n__10472;
goog.events.fireListeners(n__10472,evt.type,false,evt);
}
var temp__3974__auto____10474 = cljs.core.next.call(null,G__10470__10473);
if(temp__3974__auto____10474)
{var G__10470__10475 = temp__3974__auto____10474;
{
var G__10478 = cljs.core.first.call(null,G__10470__10475);
var G__10479 = G__10470__10475;
n__10472 = G__10478;
G__10470__10473 = G__10479;
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
var and__3822__auto____10481 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10481))
{return o.dispatchEvent;
} else
{return and__3822__auto____10481;
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
var evt__10502 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__10503__10504 = cljs.core.seq.call(null,evt_map);
if(G__10503__10504)
{var G__10506__10508 = cljs.core.first.call(null,G__10503__10504);
var vec__10507__10509 = G__10506__10508;
var k__10510 = cljs.core.nth.call(null,vec__10507__10509,0,null);
var v__10511 = cljs.core.nth.call(null,vec__10507__10509,1,null);
var G__10503__10512 = G__10503__10504;
var G__10506__10513 = G__10506__10508;
var G__10503__10514 = G__10503__10512;
while(true){
var vec__10515__10516 = G__10506__10513;
var k__10517 = cljs.core.nth.call(null,vec__10515__10516,0,null);
var v__10518 = cljs.core.nth.call(null,vec__10515__10516,1,null);
var G__10503__10519 = G__10503__10514;
(evt__10502[k__10517] = v__10518);
var temp__3974__auto____10520 = cljs.core.next.call(null,G__10503__10519);
if(temp__3974__auto____10520)
{var G__10503__10521 = temp__3974__auto____10520;
{
var G__10522 = cljs.core.first.call(null,G__10503__10521);
var G__10523 = G__10503__10521;
G__10506__10513 = G__10522;
G__10503__10514 = G__10523;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__10502);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__10502);
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
var type__10526 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__10524_SHARP_){
return goog.events.getListeners(p1__10524_SHARP_,type__10526,false);
}),domina.nodes.call(null,content));
});
