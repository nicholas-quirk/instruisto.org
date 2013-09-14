(ns instruisto.effects
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [domina :as d]
            [domina.events :as events]))

(defn fade-out-elem [elem ms]
  (. (fx-dom/FadeOut. elem ms nil) (play)))

(defn fade-in-elem [elem ms]
  (. (fx-dom/FadeIn. elem ms nil) (play)))

(defn drop-drop-correct [source-id target-id]
  (d/add-class! (d/by-id source-id) "highlight_correct")
  (d/add-class! (d/by-id target-id) "highlight_correct"))
