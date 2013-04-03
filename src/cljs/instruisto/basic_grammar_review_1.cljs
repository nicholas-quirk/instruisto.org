(ns instruisto.basic-grammar-review-1
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
    (== drag-data drop-data (effects/drop-drop-correct (.-id (.-element (.-dragSourceItem event))) (.-id (.-element (.-dropTargetItem event)))) nil)))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-basic-grammar-review []
  (init-drag-drop "bgr-noun-drag" "bgr-noun-drop" "noun")
  (init-drag-drop "bgr-adj-drag" "bgr-adj-drop" "adj")
  (init-drag-drop "bgr-adverb-drag" "bgr-adverb-drop" "adverb")
  (init-drag-drop "bgr-verb-infinitive-drag" "bgr-verb-infinitive-drop" "verb-infinitive")
  (init-drag-drop "bgr-verb-past-drag" "bgr-verb-past-drop" "verb-past")
  (init-drag-drop "bgr-verb-present-drag" "bgr-verb-present-drop" "verb-present")
  (init-drag-drop "bgr-verb-future-drag" "bgr-verb-future-drop" "verb-future")
  (init-drag-drop "bgr-verb-conditional-drag" "bgr-verb-conditional-drop" "verb-conditional")
  (init-drag-drop "bgr-object-drag" "bgr-object-drop" "object")
  (init-drag-drop "bgr-verb-imperative-drag" "bgr-verb-imperative-drop" "verb-imperative"))