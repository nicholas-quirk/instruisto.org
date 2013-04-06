goog.provide('instruisto.correlative');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
instruisto.correlative.init_correlative_toggle = (function init_correlative_toggle(elem){
return domina.events.listen_BANG_.call(null,elem,"\uFDD0'click",(function (event){
var display__22715 = [cljs.core.str(domina.text.call(null,elem))].join('');
var hidden__22716 = [cljs.core.str(domina.attr.call(null,elem,"headers"))].join('');
instruisto.effects.fade_out_elem.call(null,elem,500);
domina.set_text_BANG_.call(null,elem,[cljs.core.str(hidden__22716)].join(''));
domina.set_attr_BANG_.call(null,elem,"headers",[cljs.core.str(display__22715)].join(''));
return instruisto.effects.fade_in_elem.call(null,elem,500);
}));
});
instruisto.correlative.start_correlative = (function start_correlative(){
instruisto.correlative.init_correlative_toggle.call(null,domina.by_id.call(null,"correlative-kio"));
instruisto.correlative.init_correlative_toggle.call(null,domina.by_id.call(null,"correlative-tio"));
instruisto.correlative.init_correlative_toggle.call(null,domina.by_id.call(null,"correlative-io"));
instruisto.correlative.init_correlative_toggle.call(null,domina.by_id.call(null,"correlative-cxio"));
return instruisto.correlative.init_correlative_toggle.call(null,domina.by_id.call(null,"correlative-nenio"));
});
