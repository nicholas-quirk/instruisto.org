(ns instruisto.basic-grammar-review-2
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx.DragDrop :as _]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.events :as goog-events]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn drop-drop-correct [source-id target-id]
  (d/add-class! (d/by-id source-id) "highlight_correct")
  (d/add-class! (d/by-id target-id) "highlight_correct"))

(defn drag-drop-action [event]
  (let [drag-data (.-data (.-dragSourceItem event)) drop-data (.-data (.-dropTargetItem event))]
    (== drag-data drop-data (d/set-text! (d/by-id "bgr-trans") drag-data)) nil))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-basic-grammar-review []
  (init-drag-drop "bgr-noun-end-drag" "bgr-skrib-drop" "writing")
  (init-drag-drop "bgr-noun-end-drag" "bgr-interes-drop" "interest")
  (init-drag-drop "bgr-noun-end-drag" "bgr-kompren-drop" "understand")
  (init-drag-drop "bgr-adj-end-drag" "bgr-skrib-drop" "written")
  (init-drag-drop "bgr-adj-end-drag" "bgr-interes-drop" "interesting")
  (init-drag-drop "bgr-adj-end-drag" "bgr-kompren-drop" "understanding")
  (init-drag-drop "bgr-verb-end-drag" "bgr-skrib-drop" "to write")
  (init-drag-drop "bgr-verb-end-drag" "bgr-interes-drop" "to interest")
  (init-drag-drop "bgr-verb-end-drag" "bgr-kompren-drop" "to understand")
  (init-drag-drop "bgr-adverb-end-drag" "bgr-skrib-drop" "in writing")
  (init-drag-drop "bgr-adverb-end-drag" "bgr-interes-drop" "interestingly")
  (init-drag-drop "bgr-adverb-end-drag" "bgr-kompren-drop" "understandingly"))