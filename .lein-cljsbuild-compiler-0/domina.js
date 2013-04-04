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
var opt_wrapper__10527 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10528 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10529 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10528,"caption":table_section_wrapper__10528,"optgroup":opt_wrapper__10527,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10529,"thead":table_section_wrapper__10528,"th":cell_wrapper__10529,"option":opt_wrapper__10527,"tbody":table_section_wrapper__10528,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10528});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10542 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10546 = (((function (){var and__3822__auto____10543 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10543)
{return no_tbody_QMARK___10542;
} else
{return and__3822__auto____10543;
}
})())?(function (){var and__3822__auto____10544 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10544))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10544;
}
})():(((function (){var and__3822__auto____10545 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10545)
{return no_tbody_QMARK___10542;
} else
{return and__3822__auto____10545;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10547__10548 = cljs.core.seq.call(null,tbody__10546);
if(G__10547__10548)
{var child__10549 = cljs.core.first.call(null,G__10547__10548);
var G__10547__10550 = G__10547__10548;
while(true){
if((function (){var and__3822__auto____10551 = cljs.core._EQ_.call(null,child__10549.nodeName,"tbody");
if(and__3822__auto____10551)
{return cljs.core._EQ_.call(null,child__10549.childNodes.length,0);
} else
{return and__3822__auto____10551;
}
})())
{child__10549.parentNode.removeChild(child__10549);
} else
{}
var temp__3974__auto____10552 = cljs.core.next.call(null,G__10547__10550);
if(temp__3974__auto____10552)
{var G__10547__10553 = temp__3974__auto____10552;
{
var G__10554 = cljs.core.first.call(null,G__10547__10553);
var G__10555 = G__10547__10553;
child__10549 = G__10554;
G__10547__10550 = G__10555;
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
var html__10569 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10570 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10569)))].join('').toLowerCase();
var vec__10568__10571 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10570,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10572 = cljs.core.nth.call(null,vec__10568__10571,0,null);
var start_wrap__10573 = cljs.core.nth.call(null,vec__10568__10571,1,null);
var end_wrap__10574 = cljs.core.nth.call(null,vec__10568__10571,2,null);
var div__10578 = (function (){var wrapper__10576 = (function (){var div__10575 = document.createElement("div");
div__10575.innerHTML = [cljs.core.str(start_wrap__10573),cljs.core.str(html__10569),cljs.core.str(end_wrap__10574)].join('');
return div__10575;
})();
var level__10577 = depth__10572;
while(true){
if((level__10577 > 0))
{{
var G__10580 = wrapper__10576.lastChild;
var G__10581 = (level__10577 - 1);
wrapper__10576 = G__10580;
level__10577 = G__10581;
continue;
}
} else
{return wrapper__10576;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10578,html__10569);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10579 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10579)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10569);
} else
{return and__3822__auto____10579;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10578,html__10569);
} else
{}
return div__10578.childNodes;
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
if((function (){var and__3822__auto____10585 = content;
if(and__3822__auto____10585)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10585;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10586 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10586)
{return or__3824__auto____10586;
} else
{var or__3824__auto____10587 = (domina.nodes["_"]);
if(or__3824__auto____10587)
{return or__3824__auto____10587;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10591 = nodeseq;
if(and__3822__auto____10591)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10591;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10592 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10592)
{return or__3824__auto____10592;
} else
{var or__3824__auto____10593 = (domina.single_node["_"]);
if(or__3824__auto____10593)
{return or__3824__auto____10593;
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
if(cljs.core.truth_((function (){var and__3822__auto____10595 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10595))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10595;
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
log_debug.cljs$lang$applyTo = (function (arglist__10596){
var mesg = cljs.core.seq(arglist__10596);;
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
log.cljs$lang$applyTo = (function (arglist__10597){
var mesg = cljs.core.seq(arglist__10597);;
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
if((void 0 === domina.t10605))
{
/**
* @constructor
*/
domina.t10605 = (function (class_name,by_class,meta10606){
this.class_name = class_name;
this.by_class = by_class;
this.meta10606 = meta10606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10605.cljs$lang$type = true;
domina.t10605.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10605");
});
domina.t10605.prototype.domina$DomContent$ = true;
domina.t10605.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10608 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10608.class_name)));
});
domina.t10605.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10609 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10609.class_name)));
});
domina.t10605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10607){
var this__10610 = this;
return this__10610.meta10606;
});
domina.t10605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10607,meta10606){
var this__10611 = this;
return (new domina.t10605(this__10611.class_name,this__10611.by_class,meta10606));
});
domina.t10605;
} else
{}
return (new domina.t10605(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__10612_SHARP_){
return p1__10612_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__10613_SHARP_,p2__10614_SHARP_){
return goog.dom.insertChildAt(p1__10613_SHARP_,p2__10614_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__10616_SHARP_,p2__10615_SHARP_){
return goog.dom.insertSiblingBefore(p2__10615_SHARP_,p1__10616_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10618_SHARP_,p2__10617_SHARP_){
return goog.dom.insertSiblingAfter(p2__10617_SHARP_,p1__10618_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10620_SHARP_,p2__10619_SHARP_){
return goog.dom.replaceNode(p2__10619_SHARP_,p1__10620_SHARP_);
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
var s__10622 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10622)))
{return null;
} else
{return s__10622;
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
var G__10629__10630 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10629__10630)
{var n__10631 = cljs.core.first.call(null,G__10629__10630);
var G__10629__10632 = G__10629__10630;
while(true){
goog.style.setStyle(n__10631,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10633 = cljs.core.next.call(null,G__10629__10632);
if(temp__3974__auto____10633)
{var G__10629__10634 = temp__3974__auto____10633;
{
var G__10635 = cljs.core.first.call(null,G__10629__10634);
var G__10636 = G__10629__10634;
n__10631 = G__10635;
G__10629__10632 = G__10636;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10637){
var content = cljs.core.first(arglist__10637);
var name = cljs.core.first(cljs.core.next(arglist__10637));
var value = cljs.core.rest(cljs.core.next(arglist__10637));
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
var G__10644__10645 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10644__10645)
{var n__10646 = cljs.core.first.call(null,G__10644__10645);
var G__10644__10647 = G__10644__10645;
while(true){
n__10646.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10648 = cljs.core.next.call(null,G__10644__10647);
if(temp__3974__auto____10648)
{var G__10644__10649 = temp__3974__auto____10648;
{
var G__10650 = cljs.core.first.call(null,G__10644__10649);
var G__10651 = G__10644__10649;
n__10646 = G__10650;
G__10644__10647 = G__10651;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10652){
var content = cljs.core.first(arglist__10652);
var name = cljs.core.first(cljs.core.next(arglist__10652));
var value = cljs.core.rest(cljs.core.next(arglist__10652));
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
var G__10659__10660 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10659__10660)
{var n__10661 = cljs.core.first.call(null,G__10659__10660);
var G__10659__10662 = G__10659__10660;
while(true){
n__10661.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10663 = cljs.core.next.call(null,G__10659__10662);
if(temp__3974__auto____10663)
{var G__10659__10664 = temp__3974__auto____10663;
{
var G__10665 = cljs.core.first.call(null,G__10659__10664);
var G__10666 = G__10659__10664;
n__10661 = G__10665;
G__10659__10662 = G__10666;
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
var vec__10672__10673 = pair.split(/\s*:\s*/);
var k__10674 = cljs.core.nth.call(null,vec__10672__10673,0,null);
var v__10675 = cljs.core.nth.call(null,vec__10672__10673,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10676 = k__10674;
if(cljs.core.truth_(and__3822__auto____10676))
{return v__10675;
} else
{return and__3822__auto____10676;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10674.toLowerCase()),v__10675);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10679 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10679))
{return domina.parse_style_attributes.call(null,style__10679);
} else
{if(cljs.core.truth_(style__10679.cssText))
{return domina.parse_style_attributes.call(null,style__10679.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10685 = domina.single_node.call(null,content);
var attrs__10686 = node__10685.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10677_SHARP_){
var attr__10687 = attrs__10686.item(p1__10677_SHARP_);
var value__10688 = attr__10687.nodeValue;
if((function (){var and__3822__auto____10689 = cljs.core.not_EQ_.call(null,null,value__10688);
if(and__3822__auto____10689)
{return cljs.core.not_EQ_.call(null,"",value__10688);
} else
{return and__3822__auto____10689;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10687.nodeName.toLowerCase())],[attr__10687.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10686.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10709__10710 = cljs.core.seq.call(null,styles);
if(G__10709__10710)
{var G__10712__10714 = cljs.core.first.call(null,G__10709__10710);
var vec__10713__10715 = G__10712__10714;
var name__10716 = cljs.core.nth.call(null,vec__10713__10715,0,null);
var value__10717 = cljs.core.nth.call(null,vec__10713__10715,1,null);
var G__10709__10718 = G__10709__10710;
var G__10712__10719 = G__10712__10714;
var G__10709__10720 = G__10709__10718;
while(true){
var vec__10721__10722 = G__10712__10719;
var name__10723 = cljs.core.nth.call(null,vec__10721__10722,0,null);
var value__10724 = cljs.core.nth.call(null,vec__10721__10722,1,null);
var G__10709__10725 = G__10709__10720;
domina.set_style_BANG_.call(null,content,name__10723,value__10724);
var temp__3974__auto____10726 = cljs.core.next.call(null,G__10709__10725);
if(temp__3974__auto____10726)
{var G__10709__10727 = temp__3974__auto____10726;
{
var G__10728 = cljs.core.first.call(null,G__10709__10727);
var G__10729 = G__10709__10727;
G__10712__10719 = G__10728;
G__10709__10720 = G__10729;
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
var G__10749__10750 = cljs.core.seq.call(null,attrs);
if(G__10749__10750)
{var G__10752__10754 = cljs.core.first.call(null,G__10749__10750);
var vec__10753__10755 = G__10752__10754;
var name__10756 = cljs.core.nth.call(null,vec__10753__10755,0,null);
var value__10757 = cljs.core.nth.call(null,vec__10753__10755,1,null);
var G__10749__10758 = G__10749__10750;
var G__10752__10759 = G__10752__10754;
var G__10749__10760 = G__10749__10758;
while(true){
var vec__10761__10762 = G__10752__10759;
var name__10763 = cljs.core.nth.call(null,vec__10761__10762,0,null);
var value__10764 = cljs.core.nth.call(null,vec__10761__10762,1,null);
var G__10749__10765 = G__10749__10760;
domina.set_attr_BANG_.call(null,content,name__10763,value__10764);
var temp__3974__auto____10766 = cljs.core.next.call(null,G__10749__10765);
if(temp__3974__auto____10766)
{var G__10749__10767 = temp__3974__auto____10766;
{
var G__10768 = cljs.core.first.call(null,G__10749__10767);
var G__10769 = G__10749__10767;
G__10752__10759 = G__10768;
G__10749__10760 = G__10769;
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
var G__10776__10777 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10776__10777)
{var node__10778 = cljs.core.first.call(null,G__10776__10777);
var G__10776__10779 = G__10776__10777;
while(true){
goog.dom.classes.add(node__10778,class$);
var temp__3974__auto____10780 = cljs.core.next.call(null,G__10776__10779);
if(temp__3974__auto____10780)
{var G__10776__10781 = temp__3974__auto____10780;
{
var G__10782 = cljs.core.first.call(null,G__10776__10781);
var G__10783 = G__10776__10781;
node__10778 = G__10782;
G__10776__10779 = G__10783;
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
var G__10790__10791 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10790__10791)
{var node__10792 = cljs.core.first.call(null,G__10790__10791);
var G__10790__10793 = G__10790__10791;
while(true){
goog.dom.classes.remove(node__10792,class$);
var temp__3974__auto____10794 = cljs.core.next.call(null,G__10790__10793);
if(temp__3974__auto____10794)
{var G__10790__10795 = temp__3974__auto____10794;
{
var G__10796 = cljs.core.first.call(null,G__10790__10795);
var G__10797 = G__10790__10795;
node__10792 = G__10796;
G__10790__10793 = G__10797;
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
var classes__10805 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10806__10807 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10806__10807)
{var node__10808 = cljs.core.first.call(null,G__10806__10807);
var G__10806__10809 = G__10806__10807;
while(true){
goog.dom.classes.set(node__10808,classes__10805);
var temp__3974__auto____10810 = cljs.core.next.call(null,G__10806__10809);
if(temp__3974__auto____10810)
{var G__10806__10811 = temp__3974__auto____10810;
{
var G__10812 = cljs.core.first.call(null,G__10806__10811);
var G__10813 = G__10806__10811;
node__10808 = G__10812;
G__10806__10809 = G__10813;
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
var G__10820__10821 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10820__10821)
{var node__10822 = cljs.core.first.call(null,G__10820__10821);
var G__10820__10823 = G__10820__10821;
while(true){
goog.dom.setTextContent(node__10822,value);
var temp__3974__auto____10824 = cljs.core.next.call(null,G__10820__10823);
if(temp__3974__auto____10824)
{var G__10820__10825 = temp__3974__auto____10824;
{
var G__10826 = cljs.core.first.call(null,G__10820__10825);
var G__10827 = G__10820__10825;
node__10822 = G__10826;
G__10820__10823 = G__10827;
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
var G__10834__10835 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10834__10835)
{var node__10836 = cljs.core.first.call(null,G__10834__10835);
var G__10834__10837 = G__10834__10835;
while(true){
goog.dom.forms.setValue(node__10836,value);
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
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___10858 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10859 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10860 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10861 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10860);
if(cljs.core.truth_((function (){var and__3822__auto____10862 = allows_inner_html_QMARK___10858;
if(and__3822__auto____10862)
{var and__3822__auto____10864 = (function (){var or__3824__auto____10863 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10863))
{return or__3824__auto____10863;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10859);
}
})();
if(cljs.core.truth_(and__3822__auto____10864))
{return !(special_tag_QMARK___10861);
} else
{return and__3822__auto____10864;
}
} else
{return and__3822__auto____10862;
}
})()))
{var value__10865 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10868__10869 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10868__10869)
{var node__10870 = cljs.core.first.call(null,G__10868__10869);
var G__10868__10871 = G__10868__10869;
while(true){
goog.events.removeAll(node__10870);
node__10870.innerHTML = value__10865;
var temp__3974__auto____10872 = cljs.core.next.call(null,G__10868__10871);
if(temp__3974__auto____10872)
{var G__10868__10873 = temp__3974__auto____10872;
{
var G__10874 = cljs.core.first.call(null,G__10868__10873);
var G__10875 = G__10868__10873;
node__10870 = G__10874;
G__10868__10871 = G__10875;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10866){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10866))
{var e__10867 = e10866;
domina.replace_children_BANG_.call(null,content,value__10865);
} else
{if("\uFDD0'else")
{throw e10866;
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
var m__10881 = domina.single_node.call(null,node).__domina_data;
var value__10882 = (cljs.core.truth_(m__10881)?cljs.core._lookup.call(null,m__10881,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10883 = bubble;
if(cljs.core.truth_(and__3822__auto____10883))
{return (value__10882 == null);
} else
{return and__3822__auto____10883;
}
})()))
{var temp__3974__auto____10884 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10884))
{var parent__10885 = temp__3974__auto____10884;
return get_data.call(null,parent__10885,key,true);
} else
{return null;
}
} else
{return value__10882;
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
var m__10891 = (function (){var or__3824__auto____10890 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10890))
{return or__3824__auto____10890;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10891,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10903 = domina.nodes.call(null,parent_content);
var children__10904 = domina.nodes.call(null,child_content);
var first_child__10912 = (function (){var frag__10905 = document.createDocumentFragment();
var G__10906__10907 = cljs.core.seq.call(null,children__10904);
if(G__10906__10907)
{var child__10908 = cljs.core.first.call(null,G__10906__10907);
var G__10906__10909 = G__10906__10907;
while(true){
frag__10905.appendChild(child__10908);
var temp__3974__auto____10910 = cljs.core.next.call(null,G__10906__10909);
if(temp__3974__auto____10910)
{var G__10906__10911 = temp__3974__auto____10910;
{
var G__10914 = cljs.core.first.call(null,G__10906__10911);
var G__10915 = G__10906__10911;
child__10908 = G__10914;
G__10906__10909 = G__10915;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10905;
})();
var other_children__10913 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10903) - 1),(function (){
return first_child__10912.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10903))
{f.call(null,cljs.core.first.call(null,parents__10903),first_child__10912);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10886_SHARP_,p2__10887_SHARP_){
return f.call(null,p1__10886_SHARP_,p2__10887_SHARP_);
}),cljs.core.rest.call(null,parents__10903),other_children__10913));
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
var and__3822__auto____10917 = obj;
if(cljs.core.truth_(and__3822__auto____10917))
{return obj.length;
} else
{return and__3822__auto____10917;
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
{if((function (){var G__10921__10922 = list_thing;
if(G__10921__10922)
{if((function (){var or__3824__auto____10923 = (G__10921__10922.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10923)
{return or__3824__auto____10923;
} else
{return G__10921__10922.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10921__10922.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10921__10922);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10921__10922);
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
{if((function (){var G__10924__10925 = content;
if(G__10924__10925)
{if((function (){var or__3824__auto____10926 = (G__10924__10925.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10926)
{return or__3824__auto____10926;
} else
{return G__10924__10925.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10924__10925.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10924__10925);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10924__10925);
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
{if((function (){var G__10927__10928 = content;
if(G__10927__10928)
{if((function (){var or__3824__auto____10929 = (G__10927__10928.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10929)
{return or__3824__auto____10929;
} else
{return G__10927__10928.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10927__10928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10927__10928);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10927__10928);
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
