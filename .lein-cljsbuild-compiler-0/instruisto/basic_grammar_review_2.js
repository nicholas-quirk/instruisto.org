goog.provide('instruisto.basic_grammar_review_2');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.basic_grammar_review_2.drag_drop_action = (function drag_drop_action(event){
var drag_data__6482 = event.dragSourceItem.data;
var drop_data__6483 = event.dropTargetItem.data;
var and__3822__auto____6484 = (drag_data__6482 === drop_data__6483);
if(and__3822__auto____6484)
{(drop_data__6483 === domina.set_text_BANG_.call(null,domina.by_id.call(null,"bgr-trans"),drag_data__6482));
} else
{and__3822__auto____6484;
}
return null;
});
instruisto.basic_grammar_review_2.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6486 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6486.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6486,"dragover",instruisto.basic_grammar_review_2.drag_drop_action);
return drag__6486.init();
});
instruisto.basic_grammar_review_2.start_basic_grammar_review = (function start_basic_grammar_review(){
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-noun-end-drag","bgr-skrib-drop","writing");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-noun-end-drag","bgr-interes-drop","interest");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-noun-end-drag","bgr-kompren-drop","understand");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adj-end-drag","bgr-skrib-drop","written");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adj-end-drag","bgr-interes-drop","interesting");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adj-end-drag","bgr-kompren-drop","understanding");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-verb-end-drag","bgr-skrib-drop","to write");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-verb-end-drag","bgr-interes-drop","to interest");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-verb-end-drag","bgr-kompren-drop","to understand");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adverb-end-drag","bgr-skrib-drop","in writing");
instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adverb-end-drag","bgr-interes-drop","interestingly");
return instruisto.basic_grammar_review_2.init_drag_drop.call(null,"bgr-adverb-end-drag","bgr-kompren-drop","understandingly");
});
