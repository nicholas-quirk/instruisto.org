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
var drag_data__6562 = event.dragSourceItem.data;
var drop_data__6563 = event.dropTargetItem.data;
var and__3822__auto____6564 = (drag_data__6562 === drop_data__6563);
if(and__3822__auto____6564)
{(drop_data__6563 === domina.set_text_BANG_.call(null,domina.by_id.call(null,event.dropTargetItem.element.id),drag_data__6562));
} else
{and__3822__auto____6564;
}
var and__3822__auto____6565 = (drag_data__6562 === drop_data__6563);
if(and__3822__auto____6565)
{var and__3822__auto____6566 = (drop_data__6563 === instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id));
if(and__3822__auto____6566)
{return (instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id) === null);
} else
{return and__3822__auto____6566;
}
} else
{return and__3822__auto____6565;
}
});
instruisto.plural_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6568 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6568.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6568,"dragover",instruisto.plural_review.drag_drop_action);
return drag__6568.init();
});
instruisto.plural_review.start_plural_review = (function start_plural_review(){
instruisto.plural_review.init_drag_drop.call(null,"plural-review-malgrandajn-drag","plural-review-malgrandajn-drop","malgrandajn");
instruisto.plural_review.init_drag_drop.call(null,"plural-review-bravaj-drag","plural-review-bravaj-drop","bravaj");
instruisto.plural_review.init_drag_drop.call(null,"plural-review-rapidas-drag","plural-review-rapidas-drop","rapidas");
return instruisto.plural_review.init_drag_drop.call(null,"plural-review-katojn-drag","plural-review-katojn-drop","katojn");
});
