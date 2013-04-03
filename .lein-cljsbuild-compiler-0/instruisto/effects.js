goog.provide('instruisto.effects');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.net.XhrIo');
instruisto.effects.fade_out_elem = (function fade_out_elem(elem,ms){
return (new goog.fx.dom.FadeOut(elem,ms,null)).play();
});
instruisto.effects.fade_in_elem = (function fade_in_elem(elem,ms){
return (new goog.fx.dom.FadeIn(elem,ms,null)).play();
});
instruisto.effects.drop_drop_correct = (function drop_drop_correct(source_id,target_id){
domina.add_class_BANG_.call(null,domina.by_id.call(null,source_id),"highlight_correct");
return domina.add_class_BANG_.call(null,domina.by_id.call(null,target_id),"highlight_correct");
});
