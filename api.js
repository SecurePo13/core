{
  "hikariConfig-maintainTimeStats": true,
  "hikariConfig-cacheResultSetMetadata": true,
  "hikariConfig-jdbcUrl": "jdbc:mysql://localhost:3306/kalpataru_gateway",
  "headers-tenants": [
    "FKMP",
    "EMERALD"
  ],
  "hikariConfig-autoCommit": true,
  "varadhiGroupShardingConfig-clusterToShardMapping-mainepsilon": [
    {
      "mappedShardName": "mainepsilonzero",
      "shardNumber": 0
    },
    {
      "mappedShardName": "mainepsilonone",
      "shardNumber": 1
    },
    {
      "mappedShardName": "mainepsilontwo",
      "shardNumber": 2
    },
    {
      "mappedShardName": "mainepsilonthree",
      "shardNumber": 3
    },
    {
      "mappedShardName": "mainepsilonfour",
      "shardNumber": 4
    },
    {
      "mappedShardName": "mainepsilonfive",
      "shardNumber": 5
    },
    {
      "mappedShardName": "mainepsilonsix",
      "shardNumber": 6
    },
    {
      "mappedShardName": "mainepsilonseven",
      "shardNumber": 7
    },
    {
      "mappedShardName": "mainepsiloneight",
      "shardNumber": 8
    },
    {
      "mappedShardName": "mainepsilonnine",
      "shardNumber": 9
    }
  ],
  "httpClient-clientIdHeader": "fulfillment-gateway",
  "hikariConfig-connectionInitSql": "SELECT 1",
  "url-digitalOrchUrl": "http://10.47.0.165",
  "varadhi-username": "sc_fulfillment_b2c",
  "server-rootPath": "/*",
  "url-returnsOrchUrl": "http://10.24.0.176",
  "hikariConfig-password": "",
  "hikariConfig-maximumPoolSize": 60,
  "server-requestLog-appenders": [
    {
      "currentLogFilename": "./logs/access.log",
      "timeZone": "IST",
      "type": "file",
      "archive": true,
      "archivedLogFilenamePattern": "./logs/access-%d{yyyy-MM-dd}.log.gz",
      "archivedFileCount": 3
    }
  ],
  "swagger-contact": "prasanna.rp@flipkart.com",
  "url-zuluUrl": "http://10.83.37.176:31200",
  "okhttp-keepAliveDuration": 5,
  "server-maxThreads": 1024,
  "hikariConfig-useLocalSessionState": true,
  "okhttp-readTimeOut": 10,
  "httpClient-jerseyClient-maxThreads": 128,
  "httpClient-jerseyClient-timeToLive": "1h",
  "exchange-tntQueueName": "tnt_gateway_b2c_production",
  "hikariConfig-minimumIdle": 6,
  "okhttp-writeTimeOut": 5,
  "httpClient-jerseyClient-keepAlive": "0ms",
  "rateLimiter-MODIFY": 1000,
  "logging-level": "DEBUG",
  "hikariConfig-idleTimeout": 3600000,
  "httpClient-jerseyClient-retries": 0,
  "name": "fk-fse-fulfillment-gateway",
  "exchange-physicalQueueName": "physical_ff_b2c_production",
  "hikariConfig-cachePrepStmts": true,
  "swagger-description": "Fulfillment Gateway Service API definitions",
  "url-physicalOrchUrl": "http://10.24.1.197:80",
  "authNConfig-clientSecret": "WHYrmsa3XyBgtmxoiztQWAT1tqNRwXSglSzjvog+K0dDwnNc",
  "hikariConfig-leakDetectionThreshold": 10000,
  "breakerbox-urls": "http://localhost:8080/archaius/gateway",
  "exchange-digitalOrchestratorQueueName": "digital_fulfill_production",
  "hikariConfig-useServerPrepStmts": true,
  "url-authNUrl": "https://10.75.36.61/login",
  "url-fulfillmentOrchV2Url": "http://10.24.33.54",
  "url-fulfillmentOrchV2PriorityUrl": "http://0.0.0.0:7080/",
  "url-returnsOrchUrlV2" : "http://127.0.0.1/",
  "url-fulfillmentOrchV2ShadowUrl": "http://10.24.35.26",
  "exchange-servicesQueueName": "services_ff_b2c_production",
  "breakerbox-initialDelay": "0s",
  "httpClient-jerseyClient-maxConnectionsPerRoute": 1024,
  "authNConfig-xProxyUser": "fk-fse-fulfillment-gateway",
  "authNConfig-authEnabled": true,
  "exchange-oldGatewayQueueName": "fulfillment_b2c_updates",
  "exchange-fulfillmentOrchV2QueueName": "fulfillment_orch_b2c_production",
  "exchange-priorityFulfillmentOrchV2QueueName": "fulfill_v2_b2c_priority",
  "authNConfig-clientId": "fk-fse-fulfillment-gateway",
  "hikariConfig-prepStmtCacheSize": 100,
  "hikariConfig-username": "root",
  "url-servicesOrchUrl": "http://10.24.1.93:80",
  "rateLimiter-CANCEL": 1000,
  "rateLimiter-HOLD_UPDATE": 1000,
  "logging-appenders": [
    {
      "type": "file",
      "filterFactories": [
        {
          "type": "priority"
        }
      ],
      "maxFileSize": "100MB",
      "currentLogFilename": "./logs/fk-fse-fulfillment-gateway-priority.log",
      "threshold": "DEBUG",
      "archivedLogFilenamePattern": "./logs/fk-fse-fulfillment-gateway-priority.%i.log.gz",
      "archivedFileCount": 10,
      "timeZone": "IST",
      "logFormat": "%level [%date] [%thread] [%X{X-Request-ID}] [%c]: %message%n"
    },
    {
      "type": "file",
      "filterFactories": [
        {
          "type": "non-priority"
        }
      ],
      "maxFileSize": "100MB",
      "currentLogFilename": "./logs/fk-fse-fulfillment-gateway-non-priority.log",
      "threshold": "DEBUG",
      "archivedLogFilenamePattern": "./logs/fk-fse-fulfillment-gateway-non-priority.%i.log.gz",
      "archivedFileCount": 10,
      "timeZone": "IST",
      "logFormat": "%level [%date] [%thread] [%X{X-Request-ID}] [%c]: %message%n"
    }
  ],
  "url-varadhiUrl": "http://10.65.38.218",
  "logging-loggers-com.yammer.tenacity.core.errors.TenacityExceptionMapper": "DEBUG",
  "hikariConfig-cacheServerConfiguration": true,
  "authNConfig-authnUrl": "https://service.authn-prod.fkcloud.in",
  "exchange-promiseQueueName": "promise_b2c_production",
  "swagger-version": "v1",
  "syncMarketPlaces": ["HYPERLOCAL"],
  "isWriteToOutbound": false,
  "isWriteToToss": true,
  "rateLimiter-FULFILL": 1000,
  "exchange-digitalEgvQueueName": "digital_b2c_production",
  "exchange-returnsQueueName": "returns_gateway_b2c_production",
  "hikariConfig-maxLifetime": 14400000,
  "url-gatewayUrl": "http://10.24.1.239:80",
  "server-applicationConnectors": [
    {
      "acceptQueueSize": 1024,
      "acceptorThreads": 1,
      "bufferPoolIncrement": "1KiB",
      "headerCacheSize": "512 bytes",
      "idleTimeout": "30 seconds",
      "inputBufferSize": "8KiB",
      "maxBufferPoolSize": "64KiB",
      "maxRequestHeaderSize": "8KiB",
      "maxResponseHeaderSize": "8KiB",
      "minBufferPoolSize": "64 bytes",
      "outputBufferSize": "32KiB",
      "port": 7080,
      "reuseAddress": true,
      "selectorThreads": 2,
      "soLingerTime": "345s",
      "type": "http",
      "useDateHeader": true,
      "useForwardedHeaders": true,
      "useServerHeader": false
    }
  ],
  "logging-loggers-com.flipkart.fulfillment.gateway": "DEBUG",
  "breakerbox-delay": "60s",
  "server-type": "default",
  "httpClient-jerseyClient-minThreads": 1,
  "httpClient-jerseyClient-cookiesEnabled": false,
  "httpClient-jerseyClient-gzipEnabledForRequests": true,
  "httpClient-jerseyClient-timeout": "500ms",
  "hikariConfig-useLocalTransactionState": false,
  "url-promiseUrl": "http://10.24.47.78",
  "hikariConfig-validationTimeout": 5000,
  "hikariConfig-prepStmtCacheSqlLimit": 1000000,
  "swagger-resourcePackage": "com.flipkart.fulfillment.gateway.resources",
  "swagger-title": "Fulfillment Gateway  APIs",
  "httpClient-jerseyClient-maxConnections": 1024,
  "server-adminConnectors": [
    {
      "port": 7081,
      "type": "http"
    }
  ],
  "httpClient-jerseyClient-gzipEnabled": true,
  "okhttp-connectionTimeOut": 1,
  "okhttp-maxIdleConnections": 128,
  "command": [
    {
      "key": "GET_PROMISE_OBJECT",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    },
    {
      "key": "GET_ZULU_ENTITY",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    },
    {
      "key": "FETCH_PROMISE_BULK",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    },
    {
      "key": "GET_ZULU_PRODUCT_ENTITY",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    },
    {
      "key": "ZULU_POOL",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    },
    {
      "key": "CLEAR_PROMISE_BULK",
      "tenacityConfiguration": {
        "circuitBreaker": {
          "errorThresholdPercentage": 100,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "requestVolumeThreshold": 1000,
          "sleepWindowInMillis": 5000
        },
        "executionIsolationStrategy": "THREAD",
        "executionIsolationThreadTimeoutInMillis": 1000,
        "threadpool": {
          "keepAliveTimeMinutes": 1,
          "maxQueueSize": -1,
          "metricsRollingStatisticalWindowBuckets": 10,
          "metricsRollingStatisticalWindowInMilliseconds": 10000,
          "queueSizeRejectionThreshold": 5,
          "threadPoolCoreSize": 10
        }
      }
    }
  ],
  "httpClient-jerseyClient-connectionTimeout": "1000ms",
  "hikariConfig-connectionTimeout": 30000,
  "hikariConfig-dbName": "default",
  "hikariArchivalDBConfig": [
    {
      "jdbcUrl": "jdbc:mysql://localhost:3306/kalpataru_gateway_1",
      "username": "root",
      "password": "",
      "connectionInitSql": "SELECT 1",
      "autoCommit": true,
      "idleTimeout": 600000,
      "leakDetectionThreshold": 10000,
      "connectionTimeout": 30000,
      "validationTimeout": 5000,
      "maxLifetime": 1800000,
      "maximumPoolSize": 60,
      "minimumIdle": 6,
      "cachePrepStmts": true,
      "prepStmtCacheSize": 100,
      "prepStmtCacheSqlLimit": 1000000,
      "useServerPrepStmts": true,
      "useLocalSessionState": true,
      "useLocalTransactionState": true,
      "cacheResultSetMetadata": true,
      "cacheServerConfiguration": true,
      "maintainTimeStats": true,
      "dbName": "archivalDB"
    },
    {
      "jdbcUrl": "jdbc:mysql://localhost:3306/kalpataru_gateway_2",
      "username": "root",
      "password": "",
      "connectionInitSql": "SELECT 1",
      "autoCommit": true,
      "idleTimeout": 600000,
      "leakDetectionThreshold": 10000,
      "connectionTimeout": 30000,
      "validationTimeout": 5000,
      "maxLifetime": 1800000,
      "maximumPoolSize": 60,
      "minimumIdle": 6,
      "cachePrepStmts": true,
      "prepStmtCacheSize": 100,
      "prepStmtCacheSqlLimit": 1000000,
      "useServerPrepStmts": true,
      "useLocalSessionState": true,
      "useLocalTransactionState": true,
      "cacheResultSetMetadata": true,
      "cacheServerConfiguration": true,
      "maintainTimeStats": true,
      "dbName": "archivalDB"
    }
  ],
  "inboundIdempotencySkipUrlPatterns": ["/gateway/v1/fulfill"],
  "logAggregatorConfig-logLinesToBeAggregated": 10,
  "logAggregatorConfig-loggingDelimiter": "  ||  ",
  "logAggregatorConfig-aggregatedLoggingLevel": "INFO",
  "ingestionStrategy": "new",
  "fulfillNewFromTest": true,
  "varadhiGroupShardingConfig-clusterToShardMapping-mainalpha": [
    {
      "mappedShardName": "mainalphazero",
      "shardNumber": 0
    },
    {
      "mappedShardName": "mainalphaone",
      "shardNumber": 1
    },
    {
      "mappedShardName": "mainalphatwo",
      "shardNumber": 2
    },
    {
      "mappedShardName": "mainalphathree",
      "shardNumber": 3
    },
    {
      "mappedShardName": "mainalphafour",
      "shardNumber": 4
    },
    {
      "mappedShardName": "mainalphafive",
      "shardNumber": 5
    },
    {
      "mappedShardName": "mainalphasix",
      "shardNumber": 6
    },
    {
      "mappedShardName": "mainalphaseven",
      "shardNumber": 7
    },
    {
      "mappedShardName": "mainalphaeight",
      "shardNumber": 8
    },
    {
      "mappedShardName": "mainalphanine",
      "shardNumber": 9
    }
  ]
}
