import { Logger, LogLevel } from './Logger';
import { dump, DumpOptions } from 'js-yaml';
import { log as bypassStdout } from 'console';

const { log: defaultStdout } = console;

export class SimpleLogger extends Logger {
  constructor(readonly name: string) {
    super(name);
  }

  log(level: LogLevel, msg: any): void;
  log(level: LogLevel, msg: string, meta: object): void;
  log(level: LogLevel, msg: any, meta?: object): void {
    const now = new Date();
    const prefix = this.messagePrefix(level, now);
    if (typeof msg !== 'string') {
      SimpleLogger.stdout(prefix + '\n' + this.handleMetadata(meta !== undefined ? { msg, ...meta } : { msg }));
      return;
    }
    if (meta !== undefined) {
      SimpleLogger.stdout(prefix + ' ' + this.handleMessage(level, msg) + '\n' + this.handleMetadata(meta));
      return;
    }
    SimpleLogger.stdout(prefix + ' ' + this.handleMessage(level, msg));
  }

  protected messagePrefix(level: LogLevel, now: Date) {
    return (
      '[' +
      now.getHours().toString().padStart(2, '0') +
      ':' +
      now.getMinutes().toString().padStart(2, '0') +
      ':' +
      now.getSeconds().toString().padStart(2, '0') +
      '] [' +
      this.name +
      '/' +
      level.toUpperCase() +
      ']'
    );
  }

  protected handleMessage(level: LogLevel, msg: string) {
    return msg.replace(SimpleLogger.hlTagRegExp, '$2'); // Hook used by AdvancedSimpleLogger
  }

  protected handleMetadata(obj: object) {
    return dump(obj, SimpleLogger.yamlDumpOptions)
      .split('\n')
      .map((v) => `  ${v}`)
      .join('\n')
      .trimEnd()
      .replace(SimpleLogger.hlTagRegExp, '$2');
  }

  protected static readonly hlTagRegExp = /<hl +(\w+) *>([\s\S]+?)<\/hl *>/g;

  protected static readonly yamlDumpOptions: DumpOptions = {
    lineWidth: 120,
    quotingType: '"',
    replacer: (_, value: any) => {
      if (!(value instanceof Error)) {
        return value;
      }

      const error: any = {};
      Object.getOwnPropertyNames(value).forEach((key) => {
        error[key] = (value as any)[key];
      });
      return error;
    },
  };

  private static stdout: (arg: string) => void = defaultStdout;

  public static bypassJest<T>(fn: () => T): T {
    this.stdout = bypassStdout;
    const t = fn();
    this.stdout = defaultStdout;
    return t;
  }
}