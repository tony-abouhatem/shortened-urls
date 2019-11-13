# Improvements

1. Create an interceptor to handle all hosts requests based on environments variables (and to prepare application to any possible improvement)
2. Return a visual feedback to user when backend returns a shortened url. This could be done with toast.
3. Create and utilize a common ErrorHandler, to manage the most regular errors.
4. Fix deployment. It's using `ng serve` instead of building with `ng build` as it should.
5. Use HTTPS if app wont be behind any load balancer.

# Developing

## Prerequisites

- Node 12.13.0
- Git

## Installing

After clone this frontend project, do the following commands:

```
npm install
npm install --global @angular/cli
```

## Executing

`ng serve`

## Testing

`ng test`
