goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__10471 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10472 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10473 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10472,"caption":table_section_wrapper__10472,"optgroup":opt_wrapper__10471,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10473,"thead":table_section_wrapper__10472,"th":cell_wrapper__10473,"option":opt_wrapper__10471,"tbody":table_section_wrapper__10472,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10472});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10486 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10490 = (((function (){var and__3822__auto____10487 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10487)
{return no_tbody_QMARK___10486;
} else
{return and__3822__auto____10487;
}
})())?(function (){var and__3822__auto____10488 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10488))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10488;
}
})():(((function (){var and__3822__auto____10489 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10489)
{return no_tbody_QMARK___10486;
} else
{return and__3822__auto____10489;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10491__10492 = cljs.core.seq.call(null,tbody__10490);
if(G__10491__10492)
{var child__10493 = cljs.core.first.call(null,G__10491__10492);
var G__10491__10494 = G__10491__10492;
while(true){
if((function (){var and__3822__auto____10495 = cljs.core._EQ_.call(null,child__10493.nodeName,"tbody");
if(and__3822__auto____10495)
{return cljs.core._EQ_.call(null,child__10493.childNodes.length,0);
} else
{return and__3822__auto____10495;
}
})())
{child__10493.parentNode.removeChild(child__10493);
} else
{}
var temp__3974__auto____10496 = cljs.core.next.call(null,G__10491__10494);
if(temp__3974__auto____10496)
{var G__10491__10497 = temp__3974__auto____10496;
{
var G__10498 = cljs.core.first.call(null,G__10491__10497);
var G__10499 = G__10491__10497;
child__10493 = G__10498;
G__10491__10494 = G__10499;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__10513 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10514 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10513)))].join('').toLowerCase();
var vec__10512__10515 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10514,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10516 = cljs.core.nth.call(null,vec__10512__10515,0,null);
var start_wrap__10517 = cljs.core.nth.call(null,vec__10512__10515,1,null);
var end_wrap__10518 = cljs.core.nth.call(null,vec__10512__10515,2,null);
var div__10522 = (function (){var wrapper__10520 = (function (){var div__10519 = document.createElement("div");
div__10519.innerHTML = [cljs.core.str(start_wrap__10517),cljs.core.str(html__10513),cljs.core.str(end_wrap__10518)].join('');
return div__10519;
})();
var level__10521 = depth__10516;
while(true){
if((level__10521 > 0))
{{
var G__10524 = wrapper__10520.lastChild;
var G__10525 = (level__10521 - 1);
wrapper__10520 = G__10524;
level__10521 = G__10525;
continue;
}
} else
{return wrapper__10520;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10522,html__10513);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10523 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10523)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10513);
} else
{return and__3822__auto____10523;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10522,html__10513);
} else
{}
return div__10522.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
void 0;domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3822__auto____10529 = content;
if(and__3822__auto____10529)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10529;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10530 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10530)
{return or__3824__auto____10530;
} else
{var or__3824__auto____10531 = (domina.nodes["_"]);
if(or__3824__auto____10531)
{return or__3824__auto____10531;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10535 = nodeseq;
if(and__3822__auto____10535)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10535;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10536 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10536)
{return or__3824__auto____10536;
} else
{var or__3824__auto____10537 = (domina.single_node["_"]);
if(or__3824__auto____10537)
{return or__3824__auto____10537;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
void 0;domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3822__auto____10539 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10539))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10539;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__10540){
var mesg = cljs.core.seq(arglist__10540);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10541){
var mesg = cljs.core.seq(arglist__10541);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
void 0;
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t10549))
{
/**
* @constructor
*/
domina.t10549 = (function (class_name,by_class,meta10550){
this.class_name = class_name;
this.by_class = by_class;
this.meta10550 = meta10550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10549.cljs$lang$type = true;
domina.t10549.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10549");
});
domina.t10549.prototype.domina$DomContent$ = true;
domina.t10549.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10552 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10552.class_name)));
});
domina.t10549.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10553 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10553.class_name)));
});
domina.t10549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10551){
var this__10554 = this;
return this__10554.meta10550;
});
domina.t10549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10551,meta10550){
var this__10555 = this;
return (new domina.t10549(this__10555.class_name,this__10555.by_class,meta10550));
});
domina.t10549;
} else
{}
return (new domina.t10549(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__10556_SHARP_){
return p1__10556_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
void 0;
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__10557_SHARP_,p2__10558_SHARP_){
return goog.dom.insertChildAt(p1__10557_SHARP_,p2__10558_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10560_SHARP_,p2__10559_SHARP_){
return goog.dom.insertSiblingBefore(p2__10559_SHARP_,p1__10560_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10562_SHARP_,p2__10561_SHARP_){
return goog.dom.insertSiblingAfter(p2__10561_SHARP_,p1__10562_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10564_SHARP_,p2__10563_SHARP_){
return goog.dom.replaceNode(p2__10563_SHARP_,p1__10564_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__10566 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10566)))
{return null;
} else
{return s__10566;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__10573__10574 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10573__10574)
{var n__10575 = cljs.core.first.call(null,G__10573__10574);
var G__10573__10576 = G__10573__10574;
while(true){
goog.style.setStyle(n__10575,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10577 = cljs.core.next.call(null,G__10573__10576);
if(temp__3974__auto____10577)
{var G__10573__10578 = temp__3974__auto____10577;
{
var G__10579 = cljs.core.first.call(null,G__10573__10578);
var G__10580 = G__10573__10578;
n__10575 = G__10579;
G__10573__10576 = G__10580;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10581){
var content = cljs.core.first(arglist__10581);
var name = cljs.core.first(cljs.core.next(arglist__10581));
var value = cljs.core.rest(cljs.core.next(arglist__10581));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__10588__10589 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10588__10589)
{var n__10590 = cljs.core.first.call(null,G__10588__10589);
var G__10588__10591 = G__10588__10589;
while(true){
n__10590.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10592 = cljs.core.next.call(null,G__10588__10591);
if(temp__3974__auto____10592)
{var G__10588__10593 = temp__3974__auto____10592;
{
var G__10594 = cljs.core.first.call(null,G__10588__10593);
var G__10595 = G__10588__10593;
n__10590 = G__10594;
G__10588__10591 = G__10595;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10596){
var content = cljs.core.first(arglist__10596);
var name = cljs.core.first(cljs.core.next(arglist__10596));
var value = cljs.core.rest(cljs.core.next(arglist__10596));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__10603__10604 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10603__10604)
{var n__10605 = cljs.core.first.call(null,G__10603__10604);
var G__10603__10606 = G__10603__10604;
while(true){
n__10605.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10607 = cljs.core.next.call(null,G__10603__10606);
if(temp__3974__auto____10607)
{var G__10603__10608 = temp__3974__auto____10607;
{
var G__10609 = cljs.core.first.call(null,G__10603__10608);
var G__10610 = G__10603__10608;
n__10605 = G__10609;
G__10603__10606 = G__10610;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__10616__10617 = pair.split(/\s*:\s*/);
var k__10618 = cljs.core.nth.call(null,vec__10616__10617,0,null);
var v__10619 = cljs.core.nth.call(null,vec__10616__10617,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10620 = k__10618;
if(cljs.core.truth_(and__3822__auto____10620))
{return v__10619;
} else
{return and__3822__auto____10620;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10618.toLowerCase()),v__10619);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10623 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10623))
{return domina.parse_style_attributes.call(null,style__10623);
} else
{if(cljs.core.truth_(style__10623.cssText))
{return domina.parse_style_attributes.call(null,style__10623.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10629 = domina.single_node.call(null,content);
var attrs__10630 = node__10629.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10621_SHARP_){
var attr__10631 = attrs__10630.item(p1__10621_SHARP_);
var value__10632 = attr__10631.nodeValue;
if((function (){var and__3822__auto____10633 = cljs.core.not_EQ_.call(null,null,value__10632);
if(and__3822__auto____10633)
{return cljs.core.not_EQ_.call(null,"",value__10632);
} else
{return and__3822__auto____10633;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10631.nodeName.toLowerCase())],[attr__10631.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10630.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10653__10654 = cljs.core.seq.call(null,styles);
if(G__10653__10654)
{var G__10656__10658 = cljs.core.first.call(null,G__10653__10654);
var vec__10657__10659 = G__10656__10658;
var name__10660 = cljs.core.nth.call(null,vec__10657__10659,0,null);
var value__10661 = cljs.core.nth.call(null,vec__10657__10659,1,null);
var G__10653__10662 = G__10653__10654;
var G__10656__10663 = G__10656__10658;
var G__10653__10664 = G__10653__10662;
while(true){
var vec__10665__10666 = G__10656__10663;
var name__10667 = cljs.core.nth.call(null,vec__10665__10666,0,null);
var value__10668 = cljs.core.nth.call(null,vec__10665__10666,1,null);
var G__10653__10669 = G__10653__10664;
domina.set_style_BANG_.call(null,content,name__10667,value__10668);
var temp__3974__auto____10670 = cljs.core.next.call(null,G__10653__10669);
if(temp__3974__auto____10670)
{var G__10653__10671 = temp__3974__auto____10670;
{
var G__10672 = cljs.core.first.call(null,G__10653__10671);
var G__10673 = G__10653__10671;
G__10656__10663 = G__10672;
G__10653__10664 = G__10673;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__10693__10694 = cljs.core.seq.call(null,attrs);
if(G__10693__10694)
{var G__10696__10698 = cljs.core.first.call(null,G__10693__10694);
var vec__10697__10699 = G__10696__10698;
var name__10700 = cljs.core.nth.call(null,vec__10697__10699,0,null);
var value__10701 = cljs.core.nth.call(null,vec__10697__10699,1,null);
var G__10693__10702 = G__10693__10694;
var G__10696__10703 = G__10696__10698;
var G__10693__10704 = G__10693__10702;
while(true){
var vec__10705__10706 = G__10696__10703;
var name__10707 = cljs.core.nth.call(null,vec__10705__10706,0,null);
var value__10708 = cljs.core.nth.call(null,vec__10705__10706,1,null);
var G__10693__10709 = G__10693__10704;
domina.set_attr_BANG_.call(null,content,name__10707,value__10708);
var temp__3974__auto____10710 = cljs.core.next.call(null,G__10693__10709);
if(temp__3974__auto____10710)
{var G__10693__10711 = temp__3974__auto____10710;
{
var G__10712 = cljs.core.first.call(null,G__10693__10711);
var G__10713 = G__10693__10711;
G__10696__10703 = G__10712;
G__10693__10704 = G__10713;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__10720__10721 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10720__10721)
{var node__10722 = cljs.core.first.call(null,G__10720__10721);
var G__10720__10723 = G__10720__10721;
while(true){
goog.dom.classes.add(node__10722,class$);
var temp__3974__auto____10724 = cljs.core.next.call(null,G__10720__10723);
if(temp__3974__auto____10724)
{var G__10720__10725 = temp__3974__auto____10724;
{
var G__10726 = cljs.core.first.call(null,G__10720__10725);
var G__10727 = G__10720__10725;
node__10722 = G__10726;
G__10720__10723 = G__10727;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__10734__10735 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10734__10735)
{var node__10736 = cljs.core.first.call(null,G__10734__10735);
var G__10734__10737 = G__10734__10735;
while(true){
goog.dom.classes.remove(node__10736,class$);
var temp__3974__auto____10738 = cljs.core.next.call(null,G__10734__10737);
if(temp__3974__auto____10738)
{var G__10734__10739 = temp__3974__auto____10738;
{
var G__10740 = cljs.core.first.call(null,G__10734__10739);
var G__10741 = G__10734__10739;
node__10736 = G__10740;
G__10734__10737 = G__10741;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__10749 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10750__10751 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10750__10751)
{var node__10752 = cljs.core.first.call(null,G__10750__10751);
var G__10750__10753 = G__10750__10751;
while(true){
goog.dom.classes.set(node__10752,classes__10749);
var temp__3974__auto____10754 = cljs.core.next.call(null,G__10750__10753);
if(temp__3974__auto____10754)
{var G__10750__10755 = temp__3974__auto____10754;
{
var G__10756 = cljs.core.first.call(null,G__10750__10755);
var G__10757 = G__10750__10755;
node__10752 = G__10756;
G__10750__10753 = G__10757;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__10764__10765 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10764__10765)
{var node__10766 = cljs.core.first.call(null,G__10764__10765);
var G__10764__10767 = G__10764__10765;
while(true){
goog.dom.setTextContent(node__10766,value);
var temp__3974__auto____10768 = cljs.core.next.call(null,G__10764__10767);
if(temp__3974__auto____10768)
{var G__10764__10769 = temp__3974__auto____10768;
{
var G__10770 = cljs.core.first.call(null,G__10764__10769);
var G__10771 = G__10764__10769;
node__10766 = G__10770;
G__10764__10767 = G__10771;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__10778__10779 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10778__10779)
{var node__10780 = cljs.core.first.call(null,G__10778__10779);
var G__10778__10781 = G__10778__10779;
while(true){
goog.dom.forms.setValue(node__10780,value);
var temp__3974__auto____10782 = cljs.core.next.call(null,G__10778__10781);
if(temp__3974__auto____10782)
{var G__10778__10783 = temp__3974__auto____10782;
{
var G__10784 = cljs.core.first.call(null,G__10778__10783);
var G__10785 = G__10778__10783;
node__10780 = G__10784;
G__10778__10781 = G__10785;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___10802 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10803 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10804 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10805 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10804);
if(cljs.core.truth_((function (){var and__3822__auto____10806 = allows_inner_html_QMARK___10802;
if(and__3822__auto____10806)
{var and__3822__auto____10808 = (function (){var or__3824__auto____10807 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10807))
{return or__3824__auto____10807;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10803);
}
})();
if(cljs.core.truth_(and__3822__auto____10808))
{return !(special_tag_QMARK___10805);
} else
{return and__3822__auto____10808;
}
} else
{return and__3822__auto____10806;
}
})()))
{var value__10809 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10812__10813 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10812__10813)
{var node__10814 = cljs.core.first.call(null,G__10812__10813);
var G__10812__10815 = G__10812__10813;
while(true){
goog.events.removeAll(node__10814);
node__10814.innerHTML = value__10809;
var temp__3974__auto____10816 = cljs.core.next.call(null,G__10812__10815);
if(temp__3974__auto____10816)
{var G__10812__10817 = temp__3974__auto____10816;
{
var G__10818 = cljs.core.first.call(null,G__10812__10817);
var G__10819 = G__10812__10817;
node__10814 = G__10818;
G__10812__10815 = G__10819;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10810){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10810))
{var e__10811 = e10810;
domina.replace_children_BANG_.call(null,content,value__10809);
} else
{if("\uFDD0'else")
{throw e10810;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__10825 = domina.single_node.call(null,node).__domina_data;
var value__10826 = (cljs.core.truth_(m__10825)?cljs.core._lookup.call(null,m__10825,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10827 = bubble;
if(cljs.core.truth_(and__3822__auto____10827))
{return (value__10826 == null);
} else
{return and__3822__auto____10827;
}
})()))
{var temp__3974__auto____10828 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10828))
{var parent__10829 = temp__3974__auto____10828;
return get_data.call(null,parent__10829,key,true);
} else
{return null;
}
} else
{return value__10826;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__10835 = (function (){var or__3824__auto____10834 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10834))
{return or__3824__auto____10834;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10835,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10847 = domina.nodes.call(null,parent_content);
var children__10848 = domina.nodes.call(null,child_content);
var first_child__10856 = (function (){var frag__10849 = document.createDocumentFragment();
var G__10850__10851 = cljs.core.seq.call(null,children__10848);
if(G__10850__10851)
{var child__10852 = cljs.core.first.call(null,G__10850__10851);
var G__10850__10853 = G__10850__10851;
while(true){
frag__10849.appendChild(child__10852);
var temp__3974__auto____10854 = cljs.core.next.call(null,G__10850__10853);
if(temp__3974__auto____10854)
{var G__10850__10855 = temp__3974__auto____10854;
{
var G__10858 = cljs.core.first.call(null,G__10850__10855);
var G__10859 = G__10850__10855;
child__10852 = G__10858;
G__10850__10853 = G__10859;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10849;
})();
var other_children__10857 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10847) - 1),(function (){
return first_child__10856.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10847))
{f.call(null,cljs.core.first.call(null,parents__10847),first_child__10856);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10830_SHARP_,p2__10831_SHARP_){
return f.call(null,p1__10830_SHARP_,p2__10831_SHARP_);
}),cljs.core.rest.call(null,parents__10847),other_children__10857));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto____10861 = obj;
if(cljs.core.truth_(and__3822__auto____10861))
{return obj.length;
} else
{return and__3822__auto____10861;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10865__10866 = list_thing;
if(G__10865__10866)
{if((function (){var or__3824__auto____10867 = (G__10865__10866.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10867)
{return or__3824__auto____10867;
} else
{return G__10865__10866.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10865__10866.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10865__10866);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10865__10866);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10868__10869 = content;
if(G__10868__10869)
{if((function (){var or__3824__auto____10870 = (G__10868__10869.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10870)
{return or__3824__auto____10870;
} else
{return G__10868__10869.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10868__10869.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10868__10869);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10868__10869);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__10871__10872 = content;
if(G__10871__10872)
{if((function (){var or__3824__auto____10873 = (G__10871__10872.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10873)
{return or__3824__auto____10873;
} else
{return G__10871__10872.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10871__10872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10871__10872);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10871__10872);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
