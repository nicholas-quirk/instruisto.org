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
  ;(let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
  (run-jetty app {:port (Integer. port)}));)


;(ns instruisto.server
;  (:use compojure.core)
;  (:require [compojure.route :as route]
;            [compojure.handler :as handler]
;            [ring.util.response :as response]
;            [ring.adapter.jetty :as jetty]))
;
;(defn echo [request]
;  (let [name (read-string (slurp (:body request)))]
;    (pr-str name)))
;
;(defroutes app
;  (GET "/" [] (ring.util.response/file-response "index.html" {:root "public"}))
;  (route/resources "/" {:root "resources/public"}))
;
;(def application-routes app)
;
;(defn -main [port]
;  (jetty/run-jetty application-routes {:join? true :port (Integer. port)}))