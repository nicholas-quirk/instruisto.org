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
