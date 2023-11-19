// Creator: WebInspector 537.36

import { check, group } from 'k6'
import http from 'k6/http'
import { randomInt } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

const BASE_URL = 'http://webtours.load-test.ru:1080';

// Function to select a random option from the array
    function getRandomOption() {
        const randomIndex = randomInt(0, optionsArray.length - 1);
        return optionsArray[randomIndex];
    }

export const options = {}

export default function main() {
    const mainPage1 = http.get(`${BASE_URL}/webtours/`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Host: 'webtours.load-test.ru:1080',
        'If-Modified-Since': 'Mon, 27 May 2013 12:20:22 GMT',
        'If-None-Match': '"900000001a214-16e-4ddb22c2e6d80"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const mainPage2 = http.get(`${BASE_URL}/cgi-bin/welcome.pl?signOff=true`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/webtours/',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const mainPage3 = http.get(`${BASE_URL}/cgi-bin/nav.pl?in=home`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/welcome.pl?signOff=true',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })
    const userSession = mainPage3.html().find('input[name=userSession]').first().attr('value')

    const login1 = http.post(
      `${BASE_URL}/cgi-bin/login.pl`,
      {
        userSession: '${userSession}',
        username: 'gevor',
        password: 'acba',
        'login.x': '77',
        'login.y': '8',
        JSFormSubmit: 'off',
      },
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
//          Cookie: 'MSO=SID&1700379924',
          Host: 'webtours.load-test.ru:1080',
          Origin: 'http://webtours.load-test.ru:1080',
          Referer: 'http://webtours.load-test.ru:1080/cgi-bin/nav.pl?in=home',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        },
      }
    )

    const login2 = http.get(`${BASE_URL}/cgi-bin/nav.pl?page=menu&in=home`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
//        Cookie:
//          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/login.pl',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const login3 = http.get(`${BASE_URL}/cgi-bin/login.pl?intro=true`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
//        Cookie:
//          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/login.pl',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })


    const flights1 = http.get(`${BASE_URL}/cgi-bin/welcome.pl?page=search`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
//        Cookie:
//          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/nav.pl?page=menu&in=home',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const flights2 = http.get(`${BASE_URL}/cgi-bin/nav.pl?page=menu&in=flights`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
//        Cookie:
//          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/welcome.pl?page=search',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const flights3 = http.get(`${BASE_URL}/cgi-bin/reservations.pl?page=welcome`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
//        Cookie:
//          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/welcome.pl?page=search',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })
    // Function to extract cities from select elements
        function getCities() {
            const cities = [];
                const select = flights3.html().find('select[name="depart"]');
                const options = select.find('option');

                options.each(function (_, option) {
                    const city = option.getAttribute('value');
                    if (city) {
                        cities.push(city);
                    }
                });

            return cities;
        }
    const cities = getCities();
    const randomIndex = Math.floor(Math.random() * (cities.length-1))
    const departureCity = cities[randomIndex];
    const arrivalCity = cities[randomIndex + 1];


    const findFlights = http.post(
      `${BASE_URL}/cgi-bin/reservations.pl`,
      'advanceDiscount=0&depart=${departureCity}&departDate=11%2F20%2F2023&arrive=${arrivalCity}&returnDate=11%2F21%2F2023&numPassengers=1&roundtrip=on&seatPref=None&seatType=Coach&findFlights.x=47&findFlights.y=8&.cgifields=roundtrip%2CseatType%2CseatPref',
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
//          Cookie:
//            'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
          Host: 'webtours.load-test.ru:1080',
          Origin: 'http://webtours.load-test.ru:1080',
          Referer: 'http://webtours.load-test.ru:1080/cgi-bin/reservations.pl?page=welcome',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        },
      }
    )

    function getFlights(selectOption) {
                const flights = [];
                    const input = findFlights.html().find('input[name="${selectOption}"]');

                    input.each(function (_, input) {
                        const flight = input.getAttribute('value');
                        if (flight) {
                            flights.push(flight);
                        }
                    });

                return flights;
            }

    const outboundFlights = [];
    findFlights.html().find('input[name="outboundFlight"]').each(function (_, input) {
        const flight = input.getAttribute('value');
        if (flight) {
            outboundFlights.push(flight);
        }
    });
    const randomFlightIndex = Math.floor(Math.random() * outboundFlights.length)
    const outboundFlight = outboundFlights[randomFlightIndex];
    const returnFlights = [];
        findFlights.html().find('input[name="returnFlight"]').each(function (_, input) {
            const flight = input.getAttribute('value');
            if (flight) {
                returnFlights.push(flight);
            }
        });
    const returnFlight = returnFlights[randomFlightIndex];


    const selectFlight = http.post(
      `${BASE_URL}/cgi-bin/reservations.pl`,
      {
        outboundFlight: '${outboundFlight}',
        returnFlight: '${returnFlight}',
        numPassengers: '1',
        advanceDiscount: '0',
        seatType: 'Coach',
        seatPref: 'None',
        'reserveFlights.x': '31',
        'reserveFlights.y': '3',
      },
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie:
            'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
          Host: 'webtours.load-test.ru:1080',
          Origin: 'http://webtours.load-test.ru:1080',
          Referer: 'http://webtours.load-test.ru:1080/cgi-bin/reservations.pl',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        },
      }
    )


    const payment = http.post(
      `${BASE_URL}/cgi-bin/reservations.pl`,
      {
        firstName: 'Gevorg',
        lastName: 'Kocharyan',
        address1: '',
        address2: '',
        pass1: 'Gevorg+Kocharyan',
        creditCard: '',
        expDate: '',
        oldCCOption: '',
        numPassengers: '1',
        seatType: 'Coach',
        seatPref: 'None',
        outboundFlight: '${outboundFlight}',
        advanceDiscount: '0',
        returnFlight: '${returnFlight}',
        JSFormSubmit: 'off',
        'buyFlights.x': '68',
        'buyFlights.y': '5',
        '.cgifields': 'saveCC',
      },
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie:
            'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&address2&&username&gevor&hash&18&lastName&Kocharyan%0A&address1&&creditCard&&expDate&%0A',
          Host: 'webtours.load-test.ru:1080',
          Origin: 'http://webtours.load-test.ru:1080',
          Referer: 'http://webtours.load-test.ru:1080/cgi-bin/reservations.pl',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        },
      }
    )


    const home1 = http.get(`${BASE_URL}/cgi-bin/welcome.pl?page=menus`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Cookie:
          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&username&gevor&address2&&hash&18&address1&&lastName&Kocharyan%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/nav.pl?page=menu&in=flights',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const home2 = http.get(`${BASE_URL}/cgi-bin/nav.pl?page=menu&in=home`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Cookie:
          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&username&gevor&address2&&hash&18&address1&&lastName&Kocharyan%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/welcome.pl?page=menus',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    const home3 = http.get(`${BASE_URL}/cgi-bin/login.pl?intro=true`, {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Cookie:
          'MSO=SID&1700379924; MTUserInfo=firstName&Gevorg&username&gevor&address2&&hash&18&address1&&lastName&Kocharyan%0A',
        Host: 'webtours.load-test.ru:1080',
        Referer: 'http://webtours.load-test.ru:1080/cgi-bin/welcome.pl?page=menus',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })
}
