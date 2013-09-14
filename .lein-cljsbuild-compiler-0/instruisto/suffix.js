goog.provide('instruisto.suffix');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
instruisto.suffix.suffix_map = cljs.core.ObjMap.fromObject(["\uFDD0'suffix"],{"\uFDD0'suffix":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Suffix System","\uFDD0'body":"The suffix system is the same as the prefix system, in that it transforms root words to other forms of the same word. There are roughly 4 times as many suffixes as prefixes. Just like the prefixes, the suffixes require mastery in order to fully understand Esperanto.","\uFDD0'next":""})});
instruisto.suffix.load_next_section = (function load_next_section(m){
var entry_map__6647 = (((m == null))?cljs.core._lookup.call(null,instruisto.suffix.suffix_map,cljs.core.keyword.call(null,domina.attr.call(null,domina.by_id.call(null,"suffix-link"),"title")),null):m);
var elem_title__6648 = domina.by_id.call(null,"suffix-title");
var elem_body__6649 = domina.by_id.call(null,"suffix-body");
var elem_link__6650 = domina.by_id.call(null,"suffix-link");
domina.set_text_BANG_.call(null,elem_title__6648,(new cljs.core.Keyword("\uFDD0'title")).call(null,entry_map__6647));
domina.set_text_BANG_.call(null,elem_body__6649,(new cljs.core.Keyword("\uFDD0'body")).call(null,entry_map__6647));
return domina.set_attr_BANG_.call(null,elem_link__6650,"title",(new cljs.core.Keyword("\uFDD0'next")).call(null,entry_map__6647));
});
instruisto.suffix.start_suffix = (function start_suffix(){
instruisto.suffix.load_next_section.call(null,(new cljs.core.Keyword("\uFDD0'suffix")).call(null,instruisto.suffix.suffix_map));
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"suffix-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"suffix-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.suffix.load_next_section.call(null,null);
}));
});
