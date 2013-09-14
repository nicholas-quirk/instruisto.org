goog.provide('instruisto.participle_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.participle_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__6570 = event.dragSourceItem.data;
var drop_data__6571 = event.dropTargetItem.data;
var and__3822__auto____6572 = (drag_data__6570 === drop_data__6571);
if(and__3822__auto____6572)
{(drop_data__6571 === domina.set_text_BANG_.call(null,domina.by_id.call(null,"participle-trans"),drag_data__6570));
} else
{and__3822__auto____6572;
}
return null;
});
instruisto.participle_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6574 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6574.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6574,"dragover",instruisto.participle_review.drag_drop_action);
return drag__6574.init();
});
instruisto.participle_review.start_participle_review = (function start_participle_review(){
instruisto.participle_review.init_drag_drop.call(null,"participle-ant-end-drag","participle-skrib-drop","writing");
instruisto.participle_review.init_drag_drop.call(null,"participle-int-end-drag","participle-skrib-drop","having written");
instruisto.participle_review.init_drag_drop.call(null,"participle-ont-end-drag","participle-skrib-drop","going to write");
instruisto.participle_review.init_drag_drop.call(null,"participle-at-end-drag","participle-skrib-drop","begin writen");
instruisto.participle_review.init_drag_drop.call(null,"participle-it-end-drag","participle-skrib-drop","having been written");
instruisto.participle_review.init_drag_drop.call(null,"participle-ot-end-drag","participle-skrib-drop","going to be written");
instruisto.participle_review.init_drag_drop.call(null,"participle-ant-end-drag","participle-konstru-drop","building");
instruisto.participle_review.init_drag_drop.call(null,"participle-int-end-drag","participle-konstru-drop","having built");
instruisto.participle_review.init_drag_drop.call(null,"participle-ont-end-drag","participle-konstru-drop","going to build");
instruisto.participle_review.init_drag_drop.call(null,"participle-at-end-drag","participle-konstru-drop","being built");
instruisto.participle_review.init_drag_drop.call(null,"participle-it-end-drag","participle-konstru-drop","having been built");
return instruisto.participle_review.init_drag_drop.call(null,"participle-ot-end-drag","participle-konstru-drop","going to be built");
});
