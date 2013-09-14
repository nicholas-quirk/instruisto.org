goog.provide('instruisto.client');
goog.require('cljs.core');
goog.require('instruisto.basic_grammar_review_1');
goog.require('instruisto.preposition');
goog.require('instruisto.reference');
goog.require('instruisto.contact');
goog.require('instruisto.basic_grammar_review_2');
goog.require('instruisto.introduction');
goog.require('domina.events');
goog.require('instruisto.alphabet');
goog.require('instruisto.prefix_review');
goog.require('instruisto.plural_review');
goog.require('instruisto.participle');
goog.require('instruisto.pronoun');
goog.require('instruisto.prefix');
goog.require('instruisto.participle_review');
goog.require('instruisto.basic_grammar');
goog.require('instruisto.question');
goog.require('instruisto.for_programmer');
goog.require('domina');
goog.require('instruisto.for_language_learner');
goog.require('instruisto.suffix_review');
goog.require('instruisto.effects');
goog.require('goog.net.XhrIo');
goog.require('instruisto.donate');
goog.require('instruisto.suffix');
goog.require('instruisto.plural');
goog.require('instruisto.correlative');
instruisto.client.click_defaults = (function click_defaults(event,elem){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
domina.set_styles_BANG_.call(null,domina.by_class.call(null,"content-secton"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
domina.set_style_BANG_.call(null,elem,"\uFDD0'display","");
return instruisto.effects.fade_in_elem.call(null,elem,1000);
});
instruisto.client.hide_sub_cats = (function hide_sub_cats(){
return domina.set_styles_BANG_.call(null,domina.by_class.call(null,"sub_cat"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
});
instruisto.client.display_sub_cat = (function display_sub_cat(elem_id){
instruisto.client.hide_sub_cats.call(null);
return domina.set_styles_BANG_.call(null,domina.by_class.call(null,elem_id),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":""}));
});
instruisto.client.main = (function main(){
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-for-language-learner"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"for-langauge-learner-section"));
return instruisto.for_language_learner.start_for_language_learner.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-for-programmer"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"for-programmer-section"));
return instruisto.for_programmer.start_for_programmer.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-contact"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"contact-section"));
return instruisto.contact.start_contact.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-donate"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"donate-section"));
return instruisto.donate.start_donate.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-introduction"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"introduction-section"));
return instruisto.introduction.start_introduction.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-alphabet"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"alphabet-section"));
return instruisto.alphabet.start_alphabet.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-basic-grammar-review"),"\uFDD0'mouseover",(function (event){
return instruisto.client.display_sub_cat.call(null,"link-basic-grammar-review");
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-basic-grammar"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"basic-grammar-section"));
return instruisto.basic_grammar.start_basic_grammar.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-basic-grammar-review-1"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"basic-grammar-review-1-section"));
return instruisto.basic_grammar_review_1.start_basic_grammar_review.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-basic-grammar-review-2"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"basic-grammar-review-2-section"));
return instruisto.basic_grammar_review_2.start_basic_grammar_review.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-plural"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"plural-section"));
return instruisto.plural.start_plural.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-plural-review"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"plural-review-section"));
return instruisto.plural_review.start_plural_review.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-prefix"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"prefix-section"));
return instruisto.prefix.start_prefix.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-prefix-review"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"prefix-review-section"));
return instruisto.prefix_review.start_prefix_review.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-suffix"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"suffix-section"));
return instruisto.suffix.start_suffix.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-suffix-review"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"suffix-review-section"));
return instruisto.suffix_review.start_suffix_review.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-pronoun"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"pronoun-section"));
return instruisto.pronoun.start_pronoun.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-question"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"question-section"));
return instruisto.question.start_question.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-correlative"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"correlative-section"));
return instruisto.correlative.start_correlative.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-preposition"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"preposition-section"));
return instruisto.preposition.start_preposition.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-participle"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"participle-section"));
return instruisto.participle.start_participle.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-participle-review"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"participle-review-section"));
return instruisto.participle_review.start_participle_review.call(null);
}));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link-reference"),"\uFDD0'click",(function (event){
instruisto.client.click_defaults.call(null,event,domina.by_id.call(null,"reference-section"));
return instruisto.reference.start_reference.call(null);
}));
});
goog.exportSymbol('instruisto.client.main', instruisto.client.main);
