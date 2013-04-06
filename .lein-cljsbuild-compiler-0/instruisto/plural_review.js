goog.provide('instruisto.plural_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.plural_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__6570 = event.dragSourceItem.data;
var drop_data__6571 = event.dropTargetItem.data;
var and__3822__auto____6572 = (drag_data__6570 === drop_data__6571);
if(and__3822__auto____6572)
{(drop_data__6571 === domina.set_text_BANG_.call(null,domina.by_id.call(null,event.dropTargetItem.element.id),drag_data__6570));
} else
{and__3822__auto____6572;
}
var and__3822__auto____6573 = (drag_data__6570 === drop_data__6571);
if(and__3822__auto____6573)
{var and__3822__auto____6574 = (drop_data__6571 === instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id));
if(and__3822__auto____6574)
{return (instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id) === null);
} else
{return and__3822__auto____6574;
}
} else
{return and__3822__auto____6573;
}
});
instruisto.plural_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6576 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6576.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6576,"dragover",instruisto.plural_review.drag_drop_action);
return drag__6576.init();
});
instruisto.plural_review.start_plural_review = (function start_plural_review(){
instruisto.plural_review.init_drag_drop.call(null,"plural-review-malgrandajn-drag","plural-review-malgrandajn-drop","malgrandajn");
instruisto.plural_review.init_drag_drop.call(null,"plural-review-bravaj-drag","plural-review-bravaj-drop","bravaj");
instruisto.plural_review.init_drag_drop.call(null,"plural-review-rapidas-drag","plural-review-rapidas-drop","rapidas");
return instruisto.plural_review.init_drag_drop.call(null,"plural-review-katojn-drag","plural-review-katojn-drop","katojn");
});
