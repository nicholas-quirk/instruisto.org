goog.provide('instruisto.pronoun');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.pronoun.highlight_remove_display = (function highlight_remove_display(event){
instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id);
domina.set_text_BANG_.call(null,domina.by_id.call(null,"pronoun-title"),[cljs.core.str(domina.text.call(null,event.dragSourceItem.element)),cljs.core.str(" -> "),cljs.core.str(domina.text.call(null,event.dropTargetItem.element))].join(''));
domina.destroy_BANG_.call(null,event.dropTargetItem.element);
return domina.destroy_BANG_.call(null,event.dragSourceItem.element);
});
instruisto.pronoun.drag_drop_action = (function drag_drop_action(event){
var drag_data__6599 = event.dragSourceItem.data;
var drop_data__6600 = event.dropTargetItem.data;
var and__3822__auto____6601 = (drag_data__6599 === drop_data__6600);
if(and__3822__auto____6601)
{var and__3822__auto____6602 = (drop_data__6600 === instruisto.pronoun.highlight_remove_display.call(null,event));
if(and__3822__auto____6602)
{return (instruisto.pronoun.highlight_remove_display.call(null,event) === null);
} else
{return and__3822__auto____6602;
}
} else
{return and__3822__auto____6601;
}
});
instruisto.pronoun.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6604 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6604.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6604,"dragover",instruisto.pronoun.drag_drop_action);
return drag__6604.init();
});
instruisto.pronoun.start_review = (function start_review(){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"pronoun_def_ordered"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"pronoun-start-link"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":"none"}));
return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"pronoun_def_random"),cljs.core.ObjMap.fromObject(["\uFDD0'display"],{"\uFDD0'display":""}));
});
instruisto.pronoun.start_pronoun = (function start_pronoun(){
instruisto.pronoun.init_drag_drop.call(null,"pronoun-i-drag","pronoun-i-drop","i");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-you-drag","pronoun-you-drop","you");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-he-drag","pronoun-he-drop","he");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-she-drag","pronoun-she-drop","she");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-they-drag","pronoun-they-drop","they");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-it-drag","pronoun-it-drop","it");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-one-drag","pronoun-one-drop","one");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-my-drag","pronoun-my-drop","my");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-yours-drag","pronoun-yours-drop","yours");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-his-drag","pronoun-his-drop","his");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-hers-drag","pronoun-hers-drop","hers");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-their-drag","pronoun-their-drop","their");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-its-drag","pronoun-its-drop","its");
instruisto.pronoun.init_drag_drop.call(null,"pronoun-ones-drag","pronoun-ones-drop","ones");
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"pronoun-start-link"));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"pronoun-start-link"),"\uFDD0'click",(function (event){
domina.events.stop_propagation.call(null,event);
domina.events.prevent_default.call(null,event);
return instruisto.pronoun.start_review.call(null);
}));
});
