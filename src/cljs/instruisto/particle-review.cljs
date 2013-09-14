(ns instruisto.participle-review
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx.DragDrop :as _]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.events :as goog-events]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn drag-drop-action [event]
  (let [drag-data (.-data (.-dragSourceItem event)) drop-data (.-data (.-dropTargetItem event))]
    (== drag-data drop-data (d/set-text! (d/by-id "participle-trans") drag-data)) nil))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-participle-review []
  (init-drag-drop "participle-ant-end-drag" "participle-skrib-drop" "writing")
  (init-drag-drop "participle-int-end-drag" "participle-skrib-drop" "having written")
  (init-drag-drop "participle-ont-end-drag" "participle-skrib-drop" "going to write")
  (init-drag-drop "participle-at-end-drag" "participle-skrib-drop" "begin writen")
  (init-drag-drop "participle-it-end-drag" "participle-skrib-drop" "having been written")
  (init-drag-drop "participle-ot-end-drag" "participle-skrib-drop" "going to be written")
  (init-drag-drop "participle-ant-end-drag" "participle-konstru-drop" "building")
  (init-drag-drop "participle-int-end-drag" "participle-konstru-drop" "having built")
  (init-drag-drop "participle-ont-end-drag" "participle-konstru-drop" "going to build")
  (init-drag-drop "participle-at-end-drag" "participle-konstru-drop" "being built")
  (init-drag-drop "participle-it-end-drag" "participle-konstru-drop" "having been built")
  (init-drag-drop "participle-ot-end-drag" "participle-konstru-drop" "going to be built"))
