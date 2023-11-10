package webTours

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder

object Actions {

  val open1: HttpRequestBuilder = http("open1")
    .get("/webtours/")

  val open2: HttpRequestBuilder = http("open2")
    .get("/cgi-bin/welcome.pl?signOff=true")

  val open3: HttpRequestBuilder = http("open3")
    .get("/cgi-bin/nav.pl?in=home")
    .check(regex("""name="userSession" value="(.+)"/>""").saveAs("userSession"))


  val login1: HttpRequestBuilder = http("login1")
    .post("/cgi-bin/login.pl")
    .formParam("userSession", "#{userSession}")
    .formParam("username", "gevor")
    .formParam("password", "acba")
    .formParam("login.x", "49")
    .formParam("login.y", "12")
    .formParam("JSFormSubmit", "off")

  val login2: HttpRequestBuilder = http("login2")
    .get("/cgi-bin/nav.pl")
    .queryParam("page", "menu")
    .queryParam("in", "home")

  val login3: HttpRequestBuilder = http("login3")
    .get("/cgi-bin/login.pl")
    .queryParam("intro", "true")


  val flights1: HttpRequestBuilder = http("flights1")
    .get("/cgi-bin/welcome.pl")
    .queryParam("page", "search")


  val flights2: HttpRequestBuilder = http("flights2")
    .get("/cgi-bin/nav.pl")
    .queryParam("page", "menu")
    .queryParam("in", "flights")

  val flights3: HttpRequestBuilder = http("flights3")
    .get("/cgi-bin/reservations.pl")
    .queryParam("page", "welcome")
    .check(
      regex("""<option value="([^"]+)""").findRandom.saveAs("departCity")
    )
    .check(
      regex("""<option value="([^"]+)""").findRandom.saveAs("arriveCity")
    )


  val findFlights: HttpRequestBuilder = http("Find flights")
    .post("/cgi-bin/reservations.pl")
    .formParam("advanceDiscount", "0")
    .formParam("depart", "#{departCity}")
    .formParam("departDate", "11/01/2023")
    .formParam("arrive", "#{arriveCity}")
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
    .check(regex("""name="outboundFlight" value="([^"]+)""").findRandom.saveAs("outboundFlight"))
    .check(regex("""name="returnFlight" value="([^"]+)""").findRandom.saveAs("returnFlight"))


  val selectFlight: HttpRequestBuilder = http("Select flight")
    .post("/cgi-bin/reservations.pl")
    .formParam("outboundFlight", "#{outboundFlight}")
    .formParam("returnFlight", "#{returnFlight}")
    .formParam("numPassengers", "1")
    .formParam("advanceDiscount", "0")
    .formParam("seatType", "Coach")
    .formParam("seatPref", "None")
    .formParam("reserveFlights.x", "47")
    .formParam("reserveFlights.y", "11")

  val payment: HttpRequestBuilder = http("Payment")
    .post("/cgi-bin/reservations.pl")
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
    .formParam("outboundFlight", "#{outboundFlight}")
    .formParam("advanceDiscount", "0")
    .formParam("returnFlight", "#{returnFlight}")
    .formParam("JSFormSubmit", "off")
    .formParam("buyFlights.x", "62")
    .formParam("buyFlights.y", "8")
    .formParam(".cgifields", "saveCC")


  val home1: HttpRequestBuilder = http("home1")
    .get("/cgi-bin/welcome.pl")
    .queryParam("page", "menus")


  val home2: HttpRequestBuilder = http("home2")
    .get("/cgi-bin/nav.pl")
    .queryParam("page", "menu")
    .queryParam("in", "home")

  val home3: HttpRequestBuilder = http("home3")
    .get("/cgi-bin/login.pl")
    .queryParam("intro", "true")

}
