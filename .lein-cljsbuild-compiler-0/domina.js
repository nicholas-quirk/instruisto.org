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
var opt_wrapper__10555 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10556 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10557 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10556,"caption":table_section_wrapper__10556,"optgroup":opt_wrapper__10555,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10557,"thead":table_section_wrapper__10556,"th":cell_wrapper__10557,"option":opt_wrapper__10555,"tbody":table_section_wrapper__10556,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10556});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10570 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10574 = (((function (){var and__3822__auto____10571 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10571)
{return no_tbody_QMARK___10570;
} else
{return and__3822__auto____10571;
}
})())?(function (){var and__3822__auto____10572 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10572))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10572;
}
})():(((function (){var and__3822__auto____10573 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10573)
{return no_tbody_QMARK___10570;
} else
{return and__3822__auto____10573;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10575__10576 = cljs.core.seq.call(null,tbody__10574);
if(G__10575__10576)
{var child__10577 = cljs.core.first.call(null,G__10575__10576);
var G__10575__10578 = G__10575__10576;
while(true){
if((function (){var and__3822__auto____10579 = cljs.core._EQ_.call(null,child__10577.nodeName,"tbody");
if(and__3822__auto____10579)
{return cljs.core._EQ_.call(null,child__10577.childNodes.length,0);
} else
{return and__3822__auto____10579;
}
})())
{child__10577.parentNode.removeChild(child__10577);
} else
{}
var temp__3974__auto____10580 = cljs.core.next.call(null,G__10575__10578);
if(temp__3974__auto____10580)
{var G__10575__10581 = temp__3974__auto____10580;
{
var G__10582 = cljs.core.first.call(null,G__10575__10581);
var G__10583 = G__10575__10581;
child__10577 = G__10582;
G__10575__10578 = G__10583;
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
var html__10597 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10598 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10597)))].join('').toLowerCase();
var vec__10596__10599 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10598,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10600 = cljs.core.nth.call(null,vec__10596__10599,0,null);
var start_wrap__10601 = cljs.core.nth.call(null,vec__10596__10599,1,null);
var end_wrap__10602 = cljs.core.nth.call(null,vec__10596__10599,2,null);
var div__10606 = (function (){var wrapper__10604 = (function (){var div__10603 = document.createElement("div");
div__10603.innerHTML = [cljs.core.str(start_wrap__10601),cljs.core.str(html__10597),cljs.core.str(end_wrap__10602)].join('');
return div__10603;
})();
var level__10605 = depth__10600;
while(true){
if((level__10605 > 0))
{{
var G__10608 = wrapper__10604.lastChild;
var G__10609 = (level__10605 - 1);
wrapper__10604 = G__10608;
level__10605 = G__10609;
continue;
}
} else
{return wrapper__10604;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10606,html__10597);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10607 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10607)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10597);
} else
{return and__3822__auto____10607;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10606,html__10597);
} else
{}
return div__10606.childNodes;
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
if((function (){var and__3822__auto____10613 = content;
if(and__3822__auto____10613)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10613;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10614 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10614)
{return or__3824__auto____10614;
} else
{var or__3824__auto____10615 = (domina.nodes["_"]);
if(or__3824__auto____10615)
{return or__3824__auto____10615;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10619 = nodeseq;
if(and__3822__auto____10619)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10619;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10620 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10620)
{return or__3824__auto____10620;
} else
{var or__3824__auto____10621 = (domina.single_node["_"]);
if(or__3824__auto____10621)
{return or__3824__auto____10621;
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
if(cljs.core.truth_((function (){var and__3822__auto____10623 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10623))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10623;
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
log_debug.cljs$lang$applyTo = (function (arglist__10624){
var mesg = cljs.core.seq(arglist__10624);;
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
log.cljs$lang$applyTo = (function (arglist__10625){
var mesg = cljs.core.seq(arglist__10625);;
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
if((void 0 === domina.t10633))
{
/**
* @constructor
*/
domina.t10633 = (function (class_name,by_class,meta10634){
this.class_name = class_name;
this.by_class = by_class;
this.meta10634 = meta10634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10633.cljs$lang$type = true;
domina.t10633.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10633");
});
domina.t10633.prototype.domina$DomContent$ = true;
domina.t10633.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10636 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10636.class_name)));
});
domina.t10633.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10637 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10637.class_name)));
});
domina.t10633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10635){
var this__10638 = this;
return this__10638.meta10634;
});
domina.t10633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10635,meta10634){
var this__10639 = this;
return (new domina.t10633(this__10639.class_name,this__10639.by_class,meta10634));
});
domina.t10633;
} else
{}
return (new domina.t10633(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__10640_SHARP_){
return p1__10640_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__10641_SHARP_,p2__10642_SHARP_){
return goog.dom.insertChildAt(p1__10641_SHARP_,p2__10642_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__10644_SHARP_,p2__10643_SHARP_){
return goog.dom.insertSiblingBefore(p2__10643_SHARP_,p1__10644_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10646_SHARP_,p2__10645_SHARP_){
return goog.dom.insertSiblingAfter(p2__10645_SHARP_,p1__10646_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10648_SHARP_,p2__10647_SHARP_){
return goog.dom.replaceNode(p2__10647_SHARP_,p1__10648_SHARP_);
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
var s__10650 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10650)))
{return null;
} else
{return s__10650;
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
var G__10657__10658 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10657__10658)
{var n__10659 = cljs.core.first.call(null,G__10657__10658);
var G__10657__10660 = G__10657__10658;
while(true){
goog.style.setStyle(n__10659,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10661 = cljs.core.next.call(null,G__10657__10660);
if(temp__3974__auto____10661)
{var G__10657__10662 = temp__3974__auto____10661;
{
var G__10663 = cljs.core.first.call(null,G__10657__10662);
var G__10664 = G__10657__10662;
n__10659 = G__10663;
G__10657__10660 = G__10664;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10665){
var content = cljs.core.first(arglist__10665);
var name = cljs.core.first(cljs.core.next(arglist__10665));
var value = cljs.core.rest(cljs.core.next(arglist__10665));
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
var G__10672__10673 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10672__10673)
{var n__10674 = cljs.core.first.call(null,G__10672__10673);
var G__10672__10675 = G__10672__10673;
while(true){
n__10674.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10676 = cljs.core.next.call(null,G__10672__10675);
if(temp__3974__auto____10676)
{var G__10672__10677 = temp__3974__auto____10676;
{
var G__10678 = cljs.core.first.call(null,G__10672__10677);
var G__10679 = G__10672__10677;
n__10674 = G__10678;
G__10672__10675 = G__10679;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10680){
var content = cljs.core.first(arglist__10680);
var name = cljs.core.first(cljs.core.next(arglist__10680));
var value = cljs.core.rest(cljs.core.next(arglist__10680));
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
var G__10687__10688 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10687__10688)
{var n__10689 = cljs.core.first.call(null,G__10687__10688);
var G__10687__10690 = G__10687__10688;
while(true){
n__10689.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10691 = cljs.core.next.call(null,G__10687__10690);
if(temp__3974__auto____10691)
{var G__10687__10692 = temp__3974__auto____10691;
{
var G__10693 = cljs.core.first.call(null,G__10687__10692);
var G__10694 = G__10687__10692;
n__10689 = G__10693;
G__10687__10690 = G__10694;
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
var vec__10700__10701 = pair.split(/\s*:\s*/);
var k__10702 = cljs.core.nth.call(null,vec__10700__10701,0,null);
var v__10703 = cljs.core.nth.call(null,vec__10700__10701,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10704 = k__10702;
if(cljs.core.truth_(and__3822__auto____10704))
{return v__10703;
} else
{return and__3822__auto____10704;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10702.toLowerCase()),v__10703);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10707 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10707))
{return domina.parse_style_attributes.call(null,style__10707);
} else
{if(cljs.core.truth_(style__10707.cssText))
{return domina.parse_style_attributes.call(null,style__10707.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10713 = domina.single_node.call(null,content);
var attrs__10714 = node__10713.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10705_SHARP_){
var attr__10715 = attrs__10714.item(p1__10705_SHARP_);
var value__10716 = attr__10715.nodeValue;
if((function (){var and__3822__auto____10717 = cljs.core.not_EQ_.call(null,null,value__10716);
if(and__3822__auto____10717)
{return cljs.core.not_EQ_.call(null,"",value__10716);
} else
{return and__3822__auto____10717;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10715.nodeName.toLowerCase())],[attr__10715.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10714.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10737__10738 = cljs.core.seq.call(null,styles);
if(G__10737__10738)
{var G__10740__10742 = cljs.core.first.call(null,G__10737__10738);
var vec__10741__10743 = G__10740__10742;
var name__10744 = cljs.core.nth.call(null,vec__10741__10743,0,null);
var value__10745 = cljs.core.nth.call(null,vec__10741__10743,1,null);
var G__10737__10746 = G__10737__10738;
var G__10740__10747 = G__10740__10742;
var G__10737__10748 = G__10737__10746;
while(true){
var vec__10749__10750 = G__10740__10747;
var name__10751 = cljs.core.nth.call(null,vec__10749__10750,0,null);
var value__10752 = cljs.core.nth.call(null,vec__10749__10750,1,null);
var G__10737__10753 = G__10737__10748;
domina.set_style_BANG_.call(null,content,name__10751,value__10752);
var temp__3974__auto____10754 = cljs.core.next.call(null,G__10737__10753);
if(temp__3974__auto____10754)
{var G__10737__10755 = temp__3974__auto____10754;
{
var G__10756 = cljs.core.first.call(null,G__10737__10755);
var G__10757 = G__10737__10755;
G__10740__10747 = G__10756;
G__10737__10748 = G__10757;
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
var G__10777__10778 = cljs.core.seq.call(null,attrs);
if(G__10777__10778)
{var G__10780__10782 = cljs.core.first.call(null,G__10777__10778);
var vec__10781__10783 = G__10780__10782;
var name__10784 = cljs.core.nth.call(null,vec__10781__10783,0,null);
var value__10785 = cljs.core.nth.call(null,vec__10781__10783,1,null);
var G__10777__10786 = G__10777__10778;
var G__10780__10787 = G__10780__10782;
var G__10777__10788 = G__10777__10786;
while(true){
var vec__10789__10790 = G__10780__10787;
var name__10791 = cljs.core.nth.call(null,vec__10789__10790,0,null);
var value__10792 = cljs.core.nth.call(null,vec__10789__10790,1,null);
var G__10777__10793 = G__10777__10788;
domina.set_attr_BANG_.call(null,content,name__10791,value__10792);
var temp__3974__auto____10794 = cljs.core.next.call(null,G__10777__10793);
if(temp__3974__auto____10794)
{var G__10777__10795 = temp__3974__auto____10794;
{
var G__10796 = cljs.core.first.call(null,G__10777__10795);
var G__10797 = G__10777__10795;
G__10780__10787 = G__10796;
G__10777__10788 = G__10797;
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
var G__10804__10805 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10804__10805)
{var node__10806 = cljs.core.first.call(null,G__10804__10805);
var G__10804__10807 = G__10804__10805;
while(true){
goog.dom.classes.add(node__10806,class$);
var temp__3974__auto____10808 = cljs.core.next.call(null,G__10804__10807);
if(temp__3974__auto____10808)
{var G__10804__10809 = temp__3974__auto____10808;
{
var G__10810 = cljs.core.first.call(null,G__10804__10809);
var G__10811 = G__10804__10809;
node__10806 = G__10810;
G__10804__10807 = G__10811;
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
var G__10818__10819 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10818__10819)
{var node__10820 = cljs.core.first.call(null,G__10818__10819);
var G__10818__10821 = G__10818__10819;
while(true){
goog.dom.classes.remove(node__10820,class$);
var temp__3974__auto____10822 = cljs.core.next.call(null,G__10818__10821);
if(temp__3974__auto____10822)
{var G__10818__10823 = temp__3974__auto____10822;
{
var G__10824 = cljs.core.first.call(null,G__10818__10823);
var G__10825 = G__10818__10823;
node__10820 = G__10824;
G__10818__10821 = G__10825;
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
var classes__10833 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10834__10835 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10834__10835)
{var node__10836 = cljs.core.first.call(null,G__10834__10835);
var G__10834__10837 = G__10834__10835;
while(true){
goog.dom.classes.set(node__10836,classes__10833);
var temp__3974__auto____10838 = cljs.core.next.call(null,G__10834__10837);
if(temp__3974__auto____10838)
{var G__10834__10839 = temp__3974__auto____10838;
{
var G__10840 = cljs.core.first.call(null,G__10834__10839);
var G__10841 = G__10834__10839;
node__10836 = G__10840;
G__10834__10837 = G__10841;
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
var G__10848__10849 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10848__10849)
{var node__10850 = cljs.core.first.call(null,G__10848__10849);
var G__10848__10851 = G__10848__10849;
while(true){
goog.dom.setTextContent(node__10850,value);
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
var G__10862__10863 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10862__10863)
{var node__10864 = cljs.core.first.call(null,G__10862__10863);
var G__10862__10865 = G__10862__10863;
while(true){
goog.dom.forms.setValue(node__10864,value);
var temp__3974__auto____10866 = cljs.core.next.call(null,G__10862__10865);
if(temp__3974__auto____10866)
{var G__10862__10867 = temp__3974__auto____10866;
{
var G__10868 = cljs.core.first.call(null,G__10862__10867);
var G__10869 = G__10862__10867;
node__10864 = G__10868;
G__10862__10865 = G__10869;
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
var allows_inner_html_QMARK___10886 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10887 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10888 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10889 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10888);
if(cljs.core.truth_((function (){var and__3822__auto____10890 = allows_inner_html_QMARK___10886;
if(and__3822__auto____10890)
{var and__3822__auto____10892 = (function (){var or__3824__auto____10891 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10891))
{return or__3824__auto____10891;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10887);
}
})();
if(cljs.core.truth_(and__3822__auto____10892))
{return !(special_tag_QMARK___10889);
} else
{return and__3822__auto____10892;
}
} else
{return and__3822__auto____10890;
}
})()))
{var value__10893 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10896__10897 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10896__10897)
{var node__10898 = cljs.core.first.call(null,G__10896__10897);
var G__10896__10899 = G__10896__10897;
while(true){
goog.events.removeAll(node__10898);
node__10898.innerHTML = value__10893;
var temp__3974__auto____10900 = cljs.core.next.call(null,G__10896__10899);
if(temp__3974__auto____10900)
{var G__10896__10901 = temp__3974__auto____10900;
{
var G__10902 = cljs.core.first.call(null,G__10896__10901);
var G__10903 = G__10896__10901;
node__10898 = G__10902;
G__10896__10899 = G__10903;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10894){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10894))
{var e__10895 = e10894;
domina.replace_children_BANG_.call(null,content,value__10893);
} else
{if("\uFDD0'else")
{throw e10894;
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
var m__10909 = domina.single_node.call(null,node).__domina_data;
var value__10910 = (cljs.core.truth_(m__10909)?cljs.core._lookup.call(null,m__10909,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10911 = bubble;
if(cljs.core.truth_(and__3822__auto____10911))
{return (value__10910 == null);
} else
{return and__3822__auto____10911;
}
})()))
{var temp__3974__auto____10912 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10912))
{var parent__10913 = temp__3974__auto____10912;
return get_data.call(null,parent__10913,key,true);
} else
{return null;
}
} else
{return value__10910;
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
var m__10919 = (function (){var or__3824__auto____10918 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10918))
{return or__3824__auto____10918;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10919,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10931 = domina.nodes.call(null,parent_content);
var children__10932 = domina.nodes.call(null,child_content);
var first_child__10940 = (function (){var frag__10933 = document.createDocumentFragment();
var G__10934__10935 = cljs.core.seq.call(null,children__10932);
if(G__10934__10935)
{var child__10936 = cljs.core.first.call(null,G__10934__10935);
var G__10934__10937 = G__10934__10935;
while(true){
frag__10933.appendChild(child__10936);
var temp__3974__auto____10938 = cljs.core.next.call(null,G__10934__10937);
if(temp__3974__auto____10938)
{var G__10934__10939 = temp__3974__auto____10938;
{
var G__10942 = cljs.core.first.call(null,G__10934__10939);
var G__10943 = G__10934__10939;
child__10936 = G__10942;
G__10934__10937 = G__10943;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10933;
})();
var other_children__10941 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10931) - 1),(function (){
return first_child__10940.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10931))
{f.call(null,cljs.core.first.call(null,parents__10931),first_child__10940);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10914_SHARP_,p2__10915_SHARP_){
return f.call(null,p1__10914_SHARP_,p2__10915_SHARP_);
}),cljs.core.rest.call(null,parents__10931),other_children__10941));
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
var and__3822__auto____10945 = obj;
if(cljs.core.truth_(and__3822__auto____10945))
{return obj.length;
} else
{return and__3822__auto____10945;
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
{if((function (){var G__10949__10950 = list_thing;
if(G__10949__10950)
{if((function (){var or__3824__auto____10951 = (G__10949__10950.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10951)
{return or__3824__auto____10951;
} else
{return G__10949__10950.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10949__10950.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10949__10950);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10949__10950);
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
{if((function (){var G__10952__10953 = content;
if(G__10952__10953)
{if((function (){var or__3824__auto____10954 = (G__10952__10953.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10954)
{return or__3824__auto____10954;
} else
{return G__10952__10953.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10952__10953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10952__10953);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10952__10953);
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
{if((function (){var G__10955__10956 = content;
if(G__10955__10956)
{if((function (){var or__3824__auto____10957 = (G__10955__10956.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10957)
{return or__3824__auto____10957;
} else
{return G__10955__10956.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10955__10956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10955__10956);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10955__10956);
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
