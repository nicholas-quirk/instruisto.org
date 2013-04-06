goog.provide('instruisto.preposition');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.preposition.highlight_remove_display = (function highlight_remove_display(event){
instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id);
domina.set_text_BANG_.call(null,domina.by_id.call(null,"preposition-review-title"),[cljs.core.str(domina.text.call(null,event.dragSourceItem.element)),cljs.core.str(" -> "),cljs.core.str(domina.text.call(null,event.dropTargetItem.element))].join(''));
domina.destroy_BANG_.call(null,event.dropTargetItem.element);
return domina.destroy_BANG_.call(null,event.dragSourceItem.element);
});
instruisto.preposition.drag_drop_action = (function drag_drop_action(event){
var drag_data__34503 = event.dragSourceItem.data;
var drop_data__34504 = event.dropTargetItem.data;
var and__3822__auto____34505 = (drag_data__34503 === drop_data__34504);
if(and__3822__auto____34505)
{var and__3822__auto____34506 = (drop_data__34504 === instruisto.preposition.highlight_remove_display.call(null,event));
if(and__3822__auto____34506)
{return (instruisto.preposition.highlight_remove_display.call(null,event) === null);
} else
{return and__3822__auto____34506;
}
} else
{return and__3822__auto____34505;
}
});
instruisto.preposition.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__34508 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__34508.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__34508,"dragover",instruisto.preposition.drag_drop_action);
return drag__34508.init();
});
instruisto.preposition.start_review = (function start_review(){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"preposition_def_ordered"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"preposition-start-link"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"preposition_def_random"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":""}));
});
instruisto.preposition.start_preposition = (function start_preposition(){
instruisto.preposition.init_drag_drop.call(null,"preposition-al-drag","preposition-al-drop","al");
instruisto.preposition.init_drag_drop.call(null,"preposition-anstataux-drag","preposition-anstataux-drop","anstataux");
instruisto.preposition.init_drag_drop.call(null,"preposition-antaux-drag","preposition-antaux-drop","antaux");
instruisto.preposition.init_drag_drop.call(null,"preposition-apud-drag","preposition-apud-drop","apud");
instruisto.preposition.init_drag_drop.call(null,"preposition-cxe-drag","preposition-cxe-drop","cxe");
instruisto.preposition.init_drag_drop.call(null,"preposition-cxirkaux-drag","preposition-cxirkaux-drop","cxirkaux");
instruisto.preposition.init_drag_drop.call(null,"preposition-da-drag","preposition-da-drop","da");
instruisto.preposition.init_drag_drop.call(null,"preposition-de-drag","preposition-de-drop","de");
instruisto.preposition.init_drag_drop.call(null,"preposition-dum-drag","preposition-dum-drop","dum");
instruisto.preposition.init_drag_drop.call(null,"preposition-ekster-drag","preposition-ekster-drop","ekster");
instruisto.preposition.init_drag_drop.call(null,"preposition-el-drag","preposition-el-drop","el");
instruisto.preposition.init_drag_drop.call(null,"preposition-en-drag","preposition-en-drop","en");
instruisto.preposition.init_drag_drop.call(null,"preposition-gxis-drag","preposition-gxis-drop","gxis");
instruisto.preposition.init_drag_drop.call(null,"preposition-inter-drag","preposition-inter-drop","inter");
instruisto.preposition.init_drag_drop.call(null,"preposition-je-drag","preposition-je-drop","je");
instruisto.preposition.init_drag_drop.call(null,"preposition-kontraux-drag","preposition-kontraux-drop","kontraux");
instruisto.preposition.init_drag_drop.call(null,"preposition-krom-drag","preposition-krom-drop","krom");
instruisto.preposition.init_drag_drop.call(null,"preposition-kun-drag","preposition-kun-drop","kun");
instruisto.preposition.init_drag_drop.call(null,"preposition-laux-drag","preposition-laux-drop","laux");
instruisto.preposition.init_drag_drop.call(null,"preposition-malgraux-drag","preposition-malgraux-drop","malgraux");
instruisto.preposition.init_drag_drop.call(null,"preposition-per-drag","preposition-per-drop","per");
instruisto.preposition.init_drag_drop.call(null,"preposition-por-drag","preposition-por-drop","por");
instruisto.preposition.init_drag_drop.call(null,"preposition-po-drag","preposition-po-drop","po");
instruisto.preposition.init_drag_drop.call(null,"preposition-post-drag","preposition-post-drop","post");
instruisto.preposition.init_drag_drop.call(null,"preposition-preter-drag","preposition-preter-drop","preter");
instruisto.preposition.init_drag_drop.call(null,"preposition-pri-drag","preposition-pri-drop","pri");
instruisto.preposition.init_drag_drop.call(null,"preposition-pro-drag","preposition-pro-drop","pro");
instruisto.preposition.init_drag_drop.call(null,"preposition-sen-drag","preposition-sen-drop","sen");
instruisto.preposition.init_drag_drop.call(null,"preposition-sub-drag","preposition-sub-drop","sub");
instruisto.preposition.init_drag_drop.call(null,"preposition-super-drag","preposition-super-drop","super");
instruisto.preposition.init_drag_drop.call(null,"preposition-sur-drag","preposition-sur-drop","sur");
instruisto.preposition.init_drag_drop.call(null,"preposition-tra-drag","preposition-tra-drop","tra");
instruisto.preposition.init_drag_drop.call(null,"preposition-trans-drag","preposition-trans-drop","trans");
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"preposition-start-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"preposition-start-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.preposition.start_review.call(null);
}));
});
