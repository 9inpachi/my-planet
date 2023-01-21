export class Logger {
  private static instance: Logger;
  private prefix = 'LOGGER:';

  constructor() {
    if (Logger.instance === undefined) {
      Logger.instance = this;
    }

    return Logger.instance;
  }

  public static getInstance(): Logger {
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
