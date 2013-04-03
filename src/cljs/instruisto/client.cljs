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
            [instruisto.prefix-review :as prefix-review]
            [instruisto.suffix :as suffix]
            [instruisto.suffix-review :as suffix-review]
            [instruisto.for-language-learner :as for-language-learner]
            [instruisto.for-programmer :as for-programmer]
            [instruisto.contact :as contact]
            [instruisto.pronoun :as pronoun]
            [instruisto.effects :as effects]))

(defn click-defaults [event elem]
  (events/stop-propagation event)
  (events/prevent-default event)
  (d/set-styles! (d/by-class "content-secton") {:display "none"})
  (d/set-style! elem :display "")
  (effects/fade-in-elem elem 1000))

(defn hide-sub-cats []
  (d/set-styles! (d/by-class "sub_cat") {:display "none"}))

(defn display-sub-cat [elem-id]
  (hide-sub-cats)
  (d/set-styles! (d/by-class elem-id) {:display ""}))

(defn ^:export main []
  (events/listen! (d/by-id "link-for-language-learner")
                  :click
                  (fn [event]
                    (click-defaults event (d/by-id "for-langauge-learner-section"))
                    (for-language-learner/start-for-language-learner)))
	(events/listen! (d/by-id "link-for-programmer")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "for-programmer-section"))
                   (for-programmer/start-for-programmer)))
 	(events/listen! (d/by-id "link-contact")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "contact-section"))
                   (contact/start-contact)))
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
 (events/listen! (d/by-id "link-prefix-review")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "prefix-review-section"))
                   (prefix-review/start-prefix-review)))
 (events/listen! (d/by-id "link-suffix")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "suffix-section"))
                   (suffix/start-suffix)))
 (events/listen! (d/by-id "link-suffix-review")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "suffix-review-section"))
                   (suffix-review/start-suffix-review)))
 (events/listen! (d/by-id "link-pronoun")
                 :click
                 (fn [event]
                   (click-defaults event (d/by-id "pronoun-section"))
                   (pronoun/start-pronoun))))