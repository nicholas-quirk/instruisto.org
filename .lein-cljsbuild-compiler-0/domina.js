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
var opt_wrapper__10535 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10536 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10537 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10536,"caption":table_section_wrapper__10536,"optgroup":opt_wrapper__10535,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10537,"thead":table_section_wrapper__10536,"th":cell_wrapper__10537,"option":opt_wrapper__10535,"tbody":table_section_wrapper__10536,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10536});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10550 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__10554 = (((function (){var and__3822__auto____10551 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3822__auto____10551)
{return no_tbody_QMARK___10550;
} else
{return and__3822__auto____10551;
}
})())?(function (){var and__3822__auto____10552 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10552))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10552;
}
})():(((function (){var and__3822__auto____10553 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3822__auto____10553)
{return no_tbody_QMARK___10550;
} else
{return and__3822__auto____10553;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10555__10556 = cljs.core.seq.call(null,tbody__10554);
if(G__10555__10556)
{var child__10557 = cljs.core.first.call(null,G__10555__10556);
var G__10555__10558 = G__10555__10556;
while(true){
if((function (){var and__3822__auto____10559 = cljs.core._EQ_.call(null,child__10557.nodeName,"tbody");
if(and__3822__auto____10559)
{return cljs.core._EQ_.call(null,child__10557.childNodes.length,0);
} else
{return and__3822__auto____10559;
}
})())
{child__10557.parentNode.removeChild(child__10557);
} else
{}
var temp__3974__auto____10560 = cljs.core.next.call(null,G__10555__10558);
if(temp__3974__auto____10560)
{var G__10555__10561 = temp__3974__auto____10560;
{
var G__10562 = cljs.core.first.call(null,G__10555__10561);
var G__10563 = G__10555__10561;
child__10557 = G__10562;
G__10555__10558 = G__10563;
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
var html__10577 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10578 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__10577)))].join('').toLowerCase();
var vec__10576__10579 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__10578,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10580 = cljs.core.nth.call(null,vec__10576__10579,0,null);
var start_wrap__10581 = cljs.core.nth.call(null,vec__10576__10579,1,null);
var end_wrap__10582 = cljs.core.nth.call(null,vec__10576__10579,2,null);
var div__10586 = (function (){var wrapper__10584 = (function (){var div__10583 = document.createElement("div");
div__10583.innerHTML = [cljs.core.str(start_wrap__10581),cljs.core.str(html__10577),cljs.core.str(end_wrap__10582)].join('');
return div__10583;
})();
var level__10585 = depth__10580;
while(true){
if((level__10585 > 0))
{{
var G__10588 = wrapper__10584.lastChild;
var G__10589 = (level__10585 - 1);
wrapper__10584 = G__10588;
level__10585 = G__10589;
continue;
}
} else
{return wrapper__10584;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__10586,html__10577);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10587 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10587)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__10577);
} else
{return and__3822__auto____10587;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__10586,html__10577);
} else
{}
return div__10586.childNodes;
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
if((function (){var and__3822__auto____10593 = content;
if(and__3822__auto____10593)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10593;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3824__auto____10594 = (domina.nodes[goog.typeOf(content)]);
if(or__3824__auto____10594)
{return or__3824__auto____10594;
} else
{var or__3824__auto____10595 = (domina.nodes["_"]);
if(or__3824__auto____10595)
{return or__3824__auto____10595;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10599 = nodeseq;
if(and__3822__auto____10599)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10599;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3824__auto____10600 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3824__auto____10600)
{return or__3824__auto____10600;
} else
{var or__3824__auto____10601 = (domina.single_node["_"]);
if(or__3824__auto____10601)
{return or__3824__auto____10601;
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
if(cljs.core.truth_((function (){var and__3822__auto____10603 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10603))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____10603;
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
log_debug.cljs$lang$applyTo = (function (arglist__10604){
var mesg = cljs.core.seq(arglist__10604);;
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
log.cljs$lang$applyTo = (function (arglist__10605){
var mesg = cljs.core.seq(arglist__10605);;
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
if((void 0 === domina.t10613))
{
/**
* @constructor
*/
domina.t10613 = (function (class_name,by_class,meta10614){
this.class_name = class_name;
this.by_class = by_class;
this.meta10614 = meta10614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10613.cljs$lang$type = true;
domina.t10613.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"domina/t10613");
});
domina.t10613.prototype.domina$DomContent$ = true;
domina.t10613.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10616 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__10616.class_name)));
});
domina.t10613.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10617 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__10617.class_name)));
});
domina.t10613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10615){
var this__10618 = this;
return this__10618.meta10614;
});
domina.t10613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10615,meta10614){
var this__10619 = this;
return (new domina.t10613(this__10619.class_name,this__10619.by_class,meta10614));
});
domina.t10613;
} else
{}
return (new domina.t10613(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__10620_SHARP_){
return p1__10620_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__10621_SHARP_,p2__10622_SHARP_){
return goog.dom.insertChildAt(p1__10621_SHARP_,p2__10622_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__10624_SHARP_,p2__10623_SHARP_){
return goog.dom.insertSiblingBefore(p2__10623_SHARP_,p1__10624_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10626_SHARP_,p2__10625_SHARP_){
return goog.dom.insertSiblingAfter(p2__10625_SHARP_,p1__10626_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__10628_SHARP_,p2__10627_SHARP_){
return goog.dom.replaceNode(p2__10627_SHARP_,p1__10628_SHARP_);
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
var s__10630 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__10630)))
{return null;
} else
{return s__10630;
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
var G__10637__10638 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10637__10638)
{var n__10639 = cljs.core.first.call(null,G__10637__10638);
var G__10637__10640 = G__10637__10638;
while(true){
goog.style.setStyle(n__10639,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10641 = cljs.core.next.call(null,G__10637__10640);
if(temp__3974__auto____10641)
{var G__10637__10642 = temp__3974__auto____10641;
{
var G__10643 = cljs.core.first.call(null,G__10637__10642);
var G__10644 = G__10637__10642;
n__10639 = G__10643;
G__10637__10640 = G__10644;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10645){
var content = cljs.core.first(arglist__10645);
var name = cljs.core.first(cljs.core.next(arglist__10645));
var value = cljs.core.rest(cljs.core.next(arglist__10645));
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
var G__10652__10653 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10652__10653)
{var n__10654 = cljs.core.first.call(null,G__10652__10653);
var G__10652__10655 = G__10652__10653;
while(true){
n__10654.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3974__auto____10656 = cljs.core.next.call(null,G__10652__10655);
if(temp__3974__auto____10656)
{var G__10652__10657 = temp__3974__auto____10656;
{
var G__10658 = cljs.core.first.call(null,G__10652__10657);
var G__10659 = G__10652__10657;
n__10654 = G__10658;
G__10652__10655 = G__10659;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10660){
var content = cljs.core.first(arglist__10660);
var name = cljs.core.first(cljs.core.next(arglist__10660));
var value = cljs.core.rest(cljs.core.next(arglist__10660));
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
var G__10667__10668 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10667__10668)
{var n__10669 = cljs.core.first.call(null,G__10667__10668);
var G__10667__10670 = G__10667__10668;
while(true){
n__10669.removeAttribute(cljs.core.name.call(null,name));
var temp__3974__auto____10671 = cljs.core.next.call(null,G__10667__10670);
if(temp__3974__auto____10671)
{var G__10667__10672 = temp__3974__auto____10671;
{
var G__10673 = cljs.core.first.call(null,G__10667__10672);
var G__10674 = G__10667__10672;
n__10669 = G__10673;
G__10667__10670 = G__10674;
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
var vec__10680__10681 = pair.split(/\s*:\s*/);
var k__10682 = cljs.core.nth.call(null,vec__10680__10681,0,null);
var v__10683 = cljs.core.nth.call(null,vec__10680__10681,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____10684 = k__10682;
if(cljs.core.truth_(and__3822__auto____10684))
{return v__10683;
} else
{return and__3822__auto____10684;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__10682.toLowerCase()),v__10683);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__10687 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__10687))
{return domina.parse_style_attributes.call(null,style__10687);
} else
{if(cljs.core.truth_(style__10687.cssText))
{return domina.parse_style_attributes.call(null,style__10687.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__10693 = domina.single_node.call(null,content);
var attrs__10694 = node__10693.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10685_SHARP_){
var attr__10695 = attrs__10694.item(p1__10685_SHARP_);
var value__10696 = attr__10695.nodeValue;
if((function (){var and__3822__auto____10697 = cljs.core.not_EQ_.call(null,null,value__10696);
if(and__3822__auto____10697)
{return cljs.core.not_EQ_.call(null,"",value__10696);
} else
{return and__3822__auto____10697;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__10695.nodeName.toLowerCase())],[attr__10695.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__10694.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__10717__10718 = cljs.core.seq.call(null,styles);
if(G__10717__10718)
{var G__10720__10722 = cljs.core.first.call(null,G__10717__10718);
var vec__10721__10723 = G__10720__10722;
var name__10724 = cljs.core.nth.call(null,vec__10721__10723,0,null);
var value__10725 = cljs.core.nth.call(null,vec__10721__10723,1,null);
var G__10717__10726 = G__10717__10718;
var G__10720__10727 = G__10720__10722;
var G__10717__10728 = G__10717__10726;
while(true){
var vec__10729__10730 = G__10720__10727;
var name__10731 = cljs.core.nth.call(null,vec__10729__10730,0,null);
var value__10732 = cljs.core.nth.call(null,vec__10729__10730,1,null);
var G__10717__10733 = G__10717__10728;
domina.set_style_BANG_.call(null,content,name__10731,value__10732);
var temp__3974__auto____10734 = cljs.core.next.call(null,G__10717__10733);
if(temp__3974__auto____10734)
{var G__10717__10735 = temp__3974__auto____10734;
{
var G__10736 = cljs.core.first.call(null,G__10717__10735);
var G__10737 = G__10717__10735;
G__10720__10727 = G__10736;
G__10717__10728 = G__10737;
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
var G__10757__10758 = cljs.core.seq.call(null,attrs);
if(G__10757__10758)
{var G__10760__10762 = cljs.core.first.call(null,G__10757__10758);
var vec__10761__10763 = G__10760__10762;
var name__10764 = cljs.core.nth.call(null,vec__10761__10763,0,null);
var value__10765 = cljs.core.nth.call(null,vec__10761__10763,1,null);
var G__10757__10766 = G__10757__10758;
var G__10760__10767 = G__10760__10762;
var G__10757__10768 = G__10757__10766;
while(true){
var vec__10769__10770 = G__10760__10767;
var name__10771 = cljs.core.nth.call(null,vec__10769__10770,0,null);
var value__10772 = cljs.core.nth.call(null,vec__10769__10770,1,null);
var G__10757__10773 = G__10757__10768;
domina.set_attr_BANG_.call(null,content,name__10771,value__10772);
var temp__3974__auto____10774 = cljs.core.next.call(null,G__10757__10773);
if(temp__3974__auto____10774)
{var G__10757__10775 = temp__3974__auto____10774;
{
var G__10776 = cljs.core.first.call(null,G__10757__10775);
var G__10777 = G__10757__10775;
G__10760__10767 = G__10776;
G__10757__10768 = G__10777;
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
var G__10784__10785 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10784__10785)
{var node__10786 = cljs.core.first.call(null,G__10784__10785);
var G__10784__10787 = G__10784__10785;
while(true){
goog.dom.classes.add(node__10786,class$);
var temp__3974__auto____10788 = cljs.core.next.call(null,G__10784__10787);
if(temp__3974__auto____10788)
{var G__10784__10789 = temp__3974__auto____10788;
{
var G__10790 = cljs.core.first.call(null,G__10784__10789);
var G__10791 = G__10784__10789;
node__10786 = G__10790;
G__10784__10787 = G__10791;
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
var G__10798__10799 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10798__10799)
{var node__10800 = cljs.core.first.call(null,G__10798__10799);
var G__10798__10801 = G__10798__10799;
while(true){
goog.dom.classes.remove(node__10800,class$);
var temp__3974__auto____10802 = cljs.core.next.call(null,G__10798__10801);
if(temp__3974__auto____10802)
{var G__10798__10803 = temp__3974__auto____10802;
{
var G__10804 = cljs.core.first.call(null,G__10798__10803);
var G__10805 = G__10798__10803;
node__10800 = G__10804;
G__10798__10801 = G__10805;
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
var classes__10813 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__10814__10815 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10814__10815)
{var node__10816 = cljs.core.first.call(null,G__10814__10815);
var G__10814__10817 = G__10814__10815;
while(true){
goog.dom.classes.set(node__10816,classes__10813);
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
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__10828__10829 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10828__10829)
{var node__10830 = cljs.core.first.call(null,G__10828__10829);
var G__10828__10831 = G__10828__10829;
while(true){
goog.dom.setTextContent(node__10830,value);
var temp__3974__auto____10832 = cljs.core.next.call(null,G__10828__10831);
if(temp__3974__auto____10832)
{var G__10828__10833 = temp__3974__auto____10832;
{
var G__10834 = cljs.core.first.call(null,G__10828__10833);
var G__10835 = G__10828__10833;
node__10830 = G__10834;
G__10828__10831 = G__10835;
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
var G__10842__10843 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10842__10843)
{var node__10844 = cljs.core.first.call(null,G__10842__10843);
var G__10842__10845 = G__10842__10843;
while(true){
goog.dom.forms.setValue(node__10844,value);
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
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___10866 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___10867 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__10868 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___10869 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__10868);
if(cljs.core.truth_((function (){var and__3822__auto____10870 = allows_inner_html_QMARK___10866;
if(and__3822__auto____10870)
{var and__3822__auto____10872 = (function (){var or__3824__auto____10871 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____10871))
{return or__3824__auto____10871;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___10867);
}
})();
if(cljs.core.truth_(and__3822__auto____10872))
{return !(special_tag_QMARK___10869);
} else
{return and__3822__auto____10872;
}
} else
{return and__3822__auto____10870;
}
})()))
{var value__10873 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__10876__10877 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__10876__10877)
{var node__10878 = cljs.core.first.call(null,G__10876__10877);
var G__10876__10879 = G__10876__10877;
while(true){
goog.events.removeAll(node__10878);
node__10878.innerHTML = value__10873;
var temp__3974__auto____10880 = cljs.core.next.call(null,G__10876__10879);
if(temp__3974__auto____10880)
{var G__10876__10881 = temp__3974__auto____10880;
{
var G__10882 = cljs.core.first.call(null,G__10876__10881);
var G__10883 = G__10876__10881;
node__10878 = G__10882;
G__10876__10879 = G__10883;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e10874){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e10874))
{var e__10875 = e10874;
domina.replace_children_BANG_.call(null,content,value__10873);
} else
{if("\uFDD0'else")
{throw e10874;
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
var m__10889 = domina.single_node.call(null,node).__domina_data;
var value__10890 = (cljs.core.truth_(m__10889)?cljs.core._lookup.call(null,m__10889,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____10891 = bubble;
if(cljs.core.truth_(and__3822__auto____10891))
{return (value__10890 == null);
} else
{return and__3822__auto____10891;
}
})()))
{var temp__3974__auto____10892 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__3974__auto____10892))
{var parent__10893 = temp__3974__auto____10892;
return get_data.call(null,parent__10893,key,true);
} else
{return null;
}
} else
{return value__10890;
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
var m__10899 = (function (){var or__3824__auto____10898 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3824__auto____10898))
{return or__3824__auto____10898;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__10899,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__10911 = domina.nodes.call(null,parent_content);
var children__10912 = domina.nodes.call(null,child_content);
var first_child__10920 = (function (){var frag__10913 = document.createDocumentFragment();
var G__10914__10915 = cljs.core.seq.call(null,children__10912);
if(G__10914__10915)
{var child__10916 = cljs.core.first.call(null,G__10914__10915);
var G__10914__10917 = G__10914__10915;
while(true){
frag__10913.appendChild(child__10916);
var temp__3974__auto____10918 = cljs.core.next.call(null,G__10914__10917);
if(temp__3974__auto____10918)
{var G__10914__10919 = temp__3974__auto____10918;
{
var G__10922 = cljs.core.first.call(null,G__10914__10919);
var G__10923 = G__10914__10919;
child__10916 = G__10922;
G__10914__10917 = G__10923;
continue;
}
} else
{}
break;
}
} else
{}
return frag__10913;
})();
var other_children__10921 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__10911) - 1),(function (){
return first_child__10920.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__10911))
{f.call(null,cljs.core.first.call(null,parents__10911),first_child__10920);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10894_SHARP_,p2__10895_SHARP_){
return f.call(null,p1__10894_SHARP_,p2__10895_SHARP_);
}),cljs.core.rest.call(null,parents__10911),other_children__10921));
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
var and__3822__auto____10925 = obj;
if(cljs.core.truth_(and__3822__auto____10925))
{return obj.length;
} else
{return and__3822__auto____10925;
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
{if((function (){var G__10929__10930 = list_thing;
if(G__10929__10930)
{if((function (){var or__3824__auto____10931 = (G__10929__10930.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10931)
{return or__3824__auto____10931;
} else
{return G__10929__10930.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10929__10930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10929__10930);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10929__10930);
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
{if((function (){var G__10932__10933 = content;
if(G__10932__10933)
{if((function (){var or__3824__auto____10934 = (G__10932__10933.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10934)
{return or__3824__auto____10934;
} else
{return G__10932__10933.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10932__10933.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10932__10933);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10932__10933);
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
{if((function (){var G__10935__10936 = content;
if(G__10935__10936)
{if((function (){var or__3824__auto____10937 = (G__10935__10936.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____10937)
{return or__3824__auto____10937;
} else
{return G__10935__10936.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__10935__10936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10935__10936);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__10935__10936);
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
