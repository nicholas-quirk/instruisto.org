goog.provide('instruisto.introduction');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
instruisto.introduction.introduction_map = cljs.core.ObjMap.fromObject(["\uFDD0'what","\uFDD0'why","\uFDD0'who"],{"\uFDD0'what":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"What?","\uFDD0'body":"Esperanto is the most popular constructed international auxiliary language. It was created in 1887 by L. L. Zamenhof, a Polish doctor and linguist. The language is heavily influenced by Romance, Germanic and Slavic languages. If you already speak a European language then learning Esperanto is relatively easy. The language consists of regular verbs and a prefix/suffix system for word building. By knowing only a couple hundred root words and all the prefixes and suffixes, your vocabulary can increase by ten fold.","\uFDD0'next":"why"}),"\uFDD0'why":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Why?","\uFDD0'body":"Esperanto was created in a region of Poland where there were many languages spoken. Zamenhof understood that distrust and hatred between groups of people started with miscommunication. If people could all speak a common language, that was independent of any group or region, then all parties would be on equal grounds. Neither person communicating would be inferior to the other.","\uFDD0'next":"who"}),"\uFDD0'who":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Who?","\uFDD0'body":"Exact number of Esperanto speakers is unknown since the language has no homeland. Numbers show anywhere between 10,000 \u2013 2,000,000 L2 speakers. Regardless of the number of speakers, Esperanto is an active language with the World Congress of Esperanto held annually. There is a thriving community of Esperanto speakers producing music, books, pod-casts and websites around the language. Even if you don't become a fluent Esperanto speaker, learning the language will prime you when learning another foreign language.","\uFDD0'next":"what"})});
instruisto.introduction.load_next_section = (function load_next_section(m){
var entry_map__129233 = (((m == null))?cljs.core._lookup.call(null,instruisto.introduction.introduction_map,cljs.core.keyword.call(null,domina.attr.call(null,domina.by_id.call(null,"introduction-link"),"title")),null):m);
var elem_title__129234 = domina.by_id.call(null,"introduction-title");
var elem_body__129235 = domina.by_id.call(null,"introduction-body");
var elem_link__129236 = domina.by_id.call(null,"introduction-link");
domina.set_text_BANG_.call(null,elem_title__129234,(new cljs.core.Keyword("\uFDD0'title")).call(null,entry_map__129233));
domina.set_text_BANG_.call(null,elem_body__129235,(new cljs.core.Keyword("\uFDD0'body")).call(null,entry_map__129233));
return domina.set_attr_BANG_.call(null,elem_link__129236,"title",(new cljs.core.Keyword("\uFDD0'next")).call(null,entry_map__129233));
});
instruisto.introduction.start_introduction = (function start_introduction(){
instruisto.introduction.load_next_section.call(null,(new cljs.core.Keyword("\uFDD0'what")).call(null,instruisto.introduction.introduction_map));
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"introduction-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"introduction-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.introduction.load_next_section.call(null,null);
}));
});
