export class Logger {
  private static instance: Logger;
  private prefix = 'LOGGER:';

  constructor() {
    return Logger.getInstance();
  }

  public static getInstance(): Logger {
    if (Logger.instance === undefined) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public logInfo(message: string, ...additionalInfo: unknown[]) {
    console.info(this.prefix, '[INFO]', message, ...additionalInfo);
  }

  public logWarning(message: string, ...additionalInfo: unknown[]) {
    console.warn(this.prefix, '[WARN]', message, ...additionalInfo);
  }

  public logError(message: string, ...additionalInfo: unknown[]) {
    console.error(this.prefix, '[ERROR]', message, ...additionalInfo);
  }
}
