(ns instruisto.plural-review
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
    (== drag-data drop-data (d/set-text! (d/by-id (.-id (.-element (.-dropTargetItem event)))) drag-data))
    (== drag-data drop-data (effects/drop-drop-correct (.-id (.-element (.-dragSourceItem event))) (.-id (.-element (.-dropTargetItem event)))) nil)))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-plural-review []
  (init-drag-drop "plural-review-malgrandajn-drag" "plural-review-malgrandajn-drop" "malgrandajn")
  (init-drag-drop "plural-review-bravaj-drag" "plural-review-bravaj-drop" "bravaj")
  (init-drag-drop "plural-review-rapidas-drag" "plural-review-rapidas-drop" "rapidas")
  (init-drag-drop "plural-review-katojn-drag" "plural-review-katojn-drop" "katojn"))