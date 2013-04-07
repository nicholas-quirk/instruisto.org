goog.provide('instruisto.plural');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
instruisto.plural.plural_map = cljs.core.ObjMap.fromObject(["\uFDD0'plural","\uFDD0'plural-adj","\uFDD0'plural-adj-obj"],{"\uFDD0'plural":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Plural ending -j","\uFDD0'body":"To make a word in Esperanto plural, you only need to add the ending -j. \r\n\r\nkato = cat, katoj = cats \r\n\r\nhundo = dog, hundoj = dogs","\uFDD0'next":"plural-adj"}),"\uFDD0'plural-adj":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Plural Adjectives","\uFDD0'body":"If there is an adjective associated with a noun, then the adjective must also take the plural ending. \r\n\r\ngrandaj katoj = big cats \r\n\r\naltaj hundoj = tall dogs","\uFDD0'next":"plural-adj-obj"}),"\uFDD0'plural-adj-obj":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'body","\uFDD0'next"],{"\uFDD0'title":"Plural Adjectives and Objects","\uFDD0'body":"Whenever a noun takes the object ending -n, so too must the adjective. For example, Mi amas liberan libron = I love a free book. As we have already learned plural nouns make their adjectives plural also. When this happens the -n still comes last. Thus, Mi amas liberajn librojn = I love free books.","\uFDD0'next":"plural"})});
instruisto.plural.load_next_section = (function load_next_section(m){
var entry_map__6579 = (((m == null))?cljs.core._lookup.call(null,instruisto.plural.plural_map,cljs.core.keyword.call(null,domina.attr.call(null,domina.by_id.call(null,"plural-link"),"title")),null):m);
var elem_title__6580 = domina.by_id.call(null,"plural-title");
var elem_body__6581 = domina.by_id.call(null,"plural-body");
var elem_link__6582 = domina.by_id.call(null,"plural-link");
domina.set_text_BANG_.call(null,elem_title__6580,(new cljs.core.Keyword("\uFDD0'title")).call(null,entry_map__6579));
domina.set_text_BANG_.call(null,elem_body__6581,(new cljs.core.Keyword("\uFDD0'body")).call(null,entry_map__6579));
return domina.set_attr_BANG_.call(null,elem_link__6582,"title",(new cljs.core.Keyword("\uFDD0'next")).call(null,entry_map__6579));
});
instruisto.plural.start_plural = (function start_plural(){
instruisto.plural.load_next_section.call(null,(new cljs.core.Keyword("\uFDD0'plural")).call(null,instruisto.plural.plural_map));
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"plural-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"plural-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.plural.load_next_section.call(null,null);
}));
});
