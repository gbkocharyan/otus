package webTours

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class Debug extends Simulation{
  setUp(Scenario().inject(atOnceUsers(1))).protocols(httpProtocol)
}
