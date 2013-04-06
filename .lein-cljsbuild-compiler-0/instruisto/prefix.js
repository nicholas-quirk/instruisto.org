goog.provide('instruisto.prefix');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
instruisto.prefix.prefix_map = cljs.core.ObjMap.fromObject(["\uFDD0'prefix"],{"\uFDD0'prefix":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Prefix System","\uFDD0'body":"Remember the word malgrandajn in the plurals review section? Malgranda doesn't mean big and bad, mal is a prefix that negates a root word. Like in English where you might use un- to denote the opposite of something ie. tie or untie. The meat and potatoes of Esperanto are the prefix and suffix system it uses. By knowing one word, in this case granda which means large, with only the addition of mal-, malgranda means small. You may see the power of Esperanto is knowing a limited set of root words, but with added prefixes and suffixes your vocabulary can increased ten fold. Master these, and you'll have a considerable amount of Esperanto under your belt.","\uFDD0'next":""})});
instruisto.prefix.load_next_section = (function load_next_section(m){
var entry_map__6591 = (((m == null))?cljs.core._lookup.call(null,instruisto.prefix.prefix_map,cljs.core.keyword.call(null,domina.attr.call(null,domina.by_id.call(null,"prefix-link"),"title")),null):m);
var elem_title__6592 = domina.by_id.call(null,"prefix-title");
var elem_body__6593 = domina.by_id.call(null,"prefix-body");
var elem_link__6594 = domina.by_id.call(null,"prefix-link");
domina.set_text_BANG_.call(null,elem_title__6592,(new cljs.core.Keyword("\uFDD0'title")).call(null,entry_map__6591));
domina.set_text_BANG_.call(null,elem_body__6593,(new cljs.core.Keyword("\uFDD0'body")).call(null,entry_map__6591));
return domina.set_attr_BANG_.call(null,elem_link__6594,"title",(new cljs.core.Keyword("\uFDD0'next")).call(null,entry_map__6591));
});
instruisto.prefix.start_prefix = (function start_prefix(){
instruisto.prefix.load_next_section.call(null,(new cljs.core.Keyword("\uFDD0'prefix")).call(null,instruisto.prefix.prefix_map));
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"prefix-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"prefix-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.prefix.load_next_section.call(null,null);
}));
});
