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
  (init-correlative-toggle (d/by-id "correlative-nenio"))
  (init-correlative-toggle (d/by-id "correlative-kiu"))
  (init-correlative-toggle (d/by-id "correlative-tiu"))
  (init-correlative-toggle (d/by-id "correlative-iu"))
  (init-correlative-toggle (d/by-id "correlative-cxiu"))
  (init-correlative-toggle (d/by-id "correlative-neniu"))
  (init-correlative-toggle (d/by-id "correlative-kia"))
  (init-correlative-toggle (d/by-id "correlative-tia"))
  (init-correlative-toggle (d/by-id "correlative-ia"))
  (init-correlative-toggle (d/by-id "correlative-cxia"))
  (init-correlative-toggle (d/by-id "correlative-nenia"))
  (init-correlative-toggle (d/by-id "correlative-kiel"))
  (init-correlative-toggle (d/by-id "correlative-tiel"))
  (init-correlative-toggle (d/by-id "correlative-iel"))
  (init-correlative-toggle (d/by-id "correlative-cxiel"))
  (init-correlative-toggle (d/by-id "correlative-neniel"))
  (init-correlative-toggle (d/by-id "correlative-kie"))
  (init-correlative-toggle (d/by-id "correlative-tie"))
  (init-correlative-toggle (d/by-id "correlative-ie"))
  (init-correlative-toggle (d/by-id "correlative-cxie"))
  (init-correlative-toggle (d/by-id "correlative-nenie"))
  (init-correlative-toggle (d/by-id "correlative-kiam"))
  (init-correlative-toggle (d/by-id "correlative-tiam"))
  (init-correlative-toggle (d/by-id "correlative-iam"))
  (init-correlative-toggle (d/by-id "correlative-cxiam"))
  (init-correlative-toggle (d/by-id "correlative-neniam"))
  (init-correlative-toggle (d/by-id "correlative-kiom"))
  (init-correlative-toggle (d/by-id "correlative-tiom"))
  (init-correlative-toggle (d/by-id "correlative-iom"))
  (init-correlative-toggle (d/by-id "correlative-cxiom"))
  (init-correlative-toggle (d/by-id "correlative-neniom"))
  (init-correlative-toggle (d/by-id "correlative-kial"))
  (init-correlative-toggle (d/by-id "correlative-tial"))
  (init-correlative-toggle (d/by-id "correlative-ial"))
  (init-correlative-toggle (d/by-id "correlative-cxial"))
  (init-correlative-toggle (d/by-id "correlative-nenial"))
  (init-correlative-toggle (d/by-id "correlative-kies"))
  (init-correlative-toggle (d/by-id "correlative-ties"))
  (init-correlative-toggle (d/by-id "correlative-ies"))
  (init-correlative-toggle (d/by-id "correlative-cxies"))
  (init-correlative-toggle (d/by-id "correlative-nenies")))
