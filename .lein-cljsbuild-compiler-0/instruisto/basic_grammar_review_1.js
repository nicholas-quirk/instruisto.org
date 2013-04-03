goog.provide('instruisto.basic_grammar_review_1');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.basic_grammar_review_1.drag_drop_action = (function drag_drop_action(event){
var drag_data__6473 = event.dragSourceItem.data;
var drop_data__6474 = event.dropTargetItem.data;
var and__3822__auto____6475 = (drag_data__6473 === drop_data__6474);
if(and__3822__auto____6475)
{var and__3822__auto____6476 = (drop_data__6474 === instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id));
if(and__3822__auto____6476)
{return (instruisto.effects.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id) === null);
} else
{return and__3822__auto____6476;
}
} else
{return and__3822__auto____6475;
}
});
instruisto.basic_grammar_review_1.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6478 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6478.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6478,"dragover",instruisto.basic_grammar_review_1.drag_drop_action);
return drag__6478.init();
});
instruisto.basic_grammar_review_1.start_basic_grammar_review = (function start_basic_grammar_review(){
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-noun-drag","bgr-noun-drop","noun");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-adj-drag","bgr-adj-drop","adj");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-adverb-drag","bgr-adverb-drop","adverb");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-infinitive-drag","bgr-verb-infinitive-drop","verb-infinitive");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-past-drag","bgr-verb-past-drop","verb-past");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-present-drag","bgr-verb-present-drop","verb-present");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-future-drag","bgr-verb-future-drop","verb-future");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-conditional-drag","bgr-verb-conditional-drop","verb-conditional");
instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-object-drag","bgr-object-drop","object");
return instruisto.basic_grammar_review_1.init_drag_drop.call(null,"bgr-verb-imperative-drag","bgr-verb-imperative-drop","verb-imperative");
});
