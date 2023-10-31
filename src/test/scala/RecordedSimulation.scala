
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

  private val httpProtocol = http
    .baseUrl("http://webtours.load-test.ru:1080")
    .inferHtmlResources()
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7")
    .upgradeInsecureRequestsHeader("1")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36")
  
  private val headers_0 = Map(
  		"Cache-Control" -> "max-age=0",
  		"If-Modified-Since" -> "Mon, 27 May 2013 12:20:22 GMT",
  		"If-None-Match" -> """"900000001a214-16e-4ddb22c2e6d80"""",
  		"Proxy-Connection" -> "keep-alive"
  )
  
  private val headers_1 = Map("Proxy-Connection" -> "keep-alive")
  
  private val headers_3 = Map(
  		"Cache-Control" -> "max-age=0",
  		"Origin" -> "http://webtours.load-test.ru:1080",
  		"Proxy-Connection" -> "keep-alive"
  )


  private val scn = scenario("RecordedSimulation")
    .// Main page
    exec(
      http("request_0")
        .get("/webtours/")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get("/cgi-bin/welcome.pl?signOff=true")
            .headers(headers_1),
          http("request_2")
            .get("/cgi-bin/nav.pl?in=home")
            .headers(headers_1)
        )
    )
    .pause(19)
    // Login
    .exec(
      http("request_3")
        .post("/cgi-bin/login.pl")
        .headers(headers_3)
        .formParam("userSession", "137608.210206561HAHicccpDVcftctzQpDDDiHf")
        .formParam("username", "gevor")
        .formParam("password", "acba")
        .formParam("login.x", "49")
        .formParam("login.y", "12")
        .formParam("JSFormSubmit", "off")
        .resources(
          http("request_4")
            .get("/cgi-bin/login.pl?intro=true")
            .headers(headers_1),
          http("request_5")
            .get("/cgi-bin/nav.pl?page=menu&in=home")
            .headers(headers_1)
        )
    )
    .pause(25)
    // Flights
    .exec(
      http("request_6")
        .get("/cgi-bin/welcome.pl?page=search")
        .headers(headers_1)
        .resources(
          http("request_7")
            .get("/cgi-bin/nav.pl?page=menu&in=flights")
            .headers(headers_1),
          http("request_8")
            .get("/cgi-bin/reservations.pl?page=welcome")
            .headers(headers_1)
        )
    )
    .pause(96)
    // Find flights
    .exec(
      http("request_9")
        .post("/cgi-bin/reservations.pl")
        .headers(headers_3)
        .formParam("advanceDiscount", "0")
        .formParam("depart", "London")
        .formParam("departDate", "11/01/2023")
        .formParam("arrive", "Paris")
        .formParam("returnDate", "11/02/2023")
        .formParam("numPassengers", "1")
        .formParam("roundtrip", "on")
        .formParam("seatPref", "None")
        .formParam("seatType", "Coach")
        .formParam("findFlights.x", "40")
        .formParam("findFlights.y", "4")
        .formParam(".cgifields", "roundtrip")
        .formParam(".cgifields", "seatType")
        .formParam(".cgifields", "seatPref")
    )
    .pause(24)
    // Select flight
    .exec(
      http("request_10")
        .post("/cgi-bin/reservations.pl")
        .headers(headers_3)
        .formParam("outboundFlight", "240;108;11/01/2023")
        .formParam("returnFlight", "420;108;11/02/2023")
        .formParam("numPassengers", "1")
        .formParam("advanceDiscount", "0")
        .formParam("seatType", "Coach")
        .formParam("seatPref", "None")
        .formParam("reserveFlights.x", "47")
        .formParam("reserveFlights.y", "11")
    )
    .pause(16)
    // Payment
    .exec(
      http("request_11")
        .post("/cgi-bin/reservations.pl")
        .headers(headers_3)
        .formParam("firstName", "Gevorg")
        .formParam("lastName", "Kocharyan")
        .formParam("address1", "")
        .formParam("address2", "")
        .formParam("pass1", "Gevorg Kocharyan")
        .formParam("creditCard", "")
        .formParam("expDate", "")
        .formParam("oldCCOption", "")
        .formParam("numPassengers", "1")
        .formParam("seatType", "Coach")
        .formParam("seatPref", "None")
        .formParam("outboundFlight", "240;108;11/01/2023")
        .formParam("advanceDiscount", "0")
        .formParam("returnFlight", "420;108;11/02/2023")
        .formParam("JSFormSubmit", "off")
        .formParam("buyFlights.x", "62")
        .formParam("buyFlights.y", "8")
        .formParam(".cgifields", "saveCC")
    )
    .pause(41)
    // Home
    .exec(
      http("request_12")
        .get("/cgi-bin/welcome.pl?page=menus")
        .headers(headers_1)
        .resources(
          http("request_13")
            .get("/cgi-bin/nav.pl?page=menu&in=home")
            .headers(headers_1),
          http("request_14")
            .get("/cgi-bin/login.pl?intro=true")
            .headers(headers_1)
        )
    )

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
