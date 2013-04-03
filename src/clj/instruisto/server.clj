(ns instruisto.server
  (:use compojure.core
        ring.util.response
        ring.adapter.jetty
        instruisto.routes
        ring.middleware.params)
  (:require [compojure.handler :as handler]
            [compojure.response :as response]))

(def app (-> main-routes wrap-params))

(defn -main [port]
  (run-jetty app {:port (Integer. port)}))