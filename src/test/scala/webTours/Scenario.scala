package webTours

import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._

object Scenario {
  def apply(): ScenarioBuilder = new Scenario().scn
}

class Scenario {
  val openGroup: ChainBuilder = group("Open main page") {
    exec(Actions.open1)
      .exec(Actions.open2)
      .exec(Actions.open3)
  }

  val loginGroup: ChainBuilder = group("Login") {
    exec(Actions.login1)
      .exec(Actions.login2)
      .exec(Actions.login3)
  }

  val flightsGroup: ChainBuilder = group("Flights") {
    exec(Actions.flights1)
      .exec(Actions.flights2)
      .exec(Actions.flights3)
  }

  val homeGroup: ChainBuilder = group("Go to home page") {
    exec(Actions.home1)
      .exec(Actions.home2)
      .exec(Actions.home3)
  }

  val scn: ScenarioBuilder = scenario("webTours")
    .exec(openGroup)
    .exec(loginGroup)
//    .exec(flightsGroup)
//    .exec(Actions.findFlights)
//    .exec(Actions.selectFlight)
//    .exec(Actions.payment)
//    .exec(homeGroup)

}
