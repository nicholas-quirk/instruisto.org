goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10289 = evt;
if(and__3822__auto____10289)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10289;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3824__auto____10290 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3824__auto____10290)
{return or__3824__auto____10290;
} else
{var or__3824__auto____10291 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10291)
{return or__3824__auto____10291;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10295 = evt;
if(and__3822__auto____10295)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10295;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3824__auto____10296 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3824__auto____10296)
{return or__3824__auto____10296;
} else
{var or__3824__auto____10297 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10297)
{return or__3824__auto____10297;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10301 = evt;
if(and__3822__auto____10301)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10301;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10302 = (domina.events.target[goog.typeOf(evt)]);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{var or__3824__auto____10303 = (domina.events.target["_"]);
if(or__3824__auto____10303)
{return or__3824__auto____10303;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10307 = evt;
if(and__3822__auto____10307)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10307;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3824__auto____10308 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3824__auto____10308)
{return or__3824__auto____10308;
} else
{var or__3824__auto____10309 = (domina.events.current_target["_"]);
if(or__3824__auto____10309)
{return or__3824__auto____10309;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10313 = evt;
if(and__3822__auto____10313)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10313;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3824__auto____10314 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3824__auto____10314)
{return or__3824__auto____10314;
} else
{var or__3824__auto____10315 = (domina.events.event_type["_"]);
if(or__3824__auto____10315)
{return or__3824__auto____10315;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10319 = evt;
if(and__3822__auto____10319)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10319;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3824__auto____10320 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3824__auto____10320)
{return or__3824__auto____10320;
} else
{var or__3824__auto____10321 = (domina.events.raw_event["_"]);
if(or__3824__auto____10321)
{return or__3824__auto____10321;
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
f.call(null,(function (){if((void 0 === domina.events.t10338))
{
/**
* @constructor
*/
domina.events.t10338 = (function (evt,f,create_listener_function,meta10339){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10339 = meta10339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10338.cljs$lang$type = true;
domina.events.t10338.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina.events/t10338");
});
domina.events.t10338.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10341 = this;
var temp__3971__auto____10342 = (this__10341.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10342))
{var val__10343 = temp__3971__auto____10342;
return val__10343;
} else
{return (this__10341.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10338.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10344 = this;
var or__3824__auto____10345 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10345))
{return or__3824__auto____10345;
} else
{return not_found;
}
});
domina.events.t10338.prototype.domina$events$Event$ = true;
domina.events.t10338.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10346 = this;
return this__10346.evt.preventDefault();
});
domina.events.t10338.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10347 = this;
return this__10347.evt.stopPropagation();
});
domina.events.t10338.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10348 = this;
return this__10348.evt.target;
});
domina.events.t10338.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10349 = this;
return this__10349.evt.currentTarget;
});
domina.events.t10338.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10350 = this;
return this__10350.evt.type;
});
domina.events.t10338.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10351 = this;
return this__10351.evt;
});
domina.events.t10338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10340){
var this__10352 = this;
return this__10352.meta10339;
});
domina.events.t10338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10340,meta10339){
var this__10353 = this;
return (new domina.events.t10338(this__10353.evt,this__10353.f,this__10353.create_listener_function,meta10339));
});
domina.events.t10338;
} else
{}
return (new domina.events.t10338(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10363 = domina.events.create_listener_function.call(null,listener);
var t__10364 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2427__auto____10371 = (function iter__10365(s__10366){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10366__10369 = s__10366;
while(true){
if(cljs.core.seq.call(null,s__10366__10369))
{var node__10370 = cljs.core.first.call(null,s__10366__10369);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__10370,t__10364,f__10363,capture):goog.events.listen(node__10370,t__10364,f__10363,capture)),iter__10365.call(null,cljs.core.rest.call(null,s__10366__10369)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10371.call(null,domina.nodes.call(null,content));
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
var G__10379__10380 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10379__10380)
{var node__10381 = cljs.core.first.call(null,G__10379__10380);
var G__10379__10382 = G__10379__10380;
while(true){
goog.events.removeAll(node__10381);
var temp__3974__auto____10383 = cljs.core.next.call(null,G__10379__10382);
if(temp__3974__auto____10383)
{var G__10379__10384 = temp__3974__auto____10383;
{
var G__10386 = cljs.core.first.call(null,G__10379__10384);
var G__10387 = G__10379__10384;
node__10381 = G__10386;
G__10379__10382 = G__10387;
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
var type__10385 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__10385);
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
var temp__3971__auto____10390 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10390))
{var parent__10391 = temp__3971__auto____10390;
{
var G__10392 = parent__10391;
var G__10393 = cljs.core.cons.call(null,parent__10391,so_far);
n = G__10392;
so_far = G__10393;
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
var ancestors__10407 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__10408__10409 = cljs.core.seq.call(null,ancestors__10407);
if(G__10408__10409)
{var n__10410 = cljs.core.first.call(null,G__10408__10409);
var G__10408__10411 = G__10408__10409;
while(true){
if(cljs.core.truth_(n__10410.propagationStopped))
{} else
{evt.currentTarget = n__10410;
goog.events.fireListeners(n__10410,evt.type,true,evt);
}
var temp__3974__auto____10412 = cljs.core.next.call(null,G__10408__10411);
if(temp__3974__auto____10412)
{var G__10408__10413 = temp__3974__auto____10412;
{
var G__10420 = cljs.core.first.call(null,G__10408__10413);
var G__10421 = G__10408__10413;
n__10410 = G__10420;
G__10408__10411 = G__10421;
continue;
}
} else
{}
break;
}
} else
{}
var G__10414__10415 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__10407));
if(G__10414__10415)
{var n__10416 = cljs.core.first.call(null,G__10414__10415);
var G__10414__10417 = G__10414__10415;
while(true){
if(cljs.core.truth_(n__10416.propagationStopped))
{} else
{evt.currentTarget = n__10416;
goog.events.fireListeners(n__10416,evt.type,false,evt);
}
var temp__3974__auto____10418 = cljs.core.next.call(null,G__10414__10417);
if(temp__3974__auto____10418)
{var G__10414__10419 = temp__3974__auto____10418;
{
var G__10422 = cljs.core.first.call(null,G__10414__10419);
var G__10423 = G__10414__10419;
n__10416 = G__10422;
G__10414__10417 = G__10423;
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
var and__3822__auto____10425 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10425))
{return o.dispatchEvent;
} else
{return and__3822__auto____10425;
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
var evt__10446 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__10447__10448 = cljs.core.seq.call(null,evt_map);
if(G__10447__10448)
{var G__10450__10452 = cljs.core.first.call(null,G__10447__10448);
var vec__10451__10453 = G__10450__10452;
var k__10454 = cljs.core.nth.call(null,vec__10451__10453,0,null);
var v__10455 = cljs.core.nth.call(null,vec__10451__10453,1,null);
var G__10447__10456 = G__10447__10448;
var G__10450__10457 = G__10450__10452;
var G__10447__10458 = G__10447__10456;
while(true){
var vec__10459__10460 = G__10450__10457;
var k__10461 = cljs.core.nth.call(null,vec__10459__10460,0,null);
var v__10462 = cljs.core.nth.call(null,vec__10459__10460,1,null);
var G__10447__10463 = G__10447__10458;
(evt__10446[k__10461] = v__10462);
var temp__3974__auto____10464 = cljs.core.next.call(null,G__10447__10463);
if(temp__3974__auto____10464)
{var G__10447__10465 = temp__3974__auto____10464;
{
var G__10466 = cljs.core.first.call(null,G__10447__10465);
var G__10467 = G__10447__10465;
G__10450__10457 = G__10466;
G__10447__10458 = G__10467;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__10446);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__10446);
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
var type__10470 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__10468_SHARP_){
return goog.events.getListeners(p1__10468_SHARP_,type__10470,false);
}),domina.nodes.call(null,content));
});
