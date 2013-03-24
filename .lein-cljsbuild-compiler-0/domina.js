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
var opt_wrapper__10507 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10508 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10509 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10508,"caption":table_section_wrapper__10508,"optgroup":opt_wrapper__10507,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10509,"thead":table_section_wrapper__10508,"th":cell_wrapper__10509,"option":opt_wrapper__10507,"tbody":table_section_wrapper__10508,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10508});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10522 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10526 = (((function (){var and__3822__auto____10523 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10523)
{return no_tbody_QMARK___10522;
} else
{return and__3822__auto____10523;
}
})())?(function (){var and__3822__auto____10524 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10524))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10524;
}
})():(((function (){var and__3822__auto____10525 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10525)
{return no_tbody_QMARK___10522;
} else
{return and__3822__auto____10525;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10527__10528 = cljs.core.seq.call(null,tbody__10526);
if(G__10527__10528)
{var child__10529 = cljs.core.first.call(null,G__10527__10528);
var G__10527__10530 = G__10527__10528;
while(true){
if((function (){var and__3822__auto____10531 = cljs.core._EQ_.call(null,child__10529.nodeName,"tbody");
if(and__3822__auto____10531)
{return cljs.core._EQ_.call(null,child__10529.childNodes.length,0);
} else
{return and__3822__auto____10531;
}
})())
{child__10529.parentNode.removeChild(child__10529);
} else
{}
var temp__3974__auto____10532 = cljs.core.next.call(null,G__10527__10530);
if(temp__3974__auto____10532)
{var G__10527__10533 = temp__3974__auto____10532;
{
var G__10534 = cljs.core.first.call(null,G__10527__10533);
var G__10535 = G__10527__10533;
child__10529 = G__10534;
G__10527__10530 = G__10535;
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
var html__10549 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10550 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10549)))].join('').toLowerCase();
var vec__10548__10551 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10550,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10552 = cljs.core.nth.call(null,vec__10548__10551,0,null);
var start_wrap__10553 = cljs.core.nth.call(null,vec__10548__10551,1,null);
var end_wrap__10554 = cljs.core.nth.call(null,vec__10548__10551,2,null);
var div__10558 = (function (){var wrapper__10556 = (function (){var div__10555 = document.createElement("div");
div__10555.innerHTML = [cljs.core.str(start_wrap__10553),cljs.core.str(html__10549),cljs.core.str(end_wrap__10554)].join('');
return div__10555;
})();
var level__10557 = depth__10552;
while(true){
if((level__10557 > 0))
{{
var G__10560 = wrapper__10556.lastChild;
var G__10561 = (level__10557 - 1);
wrapper__10556 = G__10560;
level__10557 = G__10561;
continue;
}
} else
{return wrapper__10556;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10558,html__10549);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10559 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10559)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10549);
} else
{return and__3822__auto____10559;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10558,html__10549);
} else
{}
return div__10558.childNodes;
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
if((function (){var and__3822__auto____10565 = content;
if(and__3822__auto____10565)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10565;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10566 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10566)
{return or__3824__auto____10566;
} else
{var or__3824__auto____10567 = (domina.nodes["_"]);
if(or__3824__auto____10567)
{return or__3824__auto____10567;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10571 = nodeseq;
if(and__3822__auto____10571)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10571;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10572 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10572)
{return or__3824__auto____10572;
} else
{var or__3824__auto____10573 = (domina.single_node["_"]);
if(or__3824__auto____10573)
{return or__3824__auto____10573;
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
if(cljs.core.truth_((function (){var and__3822__auto____10575 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10575))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10575;
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
log_debug.cljs$lang$applyTo = (function (arglist__10576){
var mesg = cljs.core.seq(arglist__10576);;
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
log.cljs$lang$applyTo = (function (arglist__10577){
var mesg = cljs.core.seq(arglist__10577);;
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
if((void 0 === domina.t10585))
{
/**
* @constructor
*/
domina.t10585 = (function (class_name,by_class,meta10586){
this.class_name = class_name;
this.by_class = by_class;
this.meta10586 = meta10586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10585.cljs$lang$type = true;
domina.t10585.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10585");
});
domina.t10585.prototype.domina$DomContent$ = true;
domina.t10585.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10588 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10588.class_name)));
});
domina.t10585.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10589 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10589.class_name)));
});
domina.t10585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10587){
var this__10590 = this;
return this__10590.meta10586;
});
domina.t10585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10587,meta10586){
var this__10591 = this;
return (new domina.t10585(this__10591.class_name,this__10591.by_class,meta10586));
});
domina.t10585;
} else
{}
return (new domina.t10585(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__10592_SHARP_){
return p1__10592_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__10593_SHARP_,p2__10594_SHARP_){
return goog.dom.insertChildAt(p1__10593_SHARP_,p2__10594_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__10596_SHARP_,p2__10595_SHARP_){
return goog.dom.insertSiblingBefore(p2__10595_SHARP_,p1__10596_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10598_SHARP_,p2__10597_SHARP_){
return goog.dom.insertSiblingAfter(p2__10597_SHARP_,p1__10598_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10600_SHARP_,p2__10599_SHARP_){
return goog.dom.replaceNode(p2__10599_SHARP_,p1__10600_SHARP_);
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
var s__10602 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10602)))
{return null;
} else
{return s__10602;
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
var G__10609__10610 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10609__10610)
{var n__10611 = cljs.core.first.call(null,G__10609__10610);
var G__10609__10612 = G__10609__10610;
while(true){
goog.style.setStyle(n__10611,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10613 = cljs.core.next.call(null,G__10609__10612);
if(temp__3974__auto____10613)
{var G__10609__10614 = temp__3974__auto____10613;
{
var G__10615 = cljs.core.first.call(null,G__10609__10614);
var G__10616 = G__10609__10614;
n__10611 = G__10615;
G__10609__10612 = G__10616;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10617){
var content = cljs.core.first(arglist__10617);
var name = cljs.core.first(cljs.core.next(arglist__10617));
var value = cljs.core.rest(cljs.core.next(arglist__10617));
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
var G__10624__10625 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10624__10625)
{var n__10626 = cljs.core.first.call(null,G__10624__10625);
var G__10624__10627 = G__10624__10625;
while(true){
n__10626.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10628 = cljs.core.next.call(null,G__10624__10627);
if(temp__3974__auto____10628)
{var G__10624__10629 = temp__3974__auto____10628;
{
var G__10630 = cljs.core.first.call(null,G__10624__10629);
var G__10631 = G__10624__10629;
n__10626 = G__10630;
G__10624__10627 = G__10631;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10632){
var content = cljs.core.first(arglist__10632);
var name = cljs.core.first(cljs.core.next(arglist__10632));
var value = cljs.core.rest(cljs.core.next(arglist__10632));
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
var G__10639__10640 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10639__10640)
{var n__10641 = cljs.core.first.call(null,G__10639__10640);
var G__10639__10642 = G__10639__10640;
while(true){
n__10641.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10643 = cljs.core.next.call(null,G__10639__10642);
if(temp__3974__auto____10643)
{var G__10639__10644 = temp__3974__auto____10643;
{
var G__10645 = cljs.core.first.call(null,G__10639__10644);
var G__10646 = G__10639__10644;
n__10641 = G__10645;
G__10639__10642 = G__10646;
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
var vec__10652__10653 = pair.split(/\s*:\s*/);
var k__10654 = cljs.core.nth.call(null,vec__10652__10653,0,null);
var v__10655 = cljs.core.nth.call(null,vec__10652__10653,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10656 = k__10654;
if(cljs.core.truth_(and__3822__auto____10656))
{return v__10655;
} else
{return and__3822__auto____10656;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10654.toLowerCase()),v__10655);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10659 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10659))
{return domina.parse_style_attributes.call(null,style__10659);
} else
{if(cljs.core.truth_(style__10659.cssText))
{return domina.parse_style_attributes.call(null,style__10659.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10665 = domina.single_node.call(null,content);
var attrs__10666 = node__10665.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10657_SHARP_){
var attr__10667 = attrs__10666.item(p1__10657_SHARP_);
var value__10668 = attr__10667.nodeValue;
if((function (){var and__3822__auto____10669 = cljs.core.not_EQ_.call(null,null,value__10668);
if(and__3822__auto____10669)
{return cljs.core.not_EQ_.call(null,"",value__10668);
} else
{return and__3822__auto____10669;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10667.nodeName.toLowerCase())],[attr__10667.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10666.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10689__10690 = cljs.core.seq.call(null,styles);
if(G__10689__10690)
{var G__10692__10694 = cljs.core.first.call(null,G__10689__10690);
var vec__10693__10695 = G__10692__10694;
var name__10696 = cljs.core.nth.call(null,vec__10693__10695,0,null);
var value__10697 = cljs.core.nth.call(null,vec__10693__10695,1,null);
var G__10689__10698 = G__10689__10690;
var G__10692__10699 = G__10692__10694;
var G__10689__10700 = G__10689__10698;
while(true){
var vec__10701__10702 = G__10692__10699;
var name__10703 = cljs.core.nth.call(null,vec__10701__10702,0,null);
var value__10704 = cljs.core.nth.call(null,vec__10701__10702,1,null);
var G__10689__10705 = G__10689__10700;
domina.set_style_BANG_.call(null,content,name__10703,value__10704);
var temp__3974__auto____10706 = cljs.core.next.call(null,G__10689__10705);
if(temp__3974__auto____10706)
{var G__10689__10707 = temp__3974__auto____10706;
{
var G__10708 = cljs.core.first.call(null,G__10689__10707);
var G__10709 = G__10689__10707;
G__10692__10699 = G__10708;
G__10689__10700 = G__10709;
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
var G__10729__10730 = cljs.core.seq.call(null,attrs);
if(G__10729__10730)
{var G__10732__10734 = cljs.core.first.call(null,G__10729__10730);
var vec__10733__10735 = G__10732__10734;
var name__10736 = cljs.core.nth.call(null,vec__10733__10735,0,null);
var value__10737 = cljs.core.nth.call(null,vec__10733__10735,1,null);
var G__10729__10738 = G__10729__10730;
var G__10732__10739 = G__10732__10734;
var G__10729__10740 = G__10729__10738;
while(true){
var vec__10741__10742 = G__10732__10739;
var name__10743 = cljs.core.nth.call(null,vec__10741__10742,0,null);
var value__10744 = cljs.core.nth.call(null,vec__10741__10742,1,null);
var G__10729__10745 = G__10729__10740;
domina.set_attr_BANG_.call(null,content,name__10743,value__10744);
var temp__3974__auto____10746 = cljs.core.next.call(null,G__10729__10745);
if(temp__3974__auto____10746)
{var G__10729__10747 = temp__3974__auto____10746;
{
var G__10748 = cljs.core.first.call(null,G__10729__10747);
var G__10749 = G__10729__10747;
G__10732__10739 = G__10748;
G__10729__10740 = G__10749;
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
var G__10756__10757 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10756__10757)
{var node__10758 = cljs.core.first.call(null,G__10756__10757);
var G__10756__10759 = G__10756__10757;
while(true){
goog.dom.classes.add(node__10758,class$);
var temp__3974__auto____10760 = cljs.core.next.call(null,G__10756__10759);
if(temp__3974__auto____10760)
{var G__10756__10761 = temp__3974__auto____10760;
{
var G__10762 = cljs.core.first.call(null,G__10756__10761);
var G__10763 = G__10756__10761;
node__10758 = G__10762;
G__10756__10759 = G__10763;
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
var G__10770__10771 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10770__10771)
{var node__10772 = cljs.core.first.call(null,G__10770__10771);
var G__10770__10773 = G__10770__10771;
while(true){
goog.dom.classes.remove(node__10772,class$);
var temp__3974__auto____10774 = cljs.core.next.call(null,G__10770__10773);
if(temp__3974__auto____10774)
{var G__10770__10775 = temp__3974__auto____10774;
{
var G__10776 = cljs.core.first.call(null,G__10770__10775);
var G__10777 = G__10770__10775;
node__10772 = G__10776;
G__10770__10773 = G__10777;
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
var classes__10785 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10786__10787 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10786__10787)
{var node__10788 = cljs.core.first.call(null,G__10786__10787);
var G__10786__10789 = G__10786__10787;
while(true){
goog.dom.classes.set(node__10788,classes__10785);
var temp__3974__auto____10790 = cljs.core.next.call(null,G__10786__10789);
if(temp__3974__auto____10790)
{var G__10786__10791 = temp__3974__auto____10790;
{
var G__10792 = cljs.core.first.call(null,G__10786__10791);
var G__10793 = G__10786__10791;
node__10788 = G__10792;
G__10786__10789 = G__10793;
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
var G__10800__10801 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10800__10801)
{var node__10802 = cljs.core.first.call(null,G__10800__10801);
var G__10800__10803 = G__10800__10801;
while(true){
goog.dom.setTextContent(node__10802,value);
var temp__3974__auto____10804 = cljs.core.next.call(null,G__10800__10803);
if(temp__3974__auto____10804)
{var G__10800__10805 = temp__3974__auto____10804;
{
var G__10806 = cljs.core.first.call(null,G__10800__10805);
var G__10807 = G__10800__10805;
node__10802 = G__10806;
G__10800__10803 = G__10807;
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
var G__10814__10815 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10814__10815)
{var node__10816 = cljs.core.first.call(null,G__10814__10815);
var G__10814__10817 = G__10814__10815;
while(true){
goog.dom.forms.setValue(node__10816,value);
var temp__3974__auto____10818 = cljs.core.next.call(null,G__10814__10817);
if(temp__3974__auto____10818)
{var G__10814__10819 = temp__3974__auto____10818;
{
var G__10820 = cljs.core.first.call(null,G__10814__10819);
var G__10821 = G__10814__10819;
node__10816 = G__10820;
G__10814__10817 = G__10821;
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
var allows_inner_html_QMARK___10838 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10839 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10840 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10841 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10840);
if(cljs.core.truth_((function (){var and__3822__auto____10842 = allows_inner_html_QMARK___10838;
if(and__3822__auto____10842)
{var and__3822__auto____10844 = (function (){var or__3824__auto____10843 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10843))
{return or__3824__auto____10843;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10839);
}
})();
if(cljs.core.truth_(and__3822__auto____10844))
{return !(special_tag_QMARK___10841);
} else
{return and__3822__auto____10844;
}
} else
{return and__3822__auto____10842;
}
})()))
{var value__10845 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10848__10849 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10848__10849)
{var node__10850 = cljs.core.first.call(null,G__10848__10849);
var G__10848__10851 = G__10848__10849;
while(true){
goog.events.removeAll(node__10850);
node__10850.innerHTML = value__10845;
var temp__3974__auto____10852 = cljs.core.next.call(null,G__10848__10851);
if(temp__3974__auto____10852)
{var G__10848__10853 = temp__3974__auto____10852;
{
var G__10854 = cljs.core.first.call(null,G__10848__10853);
var G__10855 = G__10848__10853;
node__10850 = G__10854;
G__10848__10851 = G__10855;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10846){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10846))
{var e__10847 = e10846;
domina.replace_children_BANG_.call(null,content,value__10845);
} else
{if("\uFDD0'else")
{throw e10846;
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
var m__10861 = domina.single_node.call(null,node).__domina_data;
var value__10862 = (cljs.core.truth_(m__10861)?cljs.core._lookup.call(null,m__10861,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10863 = bubble;
if(cljs.core.truth_(and__3822__auto____10863))
{return (value__10862 == null);
} else
{return and__3822__auto____10863;
}
})()))
{var temp__3974__auto____10864 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10864))
{var parent__10865 = temp__3974__auto____10864;
return get_data.call(null,parent__10865,key,true);
} else
{return null;
}
} else
{return value__10862;
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
var m__10871 = (function (){var or__3824__auto____10870 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10870))
{return or__3824__auto____10870;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10871,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10883 = domina.nodes.call(null,parent_content);
var children__10884 = domina.nodes.call(null,child_content);
var first_child__10892 = (function (){var frag__10885 = document.createDocumentFragment();
var G__10886__10887 = cljs.core.seq.call(null,children__10884);
if(G__10886__10887)
{var child__10888 = cljs.core.first.call(null,G__10886__10887);
var G__10886__10889 = G__10886__10887;
while(true){
frag__10885.appendChild(child__10888);
var temp__3974__auto____10890 = cljs.core.next.call(null,G__10886__10889);
if(temp__3974__auto____10890)
{var G__10886__10891 = temp__3974__auto____10890;
{
var G__10894 = cljs.core.first.call(null,G__10886__10891);
var G__10895 = G__10886__10891;
child__10888 = G__10894;
G__10886__10889 = G__10895;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10885;
})();
var other_children__10893 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10883) - 1),(function (){
return first_child__10892.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10883))
{f.call(null,cljs.core.first.call(null,parents__10883),first_child__10892);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10866_SHARP_,p2__10867_SHARP_){
return f.call(null,p1__10866_SHARP_,p2__10867_SHARP_);
}),cljs.core.rest.call(null,parents__10883),other_children__10893));
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
var and__3822__auto____10897 = obj;
if(cljs.core.truth_(and__3822__auto____10897))
{return obj.length;
} else
{return and__3822__auto____10897;
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
{if((function (){var G__10901__10902 = list_thing;
if(G__10901__10902)
{if((function (){var or__3824__auto____10903 = (G__10901__10902.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10903)
{return or__3824__auto____10903;
} else
{return G__10901__10902.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10901__10902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10901__10902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10901__10902);
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
{if((function (){var G__10904__10905 = content;
if(G__10904__10905)
{if((function (){var or__3824__auto____10906 = (G__10904__10905.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10906)
{return or__3824__auto____10906;
} else
{return G__10904__10905.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10904__10905.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10904__10905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10904__10905);
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
{if((function (){var G__10907__10908 = content;
if(G__10907__10908)
{if((function (){var or__3824__auto____10909 = (G__10907__10908.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10909)
{return or__3824__auto____10909;
} else
{return G__10907__10908.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10907__10908.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10907__10908);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10907__10908);
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
