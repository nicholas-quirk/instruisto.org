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
var opt_wrapper__10563 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10564 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10565 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10564,"caption":table_section_wrapper__10564,"optgroup":opt_wrapper__10563,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10565,"thead":table_section_wrapper__10564,"th":cell_wrapper__10565,"option":opt_wrapper__10563,"tbody":table_section_wrapper__10564,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10564});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10578 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10582 = (((function (){var and__3822__auto____10579 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10579)
{return no_tbody_QMARK___10578;
} else
{return and__3822__auto____10579;
}
})())?(function (){var and__3822__auto____10580 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10580))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10580;
}
})():(((function (){var and__3822__auto____10581 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10581)
{return no_tbody_QMARK___10578;
} else
{return and__3822__auto____10581;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10583__10584 = cljs.core.seq.call(null,tbody__10582);
if(G__10583__10584)
{var child__10585 = cljs.core.first.call(null,G__10583__10584);
var G__10583__10586 = G__10583__10584;
while(true){
if((function (){var and__3822__auto____10587 = cljs.core._EQ_.call(null,child__10585.nodeName,"tbody");
if(and__3822__auto____10587)
{return cljs.core._EQ_.call(null,child__10585.childNodes.length,0);
} else
{return and__3822__auto____10587;
}
})())
{child__10585.parentNode.removeChild(child__10585);
} else
{}
var temp__3974__auto____10588 = cljs.core.next.call(null,G__10583__10586);
if(temp__3974__auto____10588)
{var G__10583__10589 = temp__3974__auto____10588;
{
var G__10590 = cljs.core.first.call(null,G__10583__10589);
var G__10591 = G__10583__10589;
child__10585 = G__10590;
G__10583__10586 = G__10591;
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
var html__10605 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10606 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10605)))].join('').toLowerCase();
var vec__10604__10607 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10606,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10608 = cljs.core.nth.call(null,vec__10604__10607,0,null);
var start_wrap__10609 = cljs.core.nth.call(null,vec__10604__10607,1,null);
var end_wrap__10610 = cljs.core.nth.call(null,vec__10604__10607,2,null);
var div__10614 = (function (){var wrapper__10612 = (function (){var div__10611 = document.createElement("div");
div__10611.innerHTML = [cljs.core.str(start_wrap__10609),cljs.core.str(html__10605),cljs.core.str(end_wrap__10610)].join('');
return div__10611;
})();
var level__10613 = depth__10608;
while(true){
if((level__10613 > 0))
{{
var G__10616 = wrapper__10612.lastChild;
var G__10617 = (level__10613 - 1);
wrapper__10612 = G__10616;
level__10613 = G__10617;
continue;
}
} else
{return wrapper__10612;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10614,html__10605);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10615 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10615)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10605);
} else
{return and__3822__auto____10615;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10614,html__10605);
} else
{}
return div__10614.childNodes;
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
if((function (){var and__3822__auto____10621 = content;
if(and__3822__auto____10621)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10621;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10622 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10622)
{return or__3824__auto____10622;
} else
{var or__3824__auto____10623 = (domina.nodes["_"]);
if(or__3824__auto____10623)
{return or__3824__auto____10623;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10627 = nodeseq;
if(and__3822__auto____10627)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10627;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10628 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10628)
{return or__3824__auto____10628;
} else
{var or__3824__auto____10629 = (domina.single_node["_"]);
if(or__3824__auto____10629)
{return or__3824__auto____10629;
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
if(cljs.core.truth_((function (){var and__3822__auto____10631 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10631))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10631;
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
log_debug.cljs$lang$applyTo = (function (arglist__10632){
var mesg = cljs.core.seq(arglist__10632);;
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
log.cljs$lang$applyTo = (function (arglist__10633){
var mesg = cljs.core.seq(arglist__10633);;
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
if((void 0 === domina.t10641))
{
/**
* @constructor
*/
domina.t10641 = (function (class_name,by_class,meta10642){
this.class_name = class_name;
this.by_class = by_class;
this.meta10642 = meta10642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10641.cljs$lang$type = true;
domina.t10641.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10641");
});
domina.t10641.prototype.domina$DomContent$ = true;
domina.t10641.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10644 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10644.class_name)));
});
domina.t10641.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10645 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10645.class_name)));
});
domina.t10641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10643){
var this__10646 = this;
return this__10646.meta10642;
});
domina.t10641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10643,meta10642){
var this__10647 = this;
return (new domina.t10641(this__10647.class_name,this__10647.by_class,meta10642));
});
domina.t10641;
} else
{}
return (new domina.t10641(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__10648_SHARP_){
return p1__10648_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__10649_SHARP_,p2__10650_SHARP_){
return goog.dom.insertChildAt(p1__10649_SHARP_,p2__10650_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__10652_SHARP_,p2__10651_SHARP_){
return goog.dom.insertSiblingBefore(p2__10651_SHARP_,p1__10652_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10654_SHARP_,p2__10653_SHARP_){
return goog.dom.insertSiblingAfter(p2__10653_SHARP_,p1__10654_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10656_SHARP_,p2__10655_SHARP_){
return goog.dom.replaceNode(p2__10655_SHARP_,p1__10656_SHARP_);
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
var s__10658 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10658)))
{return null;
} else
{return s__10658;
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
var G__10665__10666 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10665__10666)
{var n__10667 = cljs.core.first.call(null,G__10665__10666);
var G__10665__10668 = G__10665__10666;
while(true){
goog.style.setStyle(n__10667,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10669 = cljs.core.next.call(null,G__10665__10668);
if(temp__3974__auto____10669)
{var G__10665__10670 = temp__3974__auto____10669;
{
var G__10671 = cljs.core.first.call(null,G__10665__10670);
var G__10672 = G__10665__10670;
n__10667 = G__10671;
G__10665__10668 = G__10672;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10673){
var content = cljs.core.first(arglist__10673);
var name = cljs.core.first(cljs.core.next(arglist__10673));
var value = cljs.core.rest(cljs.core.next(arglist__10673));
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
var G__10680__10681 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10680__10681)
{var n__10682 = cljs.core.first.call(null,G__10680__10681);
var G__10680__10683 = G__10680__10681;
while(true){
n__10682.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10684 = cljs.core.next.call(null,G__10680__10683);
if(temp__3974__auto____10684)
{var G__10680__10685 = temp__3974__auto____10684;
{
var G__10686 = cljs.core.first.call(null,G__10680__10685);
var G__10687 = G__10680__10685;
n__10682 = G__10686;
G__10680__10683 = G__10687;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10688){
var content = cljs.core.first(arglist__10688);
var name = cljs.core.first(cljs.core.next(arglist__10688));
var value = cljs.core.rest(cljs.core.next(arglist__10688));
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
var G__10695__10696 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10695__10696)
{var n__10697 = cljs.core.first.call(null,G__10695__10696);
var G__10695__10698 = G__10695__10696;
while(true){
n__10697.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10699 = cljs.core.next.call(null,G__10695__10698);
if(temp__3974__auto____10699)
{var G__10695__10700 = temp__3974__auto____10699;
{
var G__10701 = cljs.core.first.call(null,G__10695__10700);
var G__10702 = G__10695__10700;
n__10697 = G__10701;
G__10695__10698 = G__10702;
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
var vec__10708__10709 = pair.split(/\s*:\s*/);
var k__10710 = cljs.core.nth.call(null,vec__10708__10709,0,null);
var v__10711 = cljs.core.nth.call(null,vec__10708__10709,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10712 = k__10710;
if(cljs.core.truth_(and__3822__auto____10712))
{return v__10711;
} else
{return and__3822__auto____10712;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10710.toLowerCase()),v__10711);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10715 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10715))
{return domina.parse_style_attributes.call(null,style__10715);
} else
{if(cljs.core.truth_(style__10715.cssText))
{return domina.parse_style_attributes.call(null,style__10715.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10721 = domina.single_node.call(null,content);
var attrs__10722 = node__10721.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10713_SHARP_){
var attr__10723 = attrs__10722.item(p1__10713_SHARP_);
var value__10724 = attr__10723.nodeValue;
if((function (){var and__3822__auto____10725 = cljs.core.not_EQ_.call(null,null,value__10724);
if(and__3822__auto____10725)
{return cljs.core.not_EQ_.call(null,"",value__10724);
} else
{return and__3822__auto____10725;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10723.nodeName.toLowerCase())],[attr__10723.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10722.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10745__10746 = cljs.core.seq.call(null,styles);
if(G__10745__10746)
{var G__10748__10750 = cljs.core.first.call(null,G__10745__10746);
var vec__10749__10751 = G__10748__10750;
var name__10752 = cljs.core.nth.call(null,vec__10749__10751,0,null);
var value__10753 = cljs.core.nth.call(null,vec__10749__10751,1,null);
var G__10745__10754 = G__10745__10746;
var G__10748__10755 = G__10748__10750;
var G__10745__10756 = G__10745__10754;
while(true){
var vec__10757__10758 = G__10748__10755;
var name__10759 = cljs.core.nth.call(null,vec__10757__10758,0,null);
var value__10760 = cljs.core.nth.call(null,vec__10757__10758,1,null);
var G__10745__10761 = G__10745__10756;
domina.set_style_BANG_.call(null,content,name__10759,value__10760);
var temp__3974__auto____10762 = cljs.core.next.call(null,G__10745__10761);
if(temp__3974__auto____10762)
{var G__10745__10763 = temp__3974__auto____10762;
{
var G__10764 = cljs.core.first.call(null,G__10745__10763);
var G__10765 = G__10745__10763;
G__10748__10755 = G__10764;
G__10745__10756 = G__10765;
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
var G__10785__10786 = cljs.core.seq.call(null,attrs);
if(G__10785__10786)
{var G__10788__10790 = cljs.core.first.call(null,G__10785__10786);
var vec__10789__10791 = G__10788__10790;
var name__10792 = cljs.core.nth.call(null,vec__10789__10791,0,null);
var value__10793 = cljs.core.nth.call(null,vec__10789__10791,1,null);
var G__10785__10794 = G__10785__10786;
var G__10788__10795 = G__10788__10790;
var G__10785__10796 = G__10785__10794;
while(true){
var vec__10797__10798 = G__10788__10795;
var name__10799 = cljs.core.nth.call(null,vec__10797__10798,0,null);
var value__10800 = cljs.core.nth.call(null,vec__10797__10798,1,null);
var G__10785__10801 = G__10785__10796;
domina.set_attr_BANG_.call(null,content,name__10799,value__10800);
var temp__3974__auto____10802 = cljs.core.next.call(null,G__10785__10801);
if(temp__3974__auto____10802)
{var G__10785__10803 = temp__3974__auto____10802;
{
var G__10804 = cljs.core.first.call(null,G__10785__10803);
var G__10805 = G__10785__10803;
G__10788__10795 = G__10804;
G__10785__10796 = G__10805;
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
var G__10812__10813 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10812__10813)
{var node__10814 = cljs.core.first.call(null,G__10812__10813);
var G__10812__10815 = G__10812__10813;
while(true){
goog.dom.classes.add(node__10814,class$);
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
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__10826__10827 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10826__10827)
{var node__10828 = cljs.core.first.call(null,G__10826__10827);
var G__10826__10829 = G__10826__10827;
while(true){
goog.dom.classes.remove(node__10828,class$);
var temp__3974__auto____10830 = cljs.core.next.call(null,G__10826__10829);
if(temp__3974__auto____10830)
{var G__10826__10831 = temp__3974__auto____10830;
{
var G__10832 = cljs.core.first.call(null,G__10826__10831);
var G__10833 = G__10826__10831;
node__10828 = G__10832;
G__10826__10829 = G__10833;
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
var classes__10841 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10842__10843 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10842__10843)
{var node__10844 = cljs.core.first.call(null,G__10842__10843);
var G__10842__10845 = G__10842__10843;
while(true){
goog.dom.classes.set(node__10844,classes__10841);
var temp__3974__auto____10846 = cljs.core.next.call(null,G__10842__10845);
if(temp__3974__auto____10846)
{var G__10842__10847 = temp__3974__auto____10846;
{
var G__10848 = cljs.core.first.call(null,G__10842__10847);
var G__10849 = G__10842__10847;
node__10844 = G__10848;
G__10842__10845 = G__10849;
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
var G__10856__10857 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10856__10857)
{var node__10858 = cljs.core.first.call(null,G__10856__10857);
var G__10856__10859 = G__10856__10857;
while(true){
goog.dom.setTextContent(node__10858,value);
var temp__3974__auto____10860 = cljs.core.next.call(null,G__10856__10859);
if(temp__3974__auto____10860)
{var G__10856__10861 = temp__3974__auto____10860;
{
var G__10862 = cljs.core.first.call(null,G__10856__10861);
var G__10863 = G__10856__10861;
node__10858 = G__10862;
G__10856__10859 = G__10863;
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
var G__10870__10871 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10870__10871)
{var node__10872 = cljs.core.first.call(null,G__10870__10871);
var G__10870__10873 = G__10870__10871;
while(true){
goog.dom.forms.setValue(node__10872,value);
var temp__3974__auto____10874 = cljs.core.next.call(null,G__10870__10873);
if(temp__3974__auto____10874)
{var G__10870__10875 = temp__3974__auto____10874;
{
var G__10876 = cljs.core.first.call(null,G__10870__10875);
var G__10877 = G__10870__10875;
node__10872 = G__10876;
G__10870__10873 = G__10877;
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
var allows_inner_html_QMARK___10894 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10895 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10896 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10897 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10896);
if(cljs.core.truth_((function (){var and__3822__auto____10898 = allows_inner_html_QMARK___10894;
if(and__3822__auto____10898)
{var and__3822__auto____10900 = (function (){var or__3824__auto____10899 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10899))
{return or__3824__auto____10899;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10895);
}
})();
if(cljs.core.truth_(and__3822__auto____10900))
{return !(special_tag_QMARK___10897);
} else
{return and__3822__auto____10900;
}
} else
{return and__3822__auto____10898;
}
})()))
{var value__10901 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10904__10905 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10904__10905)
{var node__10906 = cljs.core.first.call(null,G__10904__10905);
var G__10904__10907 = G__10904__10905;
while(true){
goog.events.removeAll(node__10906);
node__10906.innerHTML = value__10901;
var temp__3974__auto____10908 = cljs.core.next.call(null,G__10904__10907);
if(temp__3974__auto____10908)
{var G__10904__10909 = temp__3974__auto____10908;
{
var G__10910 = cljs.core.first.call(null,G__10904__10909);
var G__10911 = G__10904__10909;
node__10906 = G__10910;
G__10904__10907 = G__10911;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10902){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10902))
{var e__10903 = e10902;
domina.replace_children_BANG_.call(null,content,value__10901);
} else
{if("\uFDD0'else")
{throw e10902;
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
var m__10917 = domina.single_node.call(null,node).__domina_data;
var value__10918 = (cljs.core.truth_(m__10917)?cljs.core._lookup.call(null,m__10917,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10919 = bubble;
if(cljs.core.truth_(and__3822__auto____10919))
{return (value__10918 == null);
} else
{return and__3822__auto____10919;
}
})()))
{var temp__3974__auto____10920 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10920))
{var parent__10921 = temp__3974__auto____10920;
return get_data.call(null,parent__10921,key,true);
} else
{return null;
}
} else
{return value__10918;
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
var m__10927 = (function (){var or__3824__auto____10926 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10926))
{return or__3824__auto____10926;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10927,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10939 = domina.nodes.call(null,parent_content);
var children__10940 = domina.nodes.call(null,child_content);
var first_child__10948 = (function (){var frag__10941 = document.createDocumentFragment();
var G__10942__10943 = cljs.core.seq.call(null,children__10940);
if(G__10942__10943)
{var child__10944 = cljs.core.first.call(null,G__10942__10943);
var G__10942__10945 = G__10942__10943;
while(true){
frag__10941.appendChild(child__10944);
var temp__3974__auto____10946 = cljs.core.next.call(null,G__10942__10945);
if(temp__3974__auto____10946)
{var G__10942__10947 = temp__3974__auto____10946;
{
var G__10950 = cljs.core.first.call(null,G__10942__10947);
var G__10951 = G__10942__10947;
child__10944 = G__10950;
G__10942__10945 = G__10951;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10941;
})();
var other_children__10949 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10939) - 1),(function (){
return first_child__10948.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10939))
{f.call(null,cljs.core.first.call(null,parents__10939),first_child__10948);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10922_SHARP_,p2__10923_SHARP_){
return f.call(null,p1__10922_SHARP_,p2__10923_SHARP_);
}),cljs.core.rest.call(null,parents__10939),other_children__10949));
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
var and__3822__auto____10953 = obj;
if(cljs.core.truth_(and__3822__auto____10953))
{return obj.length;
} else
{return and__3822__auto____10953;
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
{if((function (){var G__10957__10958 = list_thing;
if(G__10957__10958)
{if((function (){var or__3824__auto____10959 = (G__10957__10958.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10959)
{return or__3824__auto____10959;
} else
{return G__10957__10958.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10957__10958.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10957__10958);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10957__10958);
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
{if((function (){var G__10960__10961 = content;
if(G__10960__10961)
{if((function (){var or__3824__auto____10962 = (G__10960__10961.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10962)
{return or__3824__auto____10962;
} else
{return G__10960__10961.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10960__10961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10960__10961);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10960__10961);
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
{if((function (){var G__10963__10964 = content;
if(G__10963__10964)
{if((function (){var or__3824__auto____10965 = (G__10963__10964.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10965)
{return or__3824__auto____10965;
} else
{return G__10963__10964.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10963__10964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10963__10964);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10963__10964);
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
