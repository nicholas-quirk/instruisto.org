(ns instruisto.server
  (:require [compojure.route :as route]
            [compojure.core :as compojure]
            [ring.util.response :as response]
            [ring.adapter.jetty :as jetty]))

(defn echo [request]
  (let [name (read-string (slurp (:body request)))]
    (pr-str name)))

(compojure/defroutes app
  (route/resources "/"))

(defn -main [port]
;  (models/initialize)
  ;(let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
  (jetty/run-jetty app {:port (Integer. port)}));)

;(defn -main []
;  (jetty/run-jetty app {:join? true :port 5000}))
