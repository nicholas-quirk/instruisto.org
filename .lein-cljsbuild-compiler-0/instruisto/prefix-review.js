goog.provide('instruisto.prefix_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.prefix_review.drop_drop_correct = (function drop_drop_correct(source_id,target_id){
domina.add_class_BANG_.call(null,domina.by_id.call(null,source_id),"highlight_correct");
return domina.add_class_BANG_.call(null,domina.by_id.call(null,target_id),"highlight_correct");
});
instruisto.prefix_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__6563 = event.dragSourceItem.data;
var drop_data__6564 = event.dropTargetItem.data;
var and__3822__auto____6565 = (drag_data__6563 === drop_data__6564);
if(and__3822__auto____6565)
{var and__3822__auto____6566 = (drop_data__6564 === instruisto.prefix_review.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id));
if(and__3822__auto____6566)
{return (instruisto.prefix_review.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id) === null);
} else
{return and__3822__auto____6566;
}
} else
{return and__3822__auto____6565;
}
});
instruisto.prefix_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6568 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6568.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6568,"dragover",instruisto.prefix_review.drag_drop_action);
return drag__6568.init();
});
instruisto.prefix_review.start_prefix_review = (function start_prefix_review(){
instruisto.prefix_review.init_drag_drop.call(null,"prefix-bo-drag","prefix-bo-drop","bo");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-dis-drag","prefix-dis-drop","dis");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-ek-drag","prefix-ek-drop","ek");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-eks-drag","prefix-eks-drop","eks");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-fi-drag","prefix-fi-drop","fi");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-ge-drag","prefix-ge-drop","ge");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-mal-drag","prefix-mal-drop","mal");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-mis-drag","prefix-mis-drop","mis");
instruisto.prefix_review.init_drag_drop.call(null,"prefix-pra-drag","prefix-pra-drop","pra");
return instruisto.prefix_review.init_drag_drop.call(null,"prefix-re-drag","prefix-re-drop","re");
});
