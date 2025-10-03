export function log(message: string, context?: object): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
  if (context) {
    console.log(JSON.stringify(context, null, 2));
  }
}
