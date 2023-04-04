import { transports, format as fmt, LoggerOptions } from 'winston';

const ConsoleTransport = new transports.Console({
  format: fmt.simple(),
});

const loggerOptions: LoggerOptions = {
  format: fmt.combine(
    fmt.errors({
      stack: true,
    }),
    fmt.prettyPrint(),
    fmt.colorize({ all: true }),
  ),
  exceptionHandlers: [ConsoleTransport],
  rejectionHandlers: [ConsoleTransport],
  transports: [ConsoleTransport],
};

export default loggerOptions;
