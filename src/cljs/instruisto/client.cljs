(ns instruisto.client
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.introduction :as introduction]
            [instruisto.alphabet :as alphabet]
            [instruisto.basic-grammar :as basic-grammar]
            [instruisto.basic-grammar-review-1 :as basic-grammar-review-1]
            [instruisto.basic-grammar-review-2 :as basic-grammar-review-2]
            [instruisto.plural :as plural]
            [instruisto.plural-review :as plural-review]
            [instruisto.prefix :as prefix]
            [instruisto.suffix :as suffix]
            [instruisto.effects :as effects]))

(defn click-defaults [event elem]
  (events/stop-propagation event)
  (events/prevent-default event)
  (d/set-styles! (d/by-class "content-secton") {:display "none"})
  (d/set-style! elem :display "")
  (effects/fade-in-elem elem 1000))

(defn hide-sub-cats []
  (d/set-styles! (d/by-class "sub_cat")  {:display "none"}))

(defn display-sub-cat [elem-id]
  (hide-sub-cats)
  (d/set-styles! (d/by-class elem-id)  {:display ""}))

(defn display-section-on-click [button-elem section start-func]
  (events/listen! button-elem
                :click
                (fn [event]
                  (click-defaults event section)
                  (start-func))))

(defn ^:export main []
  
  ;(display-section-on-click (d/by-id "link-introduction")
  ;                          (d/by-id "introduction-section")
  ;                          (introduction/start-introduction))
  
  ;(display-section-on-click (d/by-id "link-plural")
  ;                          (d/by-id "plural-section")
  ;                          (plural/start-plural))
  
  (events/listen! (d/by-id "link-introduction")
                  :click
                  (fn [event]
                    (click-defaults event (d/by-id "introduction-section"))
                    (introduction/start-introduction)))
  (events/listen! (d/by-id "link-alphabet")
                  :click
                  (fn [event]
                    (click-defaults event (d/by-id "alphabet-section"))
                    (alphabet/start-alphabet)))
  
  (events/listen! (d/by-id "link-basic-grammar-review")
                  :mouseover
                  (fn [event]
                    (display-sub-cat "link-basic-grammar-review")))
  
  (events/listen! (d/by-id "link-basic-grammar")
                  :click
                  (fn [event]
                    (click-defaults event (d/by-id "basic-grammar-section"))
                    (basic-grammar/start-basic-grammar)))
  (events/listen! (d/by-id "link-basic-grammar-review-1")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "basic-grammar-review-1-section"))
                  (basic-grammar-review-1/start-basic-grammar-review)))
  (events/listen! (d/by-id "link-basic-grammar-review-2")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "basic-grammar-review-2-section"))
                  (basic-grammar-review-2/start-basic-grammar-review)))
  (events/listen! (d/by-id "link-plural")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "plural-section"))
                  (plural/start-plural)))
  
   (events/listen! (d/by-id "link-plural-review")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "plural-review-section"))
                  (plural-review/start-plural-review)))
     (events/listen! (d/by-id "link-prefix")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "prefix-section"))
                  (prefix/start-prefix)))
     (events/listen! (d/by-id "link-suffix")
                :click
                (fn [event]
                  (click-defaults event (d/by-id "suffix-section"))
                  (suffix/start-suffix)))
   )