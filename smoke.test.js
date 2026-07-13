import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '10s',
};

export default function () {
    const response = http.get('https://api.practicesoftwaretesting.com/products');

    console.log(response.status);

    check(response, {
        'status is 200': (r) => r.status === 2000,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
};