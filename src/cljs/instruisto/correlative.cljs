(ns instruisto.correlative
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn init-correlative-toggle [elem]
  (events/listen! elem
                  :click 
                  (fn [event] 
                    (let [display (str (d/text elem)) 
                          hidden (str (d/attr elem "headers"))]
                      (effects/fade-out-elem elem 500)
                      (d/set-text! elem (str hidden))
                      (d/set-attr! elem "headers" (str display))
                      (effects/fade-in-elem elem 500)))))

(defn start-correlative []
  (init-correlative-toggle (d/by-id "correlative-kio"))
  (init-correlative-toggle (d/by-id "correlative-tio"))
  (init-correlative-toggle (d/by-id "correlative-io"))
  (init-correlative-toggle (d/by-id "correlative-cxio"))
  (init-correlative-toggle (d/by-id "correlative-nenio")))
