goog.provide('instruisto.suffix_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.suffix_review.highlight_remove_display = (function highlight_remove_display(event){
instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id);
domina.set_text_BANG_.call(null,domina.by_id.call(null,"suffix-review-title"),[cljs.core.str(domina.text.call(null,event.dragSourceItem.element)),cljs.core.str(" "),cljs.core.str(domina.text.call(null,event.dropTargetItem.element))].join(''));
domina.destroy_BANG_.call(null,event.dropTargetItem.element);
return domina.destroy_BANG_.call(null,event.dragSourceItem.element);
});
instruisto.suffix_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__6601 = event.dragSourceItem.data;
var drop_data__6602 = event.dropTargetItem.data;
var and__3822__auto____6603 = (drag_data__6601 === drop_data__6602);
if(and__3822__auto____6603)
{var and__3822__auto____6604 = (drop_data__6602 === instruisto.suffix_review.highlight_remove_display.call(null,event));
if(and__3822__auto____6604)
{return (instruisto.suffix_review.highlight_remove_display.call(null,event) === null);
} else
{return and__3822__auto____6604;
}
} else
{return and__3822__auto____6603;
}
});
instruisto.suffix_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6606 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6606.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6606,"dragover",instruisto.suffix_review.drag_drop_action);
return drag__6606.init();
});
instruisto.suffix_review.start_review = (function start_review(){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"suffix_def_ordered"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"suffix-start-link"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"suffix_def_random"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":""}));
});
instruisto.suffix_review.start_suffix_review = (function start_suffix_review(){
instruisto.suffix_review.init_drag_drop.call(null,"suffix-acx-drag","suffix-acx-drop","acx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ad-drag","suffix-ad-drop","ad");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ajx-drag","suffix-ajx-drop","ajx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-an-drag","suffix-an-drop","an");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ar-drag","suffix-ar-drop","ar");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ebl-drag","suffix-ebl-drop","ebl");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ec-drag","suffix-ec-drop","ec");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-eg-drag","suffix-eg-drop","eg");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ej-drag","suffix-ej-drop","ej");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-em-drag","suffix-em-drop","em");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-end-drag","suffix-end-drop","end");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-er-drag","suffix-er-drop","er");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-estr-drag","suffix-estr-drop","estr");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-et-drag","suffix-et-drop","et");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-id-drag","suffix-id-drop","id");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ig-drag","suffix-ig-drop","ig");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-igx-drag","suffix-igx-drop","igx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-il-drag","suffix-il-drop","il");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-in-drag","suffix-in-drop","in");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ind-drag","suffix-ind-drop","ind");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ing-drag","suffix-ing-drop","ing");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ism-drag","suffix-ism-drop","ism");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ist-drag","suffix-ist-drop","ist");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-obl-drag","suffix-obl-drop","obl");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-on-drag","suffix-on-drop","on");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-op-drag","suffix-op-drop","op");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-uj-drag","suffix-uj-drop","uj");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ul-drag","suffix-ul-drop","ul");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-um-drag","suffix-um-drop","um");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-cxj-drag","suffix-cxj-drop","cxj");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-nj-drag","suffix-nj-drop","nj");
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"suffix-start-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"suffix-start-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.suffix_review.start_review.call(null);
}));
});
