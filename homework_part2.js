import http from 'k6/http'
import { check, group } from 'k6';
//import { InfluxDB } from 'k6/influxdb';

//const influxClient = new InfluxDB({
//  url: 'http://localhost:8086/write?db=k6db',
//  tags: {
//    script_name: 'my_test_script',
//    k6_env: 'test',
//  },
//});

export const options = {
  scenarios: {
    ya: {
      executor: 'ramping-arrival-rate',
      exec: 'ya',
      startRate: 0,
      timeUnit: '1m',
      preAllocatedVUs: 50,
      stages: [
         { target: 60, duration: '5m' },
         { target: 60, duration: '10m' },
         { target: 72, duration: '5m' },
         { target: 72, duration: '10m' },
      ]
    },
     www: {
       executor: 'ramping-arrival-rate',
       exec: 'www',
       startRate: 0,
       timeUnit: '1m',
       preAllocatedVUs: 50,
       stages: [
         { target: 120, duration: '5m' },
         { target: 120, duration: '10m' },
         { target: 144, duration: '5m' },
         { target: 144, duration: '10m' },
       ]
     }
  },
  thresholds: {
      http_req_duration: ['p(90)<500'],
    }
};

export function ya() {
    const res = http.get('https://ya.ru/');
    check(res, {
      'status code is 200': (res) => res.status === 200,
    });
};

export function www() {
    const res = http.get('http://www.ru/');
    check(res, {
      'status code is 200': (res) => res.status === 200,
    });
};

export default function () {
  group('ya', () => { ya(); });
  group('www', () => { www(); });
}

//influxClient.write([
//    {
//      measurement: 'http_req_duration',
//      fields: { value: res.timings.duration },
//    },
//]);

