goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10381 = evt;
if(and__3822__auto____10381)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10381;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3824__auto____10382 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3824__auto____10382)
{return or__3824__auto____10382;
} else
{var or__3824__auto____10383 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10383)
{return or__3824__auto____10383;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10387 = evt;
if(and__3822__auto____10387)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10387;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3824__auto____10388 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3824__auto____10388)
{return or__3824__auto____10388;
} else
{var or__3824__auto____10389 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10389)
{return or__3824__auto____10389;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10393 = evt;
if(and__3822__auto____10393)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10393;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10394 = (domina.events.target[goog.typeOf(evt)]);
if(or__3824__auto____10394)
{return or__3824__auto____10394;
} else
{var or__3824__auto____10395 = (domina.events.target["_"]);
if(or__3824__auto____10395)
{return or__3824__auto____10395;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10399 = evt;
if(and__3822__auto____10399)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10399;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10400 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3824__auto____10400)
{return or__3824__auto____10400;
} else
{var or__3824__auto____10401 = (domina.events.current_target["_"]);
if(or__3824__auto____10401)
{return or__3824__auto____10401;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10405 = evt;
if(and__3822__auto____10405)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10405;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3824__auto____10406 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3824__auto____10406)
{return or__3824__auto____10406;
} else
{var or__3824__auto____10407 = (domina.events.event_type["_"]);
if(or__3824__auto____10407)
{return or__3824__auto____10407;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10411 = evt;
if(and__3822__auto____10411)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10411;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3824__auto____10412 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3824__auto____10412)
{return or__3824__auto____10412;
} else
{var or__3824__auto____10413 = (domina.events.raw_event["_"]);
if(or__3824__auto____10413)
{return or__3824__auto____10413;
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
f.call(null,(function (){if((void 0 === domina.events.t10430))
{
/**
* @constructor
*/
domina.events.t10430 = (function (evt,f,create_listener_function,meta10431){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10431 = meta10431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10430.cljs$lang$type = true;
domina.events.t10430.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina.events/t10430");
});
domina.events.t10430.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10433 = this;
var temp__3971__auto____10434 = (this__10433.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10434))
{var val__10435 = temp__3971__auto____10434;
return val__10435;
} else
{return (this__10433.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10430.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10436 = this;
var or__3824__auto____10437 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10437))
{return or__3824__auto____10437;
} else
{return not_found;
}
});
domina.events.t10430.prototype.domina$events$Event$ = true;
domina.events.t10430.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10438 = this;
return this__10438.evt.preventDefault();
});
domina.events.t10430.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10439 = this;
return this__10439.evt.stopPropagation();
});
domina.events.t10430.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10440 = this;
return this__10440.evt.target;
});
domina.events.t10430.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10441 = this;
return this__10441.evt.currentTarget;
});
domina.events.t10430.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10442 = this;
return this__10442.evt.type;
});
domina.events.t10430.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10443 = this;
return this__10443.evt;
});
domina.events.t10430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10432){
var this__10444 = this;
return this__10444.meta10431;
});
domina.events.t10430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10432,meta10431){
var this__10445 = this;
return (new domina.events.t10430(this__10445.evt,this__10445.f,this__10445.create_listener_function,meta10431));
});
domina.events.t10430;
} else
{}
return (new domina.events.t10430(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10455 = domina.events.create_listener_function.call(null,listener);
var t__10456 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2427__auto____10463 = (function iter__10457(s__10458){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10458__10461 = s__10458;
while(true){
if(cljs.core.seq.call(null,s__10458__10461))
{var node__10462 = cljs.core.first.call(null,s__10458__10461);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__10462,t__10456,f__10455,capture):goog.events.listen(node__10462,t__10456,f__10455,capture)),iter__10457.call(null,cljs.core.rest.call(null,s__10458__10461)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10463.call(null,domina.nodes.call(null,content));
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
var G__10471__10472 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10471__10472)
{var node__10473 = cljs.core.first.call(null,G__10471__10472);
var G__10471__10474 = G__10471__10472;
while(true){
goog.events.removeAll(node__10473);
var temp__3974__auto____10475 = cljs.core.next.call(null,G__10471__10474);
if(temp__3974__auto____10475)
{var G__10471__10476 = temp__3974__auto____10475;
{
var G__10478 = cljs.core.first.call(null,G__10471__10476);
var G__10479 = G__10471__10476;
node__10473 = G__10478;
G__10471__10474 = G__10479;
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
var type__10477 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__10477);
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
var temp__3971__auto____10482 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10482))
{var parent__10483 = temp__3971__auto____10482;
{
var G__10484 = parent__10483;
var G__10485 = cljs.core.cons.call(null,parent__10483,so_far);
n = G__10484;
so_far = G__10485;
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
var ancestors__10499 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__10500__10501 = cljs.core.seq.call(null,ancestors__10499);
if(G__10500__10501)
{var n__10502 = cljs.core.first.call(null,G__10500__10501);
var G__10500__10503 = G__10500__10501;
while(true){
if(cljs.core.truth_(n__10502.propagationStopped))
{} else
{evt.currentTarget = n__10502;
goog.events.fireListeners(n__10502,evt.type,true,evt);
}
var temp__3974__auto____10504 = cljs.core.next.call(null,G__10500__10503);
if(temp__3974__auto____10504)
{var G__10500__10505 = temp__3974__auto____10504;
{
var G__10512 = cljs.core.first.call(null,G__10500__10505);
var G__10513 = G__10500__10505;
n__10502 = G__10512;
G__10500__10503 = G__10513;
continue;
}
} else
{}
break;
}
} else
{}
var G__10506__10507 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__10499));
if(G__10506__10507)
{var n__10508 = cljs.core.first.call(null,G__10506__10507);
var G__10506__10509 = G__10506__10507;
while(true){
if(cljs.core.truth_(n__10508.propagationStopped))
{} else
{evt.currentTarget = n__10508;
goog.events.fireListeners(n__10508,evt.type,false,evt);
}
var temp__3974__auto____10510 = cljs.core.next.call(null,G__10506__10509);
if(temp__3974__auto____10510)
{var G__10506__10511 = temp__3974__auto____10510;
{
var G__10514 = cljs.core.first.call(null,G__10506__10511);
var G__10515 = G__10506__10511;
n__10508 = G__10514;
G__10506__10509 = G__10515;
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
var and__3822__auto____10517 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10517))
{return o.dispatchEvent;
} else
{return and__3822__auto____10517;
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
var evt__10538 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__10539__10540 = cljs.core.seq.call(null,evt_map);
if(G__10539__10540)
{var G__10542__10544 = cljs.core.first.call(null,G__10539__10540);
var vec__10543__10545 = G__10542__10544;
var k__10546 = cljs.core.nth.call(null,vec__10543__10545,0,null);
var v__10547 = cljs.core.nth.call(null,vec__10543__10545,1,null);
var G__10539__10548 = G__10539__10540;
var G__10542__10549 = G__10542__10544;
var G__10539__10550 = G__10539__10548;
while(true){
var vec__10551__10552 = G__10542__10549;
var k__10553 = cljs.core.nth.call(null,vec__10551__10552,0,null);
var v__10554 = cljs.core.nth.call(null,vec__10551__10552,1,null);
var G__10539__10555 = G__10539__10550;
(evt__10538[k__10553] = v__10554);
var temp__3974__auto____10556 = cljs.core.next.call(null,G__10539__10555);
if(temp__3974__auto____10556)
{var G__10539__10557 = temp__3974__auto____10556;
{
var G__10558 = cljs.core.first.call(null,G__10539__10557);
var G__10559 = G__10539__10557;
G__10542__10549 = G__10558;
G__10539__10550 = G__10559;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__10538);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__10538);
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
var type__10562 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__10560_SHARP_){
return goog.events.getListeners(p1__10560_SHARP_,type__10562,false);
}),domina.nodes.call(null,content));
});
