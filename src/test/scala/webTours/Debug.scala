package webTours

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
class Debug extends Simulation{

  //setUp(Scenario().inject(atOnceUsers(1))).protocols(httpProtocol)
//  setUp(
//    Scenario().inject(
//        // интенсивность на ступень
//        incrementUsersPerSec(1)
//          // Количество ступеней
//          .times(5)
//          // Длительность полки
//          .eachLevelLasting(240)
//          // Длительность разгона
//          .separatedByRampsLasting(10)
//          // Начало нагрузки с
//          .startingFrom(0)
//      )
//  )
//    .protocols(httpProtocol)
//    .maxDuration(1850)

  setUp(
    Scenario().inject(

      rampUsers(4800) during (1 hour)
//      // разгон
//      rampUsersPerSec(0) to 2 during 5,
//      // полка
//      constantUsersPerSec(2) during 3600
    )
  )
    .protocols(httpProtocol)
    .maxDuration(3650)
}
